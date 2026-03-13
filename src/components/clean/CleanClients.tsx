import './CleanClients.css';

const clients = [
    {
        name: 'Apex Industries',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80',
    },
    {
        name: 'Global Tech',
        logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop&q=80',
    },
    {
        name: 'Sunrise Estates',
        logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop&q=80',
    },
    {
        name: 'Pinnacle Group',
        logo: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?w=200&h=100&fit=crop&q=80',
    },
    {
        name: 'Nexus Corp',
        logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=200&h=100&fit=crop&q=80',
    },
    {
        name: 'Zenith Holdings',
        logo: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=200&h=100&fit=crop&q=80',
    },
];

export default function CleanClients() {
    return (
        <section className="clean-clients" id="clean-clients">
            <div className="clean-clients-container">
                <div className="clean-clients-header">
                    <p className="clean-clients-label">Our Clients</p>
                    <h2 className="clean-clients-heading">
                        Trusted by the Best
                    </h2>
                    <p className="clean-clients-subheading">
                        We are proud to serve these amazing companies and individuals.
                    </p>
                </div>

                <div className="clean-clients-grid">
                    {clients.map((client, i) => (
                        <div className="clean-client-card" key={i}>
                            <div className="clean-client-logo-wrap">
                                <img src={client.logo} alt={client.name} loading="lazy" />
                            </div>
                            <h4 className="clean-client-name">{client.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
