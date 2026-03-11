import { useEffect } from 'react';
import FurnitureHero from '../../components/furniture/FurnitureHero';
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
            <FurnitureHero />

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
