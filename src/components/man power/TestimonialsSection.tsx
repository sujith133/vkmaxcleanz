import './TestimonialsSection.css';

const testimonials = [
    {
        emoji: '👨‍💼',
        name: 'Rajesh Kumar',
        location: 'Hyderabad',
        stars: 5,
        text: 'VK Max Solutions has been our go-to for security and cleaning staff. Their team is always punctual, professional, and well-trained. Highly reliable!',
    },
    {
        emoji: '👩‍💼',
        name: 'Priya Sharma',
        location: 'Bangalore',
        stars: 5,
        text: 'We needed household helpers on short notice and they delivered within 24 hours. The staff has been with us for 6 months now — very trustworthy and efficient.',
    },
    {
        emoji: '👨',
        name: 'Mohammed Irfan',
        location: 'Chennai',
        stars: 5,
        text: 'Their fire safety officers are well-certified and thorough. We deployed them across 3 facilities and the compliance audits have been smooth ever since.',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="mp-section-label">Testimonials</span>
                    <h2>Trusted by <span className="mp-highlight">Businesses</span><br />Across India</h2>
                    <p>Real reviews from clients who rely on our manpower solutions every day.</p>
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
