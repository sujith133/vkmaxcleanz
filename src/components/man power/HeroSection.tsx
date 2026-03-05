import './HeroSection.css';

export default function HeroSection() {
    return (
        <section className="mp-hero" id="hero">
            <div className="mp-hero-content">
                <div className="mp-hero-text">
                    <h1>Reliable Manpower Solutions for Every Industry</h1>
                    <p className="mp-hero-desc">
                        We provide trained and verified manpower for construction, warehousing, offices, and events.
                    </p>

                    <div className="mp-hero-actions">
                        <button className="btn-hire">
                            Hire Workers
                        </button>
                        <button className="btn-join-team">
                            Join Our Team
                        </button>
                    </div>
                </div>

                <div className="mp-hero-image-wrapper">
                    <div className="yellow-accent-shape-1"></div>
                    <div className="yellow-accent-shape-2"></div>
                    <img src="/images/cleaning/herosection person.png" alt="Professional worker" className="person-img rounded" />
                </div>
            </div>
        </section>
    );
}
