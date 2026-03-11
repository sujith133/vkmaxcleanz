import { useEffect } from 'react';
import { useLocationStore, LEADERS, getRoleAtLocation } from '../../store/useLocationStore';
import './ManpowerAboutPage.css';

export default function ManpowerAboutPage() {
    const { location } = useLocationStore();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const filteredLeaders = LEADERS.filter((l) => l.locations.includes(location));

    return (
        <main className="mp-ap-page">
            {/* ── Hero Banner ── */}
            <section className="mp-ap-hero">
                <div className="mp-ap-hero-overlay" />
                <div className="mp-ap-hero-content">
                    <span className="mp-ap-hero-label">Who We Are</span>
                    <h1>About VK Max <span className="mp-ap-yellow">Manpower</span></h1>
                    <p>
                        Empowering businesses with skilled, verified, and trained manpower
                        across industries since 2012.
                    </p>
                </div>
            </section>

            {/* ── Our Story ── */}
            <section className="mp-ap-story">
                <div className="mp-ap-wrap">
                    <div className="mp-ap-story-grid">
                        <div className="mp-ap-story-images">
                            <div className="mp-ap-story-img-main">
                                <img src="/images/manpower/herosection.webp" alt="VK Max Manpower team" />
                            </div>
                            <div className="mp-ap-story-badge">
                                <strong>500+</strong>
                                <span>Workers Deployed</span>
                            </div>
                        </div>
                        <div className="mp-ap-story-text">
                            <span className="mp-ap-label">Our Story</span>
                            <h2>Delivering Reliable Workforce Solutions</h2>
                            <p>
                                VK Max Manpower Solutions was founded with a vision to bridge the gap
                                between skilled workers and businesses in need. From humble beginnings
                                in Visakhapatnam, we've grown into a trusted manpower supply partner
                                operating across Andhra Pradesh and Telangana.
                            </p>
                            <p>
                                Our team carefully screens, trains, and deploys personnel for security,
                                cleaning, fire safety, household services, and baby-sitting — ensuring
                                every worker meets the highest standards of professionalism.
                            </p>
                            <div className="mp-ap-highlights">
                                <div className="mp-ap-highlight">
                                    <span className="mp-ap-highlight-icon">👷</span>
                                    <div><strong>500+</strong><span>Workers Deployed</span></div>
                                </div>
                                <div className="mp-ap-highlight">
                                    <span className="mp-ap-highlight-icon">🏢</span>
                                    <div><strong>50+</strong><span>Clients Served</span></div>
                                </div>
                                <div className="mp-ap-highlight">
                                    <span className="mp-ap-highlight-icon">🏙️</span>
                                    <div><strong>3+</strong><span>Cities Active</span></div>
                                </div>
                                <div className="mp-ap-highlight">
                                    <span className="mp-ap-highlight-icon">🛡️</span>
                                    <div><strong>5</strong><span>Service Categories</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Leadership ── */}
            <section className="mp-ap-leadership">
                <div className="mp-ap-wrap">
                    <span className="mp-ap-label">Our Leadership</span>
                    <h2>Meet the Team Behind VK Max</h2>
                    <p className="mp-ap-section-desc">
                        Passionate leaders driving workforce innovation
                    </p>
                    <div className={`mp-ap-leaders-grid leaders-${filteredLeaders.length}`}>
                        {filteredLeaders.map((leader) => (
                            <div className="mp-ap-leader-card" key={leader.name}>
                                <div className="mp-ap-leader-avatar">
                                    <img src={leader.image} alt={leader.name} className="mp-ap-avatar-img" />
                                </div>
                                <h3>{leader.name}</h3>
                                <span className="mp-ap-leader-role">{getRoleAtLocation(leader, location)}</span>
                                <p>{leader.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Our Values ── */}
            <section className="mp-ap-values">
                <div className="mp-ap-wrap">
                    <span className="mp-ap-label">Why Choose Us</span>
                    <h2>Our Core Values</h2>
                    <div className="mp-ap-values-grid">
                        <div className="mp-ap-value-card">
                            <div className="mp-ap-value-icon">🤝</div>
                            <h3>Trust & Reliability</h3>
                            <p>Every worker is background-verified, trained, and monitored to ensure complete peace of mind for our clients.</p>
                        </div>
                        <div className="mp-ap-value-card">
                            <div className="mp-ap-value-icon">⚡</div>
                            <h3>Rapid Deployment</h3>
                            <p>We deploy skilled manpower within 24–48 hours. Your business never has to wait for the workforce it needs.</p>
                        </div>
                        <div className="mp-ap-value-card">
                            <div className="mp-ap-value-icon">🎯</div>
                            <h3>Quality Standards</h3>
                            <p>Rigorous screening and continuous training ensure our personnel consistently exceed expectations.</p>
                        </div>
                        <div className="mp-ap-value-card">
                            <div className="mp-ap-value-icon">💯</div>
                            <h3>Client Satisfaction</h3>
                            <p>Free replacements, 24/7 support, and dedicated account managers — your satisfaction is our guarantee.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats Ticker ── */}
            <section className="mp-ap-ticker">
                <div className="mp-ap-wrap">
                    <div className="mp-ap-ticker-grid">
                        <div className="mp-ap-ticker-item">
                            <strong>500+</strong><span>Workers Deployed</span>
                        </div>
                        <div className="mp-ap-ticker-item">
                            <strong>50+</strong><span>Clients Served</span>
                        </div>
                        <div className="mp-ap-ticker-item">
                            <strong>5</strong><span>Service Categories</span>
                        </div>
                        <div className="mp-ap-ticker-item">
                            <strong>3</strong><span>Cities Active</span>
                        </div>
                        <div className="mp-ap-ticker-item">
                            <strong>24h</strong><span>Deployment Speed</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
