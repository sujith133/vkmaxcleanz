import './BrandStory.css';

export default function BrandStory() {
    return (
        <section className="furn-story">
            <div className="furn-story-inner">
                <div className="furn-story-image">
                    <img src="/images/furniture/about_cover.webp" alt="Craftsmanship" loading="lazy" />
                </div>
                <div className="furn-story-content">
                    <span className="furn-story-label">Our Story</span>
                    <h2>Craftsmanship Meets <span>Modern Design</span></h2>
                    <p>
                        At VK Max Furnitures, every piece tells a story. Our artisans combine
                        traditional woodworking techniques with contemporary design to create
                        furniture that's both beautiful and built to last.
                    </p>
                    <p>
                        We source premium materials — solid sheesham, teak, walnut, and marble —
                        and transform them into pieces that elevate your living spaces. From concept
                        to delivery, quality is our obsession.
                    </p>
                    <div className="furn-story-highlights">
                        <div className="furn-story-highlight">
                            <span className="furn-story-num">15+</span>
                            <span>Years of Experience</span>
                        </div>
                        <div className="furn-story-highlight">
                            <span className="furn-story-num">50+</span>
                            <span>Expert Craftsmen</span>
                        </div>
                        <div className="furn-story-highlight">
                            <span className="furn-story-num">5yr</span>
                            <span>Warranty Coverage</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
