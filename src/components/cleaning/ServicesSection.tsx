import { useNavigate } from 'react-router-dom';
import { getCategories, getCategoryImageUrl } from '../../data/servicesData';
import { useState } from 'react';
import './ServicesSection.css';

export default function ServicesSection() {
    const navigate = useNavigate();
    // Show only the first 4 main categories
    const categories = getCategories().slice(0, 4);

    return (
        <section className="services" id="service">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="section-label">Our Service Categories</span>
                    <h2>Comprehensive Home Services<br />Tailored For You</h2>
                    <p>We offer a wide range of professional services to meet all your household needs.</p>
                </div>
                <div className="services-grid">
                    {categories.map((cat) => (
                        <ServiceCategoryCard
                            key={cat.name}
                            name={cat.name}
                            icon={cat.icon}
                            description={cat.description}
                            count={cat.count}
                            onClick={() => navigate('/cleanz/services')}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCategoryCard({ name, icon, description, count, onClick }: {
    name: string;
    icon: string;
    description: string;
    count: number;
    onClick: () => void;
}) {
    const [imgError, setImgError] = useState(false);
    const imgUrl = getCategoryImageUrl(name);

    return (
        <div className="service-card" onClick={onClick} style={{ cursor: 'pointer' }}>
            {!imgError && imgUrl ? (
                <div className="service-card-img">
                    <img
                        src={imgUrl}
                        alt={name}
                        onError={() => setImgError(true)}
                        loading="lazy"
                    />
                </div>
            ) : (
                <div className="service-icon">
                    <span>{icon}</span>
                </div>
            )}
            <h3>{name}</h3>
            <p>{description}</p>
            <a className="service-link" onClick={onClick}>
                {count} Services →
            </a>
        </div>
    );
}
