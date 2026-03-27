import { useEffect, useRef } from 'react';
import './OurClients.css';

export default function OurClients() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="our-clients-section animate-on-scroll">
            <div className="our-clients-wrap">
                <span className="our-clients-label">Our Clients</span>
                <h2>Trusted by Industry Leaders</h2>
                <div className="our-clients-grid">
                    <div className="client-logo-card">
                        <img src="/images/ourclients/ACN Healthcare.png" alt="ACN Healthcare" />
                    </div>
                    <div className="client-logo-card">
                        <img src="/images/ourclients/ACN infotech.png" alt="ACN Infotech" />
                    </div>
                    <div className="client-logo-card">
                        <img src="/images/ourclients/Physics wallah.png" alt="Physics Wallah" />
                    </div>
                </div>
            </div>
        </section>
    );
}
