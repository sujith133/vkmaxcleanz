import './HeroSection.css';

export default function HeroSection() {
    return (
        <section className="hero" id="hero">

            <div className="hero-bg">
                <img src="/images/cleaning/herosection background.png" alt="Background" className="hero-bg-img" />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-subtitle">Spotless Spaces, Stress-Free Living</p>
                    <h1>Trusted Cleaning<br />Expert For Home<br />And Businesses</h1>
                    <p className="hero-desc">
                        Enjoy a spotless home or office without lifting a Finger. Our<br className="desktop-break" />
                        Professional cleaning team delivers reliable eco-friendly.
                    </p>

                    <div className="hero-actions">
                        <button className="btn-book">
                            <span className="icon-circle">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="var(--primary, #6C63FF)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Book Your Cleaning Today
                        </button>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <img src="/images/cleaning/herosection person.png" alt="Professional cleaner" className="person-img" />
                </div>
            </div>

            <div className="hero-clouds">
                <img src="/images/cleaning/clouds.png" alt="Clouds separator" />
            </div>
        </section>
    );
}
