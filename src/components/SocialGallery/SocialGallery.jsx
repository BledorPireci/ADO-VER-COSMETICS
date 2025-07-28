import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './SocialGallery.module.scss';
import gallery1 from "../../assets/images/Gallery/gallery1.jpg"
import gallery2 from "../../assets/images/Gallery/gallery2.jpg"
import gallery3 from "../../assets/images/Gallery/gallery3.jpg"
import gallery4 from "../../assets/images/Gallery/gallery4.jpg"
import gallery5 from "../../assets/images/Gallery/gallery5.jpg"
import gallery6 from "../../assets/images/Gallery/gallery6.jpg"

const SocialGallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [initialSlide, setInitialSlide] = useState(0);

    const photos = [
        {
            image: gallery1,
            title: "Bukuri Natyrale",
            description: "Zbuloni fuqinë e përbërësve natyralë",
            category: "Kujdes Lëkure"
        },
        {
            image: gallery2,
            title: "Elegancë e Pastër",
            description: "Kujdes luksoz për rezultate rrezatuese",
            category: "Trajtim"
        },
        {
            image: gallery3,
            title: "Kujdes i Pakohë",
            description: "Zgjidhje të avancuara kundër plakjes",
            category: "Anti-Moshë"
        },
        {
            image: gallery4,
            title: "Prekje e Butë",
            description: "Kujdes ushqyes për lëkurë të ndjeshme",
            category: "E Ndjeshme"
        },
        {
            image: gallery5,
            title: "Shkëlqim Rrezatues",
            description: "Ndriçoni bukurinë tuaj natyrale",
            category: "Ndriçues"
        },
        {
            image: gallery6,
            title: "Hidratim i Thellë",
            description: "Terapia intensive e lagështisë",
            category: "Hidratim"
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

    const openModal = (index) => {
        setInitialSlide(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <section className={styles.socialGallery}>
            <div className={styles.decorativeLine}></div>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.subtitle}>GALERIA JONË</span>
                    <h2 className={styles.title}>Bukuri në Çdo Detaj</h2>
                    <p className={styles.description}>
                    Përjetoni artin e kujdesit premium për lëkurën përmes koleksionit tonë të kuruar
                    </p>
                </div>
                <div className={styles.grid}>
                    {photos.map((photo, index) => (
                        <div key={index} className={styles.gridItem} onClick={() => openModal(index)}>
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
                                            Zbulo Më Shumë
                                            <span className={styles.arrow}>→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    <button className={styles.closeButton} onClick={closeModal}>
                        <span>×</span>
                    </button>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <Swiper
                            modules={[Navigation, Keyboard]}
                            navigation
                            keyboard
                            initialSlide={initialSlide}
                            loop={true}
                            className={styles.swiper}
                        >
                            {photos.map((photo, index) => (
                                <SwiperSlide key={index}>
                                    <img 
                                        src={photo.image} 
                                        alt={photo.title} 
                                        className={styles.modalImage}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SocialGallery;