import { useEffect, useState } from 'react';
import { sendContactMessage } from '../../utils/whatsapp';
import './ManpowerContactPage.css';

export default function ManpowerContactPage() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', service: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendContactMessage({
            name: formData.name,
            phone: formData.phone,
            email: formData.email || undefined,
            service: formData.service || undefined,
            message: formData.message,
            brand: 'Manpower',
        });
        setSubmitted(true);
    };

    const contactDetails = [
        { icon: '📍', title: 'Our Office', lines: ['Visakhapatnam, Andhra Pradesh', 'India'] },
        { icon: '📞', title: 'Call Us', lines: ['+91 7569057281', 'Mon – Sat, 8 AM – 6 PM'] },
        { icon: '✉️', title: 'Email Us', lines: ['enochmoses@vkmaxcleanzsolutions.com'] },
        { icon: '⏰', title: 'Working Hours', lines: ['Monday – Saturday', '8:00 AM – 6:00 PM'] },
    ];

    return (
        <main className="mp-cp-page">
            <section className="mp-cp-hero">
                <div className="mp-cp-hero-overlay" />
                <div className="mp-cp-hero-content">
                    <span className="mp-cp-hero-label">Get In Touch</span>
                    <h1>Contact <span className="mp-cp-yellow">Manpower</span> Team</h1>
                    <p>
                        Need skilled staff? Have a question about our services?
                        Reach out and we'll respond within 24 hours.
                    </p>
                </div>
            </section>

            <section className="mp-cp-details">
                <div className="mp-cp-wrap">
                    <div className="mp-cp-details-grid">
                        {contactDetails.map((item, i) => (
                            <div className="mp-cp-detail-card" key={i}>
                                <div className="mp-cp-detail-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                {item.lines.map((line, j) => <p key={j}>{line}</p>)}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mp-cp-form-section">
                <div className="mp-cp-wrap">
                    <div className="mp-cp-form-container">
                        <div className="mp-cp-form-info">
                            <span className="mp-cp-label">Send a Message</span>
                            <h2>Let's Fulfill Your Staffing Needs</h2>
                            <p>
                                Fill out the form and one of our staffing specialists will get back
                                to you as soon as possible. For urgent requirements, call us directly.
                            </p>
                            <div className="mp-cp-trust">
                                <div className="mp-cp-trust-item">
                                    <span>⚡</span><span>Response within 24 hours</span>
                                </div>
                                <div className="mp-cp-trust-item">
                                    <span>🛡️</span><span>Background-verified workers</span>
                                </div>
                                <div className="mp-cp-trust-item">
                                    <span>💬</span><span>Free consultation</span>
                                </div>
                            </div>
                        </div>
                        <div className="mp-cp-form-card">
                            {!submitted ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="mp-cp-form-row">
                                        <div className="mp-cp-form-group">
                                            <label>Full Name *</label>
                                            <input type="text" placeholder="Your name" required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                        </div>
                                        <div className="mp-cp-form-group">
                                            <label>Phone Number *</label>
                                            <input type="tel" placeholder="+91 98765 43210" required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="mp-cp-form-row">
                                        <div className="mp-cp-form-group">
                                            <label>Email Address</label>
                                            <input type="email" placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                        </div>
                                        <div className="mp-cp-form-group">
                                            <label>Service Needed</label>
                                            <select value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                                                <option value="">Select a service</option>
                                                <option>Security Personnel</option>
                                                <option>Cleaning Staff</option>
                                                <option>Fire Safety Team</option>
                                                <option>Household Workers</option>
                                                <option>Baby Sitters</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mp-cp-form-group">
                                        <label>Message *</label>
                                        <textarea rows={5} placeholder="Tell us about your staffing needs..." required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                                    </div>
                                    <button type="submit" className="mp-cp-submit-btn">
                                        Send Message
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                        </svg>
                                    </button>
                                </form>
                            ) : (
                                <div className="mp-cp-success">
                                    <div className="mp-cp-success-icon">✅</div>
                                    <h3>Message Sent Successfully!</h3>
                                    <p>Thank you for reaching out. Our staffing specialist will contact you within 24 hours.</p>
                                    <button className="mp-cp-success-btn"
                                        onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', message: '' }); }}>
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
