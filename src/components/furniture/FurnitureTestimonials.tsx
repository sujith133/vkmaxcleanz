import { useState } from 'react';
import './FurnitureTestimonials.css';

const testimonials = [
    {
        name: 'Rajesh Sharma',
        role: 'Homeowner, Hyderabad',
        text: 'The quality of craftsmanship is outstanding. Our living room sofa and dining set from VK Max Furnitures have been getting compliments from every guest. Worth every rupee!',
        rating: 5,
    },
    {
        name: 'Priya Nair',
        role: 'Interior Designer',
        text: 'As a designer, I recommend VK Max Furnitures to all my clients. Their attention to detail, premium materials, and timely delivery make them my go-to furniture partner.',
        rating: 5,
    },
    {
        name: 'Arjun Reddy',
        role: 'Office Manager, Bangalore',
        text: 'We furnished our entire 50-seat office with VK Max. The ergonomic chairs and executive desks are top-notch. Our team productivity has noticeably improved!',
        rating: 5,
    },
    {
        name: 'Meera Kapoor',
        role: 'Café Owner, Mumbai',
        text: 'The custom café furniture they built for us is stunning. Durable, stylish, and exactly what we envisioned. Our customers love the ambiance.',
        rating: 4,
    },
    {
        name: 'Vikram Singh',
        role: 'Real Estate Developer',
        text: 'For our model apartment project, VK Max delivered 30 fully furnished units on time. The quality consistency across all units was remarkable.',
        rating: 5,
    },
];

export default function FurnitureTestimonials() {
    const [active, setActive] = useState(0);

    const next = () => setActive((prev) => (prev + 1) % testimonials.length);
    const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="furn-testimonials">
            <div className="furn-testimonials-inner">
                <div className="furn-testimonials-header">
                    <span className="furn-testimonials-label">Testimonials</span>
                    <h2>What our <span>customers</span> say</h2>
                </div>

                <div className="furn-testimonial-carousel">
                    <div className="furn-testimonial-card" key={active}>
                        <div className="furn-testimonial-stars">
                            {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
                        <blockquote>"{testimonials[active].text}"</blockquote>
                        <div className="furn-testimonial-author">
                            <div className="furn-testimonial-avatar">
                                {testimonials[active].name[0]}
                            </div>
                            <div>
                                <strong>{testimonials[active].name}</strong>
                                <span>{testimonials[active].role}</span>
                            </div>
                        </div>
                    </div>

                    <div className="furn-testimonial-controls">
                        <button className="furn-testimonial-nav" onClick={prev} aria-label="Previous">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <span className="furn-testimonial-counter">
                            {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                        </span>
                        <button className="furn-testimonial-nav" onClick={next} aria-label="Next">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
