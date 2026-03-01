import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

export default function Navbar() {
    const { brand, toggleBrand } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = brand === 'cleaning'
        ? [
            { label: 'Home', id: 'hero' },
            { label: 'About Us', id: 'aboutus' },
            { label: 'Services', id: 'service' },
            { label: 'Contact Us', id: 'contact' },
        ]
        : [
            { label: 'Home', id: 'hero' },
            { label: 'Products', id: 'products' },
            { label: 'Categories', id: 'categories' },
            { label: 'Contact', id: 'contact' },
        ];

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-inner">
                    <Link to={brand === 'cleaning' ? '/cleanz' : '/furnitures'} className="navbar-logo">
                        <img src="/LogoFull.png" alt={brand === 'cleaning' ? 'VK Max Cleanz' : 'VK Max Furnitures'} className="navbar-logo-img" />
                    </Link>

                    <div className="navbar-links">
                        {navLinks.map(link => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="navbar-right">
                        <div className="navbar-location">
                            <svg width="14" height="18" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="location-icon">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="currentColor" />
                            </svg>
                            <select aria-label="Select City" className="navbar-location-select">
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Vishakapatnam">Vishakapatnam</option>
                                <option value="Vijaywada">Vijaywada</option>
                            </select>
                        </div>

                        {brand === 'cleaning' ? (
                            <button className="brand-cta-btn dark" onClick={toggleBrand}>
                                Furnitures
                            </button>
                        ) : (
                            <button className="brand-cta-btn purple" onClick={toggleBrand}>
                                Cleanz
                            </button>
                        )}

                        <button
                            className={`hamburger ${mobileOpen ? 'open' : ''}`}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            <span /><span /><span />
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
                {navLinks.map(link => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                    >
                        {link.label}
                    </a>
                ))}
                <div className="mobile-location">
                    <svg width="14" height="18" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path fillRule="evenodd" clipRule="evenodd" d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="currentColor" />
                    </svg>
                    <select aria-label="Select City" className="mobile-location-select">
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Vishakapatnam">Vishakapatnam</option>
                        <option value="Vijaywada">Vijaywada</option>
                    </select>
                </div>
                {brand === 'cleaning' ? (
                    <button className="brand-cta-btn dark mobile-cta" onClick={() => { toggleBrand(); setMobileOpen(false); }}>
                        Furnitures
                    </button>
                ) : (
                    <button className="brand-cta-btn purple mobile-cta" onClick={() => { toggleBrand(); setMobileOpen(false); }}>
                        Cleanz
                    </button>
                )}
            </div>
        </>
    );
}
