import { useEffect } from 'react';
import './FurnitureAboutPage.css';

export default function FurnitureAboutPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main className="fu-ap-page">
            {/* ── Hero Banner ── */}
            <section className="fu-ap-hero">
                <div className="fu-ap-hero-overlay" />
                <div className="fu-ap-hero-content">
                    <span className="fu-ap-hero-label">Who We Are</span>
                    <h1>About VK Max <span className="fu-ap-gold">Furnitures</span></h1>
                    <p>
                        Crafting premium furniture that transforms your living spaces
                        with timeless design, sustainable materials, and unmatched comfort.
                    </p>
                </div>
            </section>

            {/* ── Our Story ── */}
            <section className="fu-ap-story">
                <div className="fu-ap-wrap">
                    <div className="fu-ap-story-grid">
                        <div className="fu-ap-story-text">
                            <span className="fu-ap-label">Our Story</span>
                            <h2>Redefining Home Experiences</h2>
                            <p>
                                VK Max Furnitures was born from a passion for creating beautiful,
                                functional furniture that fits every home. Starting as a small
                                workshop, we've grown into a trusted brand known for quality
                                craftsmanship and modern design sensibility.
                            </p>
                            <p>
                                Every piece in our collection is carefully designed, sustainably
                                sourced, and built to last. From cozy living rooms to efficient
                                home offices, we have something for every space.
                            </p>
                            <div className="fu-ap-highlights">
                                <div className="fu-ap-highlight">
                                    <span className="fu-ap-highlight-icon">🛋️</span>
                                    <div><strong>300+</strong><span>Products</span></div>
                                </div>
                                <div className="fu-ap-highlight">
                                    <span className="fu-ap-highlight-icon">🏠</span>
                                    <div><strong>1000+</strong><span>Happy Homes</span></div>
                                </div>
                                <div className="fu-ap-highlight">
                                    <span className="fu-ap-highlight-icon">🌿</span>
                                    <div><strong>100%</strong><span>Sustainable</span></div>
                                </div>
                                <div className="fu-ap-highlight">
                                    <span className="fu-ap-highlight-icon">⭐</span>
                                    <div><strong>4.8</strong><span>Avg Rating</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="fu-ap-story-visual">
                            <div className="fu-ap-visual-grid">
                                <div className="fu-ap-visual-item">🛋️</div>
                                <div className="fu-ap-visual-item">🪑</div>
                                <div className="fu-ap-visual-item">🛏️</div>
                                <div className="fu-ap-visual-item">📚</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Leadership ── */}
            <section className="fu-ap-leadership">
                <div className="fu-ap-wrap">
                    <span className="fu-ap-label fu-light">Our Leadership</span>
                    <h2>The Team Behind the Craft</h2>
                    <div className="fu-ap-leaders-grid">
                        <div className="fu-ap-leader-card">
                            <div className="fu-ap-avatar founder"><span>ER</span></div>
                            <h3>E. Rachel</h3>
                            <span className="fu-ap-leader-role">Founder & CEO</span>
                            <p>
                                Visionary entrepreneur who established VK Max Furnitures with a
                                mission to make premium, sustainable furniture accessible to all.
                            </p>
                        </div>
                        <div className="fu-ap-leader-card">
                            <div className="fu-ap-avatar design"><span>EH</span></div>
                            <h3>E. Honock</h3>
                            <span className="fu-ap-leader-role">Head of Design</span>
                            <p>
                                Creative mind behind our signature collections. Honock blends
                                modern aesthetics with functional design to create furniture
                                people love.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Our Values ── */}
            <section className="fu-ap-values">
                <div className="fu-ap-wrap">
                    <span className="fu-ap-label">Why Choose Us</span>
                    <h2>Our Core Values</h2>
                    <div className="fu-ap-values-grid">
                        <div className="fu-ap-value-card">
                            <div className="fu-ap-value-icon">🌿</div>
                            <h3>Sustainability</h3>
                            <p>Responsibly sourced materials and eco-friendly manufacturing processes.</p>
                        </div>
                        <div className="fu-ap-value-card">
                            <div className="fu-ap-value-icon">✨</div>
                            <h3>Premium Quality</h3>
                            <p>Every piece is built to last with the finest materials and expert craftsmanship.</p>
                        </div>
                        <div className="fu-ap-value-card">
                            <div className="fu-ap-value-icon">🎨</div>
                            <h3>Modern Design</h3>
                            <p>Contemporary aesthetics that complement any interior style and space.</p>
                        </div>
                        <div className="fu-ap-value-card">
                            <div className="fu-ap-value-icon">🚚</div>
                            <h3>Free Delivery</h3>
                            <p>Free doorstep delivery and professional assembly with every order.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats Ticker ── */}
            <section className="fu-ap-ticker">
                <div className="fu-ap-wrap">
                    <div className="fu-ap-ticker-grid">
                        <div className="fu-ap-ticker-item"><strong>300+</strong><span>Products</span></div>
                        <div className="fu-ap-ticker-item"><strong>1000+</strong><span>Happy Homes</span></div>
                        <div className="fu-ap-ticker-item"><strong>4</strong><span>Categories</span></div>
                        <div className="fu-ap-ticker-item"><strong>3</strong><span>Showrooms</span></div>
                        <div className="fu-ap-ticker-item"><strong>4.8</strong><span>Rating</span></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
