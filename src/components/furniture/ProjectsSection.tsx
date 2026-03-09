import { useState } from 'react';
import './ProjectsSection.css';

const projects = [
    {
        id: '01',
        title: 'Home & Residential Interior',
        image: '/images/furniture/project_home.webp',
        description: 'Complete home furnishing solutions — from living room centerpieces to bedroom essentials, curated for modern Indian homes.',
        details: ['Living room sets', 'Bedroom furniture', 'Modular kitchens', 'Custom wardrobes'],
    },
    {
        id: '02',
        title: 'Luxury Office Interior',
        image: '/images/furniture/project_office.webp',
        description: 'Executive office furniture that blends professionalism with comfort. Desks, chairs, and storage designed for productivity.',
        details: ['Executive desks', 'Ergonomic chairs', 'Conference tables', 'Reception counters'],
    },
    {
        id: '03',
        title: 'Café & Restaurant Setup',
        image: '/images/furniture/project_cafe.webp',
        description: 'Stylish yet durable furniture for cafés, restaurants, and hospitality spaces. Built to withstand commercial use.',
        details: ['Café tables & chairs', 'Bar stools', 'Outdoor dining sets', 'Booth seating'],
    },
    {
        id: '04',
        title: 'Custom & Bespoke Furniture',
        image: '/images/furniture/project_custom.webp',
        description: 'Made-to-order furniture crafted to your exact specifications — size, material, finish, and design.',
        details: ['Custom dimensions', 'Material selection', 'Finish options', 'Design consultation'],
    },
];

export default function ProjectsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="furn-projects">
            <div className="furn-projects-inner">
                <div className="furn-projects-header">
                    <span className="furn-projects-label">Portfolio</span>
                    <h2>our <span>projects</span></h2>
                </div>

                <div className="furn-projects-content">
                    <div className="furn-projects-image">
                        <img
                            src={projects[activeIndex].image}
                            alt={projects[activeIndex].title}
                            key={activeIndex}
                        />
                        <div className="furn-projects-image-badge">
                            {projects[activeIndex].details.map((d, i) => (
                                <span key={i}>{d}</span>
                            ))}
                        </div>
                    </div>

                    <div className="furn-projects-accordion">
                        {projects.map((project, i) => (
                            <div
                                className={`furn-accordion-item ${activeIndex === i ? 'active' : ''}`}
                                key={i}
                                onClick={() => setActiveIndex(i)}
                            >
                                <div className="furn-accordion-header">
                                    <span className="furn-accordion-num">{project.id}</span>
                                    <h3>{project.title}</h3>
                                    <span className="furn-accordion-arrow">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                {activeIndex === i && (
                                    <div className="furn-accordion-body">
                                        <p>{project.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
