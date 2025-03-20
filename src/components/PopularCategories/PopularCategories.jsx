import React, { useState, useEffect } from 'react';
import styles from './PopularCategories.module.scss';
import category1 from '../../assets/images/Categories/sprayCategory.PNG';
import category2 from '../../assets/images/Categories/creamCategory.webp';
import category3 from '../../assets/images/Categories/oilCategory.webp';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

function PopularCategories() {
    const navigate = useNavigate();
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                y: 30,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out'
            }
        });

        tl.fromTo(`.${styles.subtitle}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(`.${styles.title}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.3')
          .fromTo(`.${styles.description}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.3')
          .fromTo(`.${styles.categoryCard}`, 
            { y: 30, opacity: 0 }, 
            { 
                y: 0, 
                opacity: 1,
                stagger: 0.2
            }, 
            '-=0.3'
          );
    }, []);

    const categories = [
        {
            id: 'spray',
            name: 'Sprays',
            description: 'Refreshing botanical formulas',
            image: category1,
            count: '7 Products'
        },
        {
            id: 'creams',
            name: 'Creams',
            description: 'Nourishing and moisturizing skin care',
            image: category2,
            count: '10 Products'
        },
        {
            id: 'oils',
            name: 'Essential Oils',
            description: 'Pure natural plant essences',
            image: category3,
            count: '8 Products'
        }
    ];

    const handleCategoryClick = (category) => {
        navigate(`/products?category=${category}`);
        window.scrollTo(0, 0);
    };

    return (
        <section className={styles.popularCategories}>
            <div className={styles.decorativeLine}></div>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.subtitle}>OUR COLLECTION</span>
                    <h2 className={styles.title}>Popular Categories</h2>
                    <p className={styles.description}>
                        Discover our carefully curated selection of premium natural skincare products
                    </p>
                </div>
                
                <div className={styles.categoriesGrid}>
                    {categories.map((category, index) => (
                        <div 
                            key={category.id}
                            className={styles.categoryCard}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            <div className={styles.imageContainer}>
                                <span className={styles.productCount}>{category.count}</span>
                                <img 
                                    src={category.image} 
                                    alt={category.name} 
                                    className={styles.categoryImage}
                                />
                            </div>
                            <div className={styles.contentOverlay}>
                                <h3 className={styles.categoryName}>{category.name}</h3>
                                <p className={styles.categoryDescription}>{category.description}</p>
                                <div className={styles.exploreLink}>
                                    Explore Collection <span className={styles.arrow}>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularCategories;