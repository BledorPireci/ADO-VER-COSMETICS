import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './Header.module.scss';
import Logo from '../../assets/images/Logo1.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const isDarkHeader = location.pathname === '/products' || location.pathname === '/about';

    useEffect(() => {
        gsap.fromTo('header',
            { opacity: 0 },
            { 
                opacity: 1, 
                duration: 1,
                ease: 'sine.inOut'
            }
        );

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <header className={`
            ${styles.header} 
            ${isScrolled ? styles.scrolled : ''} 
            ${isDarkHeader ? styles.darkHeader : ''}
        `}>
            <div className={styles.headerContent}>
                <div
                    className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    role="button"
                    tabIndex={0}
                >
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
                    <ul>
                        <li>
                            <Link 
                                to="/" 
                                className={location.pathname === '/' ? styles.active : ''}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/products" 
                                className={location.pathname === '/products' ? styles.active : ''}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className={location.pathname === '/about' ? styles.active : ''}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Link to="/" className={styles.logo}>
                    <img src={Logo} alt="Adover Logo" />
                </Link>
            </div>

            <div
                className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(false)}
            />
        </header>
    );
};

export default Header;