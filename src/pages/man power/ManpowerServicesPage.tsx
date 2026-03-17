import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EnquiryModal from '../../components/man power/EnquiryModal';
import './ManpowerServicesPage.css';

const services = [
    {
        image: '/images/manpower/Security.webp',
        title: 'Security Services',
        description: 'We deploy trained, licensed security guards for residential complexes, corporate offices, retail outlets, events, and construction sites. Our security personnel are background-verified, disciplined, and equipped to handle emergency situations effectively.',
        features: ['24/7 guarding', 'Access control', 'CCTV monitoring support', 'Event security', 'Emergency response'],
    },
    {
        image: '/images/manpower/Cleaning_Staff.webp',
        title: 'Cleaning Staff',
        description: 'Our professional cleaning teams maintain hygiene standards across offices, hospitals, malls, residential societies, and industrial facilities. Trained in modern cleaning techniques and eco-friendly products.',
        features: ['Office & corporate cleaning', 'Hospital-grade sanitation', 'Deep cleaning services', 'Post-construction cleanup', 'Daily maintenance'],
    },
    {
        image: '/images/manpower/Fire_Safety.webp',
        title: 'Fire Safety',
        description: 'We supply certified fire safety officers and fire watch personnel who ensure compliance with safety regulations. Our staff is trained in fire prevention, emergency evacuation, and firefighting equipment handling.',
        features: ['Fire watch personnel', 'Safety compliance audits', 'Emergency drill coordination', 'Fire equipment inspection', 'Evacuation management'],
    },
    {
        image: '/images/manpower/Household_Works.webp',
        title: 'Household Works',
        description: 'From cooking and cleaning to laundry and general upkeep — our verified household helpers make daily life easier. Each worker is personally vetted, trained, and assigned based on your specific requirements.',
        features: ['Cooking & meal prep', 'House cleaning', 'Laundry & ironing', 'Grocery & errands', 'Elderly care assistance'],
    },
    {
        image: '/images/manpower/Baby_Sitting.webp',
        title: 'Baby Sitting',
        description: 'Our experienced babysitters and nannies provide attentive, loving childcare right at your home. All caregivers undergo strict background checks and are trained in child safety and early development.',
        features: ['Full-time & part-time nannies', 'After-school care', 'Infant care specialists', 'Weekend babysitters', 'First-aid trained'],
    },
    {
        image: '/images/manpower/a-to-z-home-services.webp',
        title: 'A to Z Home Services',
        description: 'Complete end-to-end home service solutions covering cleaning, repairs, electrical, plumbing, painting, and installations — all managed under one roof with trained and verified professionals.',
        features: ['Electrical & plumbing', 'Painting & carpentry', 'Appliance repairs', 'Deep cleaning', 'General maintenance'],
    },
    {
        image: '/images/manpower/cctv-installation.webp',
        title: 'CCTV',
        description: 'Professional CCTV camera installation, configuration and maintenance for homes, offices, retail stores and commercial spaces. We provide end-to-end solutions with remote monitoring setup and cloud storage integration.',
        features: ['HD & IP cameras', 'Remote monitoring setup', 'Night vision systems', 'Cloud storage integration', 'Annual maintenance'],
    },
    {
        image: '/images/manpower/led-displays.webp',
        title: 'LED Displays',
        description: 'Installation, setup and maintenance of indoor and outdoor LED display screens for advertising, digital signage, corporate communication and event displays with full technical support.',
        features: ['Indoor & outdoor displays', 'Digital signage', 'Content management', 'Event display setup', 'Maintenance & repair'],
    },
];

export default function ManpowerServicesPage() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [modalType, setModalType] = useState<'enquiry' | 'request-staff' | 'hire'>('enquiry');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openEnquiry = (serviceTitle: string) => {
        setSelectedService(serviceTitle);
        setModalType('enquiry');
        setShowModal(true);
    };

    const openRequestStaff = () => {
        setSelectedService('');
        setModalType('request-staff');
        setShowModal(true);
    };

    return (
        <main className="msp-page">
            {/* Hero */}
            <section className="msp-hero">
                <div className="msp-hero-overlay" />
                <div className="msp-hero-content">
                    <span className="msp-hero-label">What We Offer</span>
                    <h1>Our <span className="mp-highlight">Manpower</span> Services</h1>
                    <p>Skilled, verified, and trained personnel — deployed to your doorstep.</p>
                </div>
            </section>

            {/* Back navigation */}
            <div className="msp-breadcrumb-bar">
                <div className="msp-breadcrumb-inner">
                    <button className="msp-back-btn" onClick={() => navigate('/manpower')}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Home
                    </button>
                </div>
            </div>

            {/* Services List */}
            <section className="msp-content">
                <div className="msp-content-inner">
                    {services.map((service, i) => (
                        <div className={`msp-service-row ${i % 2 === 1 ? 'msp-reverse' : ''}`} key={i}>
                            <div className="msp-service-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="msp-service-info">
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <ul className="msp-features">
                                    {service.features.map((f, j) => (
                                        <li key={j}>
                                            <span className="msp-check">✓</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="msp-enquire-btn"
                                    onClick={() => openEnquiry(service.title)}
                                >
                                    Enquire Now
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="msp-cta">
                <div className="msp-cta-inner">
                    <h2>Need Staff for Your Business?</h2>
                    <p>Tell us your requirements and we'll deploy the right team within 24–48 hours.</p>
                    <div className="msp-cta-actions">
                        <button className="msp-cta-primary" onClick={openRequestStaff}>
                            Request Staff Now
                        </button>
                        <button className="msp-cta-outline" onClick={() => navigate('/manpower')}>
                            Back to Home
                        </button>
                    </div>
                </div>
            </section>

            {/* Enquiry Modal */}
            {showModal && (
                <EnquiryModal
                    onClose={() => setShowModal(false)}
                    preselectedService={selectedService}
                    formType={modalType}
                />
            )}
        </main>
    );
}
