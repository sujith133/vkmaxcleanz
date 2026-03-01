import { useEffect } from 'react';
import CleanNavbar from '../../components/clean/CleanNavbar';
import CleanHero from '../../components/clean/CleanHero';
import CleanAbout from '../../components/clean/CleanAbout';
import CleanServices from '../../components/clean/CleanServices';
import CleanHowWeWork from '../../components/clean/CleanHowWeWork';
import CleanProjects from '../../components/clean/CleanProjects';
import CleanTestimonials from '../../components/clean/CleanTestimonials';
import CleanFaq from '../../components/clean/CleanFaq';
import CleanContact from '../../components/clean/CleanContact';
import CleanFooter from '../../components/clean/CleanFooter';

export default function CleanHomePage() {
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
        <>
            <CleanNavbar />
            <main>
                <CleanHero />
                <CleanAbout />
                <CleanServices />
                <CleanHowWeWork />
                <CleanProjects />
                <CleanTestimonials />
                <CleanFaq />
                <CleanContact />
            </main>
            <CleanFooter />
        </>
    );
}
