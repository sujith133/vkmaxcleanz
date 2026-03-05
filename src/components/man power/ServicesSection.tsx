import './ServicesSection.css';

const services = [
    { icon: '👷', title: 'Construction Workers', description: 'Skilled and unskilled labor for your construction sites.' },
    { icon: '📦', title: 'Warehouse Staff', description: 'Efficient personnel for logistics, packing, and inventory.' },
    { icon: '👔', title: 'Office Assistants', description: 'Professional support staff for your daily administrative tasks.' },
    { icon: '🧹', title: 'Cleaning Crews', description: 'Dedicated cleaning professionals for commercial and residential places.' },
    { icon: '🛡️', title: 'Security Staff', description: 'Trained security guards for comprehensive protection.' },
    { icon: '🎭', title: 'Event Manpower', description: 'Reliable staff to ensure your events run smoothly.' }
];

export default function ServicesSection() {
    return (
        <section className="services" id="service">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="section-label">Our Premium Manpower</span>
                    <h2>Skilled Workforce Solutions<br />Tailored For Your Business</h2>
                    <p>We supply reliable, vetted, and trained personnel across multiple industries.</p>
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
