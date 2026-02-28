import './ProcessSection.css';

const steps = [
    { number: '01', icon: '📋', title: 'Book Your Service', description: 'Schedule online or call us to book your preferred cleaning service and time slot.' },
    { number: '02', icon: '🔍', title: 'Inspection & Plan', description: 'Our team inspects your space and creates a customized cleaning plan just for you.' },
    { number: '03', icon: '🧹', title: 'Professional Clean', description: 'Our certified experts clean your space using eco-friendly products and modern equipment.' },
    { number: '04', icon: '✅', title: 'Quality Check', description: 'Final walkthrough to ensure every corner meets our spotless quality standards.' },
];

export default function ProcessSection() {
    return (
        <section className="process" id="process">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="section-label">How It Works</span>
                    <h2>Trusted Cleaning Process<br />Designed Around You</h2>
                </div>
                <div className="process-steps">
                    {steps.map((step, i) => (
                        <div className="process-step" key={i}>
                            <div className="step-number">
                                <span>{step.number}</span>
                            </div>
                            <div className="step-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
