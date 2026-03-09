import { useNavigate } from 'react-router-dom';
import { categories } from '../../data/furnitureProductsData';
import './CategoriesSection.css';

export default function CategoriesSection() {
    const navigate = useNavigate();

    return (
        <section className="furn-categories">
            <div className="furn-categories-inner">
                <div className="furn-categories-header">
                    <h2>shop by <span>category</span></h2>
                    <p>Find the perfect pieces for every space in your home</p>
                </div>

                <div className="furn-categories-grid">
                    {categories.map((cat, i) => (
                        <div
                            className="furn-category-card"
                            key={i}
                            onClick={() => navigate(`/furnitures/products?category=${cat.slug}`)}
                        >
                            <div className="furn-category-img">
                                <img src={cat.image} alt={cat.name} loading="lazy" />
                            </div>
                            <div className="furn-category-info">
                                <h3>{cat.name}</h3>
                                <span>{cat.count} Items →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
