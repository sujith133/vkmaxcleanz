import './CleanContact.css';

export default function CleanContact() {
    return (
        <section className="clean-contact" id="clean-contact">
            <div className="clean-contact-container">
                <p className="clean-contact-label">Contact Us</p>
                <h2 className="clean-contact-heading">
                    Let's Make Your Home or Office Shine —<br />Contact Us Now
                </h2>

                <div className="clean-contact-layout">
                    {/* Form Card */}
                    <div className="clean-contact-form-card">
                        <div className="clean-contact-form-title">Get In Touch</div>
                        <p className="clean-contact-form-desc">
                            Choose a convenient time service package that fits your needs book takes just a few minutes.
                        </p>
                        <form className="clean-contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="clean-contact-form-row">
                                <div className="clean-contact-form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Your first name" />
                                </div>
                                <div className="clean-contact-form-group">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Your last name" />
                                </div>
                            </div>
                            <div className="clean-contact-form-row">
                                <div className="clean-contact-form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="your@email.com" />
                                </div>
                                <div className="clean-contact-form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+91 XXXXX XXXXX" />
                                </div>
                            </div>
                            <div className="clean-contact-form-group">
                                <label>Service Type</label>
                                <select defaultValue="">
                                    <option value="" disabled>Select a service</option>
                                    <option value="residential">Residential Cleaning</option>
                                    <option value="commercial">Commercial Cleaning</option>
                                    <option value="deep">Deep Cleaning</option>
                                    <option value="window">Window Cleaning</option>
                                </select>
                            </div>
                            <div className="clean-contact-form-group">
                                <label>Your Message</label>
                                <textarea rows={4} placeholder="Tell us about your cleaning needs..." />
                            </div>
                            <button type="submit" className="clean-contact-form-submit">
                                <span className="clean-contact-form-submit-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </span>
                                Send Now
                            </button>
                        </form>
                    </div>

                    {/* Info Card */}
                    <div className="clean-contact-info-card">
                        <div className="clean-contact-info-title">Get In Touch</div>
                        <div className="clean-contact-info-divider" />

                        <div className="clean-contact-info-items">
                            <div className="clean-contact-info-item">
                                <div className="clean-contact-info-icon location">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className="clean-contact-info-text">
                                    <span className="clean-contact-info-label">Our Location</span>
                                    <span className="clean-contact-info-value">Local Address, Street Lmvdkn,<br />125-G, the woodloneinis, 772</span>
                                </div>
                            </div>

                            <div className="clean-contact-info-item">
                                <div className="clean-contact-info-icon phone">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className="clean-contact-info-text">
                                    <span className="clean-contact-info-label">Phone Number</span>
                                    <span className="clean-contact-info-value">+91 49370 34828<br />+91 49370 34826</span>
                                </div>
                            </div>

                            <div className="clean-contact-info-item">
                                <div className="clean-contact-info-icon mail">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <div className="clean-contact-info-text">
                                    <span className="clean-contact-info-label">Email Address</span>
                                    <span className="clean-contact-info-value">vkmaxcleanz@gmail.com<br />Info@vkmaxcleanz.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="clean-contact-social">
                            <div className="clean-contact-social-label">Stay Connected</div>
                            <div className="clean-contact-social-buttons">
                                <button className="clean-contact-social-btn" aria-label="Facebook">fb</button>
                                <button className="clean-contact-social-btn" aria-label="Twitter">tw</button>
                                <button className="clean-contact-social-btn" aria-label="Instagram">ig</button>
                                <button className="clean-contact-social-btn" aria-label="LinkedIn">li</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
