import { useState, useEffect, type FormEvent } from 'react';
import { sendManpowerEnquiry } from '../../utils/whatsapp';
import './EnquiryModal.css';

interface EnquiryModalProps {
    onClose: () => void;
    preselectedService?: string;
    formType?: 'enquiry' | 'request-staff' | 'hire';
}

const serviceOptions = [
    'Security Services',
    'Cleaning Staff',
    'Fire Safety',
    'Household Works',
    'Baby Sitting',
];

export default function EnquiryModal({ onClose, preselectedService, formType = 'enquiry' }: EnquiryModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        service: preselectedService || '',
        staffCount: '',
        duration: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        sendManpowerEnquiry({
            formType,
            name: formData.name,
            phone: formData.phone,
            email: formData.email || undefined,
            company: formData.company || undefined,
            service: formData.service || undefined,
            staffCount: formData.staffCount || undefined,
            duration: formData.duration || undefined,
            message: formData.message || undefined,
        });
        setSubmitted(true);
    };

    const titleMap = {
        'enquiry': 'Service Enquiry',
        'request-staff': 'Request Staff',
        'hire': 'Hire Workers',
    };

    const subtitleMap = {
        'enquiry': 'Tell us about your requirements and we\'ll get back within 24 hours.',
        'request-staff': 'Fill in the details and we\'ll deploy the right team for you.',
        'hire': 'Let us know your staffing needs and we\'ll match the right workers.',
    };

    return (
        <div className="em-overlay" onClick={onClose}>
            <div className="em-modal" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button className="em-close" onClick={onClose} aria-label="Close">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                {!submitted ? (
                    <>
                        {/* Header */}
                        <div className="em-header">
                            <span className="em-label">{titleMap[formType]}</span>
                            <h2>{preselectedService || titleMap[formType]}</h2>
                            <p className="em-subtitle">{subtitleMap[formType]}</p>
                        </div>

                        {/* Form */}
                        <form className="em-form" onSubmit={handleSubmit}>
                            <div className="em-row">
                                <div className="em-field">
                                    <label htmlFor="em-name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="em-name"
                                        name="name"
                                        placeholder="Your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="em-field">
                                    <label htmlFor="em-phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="em-phone"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        pattern="[0-9]{10}"
                                        title="Please enter a valid 10-digit phone number"
                                    />
                                </div>
                            </div>

                            <div className="em-row">
                                <div className="em-field">
                                    <label htmlFor="em-email">Email Address</label>
                                    <input
                                        type="email"
                                        id="em-email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="em-field">
                                    <label htmlFor="em-company">Company / Organization</label>
                                    <input
                                        type="text"
                                        id="em-company"
                                        name="company"
                                        placeholder="Company name (optional)"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="em-field">
                                <label htmlFor="em-service">Service Required *</label>
                                <select
                                    id="em-service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a service</option>
                                    {serviceOptions.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="em-row">
                                <div className="em-field">
                                    <label htmlFor="em-staff-count">Number of Staff Needed</label>
                                    <input
                                        type="number"
                                        id="em-staff-count"
                                        name="staffCount"
                                        placeholder="e.g. 5"
                                        value={formData.staffCount}
                                        onChange={handleChange}
                                        min="1"
                                    />
                                </div>
                                <div className="em-field">
                                    <label htmlFor="em-duration">Duration</label>
                                    <select
                                        id="em-duration"
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select duration</option>
                                        <option value="one-time">One-time</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="3-months">3 Months</option>
                                        <option value="6-months">6 Months</option>
                                        <option value="1-year">1 Year</option>
                                        <option value="ongoing">Ongoing / Permanent</option>
                                    </select>
                                </div>
                            </div>

                            <div className="em-field">
                                <label htmlFor="em-message">Additional Details</label>
                                <textarea
                                    id="em-message"
                                    name="message"
                                    placeholder="Describe your requirements, location, timings, any special needs..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                />
                            </div>

                            <button type="submit" className="em-submit-btn">
                                Submit {titleMap[formType]}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </>
                ) : (
                    /* Success State */
                    <div className="em-success">
                        <div className="em-success-icon">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <circle cx="30" cy="30" r="30" fill="#e8f5e9" />
                                <path d="M20 30L27 37L40 24" stroke="#2e7d32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h2>Request Submitted!</h2>
                        {formData.service && <p className="em-success-service">{formData.service}</p>}
                        <p className="em-success-msg">
                            Thank you, <strong>{formData.name}</strong>! Our staffing team will review your requirements and get back to you within 24 hours.
                        </p>
                        <button className="em-done-btn" onClick={onClose}>
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
