import './CleanProjects.css';

export default function CleanProjects() {
    const bgImage = '/images/cleaning/project-1.png';

    return (
        <section className="clean-projects" id="clean-projects">
            <div className="clean-projects-container">
                <div className="clean-projects-header">
                    <div>
                        <p className="clean-projects-label">Our Projects</p>
                        <h2 className="clean-projects-heading">
                            Trusted Cleaning Process<br />Designed Around You
                        </h2>
                    </div>
                    <div className="clean-projects-nav">
                        <button aria-label="Previous project">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <button aria-label="Next project">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="clean-projects-cards">
                    {/* Small card 1 */}
                    <div className="clean-project-card clean-project-card-small">
                        <img src="/images/cleaning/project-2.png" alt="Cleaning project" />
                        <div className="clean-project-card-overlay-simple" />
                    </div>

                    {/* Large featured card */}
                    <div className="clean-project-card clean-project-card-large">
                        <img src={bgImage} alt="Featured cleaning project" />
                        <div className="clean-project-card-overlay-gradient" />
                        <div className="clean-project-card-content">
                            <div className="clean-project-card-tags">
                                <span className="clean-project-card-tag">Cleaning Services</span>
                                <span className="clean-project-card-tag">Residential</span>
                                <span className="clean-project-card-tag">Deep Clean</span>
                                <span className="clean-project-card-tag">Floor Clean</span>
                            </div>
                            <div className="clean-project-card-bottom">
                                <div className="clean-project-card-info">
                                    <span className="clean-project-card-subtitle">Speaking Home Makeover</span>
                                    <span className="clean-project-card-title">Deep cleaning for a family residence</span>
                                </div>
                                <div className="clean-project-card-arrow">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small card 2 */}
                    <div className="clean-project-card clean-project-card-small">
                        <img src="/images/cleaning/project-3.png" alt="Cleaning project" />
                        <div className="clean-project-card-overlay-simple" />
                    </div>

                    {/* Small card 3 */}
                    <div className="clean-project-card clean-project-card-small">
                        <img src="/images/cleaning/project-4.png" alt="Cleaning project" />
                        <div className="clean-project-card-overlay-simple" />
                    </div>
                </div>
            </div>
        </section>
    );
}
