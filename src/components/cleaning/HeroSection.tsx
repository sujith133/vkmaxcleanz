import './HeroSection.css';

export default function HeroSection() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg" />
            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-badge">
                        <span>⭐</span> 4.5 Rated Servicing
                    </div>
                    <h1>
                        Home services at your doorstep
                    </h1>

                    <div className="hero-search">
                        <input type="text" placeholder="What do you like to search???" />
                        <select aria-label="Select City">
                            <option value="Vishakapatnam">Vishakapatnam</option>
                            <option value="Rajamundry">Rajamundry</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Vijaywada">Vijaywada</option>
                        </select>
                        <button aria-label="Search">🔍</button>
                    </div>

                    <p className="hero-explore">
                        Available in: <br />
                        <span>Vishakapatnam</span> <span>Rajamundry</span> <span>Hyderabad</span> <span>Vijaywada</span>
                    </p>
                </div>
                <div className="hero-image-wrapper">
                    <img src="/images/cleaning/hero-cleaner.png" alt="Professional cleaner" />
                    <div className="hero-float-badge top-left">
                        <div className="badge-icon">🏆</div>
                        <div className="badge-text">
                            <strong>700+</strong>
                            <span>Happy Customers</span>
                        </div>
                    </div>
                    <div className="hero-float-badge bottom-right">
                        <div className="badge-icon">⭐</div>
                        <div className="badge-text">
                            <strong>4.5</strong>
                            <span>Service Rating</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-wave">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 60L48 55C96 50 192 40 288 43.3C384 46.7 480 63.3 576 70C672 76.7 768 73.3 864 65C960 56.7 1056 43.3 1152 40C1248 36.7 1344 43.3 1392 46.7L1440 50V120H0V60Z" fill="white" />
                </svg>
            </div>
        </section>
    );
}
