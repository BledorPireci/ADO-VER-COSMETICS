import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './SocialGallery.module.scss';
import gallery1 from "../../assets/images/Gallery/gallery1.jpg"
import gallery2 from "../../assets/images/Gallery/gallery2.jpg"
import gallery3 from "../../assets/images/Gallery/gallery3.jpg"
import gallery4 from "../../assets/images/Gallery/gallery4.jpg"
import gallery5 from "../../assets/images/Gallery/gallery5.jpg"
import gallery6 from "../../assets/images/Gallery/gallery6.jpg"

const SocialGallery = () => {
    const photos = [
        {
            image: gallery1,
            title: "Natural Beauty",
            description: "Discover the power of natural ingredients",
            category: "Skincare"
        },
        {
            image: gallery2,
            title: "Pure Elegance",
            description: "Luxury skincare for radiant results",
            category: "Treatment"
        },
        {
            image: gallery3,
            title: "Timeless Care",
            description: "Advanced anti-aging solutions",
            category: "Anti-Age"
        },
        {
            image: gallery4,
            title: "Gentle Touch",
            description: "Nourishing care for sensitive skin",
            category: "Sensitive"
        },
        {
            image: gallery5,
            title: "Radiant Glow",
            description: "Illuminate your natural beauty",
            category: "Brightening"
        },
        {
            image: gallery6,
            title: "Deep Hydration",
            description: "Intensive moisture therapy",
            category: "Hydration"
        }
    ];

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out'
            }
        });

        tl.fromTo(`.${styles.subtitle}`, 
            { y: 30 }, 
            { y: 0, opacity: 1 }
          )
          .fromTo(`.${styles.title}`, 
            { y: 30 }, 
            { y: 0, opacity: 1 }, 
            '-=0.3'
          )
          .fromTo(`.${styles.description}`, 
            { y: 30 }, 
            { y: 0, opacity: 1 }, 
            '-=0.3'
          )
          .fromTo(`.${styles.gridItem}`, 
            { 
                scale: 0.95,
                y: 30
            }, 
            { 
                scale: 1,
                y: 0,
                opacity: 1,
                stagger: {
                    amount: 0.8,
                    grid: [2, 3],
                    from: "center",
                    ease: "power1.inOut"
                },
                ease: "power2.out"
            }, 
            '-=0.2'
          );
    }, []);

    return (
        <section className={styles.socialGallery}>
            <div className={styles.decorativeLine}></div>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.subtitle}>OUR GALLERY</span>
                    <h2 className={styles.title}>Beauty in Every Detail</h2>
                    <p className={styles.description}>
                    Experience the artistry of premium skincare through our curated collection
                    </p>
                </div>
                <div className={styles.grid}>
                    {photos.map((photo, index) => (
                        <div key={index} className={styles.gridItem}>
                            <div className={styles.imageContainer}>
                                <img 
                                    src={photo.image} 
                                    alt={photo.title}
                                    className={styles.image}
                                    loading="lazy"
                                />
                                <div className={styles.overlay}>
                                    <span className={styles.category}>{photo.category}</span>
                                    <div className={styles.content}>
                                        <h3>{photo.title}</h3>
                                        <p>{photo.description}</p>
                                        <button className={styles.exploreButton}>
                                            Discover More
                                            <span className={styles.arrow}>→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialGallery;