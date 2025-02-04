import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './About.module.scss';

const About = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out'
            }
        });

        tl.fromTo(`.${styles.hero}`,
            { y: 30 },
            { y: 0, opacity: 1 }
          )
          .fromTo(`.${styles.missionSection}`,
            { y: 30 },
            { y: 0, opacity: 1 },
            '-=0.3'
          )
          .fromTo(`.${styles.valueCard}`,
            { y: 30 },
            { 
                y: 0, 
                opacity: 1,
                stagger: 0.2 
            },
            '-=0.3'
          )
          .fromTo(`.${styles.storySection}`,
            { y: 30 },
            { y: 0, opacity: 1 },
            '-=0.2'
          );
    }, []);

    return (
        <div className={styles.about}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>About Us</h1>
                    <p className={styles.subtitle}>Crafting Beauty Through Natural Skincare</p>
                </div>
            </section>

            <section className={styles.missionSection}>
                <div className={styles.container}>
                    <h2>Our Mission</h2>
                    <p>
                        We believe in the power of natural ingredients and their ability to transform your skin. 
                        Our mission is to provide premium skincare solutions that enhance your natural beauty 
                        while maintaining the highest standards of quality and sustainability.
                    </p>
                </div>
            </section>

            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <h2>Our Values</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <h3>Natural Ingredients</h3>
                            <p>We source the finest natural ingredients to create effective skincare solutions.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Sustainability</h3>
                            <p>Our commitment to the environment guides every decision we make.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Quality</h3>
                            <p>We never compromise on quality, ensuring the best results for your skin.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Innovation</h3>
                            <p>Constantly researching and developing new formulations for better results.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.storySection}>
                <div className={styles.container}>
                    <div className={styles.storyContent}>
                        <div className={styles.textContent}>
                            <h2>Our Story</h2>
                            <p>
                                Founded in 2020, our journey began with a simple belief: skincare should be 
                                effective, natural, and accessible to everyone. What started as a small 
                                collection of handcrafted formulas has grown into a comprehensive range of 
                                premium skincare products.
                            </p>
                            <p>
                                Today, we continue to innovate and expand our offerings, always staying true 
                                to our core values of quality, sustainability, and customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
