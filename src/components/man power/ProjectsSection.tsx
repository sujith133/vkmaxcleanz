import { useState, useEffect, useCallback } from 'react';
import './ProjectsSection.css';

const projects = [
    {
        image: '/images/cleaning/project-1.png',
        title: 'Deep cleaning for a family residence',
        subtitle: 'Speaking Home Makeover',
        tags: ['Cleaning Services', 'Cleaning Services', 'Cleaning Services', 'Cleaning Services', 'Cleaning Services'],
    },
    {
        image: '/images/cleaning/project-2.png',
        title: 'Office space deep sanitization',
        subtitle: 'Corporate Clean Solution',
        tags: ['Office Cleaning', 'Sanitization', 'Deep Clean'],
    },
    {
        image: '/images/cleaning/project-3.png',
        title: 'Kitchen & bathroom restoration',
        subtitle: 'Residential Revamp',
        tags: ['Kitchen Clean', 'Bathroom Clean', 'Restoration'],
    },
    {
        image: '/images/cleaning/project-4.png',
        title: 'Post-construction site cleanup',
        subtitle: 'Builder Cleanup Project',
        tags: ['Post Construction', 'Site Cleanup', 'Heavy Duty'],
    },
];

export default function ProjectsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goTo = useCallback((index: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating]);

    const next = () => {
        goTo((activeIndex + 1) % projects.length);
    };

    const prev = () => {
        goTo((activeIndex - 1 + projects.length) % projects.length);
    };

    // Auto-advance every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Get visible cards (show 5 slots for the carousel effect)
    const getVisibleCards = () => {
        const total = projects.length;
        const cards = [];
        for (let offset = -2; offset <= 2; offset++) {
            const index = ((activeIndex + offset) % total + total) % total;
            cards.push({ ...projects[index], index, offset });
        }
        return cards;
    };

    return (
        <section className="projects" id="projects">
            <div className="projects-inner">
                {/* Header */}
                <div className="projects-header">
                    <div className="projects-header-text">
                        <span className="projects-label">Our Projects</span>
                        <h2>Trusted Cleaning Process<br />Designed Around You</h2>
                    </div>
                    <div className="projects-nav">
                        <button className="projects-nav-btn" onClick={prev} aria-label="Previous">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="projects-nav-btn active" onClick={next} aria-label="Next">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="projects-carousel">
                    {getVisibleCards().map((card) => (
                        <div
                            className={`proj-card ${card.offset === 0 ? 'proj-active' : ''} proj-offset-${card.offset}`}
                            key={`${card.index}-${card.offset}`}
                            onClick={() => card.offset !== 0 && goTo(card.index)}
                        >
                            <img src={card.image} alt={card.title} className="proj-card-img" />

                            {/* Active card overlay content */}
                            {card.offset === 0 && (
                                <div className="proj-card-overlay">
                                    <div className="proj-tags">
                                        {card.tags.map((tag, i) => (
                                            <span className="proj-tag" key={i}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className="proj-card-info">
                                        <div className="proj-card-text">
                                            <span className="proj-card-subtitle">{card.subtitle}</span>
                                            <h3>{card.title}</h3>
                                        </div>
                                        <button className="proj-arrow-btn" aria-label="View project">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Dots indicator */}
                <div className="projects-dots">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            className={`proj-dot ${i === activeIndex ? 'active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
