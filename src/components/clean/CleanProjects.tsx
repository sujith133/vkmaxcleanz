import { useState } from 'react';
import './CleanProjects.css';

const projectsData = [
    {
        id: 1,
        image: '/images/cleaning/project-1.png',
        title: 'Deep cleaning for a family residence',
        subtitle: 'Speaking Home Makeover',
        tags: ['Cleaning Services', 'Residential', 'Deep Clean', 'Floor Clean'],
        featured: true
    },
    {
        id: 2,
        image: '/images/cleaning/project-2.png',
        title: 'Office space deep sanitization',
        subtitle: 'Corporate Clean Solution',
        tags: ['Office Cleaning', 'Sanitization', 'Deep Clean'],
        featured: false
    },
    {
        id: 3,
        image: '/images/cleaning/project-3.png',
        title: 'Retail Store Maintenance',
        subtitle: 'Shining Shopfronts',
        tags: ['Retail Clean', 'Night Shift'],
        featured: false
    },
    {
        id: 4,
        image: '/images/cleaning/project-4.png',
        title: 'Industrial Warehouse Cleanup',
        subtitle: 'Heavy Duty Operations',
        tags: ['Industrial', 'Site Cleanup'],
        featured: false
    }
];

export default function CleanProjects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    };

    return (
        <section className="clean-projects" id="clean-projects">
            <div className="clean-projects-container">
                <div className="clean-projects-header">
                    <div>
                        <p className="clean-projects-label">Our Projects</p>
                        <h2 className="clean-projects-heading">
                            Trusted Cleaning Process<br />Designed Around You
                        </h2>
                    </div>
                    <div className="clean-projects-nav">
                        <button aria-label="Previous project" onClick={prevProject}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <button aria-label="Next project" onClick={nextProject}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="clean-projects-cards">
                    {projectsData.map((project, index) => {
                        const isFeatured = index === currentIndex;
                        return (
                            <div 
                                key={project.id} 
                                className={`clean-project-card ${isFeatured ? 'clean-project-card-large' : 'clean-project-card-small'}`}
                                style={{ order: isFeatured ? 2 : index < currentIndex ? 1 : 3 }}
                            >
                                <img src={project.image} alt={project.title} />
                                {isFeatured ? (
                                    <>
                                        <div className="clean-project-card-overlay-gradient" />
                                        <div className="clean-project-card-content">
                                            <div className="clean-project-card-tags">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="clean-project-card-tag">{tag}</span>
                                                ))}
                                            </div>
                                            <div className="clean-project-card-bottom">
                                                <div className="clean-project-card-info">
                                                    <span className="clean-project-card-subtitle">{project.subtitle}</span>
                                                    <span className="clean-project-card-title">{project.title}</span>
                                                </div>
                                                <div className="clean-project-card-arrow">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="7" y1="17" x2="17" y2="7" />
                                                        <polyline points="7 7 17 7 17 17" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="clean-project-card-overlay-simple" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
