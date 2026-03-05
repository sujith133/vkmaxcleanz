import { useState } from 'react';
import './FAQSection.css';

const faqs = [
    {
        question: 'What types of staff do you supply?',
        answer: 'We supply trained personnel for various roles, including construction workers, warehouse staff, cleaning professionals, event helpers, and security personnel.',
    },
    {
        question: 'How do I request manpower?',
        answer: 'You can easily request staff through our website by filling out the contact form, calling us directly, or clicking the "Request Manpower" button.',
    },
    {
        question: 'Are your workers vetted?',
        answer: 'Yes! All our personnel undergo strict background checks, skill assessments, and professional training before being deployed to your site.',
    },
    {
        question: 'What is the minimum hire period?',
        answer: 'We offer flexible staffing options, ranging from daily assignments for events to long-term contracts for construction and corporate settings.',
    },
    {
        question: 'What if a worker is unable to attend?',
        answer: 'We maintain a robust pool of standby staff to ensure immediate replacements so your business operations are never interrupted.',
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
                    <span className="section-label">FAQ</span>
                    <h2>Trusted Answers from Our<br />Staffing Experts</h2>
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
                            <p>Can't find the answer you're looking for? Reach out to our recruitment team.</p>
                            <a href="#contact" className="faq-cta">Contact Us →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
