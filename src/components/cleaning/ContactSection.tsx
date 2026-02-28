import './ContactSection.css';

export default function ContactSection() {
    return (
        <section className="contact" id="contact">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="section-label">Get in Touch</span>
                    <h2>Let's Make Your Home or Office<br />Shine – Contact Us Now</h2>
                </div>
                <div className="contact-content">
                    <div className="contact-form-wrapper">
                        <h3>Send a Message</h3>
                        <p>Fill out the form and our team will get back to you within 24 hours.</p>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" placeholder="John" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="(123) 456-7890" />
                            </div>
                            <div className="form-group full-width">
                                <label>Service Type</label>
                                <select>
                                    <option value="">Select a service</option>
                                    <option>Residential Cleaning</option>
                                    <option>Commercial Cleaning</option>
                                    <option>Deep Cleaning</option>
                                    <option>Move In/Out</option>
                                </select>
                            </div>
                            <div className="form-group full-width">
                                <label>Message</label>
                                <textarea placeholder="Tell us about your cleaning needs..." />
                            </div>
                            <button type="submit" className="contact-submit">
                                Send Message →
                            </button>
                        </form>
                    </div>
                    <div className="contact-info-wrapper">
                        <div className="contact-info-card">
                            <h3>Contact Information</h3>
                            <div className="contact-info-list">
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">📍</div>
                                    <div className="contact-info-text">
                                        <h4>Our Office</h4>
                                        <p>123 Clean Street, Suite 100, New York, NY 10001</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">📞</div>
                                    <div className="contact-info-text">
                                        <h4>Phone</h4>
                                        <p>(123) 456-7890</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">✉️</div>
                                    <div className="contact-info-text">
                                        <h4>Email</h4>
                                        <p>hello@cleanzo.com</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">🕐</div>
                                    <div className="contact-info-text">
                                        <h4>Working Hours</h4>
                                        <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-map">🗺️</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
