import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import product1 from '../../assets/images/Carousel/colagenCream.webp';
import product2 from '../../assets/images/Carousel/eucaliptusOil.webp';
import product3 from '../../assets/images/Carousel/hairlossSpray.webp';
import product4 from '../../assets/images/Carousel/handCream.webp';
import product5 from '../../assets/images/Carousel/mintOil.webp';
import product6 from '../../assets/images/Carousel/venoSray.webp';

import styles from './BestSellers.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const BestSeller = () => {
  const navigate = useNavigate();

  const bestSellers = [
    {
      id: 1,
      image: product1,
      product: "Krem Bio Kolagjen",
      type: "Krem",
      price: 4.99,
    },
    {
      id: 2,
      image: product2,
      product: "Vaj Eukalipti",
      type: "Vaj",
      price: 4.99,
    },
    {
      id: 3,
      image: product3,
      product: "Spray Kundër Rënies së Flokëve",
      type: "Sprej",
      price: 7.99,
    },
    {
      id: 4,
      image: product4,
      product: "Krem për Duar",
      type: "Krem",
      price: 4.99,
    },
    {
      id: 5,
      image: product5,
      product: "Vaj Nenexhiku",
      type: "Vaj",
      price: 4.99,
    },
    {
      id: 6,
      image: product6,
      product: "Spray për shëndetin e venave",
      type: "Sprej",
      price: 4.99,
    },
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
      { x: -50 }, 
      { x: 0, opacity: 1 }
    )
    .fromTo(`.${styles.title}`, 
      { x: 50 }, 
      { x: 0, opacity: 1 }, 
      '-=0.3'
    )
    .fromTo(`.${styles.description}`, 
      { scale: 0.9 }, 
      { scale: 1, opacity: 1 }, 
      '-=0.2'
    )
    .fromTo(`.${styles.productCard}`, 
      { y: 30 }, 
      { 
        y: 0, 
        opacity: 1,
        stagger: 0.15,
        duration: 0.4,
        ease: 'power1.out'
      }, 
      '-=0.2'
    );
  }, []);

  return (
    <section className={styles.bestSeller}>
      <div className={styles.decorativeLine}></div>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>MË TË PËRZGJEDHURIT</span>
          <h2 className={styles.title}>Produktet më të shitura</h2>
          <p className={styles.description}>
            Zbuloni produktet tona më të preferuara nga klientët tanë
          </p>
        </div>

        <div className={styles.sliderContainer}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={0}
            loop={false}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              slideShadows: false,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              type: 'bullets'
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              stopOnLastSlide: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 25,
              },
              576: {
                slidesPerView: 2.0,
                spaceBetween: 27,
              },
              768: {
                slidesPerView: 2.8,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 45,
              }
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {bestSellers.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.productCard}>
                  <div className={styles.imageWrapper}>
                    <div className={styles.glowEffect}></div>
                    <img src={item.image} alt={item.product} className={styles.productImage} />
                  </div>
                  <div className={styles.productInfo}>
                    <p className={styles.productType}>{item.type}</p>
                    <h3 className={styles.productName}>{item.product}</h3>
                    <div className={styles.priceRow}>
                      <span className={styles.productPrice}>{item.price}€</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button className={styles.viewAllBtn} onClick={() => navigate('/products')}>
          Shiko të gjitha produktet
          <span className={styles.arrow}>→</span>
        </button>
      </div>
    </section>
  );
};

export default BestSeller;
