import { useEffect } from 'react';
import HeroSection from '../../components/cleaning/HeroSection';
import AboutSection from '../../components/cleaning/AboutSection';
import ServicesSection from '../../components/cleaning/ServicesSection';
import ProcessSection from '../../components/cleaning/ProcessSection';
import ProjectsSection from '../../components/cleaning/ProjectsSection';
import TeamSection from '../../components/cleaning/TeamSection';
import TestimonialsSection from '../../components/cleaning/TestimonialsSection';
import FAQSection from '../../components/cleaning/FAQSection';
import ContactSection from '../../components/cleaning/ContactSection';
import BlogSection from '../../components/cleaning/BlogSection';
import CTABanner from '../../components/shared/CTABanner';

export default function CleaningHome() {
    useEffect(() => {
        // Scroll animation observer
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

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        window.scrollTo(0, 0);

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProcessSection />
            <ProjectsSection />
            <TeamSection />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
            <BlogSection />
            <CTABanner
                title="Join Thousands of Happy Clients and Book Today"
                description="Experience the difference with our professional services. Your satisfaction is guaranteed."
                primaryBtn="Book Now"
                secondaryBtn="View Our Services"
            />
        </main>
    );
}
