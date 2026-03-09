import { useNavigate } from 'react-router-dom';
import { furnitureProducts } from '../../data/furnitureProductsData';
import './FeaturedProducts.css';

// Pick bestsellers + new arrivals
const featured = furnitureProducts.filter(p => p.isBestseller || p.isNew).slice(0, 8);

export default function FeaturedProducts() {
    const navigate = useNavigate();

    const formatPrice = (price: number) =>
        '₹' + price.toLocaleString('en-IN');

    return (
        <section className="furn-featured">
            <div className="furn-featured-inner">
                <div className="furn-featured-header">
                    <div>
                        <span className="furn-featured-label">Curated Selection</span>
                        <h2>building your dream <span>home</span> since 2010</h2>
                    </div>
                    <button
                        className="furn-view-all-btn"
                        onClick={() => navigate('/furnitures/products')}
                    >
                        View All Products →
                    </button>
                </div>

                <div className="furn-featured-grid">
                    {featured.map(product => (
                        <div className="furn-product-card" key={product.id}>
                            {product.isNew && <span className="furn-badge furn-badge-new">New</span>}
                            {product.isBestseller && <span className="furn-badge furn-badge-best">Bestseller</span>}
                            <div className="furn-product-img">
                                <img src={product.image} alt={product.name} loading="lazy" />
                            </div>
                            <div className="furn-product-info">
                                <div className="furn-product-meta">
                                    <span className="furn-product-cat">{product.subcategory}</span>
                                    <span className="furn-product-price">{formatPrice(product.price)}</span>
                                </div>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <button
                                    className="furn-product-btn"
                                    onClick={() => navigate(`/furnitures/products?search=${encodeURIComponent(product.name)}`)}
                                >
                                    View Details
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
