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
                    const headerOffset = 80; 
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
                        <h1>Arti i Bukurisë Natyrale</h1>
                        <div className={styles.subtitleWrapper}>
                            <span className={styles.line}></span>
                            <p className={styles.subtitle}>Krijimi i zgjidhjeve premium për kujdesin e lëkurës</p>
                            <span className={styles.line}></span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.missionSection}>
                <div className={styles.container}>
                    <div className={styles.missionContent}>
                        <div className={styles.missionText}>
                            <span className={styles.sectionLabel}>Qëllimi Ynë</span>
                            <h2>Misioni Ynë</h2>
                            <div className={styles.separator}></div>
                            <p>
                                Ne besojmë në fuqinë e përbërësve natyralë dhe aftësinë e tyre për të transformuar lëkurën tuaj.
                                Misioni ynë është të ofrojmë zgjidhje premium për kujdesin e lëkurës që theksojnë bukurinë tuaj natyrale,
                                duke ruajtur standardet më të larta të cilësisë dhe qëndrueshmërisë.
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
                    <span className={styles.sectionLabel}>Për Çfarë Qëndrojmë</span>
                    <h2>Vlerat Tona</h2>
                    <div className={styles.separator}></div>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <h3>Përbërës Natyralë</h3>
                            <p>Përdorim përbërësit më të mirë natyralë për të krijuar zgjidhje efektive për kujdesin e lëkurës.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Qëndrueshmëri</h3>
                            <p>Përkushtimi ynë ndaj mjedisit udhëheq çdo vendim që marrim.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Cilësi</h3>
                            <p>Nuk bëjmë kurrë kompromis me cilësinë, duke siguruar rezultatet më të mira për lëkurën tuaj.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Inovacion</h3>
                            <p>Kërkojmë dhe zhvillojmë vazhdimisht formula të reja për rezultate më të mira.</p>
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
                            <span className={styles.sectionLabel}>Rruga Jonë</span>
                            <h2>Historia Jonë</h2>
                            <div className={styles.separator}></div>
                            <p>
                                E themeluar në vitin 2020, rruga jonë filloi me një besim të thjeshtë: kujdesi për lëkurën duhet të jetë
                                efektiv, natyral dhe i arritshëm për të gjithë. Ajo që filloi si një koleksion i vogël formulash të punuara me dorë
                                është shndërruar në një gamë të plotë produktesh premium për kujdesin e lëkurës.
                            </p>
                            <p>
                                Sot, ne vazhdojmë të inovojmë dhe të zgjerojmë ofertat tona, gjithmonë duke qëndruar besnikë vlerave tona thelbësore:
                                cilësi, qëndrueshmëri dhe kënaqësi të klientit.
                            </p>
                            <div className={styles.yearStats}>
                                <div className={styles.stat}>
                                    <span>2020</span>
                                    <p>Themeluar</p>
                                </div>
                                <div className={styles.stat}>
                                    <span>100%</span>
                                    <p>Natyrale</p>
                                </div>
                                <div className={styles.stat}>
                                    <span>25+</span>
                                    <p>Produkte</p>
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
