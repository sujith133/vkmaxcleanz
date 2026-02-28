import './TeamSection.css';

const team = [
    { name: 'Sarah Johnson', role: 'Operations Manager', emoji: '👩‍💼' },
    { name: 'Michael Chen', role: 'Head of Cleaning', emoji: '👨‍🔧' },
    { name: 'Emily Davis', role: 'Quality Inspector', emoji: '👩‍🔬' },
    { name: 'James Wilson', role: 'Customer Success', emoji: '👨‍💻' },
];

export default function TeamSection() {
    return (
        <section className="team" id="team">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="section-label">Our Team</span>
                    <h2>The Skilled Hands Behind<br />Spotless Homes & Offices</h2>
                    <p>Meet our dedicated professionals who are committed to excellence.</p>
                </div>
                <div className="team-grid">
                    {team.map((member, i) => (
                        <div className="team-card" key={i}>
                            <div className="team-avatar">{member.emoji}</div>
                            <h3>{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <div className="team-social">
                                <a href="#" aria-label="LinkedIn">in</a>
                                <a href="#" aria-label="Twitter">𝕏</a>
                                <a href="#" aria-label="Email">✉</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
