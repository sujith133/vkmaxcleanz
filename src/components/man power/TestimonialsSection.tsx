import './TestimonialsSection.css';

const testimonials = [
    {
        emoji: '👩',
        name: 'Amanda Peters',
        location: 'New York, NY',
        stars: 5,
        text: 'Absolutely incredible service! The team arrived on time, were extremely professional, and left our home sparkling clean. Highly recommend!',
    },
    {
        emoji: '👨',
        name: 'Robert Kim',
        location: 'Los Angeles, CA',
        stars: 5,
        text: 'We\'ve been using Cleanzo for our office for 6 months now. The consistency and quality of their work is unmatched. Our employees love the clean workspace.',
    },
    {
        emoji: '👩‍🦰',
        name: 'Jennifer Lopez',
        location: 'Chicago, IL',
        stars: 5,
        text: 'The deep cleaning service exceeded all expectations. They cleaned areas I didn\'t even know existed! Will definitely be booking again.',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="section-label">Testimonials</span>
                    <h2>See Why Customers Trust<br />Us with Their Clean</h2>
                    <p>Real reviews from real clients who experienced our exceptional service.</p>
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
