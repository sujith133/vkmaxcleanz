import './BlogSection.css';

const posts = [
    {
        image: '/images/cleaning/blog-1.png',
        date: 'Feb 15, 2026',
        title: 'Top 10 Eco-Friendly Cleaning Products for Your Home',
        excerpt: 'Discover the best eco-friendly cleaning products that are effective, affordable, and safe for your family and the environment.',
    },
    {
        image: '/images/cleaning/blog-2.png',
        date: 'Feb 10, 2026',
        title: 'The Ultimate Guide to Organizing & Decluttering',
        excerpt: 'Learn expert tips and tricks for organizing every room in your home, from kitchen cabinets to bedroom closets.',
    },
    {
        image: '/images/cleaning/blog-3.png',
        date: 'Feb 5, 2026',
        title: 'Professional Carpet Cleaning: Why It Matters',
        excerpt: 'Regular carpet cleaning extends the life of your carpets and improves indoor air quality. Here\'s what you need to know.',
    },
];

export default function BlogSection() {
    return (
        <section className="blog" id="blog">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="section-label">Our Blog</span>
                    <h2>Expert Tips and Insights to Keep<br />Your Space Spotless</h2>
                    <p>Stay informed with the latest cleaning tips, tricks, and industry insights.</p>
                </div>
                <div className="blog-grid">
                    {posts.map((post, i) => (
                        <article className="blog-card" key={i}>
                            <div className="blog-card-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-card-content">
                                <span className="blog-date">📅 {post.date}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <a href="#" className="blog-read-more">Read More →</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
