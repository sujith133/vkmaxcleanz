import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EnquiryModal from './EnquiryModal';
import './HeroSection.css';

export default function HeroSection() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="mp-hero" id="hero">

            <div className="mp-hero-bg">
                <div className="mp-hero-overlay"></div>
            </div>

            <div className="mp-hero-content">
                <div className="mp-hero-text">
                    <p className="mp-hero-subtitle">Trusted · Skilled · On-Demand</p>
                    <h1>Your Trusted<br /><span className="mp-highlight">Manpower</span> Supply<br />Partner</h1>
                    <p className="mp-hero-desc">
                        From skilled labourers to office staff, we supply verified and
                        trained manpower tailored to your business needs — fast,
                        flexible, and reliable.
                    </p>

                    <div className="mp-hero-actions">
                        <button className="btn-hire" onClick={() => setShowModal(true)}>
                            <span className="mp-icon-circle">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#244A41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Hire Workers Now
                        </button>
                        <button className="btn-join-team" onClick={() => navigate('/manpower/join')}>
                            Join Our Team
                        </button>
                    </div>
                </div>

                <div className="mp-hero-image-wrapper">
                    <img src="/images/manpower/herosection.png" alt="Professional workforce" className="mp-person-img" />
                </div>
            </div>

            {/* Enquiry Modal */}
            {showModal && (
                <EnquiryModal
                    onClose={() => setShowModal(false)}
                    formType="hire"
                />
            )}
        </section>
    );
}
