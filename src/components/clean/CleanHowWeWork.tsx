import './CleanHowWeWork.css';

const steps = [
    {
        num: '01',
        title: 'Book Your Service',
        desc: 'Choose a convenient time service package that fits your needs book takes just a few minutes',
    },
    {
        num: '02',
        title: 'We Plan & Prepare',
        desc: 'Choose a convenient time service package that fits your needs book takes just a few minutes',
    },
    {
        num: '03',
        title: 'Cleaning Begins',
        desc: 'Choose a convenient time service package that fits your needs book takes just a few minutes',
    },
    {
        num: '04',
        title: 'Final Inspection',
        desc: 'Choose a convenient time service package that fits your needs book takes just a few minutes',
    },
];

export default function CleanHowWeWork() {
    return (
        <section className="clean-howwework" id="clean-howwework">
            <div className="clean-howwework-container">
                <p className="clean-howwework-label">How we work</p>
                <h2 className="clean-howwework-heading">
                    Trusted Cleaning Process Designed Around You
                </h2>

                <div className="clean-howwework-layout">
                    <div className="clean-howwework-steps">
                        {steps.slice(0, 2).map((step, i) => (
                            <div className="clean-howwework-step" key={i}>
                                <div className="clean-howwework-step-number">{step.num}</div>
                                <div className="clean-howwework-step-title">{step.title}</div>
                                <div className="clean-howwework-step-desc">{step.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div className="clean-howwework-center">
                        <div className="clean-howwework-center-emoji">🧹</div>
                        <div className="clean-howwework-center-title">VK Max Cleanz</div>
                        <div className="clean-howwework-center-sub">Professional Cleaning Services</div>
                    </div>

                    <div className="clean-howwework-steps">
                        {steps.slice(2, 4).map((step, i) => (
                            <div className="clean-howwework-step" key={i + 2}>
                                <div className="clean-howwework-step-number">{step.num}</div>
                                <div className="clean-howwework-step-title">{step.title}</div>
                                <div className="clean-howwework-step-desc">{step.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
