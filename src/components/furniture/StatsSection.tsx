import { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const stats = [
    { value: 920, suffix: '+', label: 'Premium products in our exclusive collection' },
    { value: 20, suffix: 'k+', label: 'Happy customers across India' },
    { value: 90, suffix: '%', label: 'Customer satisfaction rate' },
];

export default function StatsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="furn-stats" ref={sectionRef}>
            <div className="furn-stats-inner">
                <div className="furn-stats-text">
                    <span className="furn-stats-label">for your</span>
                    <h2>interior</h2>
                </div>
                <div className="furn-stats-grid">
                    {stats.map((stat, i) => (
                        <div className="furn-stat-card" key={i}>
                            <span className="furn-stat-value">
                                {visible ? <Counter end={stat.value} /> : '0'}
                                {stat.suffix}
                            </span>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Counter({ end }: { end: number }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.ceil(start));
        }, 16);
        return () => clearInterval(timer);
    }, [end]);
    return <>{count}</>;
}
