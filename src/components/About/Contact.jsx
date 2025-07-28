import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './Contact.module.scss';

const Contact = () => {
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
          .fromTo(`.${styles.socialSection}`,
            { y: 30 },
            { y: 0, opacity: 1 },
            '-=0.5'
          );

        // Load TikTok embed script
        const tiktokScript = document.createElement('script');
        tiktokScript.src = 'https://www.tiktok.com/embed.js';
        tiktokScript.async = true;
        document.body.appendChild(tiktokScript);

        // Add Instagram embed script
        const instagramScript = document.createElement('script');
        instagramScript.src = '//www.instagram.com/embed.js';
        instagramScript.async = true;
        document.body.appendChild(instagramScript);

        return () => {
            document.body.removeChild(tiktokScript);
            document.body.removeChild(instagramScript);
        };
    }, []);

    return (
        <div className={styles.contact}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.preTitle}>Connect With Us</span>
                    <h1>Bashkohuni me Komunitetin tonë të Bukurisë</h1>
                    <p className={styles.subtitle}>Na ndiqni për këshilla bukurie, lajme produktesh dhe më shumë</p>
                </div>
            </section>

            <section className={styles.contactInfoSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Na Kontaktoni</h2>
                        <p>Keni pyetje? Do të na pëlqente të dëgjonim nga ju.</p>
                    </div>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <h3>Adresa</h3>
                            <p>Shuaip Spahiu</p>
                            <p>Prizren, Kosove</p>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <h3>Telefoni</h3>
                            <p><a href="tel:+38344809411">+383 44 809 411</a></p>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <h3>Email</h3>
                            <p><a href="mailto:adovercosmetics@gmail.com">adovercosmetics@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.socialSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Na Ndiqni në Rrugëtimin Tonë</h2>
                        <p>Qëndroni të lidhur me ne në rrjetet sociale</p>
                    </div>
                    <div className={styles.socialGrid}>
                        <div className={styles.socialCard}>
                            <blockquote 
                                className="tiktok-embed" 
                                cite="https://www.tiktok.com/@adovercosmetics_" 
                                data-unique-id="adovercosmetics_" 
                                data-embed-type="creator"
                                style={{ maxWidth: "780px", minWidth: "288px" }}
                            >
                                <section>
                                    <a 
                                        target="_blank" 
                                        href="https://www.tiktok.com/@adovercosmetics_?refer=creator_embed"
                                        rel="noopener noreferrer"
                                    >@adovercosmetics_</a>
                                </section>
                            </blockquote>
                        </div>

                        <div className={styles.socialCard}>
                            <div className={styles.socialContent}>
                                <div className={styles.instagramFeed}>
                                    <blockquote 
                                        className="instagram-media" 
                                        data-instgrm-permalink="https://www.instagram.com/adovercosmetics/"
                                        data-instgrm-version="14"
                                        style={{
                                            background: '#FFF',
                                            border: 0,
                                            borderRadius: '3px',
                                            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                            margin: '1px',
                                            maxWidth: '540px',
                                            minWidth: '326px',
                                            padding: 0,
                                            width: '99.375%'
                                        }}
                                    >
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
