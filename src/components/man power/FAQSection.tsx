import { useState } from 'react';
import './FAQSection.css';

const faqs = [
    {
        question: 'What types of manpower do you supply?',
        answer: 'We provide security guards, cleaning staff, fire safety officers, household helpers, babysitters, office assistants, and more — all trained and verified.',
    },
    {
        question: 'How quickly can you deploy staff?',
        answer: 'In most cases, we can deploy personnel within 24–48 hours of receiving your request. For larger requirements, we work to a mutually agreed timeline.',
    },
    {
        question: 'Are your workers background-verified?',
        answer: 'Absolutely. Every worker goes through thorough background verification, identity checks, and skill assessments before being assigned to any client.',
    },
    {
        question: 'Do you provide replacement staff if someone doesn\'t show up?',
        answer: 'Yes, we maintain a standby pool of workers. If any assigned personnel is unavailable, we arrange an immediate replacement at no extra cost.',
    },
    {
        question: 'What industries do you serve?',
        answer: 'We supply manpower to corporate offices, residential societies, hospitals, construction sites, events, warehouses, and private households across India.',
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="mp-section-label">FAQ</span>
                    <h2>Common <span className="mp-highlight">Questions</span><br />About Our Services</h2>
                </div>
                <div className="faq-content">
                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <div className={`faq-item ${activeIndex === i ? 'active' : ''}`} key={i}>
                                <button className="faq-question" onClick={() => toggleFAQ(i)}>
                                    {faq.question}
                                    <span className="faq-icon">+</span>
                                </button>
                                <div className={`faq-answer ${activeIndex === i ? 'open' : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="faq-illustration">
                        <div className="faq-img-card">
                            <div className="faq-emoji">🤔</div>
                            <h3>Still Have Questions?</h3>
                            <p>Can't find the answer you're looking for? Reach out to our team directly.</p>
                            <a href="#contact" className="faq-cta">Contact Us →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
