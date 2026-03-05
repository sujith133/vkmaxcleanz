import './AboutSection.css';

export default function AboutSection() {
    return (
        <section className="about" id="aboutus">
            <div className="section-wrapper">
                <div className="about-content">
                    <div className="about-images">
                        <img
                            src="/images/cleaning/about-1.png"
                            alt="Quality home services"
                            className="about-img-main"
                        />
                        <img
                            src="/images/cleaning/about-2.png"
                            alt="Professional team"
                            className="about-img-secondary"
                        />
                        <div className="about-experience-badge">
                            <strong>14+</strong>
                            <span>Years Experience</span>
                        </div>
                    </div>
                    <div className="about-text">
                        <span className="section-label">About Us</span>
                        <h2>Premium Manpower Solutions</h2>
                        <p>
                            At VK Max Cleanz, we provide comprehensive manpower solutions tailored to your business needs.
                            From skilled labor to professional staffing, our reliable workforce is dedicated to driving your
                            success across construction, events, security, and more.
                        </p>
                        <div className="about-stats" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                            <div className="about-stat">
                                <strong>700+</strong>
                                <span>Happy Customers</span>
                            </div>
                            <div className="about-stat">
                                <strong>4.5</strong>
                                <span>Servicing Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
