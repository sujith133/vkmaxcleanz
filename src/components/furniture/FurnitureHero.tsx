import { useRef, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FurnitureHero.css';

const CHAIR_IMG = '/images/furniture/herosection_chair.png';
const LAMP_IMG = '/images/furniture/herosection_lamp.png';
const MAT_IMG = '/images/furniture/herosection_mat.png';

/* Reusable arrow icon (diagonal ↗) */
function ArrowIcon({ size = 16 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
        </svg>
    );
}

/*  Wave Button — an SVG sine-wave line that follows cursor horizontally */
function WaveButton({
    children,
    onClick,
    className = '',
}: {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}) {
    const btnRef = useRef<HTMLButtonElement>(null);
    const waveRef = useRef<SVGSVGElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = btnRef.current;
        const wave = waveRef.current;
        if (!btn || !wave) return;

        const rect = btn.getBoundingClientRect();
        const xNorm = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const shift = xNorm * 60;
        wave.style.transform = `translateX(${shift}px)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        const wave = waveRef.current;
        if (wave) wave.style.transform = 'translateX(0px)';
    }, []);

    return (
        <button
            ref={btnRef}
            className={`fh-wave-btn ${className}`}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <svg
                ref={waveRef}
                className="fh-wave-svg"
                viewBox="0 0 400 20"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10 T 250 10 T 300 10 T 350 10 T 400 10"
                    fill="none"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                />
            </svg>
            <span className="fh-wave-btn-content">{children}</span>
        </button>
    );
}

/* Bottom orbiter SVG — the circle-arrow button that follows cursor */
function BottomOrbiter() {
    return (
        <svg width="236" height="165" viewBox="0 0 236 165" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="118" cy="85" r="85" fill="#131112" />
            <circle cx="118" cy="81" r="42" fill="#131112" stroke="white" strokeWidth="16" />
            <rect x="111.542" y="44.7286" width="51.2989" height="52.8534" rx="25.6494" transform="rotate(34.3038 111.542 44.7286)" fill="#131112" />
            <path d="M125.067 72.5687L122.488 72.9511L124.13 84.0272L109.932 73.4949L108.383 75.5826L122.582 86.1148L111.506 87.7569L111.888 90.3358L127.361 88.0418L125.067 72.5687Z" fill="white" />
            <path d="M203 81C203 81 204.788 91.5 215.517 102.052C222.12 108.545 236 114 236 114H203H191L203 81Z" fill="#131112" />
            <path d="M33 81C33 81 31.2124 91.5 20.4828 102.052C13.8801 108.545 0 114 0 114H33H45L33 81Z" fill="#131112" />
        </svg>
    );
}

export default function FurnitureHero() {
    const navigate = useNavigate();
    const canvasRef = useRef<HTMLDivElement>(null);
    const orbiterRef = useRef<HTMLDivElement>(null);
    const [orbiterX, setOrbiterX] = useState(0);

    const handleCTA = () => {
        document.getElementById('furniture-contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleExplore = () => {
        navigate('/furniture/products');
    };

    /* Track cursor X across the entire hero canvas */
    const handleCanvasMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        // cursor X relative to canvas, clamped so orbiter stays in view
        const relX = e.clientX - rect.left;
        setOrbiterX(relX);
    }, []);

    /* Centre the orbiter when mouse leaves */
    const handleCanvasMouseLeave = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        setOrbiterX(canvas.offsetWidth / 2);
    }, []);

    /* Initialise at centre */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) setOrbiterX(canvas.offsetWidth / 2);
    }, []);

    return (
        <section className="fh-wrapper" id="furniture-hero">
            <div
                className="fh-canvas"
                ref={canvasRef}
                onMouseMove={handleCanvasMouseMove}
                onMouseLeave={handleCanvasMouseLeave}
            >

                {/* --- Background decorative title --- */}
                <div className="fh-bg-title" aria-hidden="true">FURNITURE</div>

                {/* --- Left content column --- */}
                <div className="fh-origin">
                    Made in
                    <strong>China</strong>
                </div>
                <div className="fh-left">
                    <p className="fh-desc">
                        Enjoy a spotless home or office without lifting a Finger. Our Professional
                        cleaning team delivers reliable eco-friendly.
                    </p>

                    <WaveButton onClick={handleCTA} className="fh-cta">
                        <span className="fh-cta-icon">
                            <ArrowIcon />
                        </span>
                        <span className="fh-cta-text">Book Your Cleaning Today</span>
                    </WaveButton>
                </div>

                {/* --- Mat (floor surface for chair + lamp) --- */}
                <div className="fh-mat">
                    <img src={MAT_IMG} alt="" aria-hidden="true" />
                </div>

                {/* --- Furniture group (chair + lamp side by side) --- */}
                <div className="fh-furniture-group">
                    {/* --- Main chair image --- */}
                    <div className="fh-chair">
                        <img
                            src={CHAIR_IMG}
                            alt="Premium leather armchair"
                            loading="eager"
                        />
                    </div>

                    {/* --- Floor lamp --- */}
                    <div className="fh-lamp">
                        <img
                            src={LAMP_IMG}
                            alt="Modern floor lamp with shelves"
                            loading="eager"
                        />
                    </div>
                </div>

                {/* --- Thumbnail strip --- */}
                <div className="fh-thumbnails">
                    <button className="fh-thumb-arrow" onClick={handleExplore} aria-label="View products">
                        <ArrowIcon />
                    </button>

                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="fh-thumb-card"
                            onClick={handleExplore}
                            role="button"
                            tabIndex={0}
                            aria-label={`View product ${i}`}
                            onKeyDown={(e) => e.key === 'Enter' && handleExplore()}
                        >
                            <img
                                src={CHAIR_IMG}
                                alt={`Product thumbnail ${i}`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* --- Bottom orbiter (follows cursor) --- */}
                <div
                    ref={orbiterRef}
                    className="fh-bottom-orbiter"
                    style={{ left: `${orbiterX}px` }}
                    onClick={handleExplore}
                    role="button"
                    tabIndex={0}
                    aria-label="Explore collection"
                    onKeyDown={(e) => e.key === 'Enter' && handleExplore()}
                >
                    <BottomOrbiter />
                </div>

            </div>
        </section>
    );
}
