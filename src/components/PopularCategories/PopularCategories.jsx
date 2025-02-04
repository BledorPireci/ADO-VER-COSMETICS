import React, { useState, useEffect } from 'react';
import styles from './PopularCategories.module.scss';
import category1 from '../../assets/images/Categories/category1.png';
import category2 from '../../assets/images/Categories/category2.png';
import category3 from '../../assets/images/Categories/category3.png';
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
            id: 'face-cream',
            name: 'Face Cream',
            description: 'Nourishing care for radiant skin',
            image: category1,
            count: '12 Products'
        },
        {
            id: 'hand-cream',
            name: 'Hand Cream',
            description: 'Luxurious protection for your hands',
            image: category2,
            count: '8 Products'
        },
        {
            id: 'face-oils',
            name: 'Face Oils',
            description: 'Natural glow enhancing oils',
            image: category3,
            count: '10 Products'
        }
    ];

    const handleCategoryClick = (category) => {
        navigate(`/products?category=${category}`);
    };

    return (
        <section className={styles.popularCategories}>
            <div className={styles.decorativeLine}></div>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.subtitle}>OUR COLLECTION</span>
                    <h2 className={styles.title}>Popular Categories</h2>
                    <p className={styles.description}>
                        Discover our carefully curated selection of premium skincare products
                    </p>
                </div>
                
                <div className={styles.categoriesGrid}>
                    {categories.map((category, index) => (
                        <div 
                            key={category.id}
                            className={`${styles.categoryCard} ${hoveredCard === index ? styles.hovered : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={styles.imageContainer}>
                                <div className={styles.glowEffect}></div>
                                <div className={styles.shimmerEffect}></div>
                                <img src={category.image} alt={category.name} />
                                <div className={styles.overlay}>
                                    <div className={styles.content}>
                                        <div className={styles.topContent}>
                                            <span className={styles.productCount}>{category.count}</span>
                                            <div className={styles.decorativeLine}></div>
                                        </div>
                                        <div className={styles.mainContent}>
                                            <h3>{category.name}</h3>
                                            <p>{category.description}</p>
                                            <span className={styles.exploreButton}>
                                                Explore Collection
                                                <span className={styles.arrow}>→</span>
                                            </span>
                                        </div>
                                    </div>
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