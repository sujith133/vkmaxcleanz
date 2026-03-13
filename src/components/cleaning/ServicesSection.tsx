import { Sparkles, Paintbrush, ShieldCheck } from 'lucide-react';
import './ServicesSection.css';

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

export default function ServicesSection() {
    return (
        <section className="services" id="service">
            <div className="section-wrapper">
                <div className="cz-section-header">
                    <span className="cz-section-label">Our Services</span>
                    <h2>Complete Solutions<br />for Homes & Business</h2>
                </div>

                <div className="services-grid-new">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div className={`service-card-new ${service.highlighted ? 'highlighted' : ''}`} key={i}>
                                {service.image && (
                                    <div style={{ width: '100%', height: '200px', marginBottom: '24px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                                        <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                                    </div>
                                )}
                                <div className="service-card-icon-wrap">
                                    <Icon size={40} className="service-card-icon" />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
