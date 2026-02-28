import './ServicesSection.css';

const services = [
    { icon: '💆‍♀️', title: 'Salon and Spa', description: 'Professional beauty and wellness treatments at home.' },
    { icon: '❄️', title: 'AC & Appliance Repair', description: 'Expert technicians for all your home appliances.' },
    { icon: '✨', title: 'Cleaning', description: 'Thorough deep cleaning for your entire home.' },
    { icon: '🛠️', title: 'Electrician, Plumber & Carpenter', description: 'Reliable repair and maintenance services.' },
    { icon: '🎨', title: 'Home Painting', description: 'Transform your space with professional painting.' },
    { icon: '🐛', title: 'Pest Control', description: 'Effective solutions for a pest-free environment.' },
    { icon: '📐', title: 'Interior Designing', description: 'Creative and functional interior design solutions.' },
    { icon: '🛋️', title: 'Sofa Cleaning', description: 'Specialized cleaning for your upholstery.' }
];

export default function ServicesSection() {
    return (
        <section className="services" id="service">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="section-label">Our Service Categories</span>
                    <h2>Comprehensive Home Services<br />Tailored For You</h2>
                    <p>We offer a wide range of professional services to meet all your household needs.</p>
                </div>
                <div className="services-grid">
                    {services.map((service, i) => (
                        <div className="service-card" key={i}>
                            <div className="service-icon">
                                <span>{service.icon}</span>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href="#" className="service-link">Learn More →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
