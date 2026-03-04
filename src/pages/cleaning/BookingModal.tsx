import { useState, type FormEvent } from 'react';
import type { Service } from '../../data/servicesData';
import './BookingModal.css';

interface BookingModalProps {
    service: Service;
    onClose: () => void;
}

export default function BookingModal({ service, onClose }: BookingModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        preferredDate: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: Send to WhatsApp API later
        console.log('Booking submitted:', { service: service.service_name, ...formData });
        setSubmitted(true);
    };

    return (
        <div className="bm-overlay" onClick={onClose}>
            <div className="bm-modal" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button className="bm-close" onClick={onClose} aria-label="Close">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                {!submitted ? (
                    <>
                        {/* Header */}
                        <div className="bm-header">
                            <span className="bm-label">Book Service</span>
                            <h2>{service.service_name}</h2>
                            <p className="bm-cat">{service.category} · {service.subcategory}</p>
                        </div>

                        {/* Form */}
                        <form className="bm-form" onSubmit={handleSubmit}>
                            <div className="bm-field">
                                <label htmlFor="bm-name">Full Name *</label>
                                <input
                                    type="text"
                                    id="bm-name"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="bm-row">
                                <div className="bm-field">
                                    <label htmlFor="bm-phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="bm-phone"
                                        name="phone"
                                        placeholder="e.g. 9876543210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        pattern="[0-9]{10}"
                                        title="Please enter a valid 10-digit phone number"
                                    />
                                </div>
                                <div className="bm-field">
                                    <label htmlFor="bm-email">Email</label>
                                    <input
                                        type="email"
                                        id="bm-email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="bm-field">
                                <label htmlFor="bm-address">Service Address *</label>
                                <input
                                    type="text"
                                    id="bm-address"
                                    name="address"
                                    placeholder="Enter your address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="bm-field">
                                <label htmlFor="bm-date">Preferred Date</label>
                                <input
                                    type="date"
                                    id="bm-date"
                                    name="preferredDate"
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="bm-field">
                                <label htmlFor="bm-message">Additional Notes</label>
                                <textarea
                                    id="bm-message"
                                    name="message"
                                    placeholder="Any specific requirements..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                />
                            </div>

                            <button type="submit" className="bm-submit-btn">
                                Submit Booking Request
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </>
                ) : (
                    /* Success State */
                    <div className="bm-success">
                        <div className="bm-success-icon">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <circle cx="30" cy="30" r="30" fill="var(--primary-bg)" />
                                <path d="M20 30L27 37L40 24" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h2>Booking Submitted!</h2>
                        <p className="bm-success-service">{service.service_name}</p>
                        <p className="bm-success-msg">
                            Thank you, <strong>{formData.name}</strong>! Our executive will be in touch with you soon to confirm your booking.
                        </p>
                        <button className="bm-done-btn" onClick={onClose}>
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
