import './AboutSection.css';

export default function AboutSection() {
    return (
        <section className="mp-about" id="aboutus">
            <div className="section-wrapper">
                <div className="mp-about-content">
                    <div className="mp-about-images">
                        <img
                            src="/images/manpower/Cleaning_Staff.png"
                            alt="Professional manpower team"
                            className="mp-about-img-main"
                        />
                        <img
                            src="/images/manpower/Security.png"
                            alt="Security personnel"
                            className="mp-about-img-secondary"
                        />
                        <div className="mp-about-experience-badge">
                            <strong>14+</strong>
                            <span>Years Experience</span>
                        </div>
                    </div>
                    <div className="mp-about-text">
                        <span className="mp-section-label">About Us</span>
                        <h2>Your Reliable <span className="mp-highlight">Manpower</span> Supply Partner</h2>
                        <p>
                            VK Max Solutions is a trusted manpower supply company delivering skilled,
                            verified, and trained personnel across industries. Whether you need security guards,
                            cleaning staff, fire safety officers, or household helpers — we ensure the right
                            people are deployed to the right place, on time.
                        </p>
                        <div className="mp-about-stats">
                            <div className="mp-about-stat">
                                <strong>500+</strong>
                                <span>Workers Deployed</span>
                            </div>
                            <div className="mp-about-stat">
                                <strong>50+</strong>
                                <span>Clients Served</span>
                            </div>
                            <div className="mp-about-stat">
                                <strong>6+</strong>
                                <span>Service Categories</span>
                            </div>
                            <div className="mp-about-stat">
                                <strong>4.8</strong>
                                <span>Client Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
