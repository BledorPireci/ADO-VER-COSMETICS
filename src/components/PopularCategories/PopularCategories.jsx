import React, { useState, useEffect } from 'react';
import styles from './PopularCategories.module.scss';
import sprayCategory from '../../assets/images/Categories/sprayCategory.webp';
import creamCategory from '../../assets/images/Categories/creamCategory.webp';
import oilCategory from '../../assets/images/Categories/oilCategory.webp';
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
            id: 'Kremrat',
            name: 'Kremrat',
            description: 'Kremra natyralë për kujdesin e lëkurës',
            image: creamCategory,
            count: '10 produkte'
        },
        {
            id: 'Vajrat',
            name: 'Vajrat',
            description: 'Vajra esencialë të pastër natyralë',
            image: oilCategory,
            count: '8 produkte'
        },
        {
            id: 'Sprej',
            name: 'Sprej',
            description: 'Sprej natyralë për përdorime të ndryshme',
            image: sprayCategory,
            count: '7 produkte'
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
                    <span className={styles.subtitle}>KOLEKSIONI YNË</span>
                    <h2 className={styles.title}>Kategoritë Popullore</h2>
                    <p className={styles.description}>
                        Zbuloni përzgjedhjen tonë të kujdesshme të produkteve natyrale të kujdesit për lëkurën
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
                                    Shiko Koleksionin <span className={styles.arrow}>→</span>
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