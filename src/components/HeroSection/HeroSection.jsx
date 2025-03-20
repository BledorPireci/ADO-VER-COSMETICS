import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import styles from './HeroSection.module.scss'
import Gallery1 from "../../assets/images/Gallery/gallery1.jpg"
import Gallery2 from "../../assets/images/Gallery/gallery2.jpg"
import Gallery3 from "../../assets/images/Gallery/gallery3.jpg"

const HeroSection = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [scrollPosition, setScrollPosition] = useState(0)
    const slides = [
        {
            image: Gallery1,
            title: "DISCOVER RADIANCE",
            subtitle: "NEW COLLECTION 2024",
            description: "Experience the power of natural beauty"
        },
        {
            image: Gallery2,
            title: "TIMELESS BEAUTY",
            subtitle: "LUXURY SKINCARE",
            description: "Transform your skincare routine"
        },
        {
            image: Gallery3,
            title: "PURE ELEGANCE",
            subtitle: "PREMIUM CARE",
            description: "Reveal your inner glow"
        }
    ]

    useEffect(() => {
        gsap.fromTo(`.${styles.hero}`,
            { opacity: 0 },
            { 
                opacity: 1,
                duration: 1,
                ease: 'sine.inOut'
            }
        );

        setActiveSlide(0)
        setIsPlaying(true)
        
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length)
        }, 4000)

        return () => {
            clearInterval(timer)
            setIsPlaying(false)
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
            setScrollPosition(scrollPercent)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleSlideClick = (index) => {
        setActiveSlide(index)
        setIsPlaying(true)
    }

    return (
        <section className={styles.hero}>
            <div className={styles.slideshow}>
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`${styles.slide} ${index === activeSlide ? styles.active : ''}`}
                    >
                        <div className={styles.backgroundImage}>
                            <img src={slide.image} alt="Beauty" />
                        </div>
                        
                        <div className={styles.content}>
                            <div className={styles.textContent}>
                                <span className={styles.subtitle}>{slide.subtitle}</span>
                                <h1 className={styles.title}>{slide.title}</h1>
                                <p className={styles.description}>{slide.description}</p>
                                <button className={styles.cta}>Discover More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.controls}>
                <div className={styles.slideIndicators}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${index === activeSlide ? styles.active : ''}`}
                            onClick={() => handleSlideClick(index)}
                        >
                            <span 
                                className={`${styles.indicatorProgress} ${
                                    index === activeSlide && isPlaying ? styles.animate : ''
                                }`}
                            ></span>
                        </button>
                    ))}
                </div>
                
                <div className={styles.slideCounter}>
                    <span className={styles.current}>0{activeSlide + 1}</span>
                    <span className={styles.separator}></span>
                    <span className={styles.total}>0{slides.length}</span>
                </div>
            </div>

            <div className={`${styles.scrollPrompt} ${styles.hideOnMobile}`}>
                <span>Scroll</span>
                <div className={styles.scrollLine}>
                    <div 
                        className={styles.scrollDot} 
                        style={{ 
                            transform: `translateY(${scrollPosition * 40}px)`,
                            animation: 'none'
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
