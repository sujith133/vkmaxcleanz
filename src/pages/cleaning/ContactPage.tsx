import { useEffect, useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        // TODO: Send to WhatsApp / backend API later
        setSubmitted(true);
    };

    const contactDetails = [
        {
            icon: '📍',
            title: 'Visit Us',
            lines: ['Visakhapatnam, Andhra Pradesh', 'India – 530001'],
        },
        {
            icon: '📞',
            title: 'Call Us',
            lines: ['+91 98765 43210', 'Mon – Sat, 8 AM – 8 PM'],
        },
        {
            icon: '✉️',
            title: 'Email Us',
            lines: ['info@vkmaxcleanz.com', 'support@vkmaxcleanz.com'],
        },
        {
            icon: '⏰',
            title: 'Working Hours',
            lines: ['Monday – Saturday', '8:00 AM – 8:00 PM'],
        },
    ];

    return (
        <main className="cp-page">
            {/* ── Hero Banner ── */}
            <section className="cp-hero">
                <div className="cp-hero-overlay" />
                <div className="cp-hero-content">
                    <span className="cp-hero-label">Get In Touch</span>
                    <h1>Contact Us</h1>
                    <p>
                        Have a question or want to book a service? We'd love to hear from you.
                        Reach out and our team will respond within 24 hours.
                    </p>
                </div>
            </section>

            {/* ── Contact Details Cards ── */}
            <section className="cp-details">
                <div className="cp-section-wrap">
                    <div className="cp-details-grid">
                        {contactDetails.map((item, i) => (
                            <div className="cp-detail-card" key={i}>
                                <div className="cp-detail-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                {item.lines.map((line, j) => (
                                    <p key={j}>{line}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Contact Form ── */}
            <section className="cp-form-section">
                <div className="cp-section-wrap">
                    <div className="cp-form-container">
                        <div className="cp-form-info">
                            <span className="cp-label">Send a Message</span>
                            <h2>We're Here to Help</h2>
                            <p>
                                Fill out the form and one of our executives will get back to you
                                as soon as possible. For urgent queries, please call us directly.
                            </p>
                            <div className="cp-form-trust">
                                <div className="cp-trust-item">
                                    <span className="cp-trust-icon">⚡</span>
                                    <span>Response within 24 hours</span>
                                </div>
                                <div className="cp-trust-item">
                                    <span className="cp-trust-icon">🛡️</span>
                                    <span>Your data is safe with us</span>
                                </div>
                                <div className="cp-trust-item">
                                    <span className="cp-trust-icon">💬</span>
                                    <span>No spam, we promise</span>
                                </div>
                            </div>
                        </div>

                        <div className="cp-form-card">
                            {!submitted ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="cp-form-row">
                                        <div className="cp-form-group">
                                            <label htmlFor="cp-name">Full Name *</label>
                                            <input
                                                id="cp-name"
                                                type="text"
                                                placeholder="John Doe"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="cp-form-group">
                                            <label htmlFor="cp-phone">Phone Number *</label>
                                            <input
                                                id="cp-phone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="cp-form-row">
                                        <div className="cp-form-group">
                                            <label htmlFor="cp-email">Email Address</label>
                                            <input
                                                id="cp-email"
                                                type="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="cp-form-group">
                                            <label htmlFor="cp-subject">Subject</label>
                                            <input
                                                id="cp-subject"
                                                type="text"
                                                placeholder="How can we help?"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="cp-form-group">
                                        <label htmlFor="cp-message">Message *</label>
                                        <textarea
                                            id="cp-message"
                                            rows={5}
                                            placeholder="Tell us about your needs..."
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>
                                    <button type="submit" className="cp-submit-btn">
                                        Send Message
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                        </svg>
                                    </button>
                                </form>
                            ) : (
                                <div className="cp-success">
                                    <div className="cp-success-icon">✅</div>
                                    <h3>Message Sent Successfully!</h3>
                                    <p>Thank you for reaching out. Our executive will get in touch with you within 24 hours.</p>
                                    <button
                                        className="cp-success-btn"
                                        onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
