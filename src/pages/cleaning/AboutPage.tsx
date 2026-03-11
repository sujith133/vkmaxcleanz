import { useEffect } from 'react';
import { useLocationStore, LEADERS, getRoleAtLocation } from '../../store/useLocationStore';
import './AboutPage.css';

export default function AboutPage() {
    const { location } = useLocationStore();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const filteredLeaders = LEADERS.filter((l) => l.locations.includes(location));

    return (
        <main className="ap-page">
            {/* ── Hero Banner ── */}
            <section className="ap-hero">
                <div className="ap-hero-overlay" />
                <div className="ap-hero-content">
                    <span className="ap-hero-label">Who We Are</span>
                    <h1>About VK Max Cleanz</h1>
                    <p>
                        Transforming homes and businesses since 2012 with trusted, professional
                        cleaning and maintenance solutions across India.
                    </p>
                </div>
            </section>

            {/* ── Our Story ── */}
            <section className="ap-story">
                <div className="ap-section-wrap">
                    <div className="ap-story-grid">
                        <div className="ap-story-images">
                            <div className="ap-story-img-main">
                                <img src="/images/cleaning/about-1.png" alt="VK Max Cleanz team at work" />
                            </div>
                            <div className="ap-story-img-secondary">
                                <img src="/images/cleaning/about-2.png" alt="Professional cleaning service" />
                            </div>
                            <div className="ap-story-badge">
                                <strong>14+</strong>
                                <span>Years of Excellence</span>
                            </div>
                        </div>
                        <div className="ap-story-text">
                            <span className="ap-label">Our Story</span>
                            <h2>Building Trust, One Home at a Time</h2>
                            <p>
                                At VK Max Cleanz, we believe a well-maintained space creates a happier and healthier life.
                                Founded in 2012, we've grown from a small cleaning team in Visakhapatnam to a full-service
                                home solutions company operating across multiple cities in Andhra Pradesh and Telangana.
                            </p>
                            <p>
                                Our team of certified professionals provides top-notch services spanning cleaning, AC
                                maintenance, pest control, appliance repair, fire safety, smart home installations, and more.
                                Every service is backed by our commitment to quality, punctuality, and customer satisfaction.
                            </p>
                            <div className="ap-story-highlights">
                                <div className="ap-highlight">
                                    <span className="ap-highlight-icon">🏡</span>
                                    <div>
                                        <strong>700+</strong>
                                        <span>Happy Customers</span>
                                    </div>
                                </div>
                                <div className="ap-highlight">
                                    <span className="ap-highlight-icon">⭐</span>
                                    <div>
                                        <strong>4.5</strong>
                                        <span>Average Rating</span>
                                    </div>
                                </div>
                                <div className="ap-highlight">
                                    <span className="ap-highlight-icon">🏙️</span>
                                    <div>
                                        <strong>3+</strong>
                                        <span>Cities Served</span>
                                    </div>
                                </div>
                                <div className="ap-highlight">
                                    <span className="ap-highlight-icon">🔧</span>
                                    <div>
                                        <strong>66+</strong>
                                        <span>Services Offered</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Leadership Team ── */}
            <section className="ap-leadership">
                <div className="ap-section-wrap">
                    <span className="ap-label">Our Leadership</span>
                    <h2>Meet the Team Behind VK Max</h2>
                    <p className="ap-section-desc">
                        Passionate leaders driving innovation in home services
                    </p>
                    <div className={`ap-leaders-grid leaders-${filteredLeaders.length}`}>
                        {filteredLeaders.map((leader) => (
                            <div className="ap-leader-card" key={leader.name}>
                                <div className="ap-leader-avatar">
                                    <img src={leader.image} alt={leader.name} className="ap-avatar-img" />
                                    <div className="ap-leader-ring" />
                                </div>
                                <h3>{leader.name}</h3>
                                <span className="ap-leader-role">{getRoleAtLocation(leader, location)}</span>
                                <p>{leader.description}</p>
                                <div className="ap-leader-socials">
                                    <a href="#" aria-label="LinkedIn">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Our Values ── */}
            <section className="ap-values">
                <div className="ap-section-wrap">
                    <span className="ap-label">Why Choose Us</span>
                    <h2>Our Core Values</h2>
                    <div className="ap-values-grid">
                        <div className="ap-value-card">
                            <div className="ap-value-icon">🤝</div>
                            <h3>Trust & Transparency</h3>
                            <p>We operate with complete honesty — no hidden charges, no shortcuts. Every service is delivered with full accountability.</p>
                        </div>
                        <div className="ap-value-card">
                            <div className="ap-value-icon">🎯</div>
                            <h3>Quality First</h3>
                            <p>From trained professionals to premium equipment, we never compromise on the quality of our service delivery.</p>
                        </div>
                        <div className="ap-value-card">
                            <div className="ap-value-icon">⏰</div>
                            <h3>Punctuality</h3>
                            <p>Your time matters. Our teams arrive on schedule and complete work within the committed timeline.</p>
                        </div>
                        <div className="ap-value-card">
                            <div className="ap-value-icon">💯</div>
                            <h3>Customer Satisfaction</h3>
                            <p>We don't stop until you're happy. Every service comes with our satisfaction guarantee.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2026 Goals ── */}
            <section className="ap-goals">
                <div className="ap-section-wrap">
                    <div className="ap-goals-header">
                        <span className="ap-label light">Our Vision</span>
                        <h2>Goals for 2026</h2>
                        <p className="ap-section-desc light">
                            Ambitious targets to redefine home services in India
                        </p>
                    </div>
                    <div className="ap-goals-grid">
                        <div className="ap-goal-card">
                            <div className="ap-goal-number">01</div>
                            <h3>Expand to 10+ Cities</h3>
                            <p>
                                We're taking VK Max Cleanz to Bangalore, Chennai, Mumbai, and beyond.
                                Our goal is to serve families in 10+ major Indian cities by end of 2026.
                            </p>
                            <div className="ap-goal-progress">
                                <div className="ap-goal-bar" style={{ width: '30%' }} />
                            </div>
                            <span className="ap-goal-status">3 of 10 cities</span>
                        </div>
                        <div className="ap-goal-card">
                            <div className="ap-goal-number">02</div>
                            <h3>5,000+ Happy Customers</h3>
                            <p>
                                Growing our customer base 7x from 700+ to 5,000+ satisfied households
                                through excellence in service and word-of-mouth referrals.
                            </p>
                            <div className="ap-goal-progress">
                                <div className="ap-goal-bar" style={{ width: '14%' }} />
                            </div>
                            <span className="ap-goal-status">700 of 5,000</span>
                        </div>
                        <div className="ap-goal-card">
                            <div className="ap-goal-number">03</div>
                            <h3>100+ Service Portfolio</h3>
                            <p>
                                Expanding our service catalogue from 66 to 100+ specialised services
                                covering every aspect of modern home maintenance and improvement.
                            </p>
                            <div className="ap-goal-progress">
                                <div className="ap-goal-bar" style={{ width: '66%' }} />
                            </div>
                            <span className="ap-goal-status">66 of 100 services</span>
                        </div>
                        <div className="ap-goal-card">
                            <div className="ap-goal-number">04</div>
                            <h3>Launch VK Max App</h3>
                            <p>
                                Building a mobile app for instant booking, real-time tracking,
                                and seamless communication with our service teams.
                            </p>
                            <div className="ap-goal-progress">
                                <div className="ap-goal-bar" style={{ width: '10%' }} />
                            </div>
                            <span className="ap-goal-status">In planning</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Achievement Ticker ── */}
            <section className="ap-ticker">
                <div className="ap-section-wrap">
                    <div className="ap-ticker-grid">
                        <div className="ap-ticker-item">
                            <strong>14+</strong>
                            <span>Years in Business</span>
                        </div>
                        <div className="ap-ticker-item">
                            <strong>700+</strong>
                            <span>Happy Clients</span>
                        </div>
                        <div className="ap-ticker-item">
                            <strong>66+</strong>
                            <span>Services</span>
                        </div>
                        <div className="ap-ticker-item">
                            <strong>50+</strong>
                            <span>Team Members</span>
                        </div>
                        <div className="ap-ticker-item">
                            <strong>3</strong>
                            <span>Cities Active</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
