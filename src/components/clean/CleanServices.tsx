import { Sparkles, Paintbrush, ShieldCheck, ArrowRight } from 'lucide-react';
import './CleanServices.css';

const services = [
    {
        title: 'Marble Polishing',
        desc: 'Restore the natural shine and elegance of your marble surfaces with our professional polishing.',
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
        highlighted: false,
    },
    {
        title: 'Painting',
        desc: 'High-quality interior and exterior painting services to refresh and protect your property.',
        icon: Paintbrush,
        image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
        highlighted: true,
    },
    {
        title: 'ANC Services',
        desc: 'Reliable Annual Maintenance Contracts (ANC) to keep your home or office in top condition year-round.',
        icon: ShieldCheck,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
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
                            Complete Solutions<br />for Homes & Business
                        </h2>
                    </div>
                    <a href="#clean-services" className="clean-services-cta" onClick={(e) => e.preventDefault()}>
                        <span className="clean-services-cta-icon">
                            <ArrowRight size={16} color="#664bfa" />
                        </span>
                        Click to View More
                    </a>
                </div>

                <div className="clean-services-cards">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div className={`clean-service-card ${service.highlighted ? 'highlighted' : ''}`} key={i}>
                                {service.image && (
                                    <div style={{ width: '100%', height: '200px', marginBottom: '24px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                                        <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                                    </div>
                                )}
                                <div className="clean-service-card-icon-wrap">
                                    <Icon size={40} className="clean-service-icon" />
                                    {service.highlighted && (
                                        <div className="clean-service-card-badge">Top</div>
                                    )}
                                </div>
                                <div className="clean-service-card-body">
                                    <h3 className="clean-service-card-title">{service.title}</h3>
                                    <p className="clean-service-card-desc">{service.desc}</p>
                                </div>
                            </div>
                        );
                    })}
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
