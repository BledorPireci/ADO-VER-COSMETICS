import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './About.module.scss';
import about1 from '../../assets/images/Gallery/about-1.jpg';
import about2 from '../../assets/images/Gallery/about-2.jpg';
import about3 from '../../assets/images/Gallery/about-3.jpg';

const About = () => {
    const storyRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            }
        });

        tl.fromTo(`.${styles.hero}`,
            { y: 30 },
            { y: 0, opacity: 1 }
          )
          .fromTo(`.${styles.heroImage}`,
            { scale: 1.1 },
            { scale: 1, opacity: 1 },
            '-=0.5'
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

        // Modified scroll handling
        if (window.location.hash === '#story') {
            setTimeout(() => {
                const storySection = storyRef.current;
                if (storySection) {
                    const headerOffset = 80; // Adjust this value based on your header height
                    const elementPosition = storySection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 1000);
        }
    }, []);

    return (
        <div className={styles.about}>
            <section className={styles.hero}>
                <div className={styles.heroImage}>
                    <img src={about1} alt="Natural skincare ingredients" />
                    <div className={styles.overlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className={styles.textWrapper}>
                        <span className={styles.preTitle}>Est. 2020</span>
                        <h1>The Art of Natural Beauty</h1>
                        <div className={styles.subtitleWrapper}>
                            <span className={styles.line}></span>
                            <p className={styles.subtitle}>Crafting Premium Skincare Solutions</p>
                            <span className={styles.line}></span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.missionSection}>
                <div className={styles.container}>
                    <div className={styles.missionContent}>
                        <div className={styles.missionText}>
                            <span className={styles.sectionLabel}>Our Purpose</span>
                            <h2>Our Mission</h2>
                            <div className={styles.separator}></div>
                            <p>
                                We believe in the power of natural ingredients and their ability to transform your skin. 
                                Our mission is to provide premium skincare solutions that enhance your natural beauty 
                                while maintaining the highest standards of quality and sustainability.
                            </p>
                        </div>
                        <div className={styles.missionImage}>
                            <img src={about2} alt="Our mission" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <span className={styles.sectionLabel}>What We Stand For</span>
                    <h2>Our Values</h2>
                    <div className={styles.separator}></div>
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

            <section 
                ref={storyRef} 
                className={styles.storySection} 
                id="story"
            >
                <div className={styles.container}>
                    <div className={styles.storyContent}>
                        <div className={styles.storyImage}>
                            <img src={about3} alt="Our story" />
                            <div className={styles.imageAccent}></div>
                        </div>
                        <div className={styles.textContent}>
                            <span className={styles.sectionLabel}>Our Journey</span>
                            <h2>Our Story</h2>
                            <div className={styles.separator}></div>
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
                            <div className={styles.yearStats}>
                                <div className={styles.stat}>
                                    <span>2020</span>
                                    <p>Founded</p>
                                </div>
                                <div className={styles.stat}>
                                    <span>100%</span>
                                    <p>Natural</p>
                                </div>
                                <div className={styles.stat}>
                                    <span>25+</span>
                                    <p>Products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
