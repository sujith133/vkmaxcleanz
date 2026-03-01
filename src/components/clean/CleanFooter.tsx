import { Link } from 'react-router-dom';
import './CleanFooter.css';

export default function CleanFooter() {
    return (
        <footer className="clean-footer">
            <div className="clean-footer-container">
                <div className="clean-footer-columns">
                    {/* Brand */}
                    <div className="clean-footer-brand">
                        <img src="/LogoFull.png" alt="VK Max Cleanz" className="clean-footer-logo" />
                        <p className="clean-footer-tagline">
                            Spotless Spaces, Stress-Free Living. Professional cleaning for homes and businesses.
                        </p>
                        <div className="clean-footer-socials">
                            <button className="clean-footer-social-btn" aria-label="Facebook">fb</button>
                            <button className="clean-footer-social-btn" aria-label="Twitter">tw</button>
                            <button className="clean-footer-social-btn" aria-label="Instagram">ig</button>
                            <button className="clean-footer-social-btn" aria-label="LinkedIn">li</button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="clean-footer-links-col">
                        <div className="clean-footer-col-title">Quick Links</div>
                        <div className="clean-footer-links">
                            <Link to="/clean">Home</Link>
                            <a href="#clean-services" onClick={(e) => { e.preventDefault(); document.getElementById('clean-services')?.scrollIntoView({ behavior: 'smooth' }); }}>Services</a>
                            <a href="#clean-about" onClick={(e) => { e.preventDefault(); document.getElementById('clean-about')?.scrollIntoView({ behavior: 'smooth' }); }}>About Us</a>
                            <a href="#clean-contact" onClick={(e) => { e.preventDefault(); document.getElementById('clean-contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact Us</a>
                        </div>
                    </div>

                    {/* Our Services */}
                    <div className="clean-footer-links-col">
                        <div className="clean-footer-col-title">Our Services</div>
                        <div className="clean-footer-links">
                            <a href="#clean-services" onClick={(e) => { e.preventDefault(); document.getElementById('clean-services')?.scrollIntoView({ behavior: 'smooth' }); }}>Residential Cleaning</a>
                            <a href="#clean-services" onClick={(e) => { e.preventDefault(); document.getElementById('clean-services')?.scrollIntoView({ behavior: 'smooth' }); }}>Commercial Cleaning</a>
                            <a href="#clean-services" onClick={(e) => { e.preventDefault(); document.getElementById('clean-services')?.scrollIntoView({ behavior: 'smooth' }); }}>Deep Cleaning</a>
                            <a href="#clean-services" onClick={(e) => { e.preventDefault(); document.getElementById('clean-services')?.scrollIntoView({ behavior: 'smooth' }); }}>Window Cleaning</a>
                            <a href="#clean-services" onClick={(e) => { e.preventDefault(); document.getElementById('clean-services')?.scrollIntoView({ behavior: 'smooth' }); }}>Carpet Cleaning</a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="clean-footer-links-col">
                        <div className="clean-footer-col-title">Contact Info</div>
                        <div className="clean-footer-contact-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>Local Address, Street Lmvdkn, 125-G, the woodloneinis, 772</span>
                        </div>
                        <div className="clean-footer-contact-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span>75690 57281</span>
                        </div>
                        <div className="clean-footer-contact-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <span>vkmaxcleanz@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="clean-footer-bottom">
                    <span className="clean-footer-copyright">
                        © 2026 VK Max Cleanz Solutions. All rights reserved.
                    </span>
                    <span className="clean-footer-legal">
                        <a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
