import { useEffect } from 'react';
import StatsSection from '../../components/furniture/StatsSection';
import ProjectsSection from '../../components/furniture/ProjectsSection';
import CategoriesSection from '../../components/furniture/CategoriesSection';
import FeaturedProducts from '../../components/furniture/FeaturedProducts';
import BrandStory from '../../components/furniture/BrandStory';
import FurnitureTestimonials from '../../components/furniture/FurnitureTestimonials';
import CTABanner from '../../components/shared/CTABanner';
import './FurnitureHome.css';

export default function FurnitureHome() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="furniture-page">
            <section className="furniture-hero" id="hero">
                <div className="hero-bg" />
                <div className="furniture-hero-content">
                    <div className="furniture-badge">
                        <span>✨</span> New Collection 2026
                    </div>
                    <h1>
                        Elevate Your Space with<br />
                        <span className="highlight">Premium</span> VK Max Furnitures
                    </h1>
                    <p>
                        Discover beautifully crafted pieces that transform your house into a home.
                        Sustainable materials, timeless design, and unmatched comfort.
                    </p>
                    <div className="furniture-hero-actions">
                        <a href="#products" className="furniture-btn">Shop Collection →</a>
                    </div>
                </div>
            </section>

            <StatsSection />
            <ProjectsSection />
            <CategoriesSection />
            <FeaturedProducts />
            <BrandStory />
            <FurnitureTestimonials />

            <CTABanner
                title="Transform Your Home Today"
                description="Get expert advice and custom furniture solutions. Contact us for a free consultation."
                primaryBtn="Get a Free Quote"
                secondaryBtn="Browse Catalog"
            />
        </main>
    );
}
