import { useEffect, useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { furnitureProducts, categories } from '../../data/furnitureProductsData';
import type { FurnitureProduct } from '../../data/furnitureProductsData';
import './FurnitureProductsPage.css';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc';

export default function FurnitureProductsPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || 'all';
    const initialSearch = searchParams.get('search') || '';

    const [search, setSearch] = useState(initialSearch);
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [sort, setSort] = useState<SortOption>('default');
    const [selectedProduct, setSelectedProduct] = useState<FurnitureProduct | null>(null);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const filteredProducts = useMemo(() => {
        let list = [...furnitureProducts];

        // Category filter
        if (activeCategory !== 'all') {
            const catName = categories.find(c => c.slug === activeCategory)?.name;
            if (catName) list = list.filter(p => p.category === catName);
        }

        // Search filter
        if (search.trim()) {
            const q = search.toLowerCase();
            list = list.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.subcategory.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q)
            );
        }

        // Sort
        switch (sort) {
            case 'price-asc': list.sort((a, b) => a.price - b.price); break;
            case 'price-desc': list.sort((a, b) => b.price - a.price); break;
            case 'name-asc': list.sort((a, b) => a.name.localeCompare(b.name)); break;
        }

        return list;
    }, [activeCategory, search, sort]);

    const formatPrice = (price: number) => '₹' + price.toLocaleString('en-IN');

    return (
        <main className="fpp-page">
            {/* Hero */}
            <section className="fpp-hero">
                <div className="fpp-hero-overlay" />
                <div className="fpp-hero-content">
                    <span className="fpp-hero-label">Our Collection</span>
                    <h1>Premium <span>Furniture</span> Catalog</h1>
                    <p>Explore {furnitureProducts.length} handcrafted products across {categories.length} categories</p>
                </div>
            </section>

            {/* Back nav */}
            <div className="fpp-breadcrumb">
                <div className="fpp-breadcrumb-inner">
                    <button className="fpp-back-btn" onClick={() => navigate('/furnitures')}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Home
                    </button>
                </div>
            </div>

            {/* Toolbar */}
            <section className="fpp-toolbar">
                <div className="fpp-toolbar-inner">
                    {/* Search */}
                    <div className="fpp-search">
                        <svg className="fpp-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {search && (
                            <button className="fpp-search-clear" onClick={() => setSearch('')}>✕</button>
                        )}
                    </div>

                    {/* Sort */}
                    <select
                        className="fpp-sort"
                        value={sort}
                        onChange={(e) => setSort(e.target.value as SortOption)}
                    >
                        <option value="default">Sort by: Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name-asc">Name: A to Z</option>
                    </select>
                </div>
            </section>

            {/* Category Pills */}
            <section className="fpp-categories">
                <div className="fpp-categories-inner">
                    <button
                        className={`fpp-cat-pill ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('all')}
                    >
                        All Products
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.slug}
                            className={`fpp-cat-pill ${activeCategory === cat.slug ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.slug)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </section>

            {/* Results Count */}
            <section className="fpp-results-bar">
                <div className="fpp-results-inner">
                    <span>Showing <strong>{filteredProducts.length}</strong> products</span>
                </div>
            </section>

            {/* Product Grid */}
            <section className="fpp-grid-section">
                <div className="fpp-grid-inner">
                    {filteredProducts.length > 0 ? (
                        <div className="fpp-grid">
                            {filteredProducts.map(product => (
                                <div
                                    className="fpp-card"
                                    key={product.id}
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    {product.isNew && <span className="fpp-tag fpp-tag-new">New</span>}
                                    {product.isBestseller && <span className="fpp-tag fpp-tag-best">Bestseller</span>}
                                    <div className="fpp-card-img">
                                        <img src={product.image} alt={product.name} loading="lazy" />
                                    </div>
                                    <div className="fpp-card-body">
                                        <span className="fpp-card-cat">{product.category} · {product.subcategory}</span>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                        <div className="fpp-card-footer">
                                            <span className="fpp-card-price">{formatPrice(product.price)}</span>
                                            <button className="fpp-card-btn">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="fpp-empty">
                            <span className="fpp-empty-icon">🔍</span>
                            <h3>No products found</h3>
                            <p>Try adjusting your search or category filter</p>
                            <button className="fpp-reset-btn" onClick={() => { setSearch(''); setActiveCategory('all'); }}>
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <ProductDetailModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    formatPrice={formatPrice}
                />
            )}
        </main>
    );
}

/* ── Product Detail Modal ── */
function ProductDetailModal({
    product, onClose, formatPrice
}: {
    product: FurnitureProduct;
    onClose: () => void;
    formatPrice: (n: number) => string;
}) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    return (
        <div className="fpp-modal-overlay" onClick={onClose}>
            <div className="fpp-modal" onClick={(e) => e.stopPropagation()}>
                <button className="fpp-modal-close" onClick={onClose} aria-label="Close">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                <div className="fpp-modal-content">
                    <div className="fpp-modal-img">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="fpp-modal-info">
                        <span className="fpp-modal-cat">{product.category} · {product.subcategory}</span>
                        <h2>{product.name}</h2>
                        <span className="fpp-modal-price">{formatPrice(product.price)}</span>
                        <p className="fpp-modal-desc">{product.description}</p>

                        <div className="fpp-modal-features">
                            <h4>Key Features</h4>
                            <ul>
                                {product.features.map((f, i) => (
                                    <li key={i}>
                                        <span className="fpp-check">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="fpp-modal-actions">
                            <button className="fpp-enquiry-btn" onClick={() => {
                                onClose();
                                window.location.href = `/furnitures/contact`;
                            }}>
                                Enquire Now
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
