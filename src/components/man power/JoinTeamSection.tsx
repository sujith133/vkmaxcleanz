import { useState, useEffect } from 'react';
import './JoinTeamSection.css';

export default function JoinTeamSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        experience: '',
        message: '',
    });

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen]);

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => setSubmitted(false), 300);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you could send the data to your backend / API
        console.log('Staff enrollment:', formData);
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', city: '', experience: '', message: '' });
    };

    return (
        <>
            <section className="join-team" id="join-team">
                <div className="join-team-content">
                    <div className="join-team-text">
                        <p className="join-team-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="20" y1="8" x2="20" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="23" y1="11" x2="17" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Careers
                        </p>
                        <h2>Join Our Cleaning Team</h2>
                        <p>Looking for a rewarding career? Join VK Max Cleanz and be part of a professional team that delivers spotless results every day.</p>
                    </div>

                    <button className="btn-join" onClick={() => setIsOpen(true)}>
                        Apply Now
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Enrollment Modal */}
            {isOpen && (
                <div className="enroll-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
                    <div className="enroll-modal">
                        {!submitted ? (
                            <>
                                <div className="enroll-modal-header">
                                    <h3>Staff Enrollment Form</h3>
                                    <button className="enroll-close-btn" onClick={closeModal} aria-label="Close">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <form className="enroll-form" onSubmit={handleSubmit}>
                                    <div className="enroll-row">
                                        <div className="enroll-field">
                                            <label>Full Name <span>*</span></label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                                        </div>
                                        <div className="enroll-field">
                                            <label>Phone Number <span>*</span></label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                                        </div>
                                    </div>

                                    <div className="enroll-row">
                                        <div className="enroll-field">
                                            <label>Email Address</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                                        </div>
                                        <div className="enroll-field">
                                            <label>City <span>*</span></label>
                                            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Your city" required />
                                        </div>
                                    </div>

                                    <div className="enroll-field">
                                        <label>Experience in Cleaning</label>
                                        <select name="experience" value={formData.experience} onChange={handleChange}>
                                            <option value="">Select experience level</option>
                                            <option value="fresher">Fresher – No prior experience</option>
                                            <option value="1-2">1–2 years</option>
                                            <option value="3-5">3–5 years</option>
                                            <option value="5+">5+ years</option>
                                        </select>
                                    </div>

                                    <div className="enroll-field">
                                        <label>Why do you want to join?</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us a little about yourself..."></textarea>
                                    </div>

                                    <button type="submit" className="enroll-submit">
                                        Submit Application
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="enroll-success">
                                <div className="enroll-success-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Application Submitted!</h3>
                                <p>Thank you for your interest in joining VK Max Cleanz. Our team will review your application and get back to you soon.</p>
                                <button className="enroll-success-close" onClick={closeModal}>Done</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
