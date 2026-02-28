import './ProjectsSection.css';

const projects = [
    { image: '/images/cleaning/project-1.png', title: 'CARPENTRY WORK SERVICES', category: 'Maintain high standards with proactive Carpentry Services.' },
    { image: '/images/cleaning/project-2.png', title: 'RAILING WORK SERVICES', category: 'Ensure safety and style with our railing installations.' },
];

export default function ProjectsSection() {
    return (
        <section className="projects" id="projects">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="section-label">Featured Services</span>
                    <h2>Our Most Popular<br />Service Offerings</h2>
                    <p>Explore some of the specialized work we do for our clients.</p>
                </div>
                <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '800px', margin: '0 auto' }}>
                    {projects.map((project, i) => (
                        <div className="project-card" key={i}>
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <h3>{project.title}</h3>
                                <span>{project.category}</span>
                                <a href="#" className="project-view-btn">View Details →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
