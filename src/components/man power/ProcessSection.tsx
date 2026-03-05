import './ProcessSection.css';

const steps = [
    { number: '01', icon: '📋', title: 'Request Staff', description: 'Submit your requirements online or call us with the details of your staffing needs.' },
    { number: '02', icon: '🔍', title: 'Candidate Shortlisting', description: 'We source and vet the best candidates from our pool to match your criteria.' },
    { number: '03', icon: '🤝', title: 'Deployment', description: 'Selected personnel are briefed and deployed to your location on schedule.' },
    { number: '04', icon: '✅', title: 'Ongoing Support', description: 'We provide continuous support and quality checks for the duration of the deployment.' },
];

export default function ProcessSection() {
    return (
        <section className="process" id="process">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="section-label">How It Works</span>
                    <h2>Simplified Staffing Process<br />Designed Around You</h2>
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
