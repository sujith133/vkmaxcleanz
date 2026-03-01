import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CleanNavbar.css';

export default function CleanNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const scrollToSection = (id: string) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { label: 'Home', id: 'clean-hero', active: true },
        { label: 'Services', id: 'clean-services', active: false },
        { label: 'About Us', id: 'clean-about', active: false },
        { label: 'Contact Us', id: 'clean-contact', active: false },
    ];

    return (
        <>
            <div className="clean-navbar-wrapper">
                <nav className="clean-navbar">
                    <Link to="/clean" className="clean-navbar-logo">
                        <img src="/LogoFull.png" alt="VK Max Cleanz Solutions" />
                    </Link>

                    <div className="clean-navbar-links">
                        {navLinks.map(link => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className={link.active ? 'active' : ''}
                                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                            >
                                {link.label}
                                {link.label === 'Services' && (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                )}
                            </a>
                        ))}
                    </div>

                    <div className="clean-navbar-right">
                        <Link to="/furnitures" className="clean-navbar-furniture-btn">
                            Furnitures
                        </Link>

                        <div className="clean-navbar-phone">
                            <div className="clean-navbar-phone-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div className="clean-navbar-phone-text">
                                <span>Call Now</span>
                                <span>75690 57281</span>
                            </div>
                        </div>

                        <button
                            className="clean-navbar-hamburger"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            <span /><span /><span />
                        </button>
                    </div>
                </nav>
            </div>
            <div className={`clean-navbar-mobile-menu ${mobileOpen ? 'open' : ''}`}>
                {navLinks.map(link => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                    >
                        {link.label}
                    </a>
                ))}
                <Link to="/furnitures" className="clean-navbar-furniture-btn" style={{ textAlign: 'center' }}>
                    Furnitures
                </Link>
            </div>
        </>
    );
}
