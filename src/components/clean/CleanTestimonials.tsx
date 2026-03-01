import { useState } from 'react';
import './CleanTestimonials.css';

const testimonials = [
    {
        name: 'Wade Warren',
        role: 'Ceo, Postman',
        text: 'Assured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate.',
    },
    {
        name: 'James Miren',
        role: 'HR, Reddis',
        text: 'Assured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate.',
    },
    {
        name: 'Sarah Johnson',
        role: 'Homeowner',
        text: "Their team is absolutely amazing! The house has never been cleaner. I've been using their service for 3 years now.",
    },
    {
        name: 'Michael Chen',
        role: 'Business Owner',
        text: 'Professional, reliable and thorough. Our office has been sparkling clean since we started using VK Max Cleanz.',
    },
];

const QuoteIcon = () => (
    <svg width="69" height="46" viewBox="0 0 69 46" fill="#6045ED" className="clean-testimonial-quote">
        <path d="M0 0.249V27.27C0 37.57 8.35 45.93 18.66 45.93H25.31C27.36 45.93 28.98 44.26 28.98 42.25V27.27C28.98 25.22 27.32 23.6 25.31 23.6H14.49L17.08 10.77C17.21 10.19 16.83 9.61 16.25 9.44L7.69 7.1C7.1 6.93 6.48 7.3 6.31 7.89L0 27.27V0.249Z" />
        <path d="M39.65 0.249V27.27C39.65 37.57 48 45.93 58.3 45.93H64.96C67.01 45.93 68.63 44.26 68.63 42.25V27.27C68.63 25.22 66.97 23.6 64.96 23.6H54.14L56.73 10.77C56.85 10.19 56.48 9.61 55.9 9.44L47.33 7.1C46.75 6.93 46.12 7.3 45.96 7.89L39.65 27.27V0.249Z" />
    </svg>
);

const StarIcon = () => (
    <svg viewBox="0 0 24 24" fill="#FAB33F" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

export default function CleanTestimonials() {
    const [page, setPage] = useState(0);
    const pairsCount = Math.ceil(testimonials.length / 2);
    const visible = testimonials.slice(page * 2, page * 2 + 2);

    return (
        <section className="clean-testimonials" id="clean-testimonials">
            <div className="clean-testimonials-container">
                <p className="clean-testimonials-label">Testimonials</p>
                <h2 className="clean-testimonials-heading">See Why Customers Trust Us</h2>

                <div className="clean-testimonials-carousel">
                    <button
                        className="clean-testimonials-nav"
                        onClick={() => setPage((p) => (p - 1 + pairsCount) % pairsCount)}
                        aria-label="Previous testimonials"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <div className="clean-testimonials-cards">
                        {visible.map((t, i) => (
                            <div className="clean-testimonial-card" key={page * 2 + i}>
                                <div className="clean-testimonial-header">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&size=110&background=f2f0fe&color=664bfa&bold=true&font-size=0.4`}
                                        alt={t.name}
                                        className="clean-testimonial-avatar"
                                    />
                                    <QuoteIcon />
                                </div>
                                <p className="clean-testimonial-text">{t.text}</p>
                                <div className="clean-testimonial-name">{t.name}</div>
                                <div className="clean-testimonial-role">{t.role}</div>
                                <div className="clean-testimonial-stars">
                                    {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="clean-testimonials-nav"
                        onClick={() => setPage((p) => (p + 1) % pairsCount)}
                        aria-label="Next testimonials"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>

                <div className="clean-testimonials-dots">
                    {[...Array(pairsCount)].map((_, i) => (
                        <button
                            key={i}
                            className={`clean-testimonials-dot ${i === page ? 'active' : ''}`}
                            style={{ width: i === page ? 18 : 14, height: i === page ? 18 : 14 }}
                            onClick={() => setPage(i)}
                            aria-label={`Page ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
