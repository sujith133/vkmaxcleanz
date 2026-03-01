import { useState } from 'react';
import './CleanFaq.css';

const faqs = [
    {
        q: 'Are your cleaning products safe?',
        a: 'Choose a convenient time service package that fits your needs book takes just a few minutes. Choose a convenient time service package that fits your needs book takes just a few minutes.',
    },
    {
        q: 'How long does a cleaning session take?',
        a: 'Choose a convenient time service package that fits your needs book takes just a few minutes. The duration depends on the size of the space and the type of cleaning.',
    },
    {
        q: 'Do I need to be home during the cleaning?',
        a: 'Choose a convenient time service package that fits your needs book takes just a few minutes.',
    },
    {
        q: 'Can I reschedule my booking?',
        a: 'Choose a convenient time service package that fits your needs book takes just a few minutes.',
    },
    {
        q: 'What areas do you cover?',
        a: 'Choose a convenient time service package that fits your needs book takes just a few minutes.',
    },
    {
        q: 'Do you offer recurring cleaning plans?',
        a: 'Choose a convenient time service package that fits your needs book takes just a few minutes.',
    },
];

export default function CleanFaq() {
    const [openIdx, setOpenIdx] = useState(1);

    return (
        <section className="clean-faq" id="clean-faq">
            <div className="clean-faq-container">
                <div className="clean-faq-left">
                    <p className="clean-faq-label">FAQ</p>
                    <h2 className="clean-faq-heading">
                        Trusted Answers from Our<br />Cleaning Professionals
                    </h2>
                    <p className="clean-faq-desc">
                        Choose a convenient time service package that fits your needs book takes just a few minutes.
                        Choose a convenient time service package that fits your needs book takes just a few minutes.
                    </p>
                    <a href="#clean-contact" className="clean-faq-cta" onClick={(e) => { e.preventDefault(); document.getElementById('clean-contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        <span className="clean-faq-cta-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </span>
                        Contact Us
                    </a>
                </div>

                <div className="clean-faq-accordion">
                    {faqs.map((faq, i) => (
                        <div
                            className={`clean-faq-item ${openIdx === i ? 'open' : 'closed'}`}
                            key={i}
                            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                        >
                            <div className="clean-faq-question">
                                <span className="clean-faq-question-text">{faq.q}</span>
                                <svg className="clean-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </div>
                            {openIdx === i && (
                                <div className="clean-faq-answer">{faq.a}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
