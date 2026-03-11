import { useNavigate } from 'react-router-dom';
import './ServicesSection.css';

const services = [
    {
        image: '/images/manpower/Security.webp',
        title: 'Security Services',
        description: 'Trained and licensed security guards for residential, commercial, and event protection.',
    },
    {
        image: '/images/manpower/Cleaning_Staff.webp',
        title: 'Cleaning Staff',
        description: 'Professional cleaning personnel for offices, homes, hospitals, and commercial spaces.',
    },
    {
        image: '/images/manpower/Fire_Safety.webp',
        title: 'Fire Safety',
        description: 'Certified fire safety officers and fire watch personnel for compliance and emergency readiness.',
    },
    {
        image: '/images/manpower/Household_Works.webp',
        title: 'Household Works',
        description: 'Reliable domestic helpers for cooking, cleaning, laundry, and general household maintenance.',
    },
    {
        image: '/images/manpower/Baby_Sitting.webp',
        title: 'Baby Sitting',
        description: 'Experienced and caring babysitters and nannies for safe, attentive childcare at your home.',
    },
    {
        image: '/images/manpower/Office_Support.webp',
        title: 'Office Support',
        description: 'Administrative assistants, receptionists, and office boys for smooth daily operations.',
    },
];

export default function ServicesSection() {
    const navigate = useNavigate();

    return (
        <section className="mp-services" id="service">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="mp-section-label">What We Offer</span>
                    <h2>Our <span className="mp-highlight">Manpower</span> Services</h2>
                    <p>We supply reliable, vetted, and trained personnel across multiple industries.</p>
                </div>
                <div className="mp-services-grid">
                    {services.map((service, i) => (
                        <div className="mp-service-card" key={i}>
                            <div className="mp-service-img-wrap">
                                <img src={service.image} alt={service.title} className="mp-service-img" />
                            </div>
                            <div className="mp-service-card-body">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <button
                                    className="mp-service-link"
                                    onClick={() => navigate('/manpower/services')}
                                >
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
