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
                        <span className="logo-icon">✦</span>
                        {brand === 'cleaning' ? 'VK Max Cleanz' : 'VK Max Furnitures'}
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
                        <div className="brand-toggle" onClick={toggleBrand}>
                            <div className={`toggle-slider ${brand === 'furniture' ? 'right' : ''}`} />
                            <span className={`toggle-option ${brand === 'cleaning' ? 'active' : ''}`}>
                                Cleanz
                            </span>
                            <span className={`toggle-option ${brand === 'furniture' ? 'active' : ''}`}>
                                Furnitures
                            </span>
                        </div>

                        <a href="#contact" className="navbar-cta" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                            {brand === 'cleaning' ? 'Book Service' : 'Shop Now'}
                        </a>

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
                <div className="brand-toggle" onClick={() => { toggleBrand(); setMobileOpen(false); }}>
                    <div className={`toggle-slider ${brand === 'furniture' ? 'right' : ''}`} />
                    <span className={`toggle-option ${brand === 'cleaning' ? 'active' : ''}`}>Cleanz</span>
                    <span className={`toggle-option ${brand === 'furniture' ? 'active' : ''}`}>Furnitures</span>
                </div>
                <a
                    href="#contact"
                    className="navbar-cta"
                    onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                >
                    {brand === 'cleaning' ? 'Book Service' : 'Shop Now'}
                </a>
            </div>
        </>
    );
}
