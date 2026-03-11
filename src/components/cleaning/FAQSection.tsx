import { useState } from 'react';
import './FAQSection.css';

const faqs = [
    {
        question: 'What cleaning services do you offer?',
        answer: 'We offer residential cleaning, commercial cleaning, deep cleaning, move-in/out cleaning, office cleaning, carpet cleaning, and specialized sanitization services.',
    },
    {
        question: 'How do I book a cleaning service?',
        answer: 'You can easily book through our website by filling out the cz-contact form, calling us directly, or clicking the "Book Service" button. Our team will confirm your appointment within 2 hours.',
    },
    {
        question: 'Are your cleaning products eco-friendly?',
        answer: 'Yes! We exclusively use eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment while still delivering exceptional cleaning results.',
    },
    {
        question: 'Do you offer recurring cleaning plans?',
        answer: 'Absolutely! We offer weekly, bi-weekly, and monthly cleaning plans at discounted rates. Contact us to customize a plan that fits your schedule and budget.',
    },
    {
        question: 'What is your satisfaction guarantee?',
        answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with any aspect of our service, we\'ll re-clean the area at no additional cost within 24 hours.',
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="cz-faq" id="cz-faq">
            <div className="section-wrapper">
                <div className="cz-section-header">
                    <span className="cz-section-label">FAQ</span>
                    <h2>Trusted Answers from Our<br />Cleaning Professionals</h2>
                </div>
                <div className="cz-faq-content">
                    <div className="cz-faq-list">
                        {faqs.map((faq, i) => (
                            <div className={`cz-faq-item ${activeIndex === i ? 'cz-active' : ''}`} key={i}>
                                <button className="cz-faq-question" onClick={() => toggleFAQ(i)}>
                                    {faq.question}
                                    <span className="cz-faq-icon">+</span>
                                </button>
                                <div className={`cz-faq-answer ${activeIndex === i ? 'cz-open' : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cz-faq-illustration">
                        <div className="cz-faq-img-card">
                            <div className="cz-faq-emoji">🤔</div>
                            <h3>Still Have Questions?</h3>
                            <p>Can't find the answer you're looking for? Reach out to our support team.</p>
                            <a href="#contact" className="cz-faq-cta">Contact Us →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
