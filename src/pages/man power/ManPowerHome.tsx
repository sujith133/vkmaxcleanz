import { useEffect } from 'react';
import HeroSection from '../../components/man power/HeroSection';
import AboutSection from '../../components/man power/AboutSection';
import ServicesSection from '../../components/man power/ServicesSection';
import ProcessSection from '../../components/man power/ProcessSection';
import TestimonialsSection from '../../components/man power/TestimonialsSection';
import FAQSection from '../../components/man power/FAQSection';
import JoinTeamSection from '../../components/man power/JoinTeamSection';
import ContactSection from '../../components/man power/ContactSection';
import CTABanner from '../../components/shared/CTABanner';

export default function ManPowerHome() {
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
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
            <JoinTeamSection />
            <CTABanner
                title="Join Thousands of Happy Clients and Hire Staff Today"
                description="Experience the difference with our professional manpower services. Your satisfaction is guaranteed."
                primaryBtn="Request Staff"
                secondaryBtn="View Our Services"
            />
        </main>
    );
}
