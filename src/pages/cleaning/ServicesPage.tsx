import { useState, useEffect } from 'react';
import {
    getCategories,
    getSubcategories,
    getServices,
    getServiceImageUrl,
    getCategoryImageUrl,
    getSubcategoryImageUrl,
    categoryIcons,
    type Service,
} from '../../data/servicesData';
import BookingModal from './BookingModal';
import './ServicesPage.css';

type ViewState =
    | { level: 'categories' }
    | { level: 'subcategories'; category: string }
    | { level: 'services'; category: string; subcategory: string };

export default function ServicesPage() {
    const [view, setView] = useState<ViewState>({ level: 'categories' });
    const [animating, setAnimating] = useState(false);
    const [bookingService, setBookingService] = useState<Service | null>(null);

    // Scroll to top on view change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [view]);

    const transitionTo = (next: ViewState) => {
        setAnimating(true);
        setTimeout(() => {
            setView(next);
            setAnimating(false);
        }, 250);
    };

    const categories = getCategories();

    return (
        <main className="sp-page">
            {/* Hero Banner */}
            <section className="sp-hero">
                <div className="sp-hero-overlay" />
                <div className="sp-hero-content">
                    <span className="sp-hero-label">What we offer</span>
                    <h1>Our Services</h1>
                    <p>Browse our comprehensive range of professional home services tailored for you.</p>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="sp-breadcrumb-bar">
                <div className="sp-breadcrumb-inner">
                    <button
                        className={`sp-crumb ${view.level === 'categories' ? 'active' : ''}`}
                        onClick={() => transitionTo({ level: 'categories' })}
                    >
                        All Services
                    </button>
                    {(view.level === 'subcategories' || view.level === 'services') && (
                        <>
                            <span className="sp-crumb-sep">
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                                    <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <button
                                className={`sp-crumb ${view.level === 'subcategories' ? 'active' : ''}`}
                                onClick={() => transitionTo({ level: 'subcategories', category: view.category })}
                            >
                                {view.category}
                            </button>
                        </>
                    )}
                    {view.level === 'services' && (
                        <>
                            <span className="sp-crumb-sep">
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                                    <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="sp-crumb active">{view.subcategory}</span>
                        </>
                    )}
                </div>
            </div>

            {/* Content */}
            <section className={`sp-content ${animating ? 'sp-fade-out' : 'sp-fade-in'}`}>
                <div className="sp-content-inner">
                    {/* ── CATEGORIES VIEW ── */}
                    {view.level === 'categories' && (
                        <>
                            <div className="sp-section-header">
                                <h2>Service Categories</h2>
                                <p>Choose a category to explore our services</p>
                            </div>
                            <div className="sp-grid sp-grid-3">
                                {categories.map((cat) => (
                                    <CategoryCard
                                        key={cat.name}
                                        cat={cat}
                                        onClick={() => transitionTo({ level: 'subcategories', category: cat.name })}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {/* ── SUBCATEGORIES VIEW ── */}
                    {view.level === 'subcategories' && (
                        <>
                            <div className="sp-section-header">
                                <div className="sp-section-icon">{categoryIcons[view.category] || '📦'}</div>
                                <h2>{view.category}</h2>
                                <p>Select a subcategory to see available services</p>
                            </div>
                            <div className="sp-grid sp-grid-3">
                                {getSubcategories(view.category).map((sub) => (
                                    <SubcategoryCard
                                        key={sub.name}
                                        sub={sub}
                                        category={view.category}
                                        onClick={() =>
                                            transitionTo({
                                                level: 'services',
                                                category: view.category,
                                                subcategory: sub.name,
                                            })
                                        }
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {/* ── SERVICES VIEW ── */}
                    {view.level === 'services' && (
                        <>
                            <div className="sp-section-header">
                                <div className="sp-section-icon">{categoryIcons[view.category] || '📦'}</div>
                                <h2>{view.subcategory}</h2>
                                <p>in {view.category}</p>
                            </div>
                            <div className="sp-services-list">
                                {getServices(view.category, view.subcategory).map((service: Service) => (
                                    <ServiceCard
                                        key={service.id}
                                        service={service}
                                        onBook={() => setBookingService(service)}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Booking Modal */}
            {bookingService && (
                <BookingModal
                    service={bookingService}
                    onClose={() => setBookingService(null)}
                />
            )}
        </main>
    );
}

/* ── Category Card with Image ── */
function CategoryCard({ cat, onClick }: {
    cat: { name: string; count: number; icon: string; description: string };
    onClick: () => void;
}) {
    const [imgError, setImgError] = useState(false);
    const imgUrl = getCategoryImageUrl(cat.name);

    return (
        <button className="sp-card sp-cat-card sp-card-with-img" onClick={onClick}>
            <div className="sp-card-img-wrap">
                {!imgError && imgUrl ? (
                    <img
                        src={imgUrl}
                        alt={cat.name}
                        className="sp-card-img"
                        onError={() => setImgError(true)}
                        loading="lazy"
                    />
                ) : (
                    <div className="sp-card-img-placeholder">
                        <span>{cat.icon}</span>
                    </div>
                )}
            </div>
            <div className="sp-card-body">
                <h3>{cat.name}</h3>
                <p className="sp-cat-desc">{cat.description}</p>
                <div className="sp-card-footer">
                    <span className="sp-cat-count">{cat.count} service{cat.count > 1 ? 's' : ''}</span>
                    <span className="sp-card-arrow">→</span>
                </div>
            </div>
        </button>
    );
}

/* ── Subcategory Card with Image ── */
function SubcategoryCard({ sub, category, onClick }: {
    sub: { name: string; count: number };
    category: string;
    onClick: () => void;
}) {
    const [imgError, setImgError] = useState(false);
    const imgUrl = getSubcategoryImageUrl(category, sub.name);

    return (
        <button className="sp-card sp-sub-card sp-card-with-img" onClick={onClick}>
            <div className="sp-card-img-wrap">
                {!imgError && imgUrl ? (
                    <img
                        src={imgUrl}
                        alt={sub.name}
                        className="sp-card-img"
                        onError={() => setImgError(true)}
                        loading="lazy"
                    />
                ) : (
                    <div className="sp-card-img-placeholder">
                        <span>{categoryIcons[category] || '📦'}</span>
                    </div>
                )}
            </div>
            <div className="sp-card-body">
                <h3>{sub.name}</h3>
                <div className="sp-card-footer">
                    <span className="sp-sub-count">{sub.count} service{sub.count > 1 ? 's' : ''}</span>
                    <span className="sp-card-arrow">→</span>
                </div>
            </div>
        </button>
    );
}

/* ── Service Card ── */
function ServiceCard({ service, onBook }: { service: Service; onBook: () => void }) {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="sp-service-card">
            <div className="sp-service-img-wrap">
                {!imgError ? (
                    <img
                        src={getServiceImageUrl(service.service_name)}
                        alt={service.service_name}
                        className="sp-service-img"
                        onError={() => setImgError(true)}
                        loading="lazy"
                    />
                ) : (
                    <div className="sp-service-img-placeholder">
                        <span>{categoryIcons[service.category] || '✨'}</span>
                    </div>
                )}
            </div>
            <div className="sp-service-info">
                <h3>{service.service_name}</h3>
                <p>{service.detailed_description}</p>
                <button className="sp-service-book-btn" onClick={onBook}>
                    Book Now
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
