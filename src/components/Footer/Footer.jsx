import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styles from "./Footer.module.scss";
import footerLogo from "../../assets/images/LOGO-WHITE-PNG.png";
import pattern from "../../assets/images/PATTERN-PNG-WHITE.png";

const Footer = () => {
    const footerLinks = {
        company: {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Our Story", href: "/" },
                { name: "Press", href: "/" }
            ]
        },
        support: {
            title: "Support",
            links: [
                { name: "Contact Us", href: "/" },
                { name: "FAQ", href: "/" },
                { name: "Returns", href: "/" }
            ]
        },
        legal: {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "/" },
                { name: "Terms of Service", href: "/" },
                { name: "Cookie Policy", href: "/" }
            ]
        }
    };

    const socialLinks = [
        { 
            href: "https://facebook.com",
            label: "Facebook",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="currentColor"/>
            </svg>
        },
        { 
            href: "https://instagram.com",
            label: "Instagram",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16Z" fill="currentColor"/>
                <path d="M18.406 5.614C18.406 6.222 17.912 6.716 17.304 6.716C16.696 6.716 16.202 6.222 16.202 5.614C16.202 5.006 16.696 4.512 17.304 4.512C17.912 4.512 18.406 5.006 18.406 5.614Z" fill="currentColor"/>
            </svg>
        },
        { 
            href: "mailto:contact@example.com",
            label: "Email",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="currentColor"/>
            </svg>
        },
        { 
            href: "tel:+1234567890",
            label: "Phone",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="currentColor"/>
            </svg>
        }
    ];

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                opacity: 0,
                duration: 0.6,
                ease: 'power2.inOut'
            }
        });

        tl.fromTo(`.${styles.logoSection}`,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1 }
          )
          .fromTo(`.${styles.linksSection}`,
            { y: 20, opacity: 0 },
            { 
                y: 0,
                opacity: 1,
                stagger: 0.15
            },
            '-=0.3'
          )
          .fromTo(`.${styles.bottomSection}`,
            { y: 20, opacity: 0 },
            { 
                y: 0, 
                opacity: 1,
                ease: 'power1.out'
            },
            '-=0.2'
          );
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoSection}>
                    <img src={pattern} alt="" className={styles.pattern} aria-hidden="true" />
                    <img src={footerLogo} alt="Company logo" className={styles.logo} />
                </div>

                <div className={styles.linksSection}>
                    {Object.values(footerLinks).map((section) => (
                        <div key={section.title} className={styles.linkGroup}>
                            <h3>{section.title}</h3>
                            <ul>
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={styles.bottomSection}>
                    <div className={styles.socialLinks}>
                        {socialLinks.map((link) => (
                            <a 
                                key={link.label}
                                href={link.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <div className={styles.copyright}>
                        <p>&copy; {new Date().getFullYear()} Adover Cosmetics. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
