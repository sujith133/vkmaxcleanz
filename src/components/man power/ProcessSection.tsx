import './ProcessSection.css';

const steps = [
    { number: '01', icon: '📋', title: 'Share Your Needs', description: 'Tell us the type, number, and duration of staff you need — via call, form, or WhatsApp.' },
    { number: '02', icon: '🔍', title: 'We Screen & Match', description: 'Our team handpicks verified and trained candidates from our talent pool to match your exact requirements.' },
    { number: '03', icon: '🚀', title: 'Quick Deployment', description: 'Selected personnel are briefed, uniformed, and deployed to your location — often within 24–48 hours.' },
    { number: '04', icon: '✅', title: 'Ongoing Support', description: 'We conduct regular quality checks, handle replacements, and stay available for any staffing adjustments.' },
];

export default function ProcessSection() {
    return (
        <section className="process" id="process">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="mp-section-label">How It Works</span>
                    <h2>Hassle-Free <span className="mp-highlight">Staffing</span><br />in 4 Simple Steps</h2>
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
