import './CleanHero.css';

export default function CleanHero() {
    return (
        <section className="clean-hero" id="clean-hero">
            <div className="clean-hero-bg">
                <img src="/images/cleaning/hero-cleaner.png" alt="" aria-hidden="true" style={{ objectPosition: 'center', filter: 'brightness(0.5)' }} />
            </div>
            <div className="clean-hero-overlay" />

            <div className="clean-hero-container">
                <div className="clean-hero-content">
                    <p className="clean-hero-tagline">Spotless Spaces, Stress-Free Living</p>
                    <h1 className="clean-hero-heading">
                        Trusted Cleaning<br />
                        Expert For Home<br />
                        And Businesses
                    </h1>
                    <p className="clean-hero-description">
                        Enjoy a spotless home or office without lifting a Finger. Our Professional
                        cleaning team delivers reliable eco-friendly.
                    </p>
                    <a href="#clean-contact" className="clean-hero-cta" onClick={(e) => { e.preventDefault(); document.getElementById('clean-contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        <span className="clean-hero-cta-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </span>
                        Book Your Cleaning Today
                    </a>
                </div>

                <div className="clean-hero-image">
                    <img src="/images/cleaning/hero-cleaner.png" alt="Professional cleaning expert" />
                </div>
            </div>

            <div className="clean-hero-clouds">
                <svg viewBox="0 0 2978.11 529" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 529V462.5C156.5 394.5 401 350 625 387C849 424 1050 350 1200 300C1350 250 1550 200 1700 230C1850 260 2050 300 2200 270C2350 240 2550 200 2700 230C2850 260 2978.11 300 2978.11 300V529H0Z" fill="white" />
                    <path d="M0 529V490C200 460 450 430 650 450C850 470 1050 430 1250 420C1450 410 1650 430 1850 440C2050 450 2250 430 2450 420C2650 410 2850 430 2978.11 440V529H0Z" fill="white" />
                    <path d="M0 529V500C100 485 250 475 400 480C550 485 700 495 850 490C1000 485 1150 475 1300 480C1450 485 1600 495 1750 490C1900 485 2050 475 2200 480C2350 485 2500 495 2650 490C2800 485 2900 480 2978.11 478V529H0Z" fill="white" stroke="white" strokeMiterlimit="10" />
                    <path d="M0 529V510C150 500 350 495 500 500C650 505 800 515 950 510C1100 505 1250 495 1400 500C1550 505 1700 515 1850 510C2000 505 2150 495 2300 500C2450 505 2600 515 2750 510C2900 505 2978.11 502 2978.11 500V529H0Z" fill="white" stroke="white" strokeMiterlimit="10" />
                    <path d="M0 529V520C200 515 500 512 750 515C1000 518 1250 522 1500 520C1750 518 2000 515 2250 517C2500 519 2750 522 2978.11 520V529H0Z" fill="white" stroke="white" strokeMiterlimit="10" />
                    <path d="M0 529V525C300 523 700 521 1100 523C1500 525 1900 527 2300 525C2600 524 2850 523 2978.11 523V529H0Z" fill="white" stroke="white" strokeMiterlimit="10" />
                </svg>
            </div>
        </section>
    );
}
