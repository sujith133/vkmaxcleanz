import { useTheme } from '../../context/ThemeContext';
import './Footer.css';

export default function Footer() {
    const { brand } = useTheme();

    return (
        <footer className="footer" id="contact">
            <div className="footer-grid">
                <div className="footer-col footer-about">
                    <h4>{brand === 'cleaning' ? '✦ VK Max Cleanz' : '✦ VK Max Furnitures'}</h4>
                    <p>
                        {brand === 'cleaning'
                            ? 'Home services at your doorstep. We provide high-quality cleaning, repair, and maintenance services to make your life easier.'
                            : 'Premium furniture for modern living. Crafting comfort and style for every home.'}
                    </p>
                    <div className="footer-social">
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="Twitter">𝕏</a>
                        <a href="#" aria-label="Instagram">◎</a>
                        <a href="#" aria-label="LinkedIn">in</a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>{brand === 'cleaning' ? 'Company Links' : 'Products'}</h4>
                    <ul>
                        {brand === 'cleaning' ? (
                            <>
                                <li><a href="#aboutus">About us</a></li>
                                <li><a href="#">Terms & conditions</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </>
                        ) : (
                            <>
                                <li><a href="#">Living Room</a></li>
                                <li><a href="#">Bedroom</a></li>
                                <li><a href="#">Dining</a></li>
                                <li><a href="#">Office</a></li>
                                <li><a href="#">Outdoor</a></li>
                            </>
                        )}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>{brand === 'cleaning' ? 'Customer Links' : 'Quick Links'}</h4>
                    <ul>
                        {brand === 'cleaning' ? (
                            <>
                                <li><a href="#">Reviews on Us</a></li>
                                <li><a href="#service">Categories near you</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#contact">Contact us</a></li>
                            </>
                        ) : (
                            <>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </>
                        )}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Info</h4>
                    <ul>
                        <li><a href="#">📍 Vishakapatnam, Andhra pradesh</a></li>
                        <li><a href="tel:+917569057281">📞 +91 7569057281</a></li>
                        <li><a href="mailto:enochmoses@vkmaxcleanzsolutions.com" style={{ wordBreak: 'break-all' }}>✉ enochmoses@vkmaxcleanzsolutions.com</a></li>
                    </ul>
                </div>

                <div className="footer-col footer-newsletter">
                    <h4>Newsletter</h4>
                    <p>Subscribe to our newsletter for tips, deals, and updates.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Your email address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright 2026 {brand === 'cleaning' ? 'VK Max Cleanz Company' : 'VK Max Furnitures'}. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
}
