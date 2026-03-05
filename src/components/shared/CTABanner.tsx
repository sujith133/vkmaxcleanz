import { useNavigate } from 'react-router-dom';
import './CTABanner.css';

interface CTABannerProps {
    title: string;
    description: string;
    primaryBtn: string;
    secondaryBtn?: string;
}

export default function CTABanner({ title, description, primaryBtn, secondaryBtn }: CTABannerProps) {
    const navigate = useNavigate();

    return (
        <section className="cta-banner">
            <div className="cta-banner-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="cta-banner-buttons">
                    <button onClick={() => navigate('/cleanz/contact')} className="cta-btn-white">{primaryBtn} →</button>
                    {secondaryBtn && (
                        <button onClick={() => navigate('/cleanz/services')} className="cta-btn-outline">{secondaryBtn}</button>
                    )}
                </div>
            </div>
        </section>
    );
}
