import './CleanServices.css';

const services = [
    {
        title: 'Commercial Cleaning',
        desc: 'Create a professional and welcoming environment for your office or business.',
        image: 'https://images.unsplash.com/photo-1644890550788-3ca4ee5c3bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
        highlighted: false,
    },
    {
        title: 'Residential Cleaning',
        desc: 'Create a professional and welcoming environment for your home.',
        image: 'https://images.unsplash.com/photo-1581578949510-fa7315c4c350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
        highlighted: false,
    },
    {
        title: 'Deep Cleaning',
        desc: 'Create a professional and welcoming environment for your office or business.',
        image: 'https://images.unsplash.com/photo-1758273238415-01ec03d9ef27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
        highlighted: true,
    },
    {
        title: 'Window Cleaning',
        desc: 'Create a professional and welcoming environment for your office or business.',
        image: 'https://images.unsplash.com/photo-1733271751327-140114dbdb4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
        highlighted: false,
    },
];

const dotSizes = [9, 14, 18, 14, 9];

export default function CleanServices() {
    return (
        <section className="clean-services" id="clean-services">
            <div className="clean-services-container">
                <div className="clean-services-header">
                    <div className="clean-services-header-left">
                        <p className="clean-services-label">Our Services</p>
                        <h2 className="clean-services-heading">
                            Complete Cleaning Solutions<br />for Homes & Business
                        </h2>
                    </div>
                    <a href="#clean-services" className="clean-services-cta" onClick={(e) => e.preventDefault()}>
                        <span className="clean-services-cta-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </span>
                        Click to View More
                    </a>
                </div>

                <div className="clean-services-cards">
                    {services.map((service, i) => (
                        <div className={`clean-service-card ${service.highlighted ? 'highlighted' : ''}`} key={i}>
                            <div className="clean-service-card-image">
                                <img src={service.image} alt={service.title} loading="lazy" />
                                {service.highlighted && (
                                    <div className="clean-service-card-badge">View</div>
                                )}
                            </div>
                            <div className="clean-service-card-body">
                                <div className="clean-service-card-title">{service.title}</div>
                                <div className="clean-service-card-desc">{service.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="clean-services-dots">
                    {dotSizes.map((size, i) => (
                        <button
                            key={i}
                            className={`clean-services-dot ${i === 2 ? 'active' : ''}`}
                            style={{ width: size, height: size }}
                            aria-label={`Page ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
