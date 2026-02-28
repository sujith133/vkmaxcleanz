import { useEffect } from 'react';
import CTABanner from '../../components/shared/CTABanner';
import './FurnitureHome.css';

const products = [
    { emoji: '🛋️', name: 'Modern Sofa Set', price: '$1,299', description: 'Premium 3-seater sofa with stain-resistant fabric' },
    { emoji: '🪑', name: 'Ergonomic Office Chair', price: '$349', description: 'Adjustable chair for maximum lumbar support' },
    { emoji: '🛏️', name: 'King Size Bed Frame', price: '$899', description: 'Solid oak wood frame with built-in storage' },
    { emoji: '🪞', name: 'Minimalist Wardrobe', price: '$599', description: 'Spacious 3-door wardrobe with sliding mirror' },
    { emoji: '🪴', name: 'Coffee Table', price: '$249', description: 'Glass top table with geometric metal base' },
    { emoji: '📚', name: 'Bookshelf Unit', price: '$199', description: '5-tier industrial style ladder bookshelf' }
];

const categories = [
    { name: 'Living Room', icon: '🛋️', count: 124 },
    { name: 'Bedroom', icon: '🛏️', count: 86 },
    { name: 'Dining Room', icon: '🍽️', count: 64 },
    { name: 'Home Office', icon: '💻', count: 52 }
];

export default function FurnitureHome() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="furniture-page">
            <section className="furniture-hero" id="hero">
                <div className="hero-bg" />
                <div className="furniture-hero-content">
                    <div className="furniture-badge">
                        <span>✨</span> New Collection 2026
                    </div>
                    <h1>
                        Elevate Your Space with<br />
                        <span className="highlight">Premium</span> VK Max Furnitures
                    </h1>
                    <p>
                        Discover beautifully crafted pieces that transform your house into a home.
                        Sustainable materials, timeless design, and unmatched comfort.
                    </p>
                    <div className="furniture-hero-actions">
                        <a href="#products" className="furniture-btn">Shop Collection →</a>
                    </div>
                </div>
            </section>

            <section className="furniture-categories" id="categories">
                <div className="section-wrapper">
                    <div className="category-header">
                        <h2>Shop by Room</h2>
                        <p>Find the perfect pieces for every space in your home.</p>
                    </div>
                    <div className="category-grid">
                        {categories.map((cat, i) => (
                            <div className="category-card" key={i}>
                                <div className="cat-icon">{cat.icon}</div>
                                <h3>{cat.name}</h3>
                                <span className="cat-count">{cat.count} Items</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="furniture-products" id="products">
                <div className="section-wrapper">
                    <div className="products-header">
                        <h2>Featured Products</h2>
                        <a href="#" className="view-all">View All Products →</a>
                    </div>
                    <div className="products-grid">
                        {products.map((product, i) => (
                            <div className="product-card" key={i}>
                                <div className="product-image-placeholder">
                                    <span className="product-emoji">{product.emoji}</span>
                                </div>
                                <div className="product-info">
                                    <div className="product-top">
                                        <h3>{product.name}</h3>
                                        <span className="product-price">{product.price}</span>
                                    </div>
                                    <p>{product.description}</p>
                                    <button className="add-to-cart">Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                title="Transform Your Home Today"
                description="Get 15% off your first VK Max Furnitures order when you sign up for our newsletter."
                primaryBtn="Sign Up & Save"
                secondaryBtn="Browse Catalog"
            />
        </main>
    );
}
