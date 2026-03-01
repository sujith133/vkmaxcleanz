import './CleanAbout.css';

const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '10K+', label: 'Spaces Cleaned' },
    { value: '99%', label: 'Customer Satisfaction' },
    { value: '500+', label: 'Happy Homes Cleaned' },
];

const images = [
    'https://images.unsplash.com/photo-1581578949510-fa7315c4c350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1644890550788-3ca4ee5c3bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1758273238415-01ec03d9ef27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
];

export default function CleanAbout() {
    return (
        <section className="clean-about" id="clean-about">
            <div className="clean-about-container">
                <p className="clean-about-label">About Us</p>
                <h2 className="clean-about-heading">
                    At <strong>Vk Max Cleanz</strong> we believe a clean<br />
                    space creates a happier and healthier life.
                </h2>

                <div className="clean-about-layout">
                    <div className="clean-about-collage">
                        {images.map((src, i) => (
                            <img key={i} src={src} alt={`Professional cleaning service ${i + 1}`} loading="lazy" />
                        ))}
                    </div>

                    <div className="clean-about-stats">
                        {stats.map((stat, i) => (
                            <div className="clean-about-stat" key={i}>
                                <div className="clean-about-stat-value">{stat.value}</div>
                                <div className="clean-about-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <a href="#clean-about" className="clean-about-cta" onClick={(e) => { e.preventDefault(); }}>
                    <span className="clean-about-cta-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                        </svg>
                    </span>
                    Learn More About US
                </a>
            </div>
        </section>
    );
}
