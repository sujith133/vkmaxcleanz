import './CTABanner.css';

interface CTABannerProps {
    title: string;
    description: string;
    primaryBtn: string;
    secondaryBtn?: string;
}

export default function CTABanner({ title, description, primaryBtn, secondaryBtn }: CTABannerProps) {
    return (
        <section className="cta-banner">
            <div className="cta-banner-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="cta-banner-buttons">
                    <a href="#contact" className="cta-btn-white">{primaryBtn} →</a>
                    {secondaryBtn && (
                        <a href="#services" className="cta-btn-outline">{secondaryBtn}</a>
                    )}
                </div>
            </div>
        </section>
    );
}
