import { useEffect, useState } from 'react';
import { sendContactMessage } from '../../utils/whatsapp';
import './FurnitureContactPage.css';

export default function FurnitureContactPage() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', subject: '', message: '',
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
            subject: formData.subject || undefined,
            message: formData.message,
            brand: 'Furnitures',
        });
        setSubmitted(true);
    };

    const contactDetails = [
        { icon: '📍', title: 'Showroom', lines: ['Visakhapatnam, Andhra Pradesh', 'India'] },
        { icon: '📞', title: 'Call Us', lines: ['+91 7569057281', 'Mon – Sat, 10 AM – 8 PM'] },
        { icon: '✉️', title: 'Email Us', lines: ['furnitures@vkmaxcleanz.com'] },
        { icon: '⏰', title: 'Showroom Hours', lines: ['Monday – Saturday', '10:00 AM – 8:00 PM'] },
    ];

    return (
        <main className="fu-cp-page">
            <section className="fu-cp-hero">
                <div className="fu-cp-hero-overlay" />
                <div className="fu-cp-hero-content">
                    <span className="fu-cp-hero-label">Get In Touch</span>
                    <h1>Contact <span className="fu-cp-gold">Furnitures</span> Team</h1>
                    <p>
                        Looking for the perfect piece? Have a custom order in mind?
                        Reach out and we'll help you create your dream space.
                    </p>
                </div>
            </section>

            <section className="fu-cp-details">
                <div className="fu-cp-wrap">
                    <div className="fu-cp-details-grid">
                        {contactDetails.map((item, i) => (
                            <div className="fu-cp-detail-card" key={i}>
                                <div className="fu-cp-detail-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                {item.lines.map((line, j) => <p key={j}>{line}</p>)}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="fu-cp-form-section">
                <div className="fu-cp-wrap">
                    <div className="fu-cp-form-container">
                        <div className="fu-cp-form-info">
                            <span className="fu-cp-label">Send a Message</span>
                            <h2>We'd Love to Hear From You</h2>
                            <p>
                                Whether it's a custom order, product inquiry, or feedback,
                                fill out the form and our team will respond promptly.
                            </p>
                            <div className="fu-cp-trust">
                                <div className="fu-cp-trust-item">
                                    <span>⚡</span><span>Response within 24 hours</span>
                                </div>
                                <div className="fu-cp-trust-item">
                                    <span>🛋️</span><span>Custom orders welcome</span>
                                </div>
                                <div className="fu-cp-trust-item">
                                    <span>🚚</span><span>Free delivery consultation</span>
                                </div>
                            </div>
                        </div>
                        <div className="fu-cp-form-card">
                            {!submitted ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="fu-cp-form-row">
                                        <div className="fu-cp-form-group">
                                            <label>Full Name *</label>
                                            <input type="text" placeholder="Your name" required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                        </div>
                                        <div className="fu-cp-form-group">
                                            <label>Phone Number *</label>
                                            <input type="tel" placeholder="+91 98765 43210" required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="fu-cp-form-row">
                                        <div className="fu-cp-form-group">
                                            <label>Email Address</label>
                                            <input type="email" placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                        </div>
                                        <div className="fu-cp-form-group">
                                            <label>Subject</label>
                                            <input type="text" placeholder="How can we help?"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="fu-cp-form-group">
                                        <label>Message *</label>
                                        <textarea rows={5} placeholder="Tell us about your furniture needs..." required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                                    </div>
                                    <button type="submit" className="fu-cp-submit-btn">
                                        Send Message
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                        </svg>
                                    </button>
                                </form>
                            ) : (
                                <div className="fu-cp-success">
                                    <div className="fu-cp-success-icon">✅</div>
                                    <h3>Message Sent Successfully!</h3>
                                    <p>Thank you for your interest. Our furniture specialist will get in touch shortly.</p>
                                    <button className="fu-cp-success-btn"
                                        onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}>
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
