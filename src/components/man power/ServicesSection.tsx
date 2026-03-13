import { useNavigate } from 'react-router-dom';
import { Monitor, Printer, CalendarDays, UtensilsCrossed, Briefcase, Mic, Presentation, Video, Shield, ArrowRight } from 'lucide-react';
import './ServicesSection.css';

const services = [
    {
        icon: Monitor,
        title: 'Website Designing',
        description: 'Professional, responsive, and modern website designing services tailored to your business needs.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80',
    },
    {
        icon: Printer,
        title: 'Printing',
        description: 'High-quality offset and digital printing services for all your marketing and corporate materials.',
        image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&q=80',
    },
    {
        icon: CalendarDays,
        title: 'Event Organization',
        description: 'End-to-end event planning and execution for corporate, social, and private gatherings.',
        image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=500&q=80',
    },
    {
        icon: UtensilsCrossed,
        title: 'Food Catering',
        description: 'Delicious and hygienic external catering services for events of any scale and size.',
        image: 'https://images.unsplash.com/photo-1555243896-c709bfa0b564?w=500&q=80',
    },
    {
        icon: Briefcase,
        title: 'A to Z Services',
        description: 'Comprehensive multi-disciplinary solutions covering a wide spectrum of operational needs.',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80',
    },
    {
        icon: Mic,
        title: 'Event Hosting',
        description: 'Experienced anchors, hosts, and stage managers to make your event memorable and engaging.',
        image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=500&q=80',
    },
    {
        icon: Presentation,
        title: 'Digital Board Installation',
        description: 'Supply, setup, and maintenance of digital signage and LED display boards.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80',
    },
    {
        icon: Video,
        title: 'CCTV Installation',
        description: 'State-of-the-art security camera systems installed by expert technicians for your safety.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80',
    },
    {
        icon: Shield,
        title: 'Body Guards / Security',
        description: 'Trained, verified, and licensed security personnel and bodyguards for ultimate protection.',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&q=80',
    },
];

export default function ServicesSection() {
    const navigate = useNavigate();

    return (
        <section className="mp-services" id="service">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="mp-section-label">What We Offer</span>
                    <h2>Our <span className="mp-highlight">Professional</span> Services</h2>
                    <p>We provide a wide array of expert services designed to meet your business and personal requirements.</p>
                </div>
                <div className="mp-services-grid">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div className="mp-service-card" key={i}>
                                {service.image && (
                                    <div style={{ width: '100%', height: '200px', marginBottom: '24px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                                        <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                                    </div>
                                )}
                                <div className="mp-service-icon-wrap">
                                    <Icon size={42} className="mp-service-icon" />
                                </div>
                                <div className="mp-service-card-body">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <button
                                        className="mp-service-link"
                                        onClick={() => navigate('/manpower/services')}
                                    >
                                        Learn More <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
