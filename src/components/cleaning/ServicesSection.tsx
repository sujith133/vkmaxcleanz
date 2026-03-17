import './ServicesSection.css';

const services = [
    { icon: '❄️', title: 'AC & Appliance Repair', description: 'Expert technicians for all your home appliances.', image: '/images/cleanz/ac-service.webp' },
    { icon: '✨', title: 'Cleaning', description: 'Thorough deep cleaning for your entire home.', image: '/images/cleanz/house-cleaning.webp' },
    { icon: '🛠️', title: 'Electrician, Plumber & Carpenter', description: 'Reliable repair and maintenance services.', image: '/images/cleanz/electrical-works.webp' },
    { icon: '🎨', title: 'Home Painting', description: 'Transform your space with professional painting.', image: '/images/cleanz/carpenter-works.webp' },
    { icon: '🐛', title: 'Pest Control', description: 'Effective solutions for a pest-free environment.', image: '/images/cleanz/pest-control.webp' },
    { icon: '📐', title: 'Interior Designing', description: 'Creative and functional interior design solutions.', image: '/images/cleanz/carpenter-works.webp' },
    { icon: '🛋️', title: 'Sofa Cleaning', description: 'Specialized cleaning for your upholstery.', image: '/images/cleanz/house-cleaning.webp' },
    { icon: '🫧', title: 'Washing Machine Service', description: 'Complete servicing, repair and maintenance for all washing machine brands and models.', image: '/images/cleanz/washing-machine-service.webp' },
    { icon: '🧊', title: 'Fridge & Deep Freezer Service', description: 'Expert repair and servicing for all types of refrigerators, deep freezers and cooling appliances.', image: '/images/cleanz/fridge-service.webp' },
    { icon: '🔥', title: 'Kitchen Chimney Service', description: 'Professional cleaning, repair and installation of kitchen chimneys and exhaust systems.', image: '/images/cleanz/kitchen-chimney-service.webp' },
    { icon: '🚿', title: 'Geyser Service', description: 'Installation, repair and annual maintenance of water heaters and geysers of all brands.', image: '/images/cleanz/geyser-service.webp' },
    { icon: '📺', title: 'TV Installation', description: 'Professional TV wall mounting, setup and cable management for all screen sizes.', image: '/images/cleanz/tv-installation.webp' },
    { icon: '🚚', title: 'Movers & Packers', description: 'Complete home and office relocation services with safe packing, transport and unpacking.', image: '/images/cleanz/movers-packers.webp' },
    { icon: '📋', title: 'Annual Maintenance Contract (AMC)', description: 'Comprehensive annual service contracts for hassle-free maintenance of all home appliances and systems.', image: '/images/cleanz/amc-service.webp' },
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
                            <div className="service-card-image">
                                <img src={service.image} alt={service.title} loading="lazy" />
                            </div>
                            <div className="service-card-content">
                                <div className="service-icon">
                                    <span>{service.icon}</span>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <a href="#" className="service-link">Learn More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
