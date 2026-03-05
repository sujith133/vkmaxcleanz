import './TestimonialsSection.css';

const testimonials = [
    {
        emoji: '👩',
        name: 'Amanda Peters',
        location: 'New York, NY',
        stars: 5,
        text: 'Absolutely incredible service! The deployed staff arrived on time, were extremely professional, and integrated seamlessly with our team. Highly recommend!',
    },
    {
        emoji: '👨',
        name: 'Robert Kim',
        location: 'Los Angeles, CA',
        stars: 5,
        text: 'We\'ve been using VK Max Cleanz manpower services for our warehouse for 6 months now. The consistency and quality of their personnel is unmatched. Operations run much smoother now.',
    },
    {
        emoji: '👩‍🦰',
        name: 'Jennifer Lopez',
        location: 'Chicago, IL',
        stars: 5,
        text: 'The event staff exceeded all expectations. They managed the crowd effectively and were extremely polite! Will definitely be requesting staff again.',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="section-label">Testimonials</span>
                    <h2>See Why Businesses Trust<br />Us with Their Staffing</h2>
                    <p>Real reviews from real clients who experienced our exceptional manpower services.</p>
                </div>
                <div className="testimonials-slider">
                    {testimonials.map((t, i) => (
                        <div className="testimonial-card" key={i}>
                            <div className="testimonial-quote">"</div>
                            <div className="testimonial-stars">
                                {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
                            </div>
                            <p>{t.text}</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">{t.emoji}</div>
                                <div className="testimonial-info">
                                    <h4>{t.name} <span className="verified-badge">✓</span></h4>
                                    <span>{t.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
