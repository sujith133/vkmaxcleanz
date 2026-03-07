import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import EnquiryModal from '../man power/EnquiryModal';
import './CTABanner.css';

interface CTABannerProps {
    title: string;
    description: string;
    primaryBtn: string;
    secondaryBtn?: string;
}

export default function CTABanner({ title, description, primaryBtn, secondaryBtn }: CTABannerProps) {
    const navigate = useNavigate();
    const { brand } = useTheme();
    const [showModal, setShowModal] = useState(false);

    // Route based on current brand
    const contactRoute = brand === 'manpower' ? '/manpower/contact' : brand === 'furniture' ? '/furnitures/contact' : '/cleanz/contact';
    const servicesRoute = brand === 'manpower' ? '/manpower/services' : brand === 'furniture' ? '/furnitures#products' : '/cleanz/services';

    // Theme class for manpower green styling
    const themeClass = brand === 'manpower' ? 'cta-banner-manpower' : '';

    const handlePrimaryClick = () => {
        if (brand === 'manpower') {
            setShowModal(true);
        } else {
            navigate(contactRoute);
        }
    };

    return (
        <>
            <section className={`cta-banner ${themeClass}`}>
                <div className="cta-banner-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="cta-banner-buttons">
                        <button onClick={handlePrimaryClick} className="cta-btn-white">{primaryBtn} →</button>
                        {secondaryBtn && (
                            <button onClick={() => navigate(servicesRoute)} className="cta-btn-outline">{secondaryBtn}</button>
                        )}
                    </div>
                </div>
            </section>

            {showModal && (
                <EnquiryModal
                    onClose={() => setShowModal(false)}
                    formType="request-staff"
                />
            )}
        </>
    );
}
