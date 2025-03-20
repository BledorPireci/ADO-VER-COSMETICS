import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import product1 from '../../assets/images/Carousel/colagenCream.PNG';
import product2 from '../../assets/images/Carousel/eucaliptusOil.webp';
import product3 from '../../assets/images/Carousel/hairlossSpray.PNG';
import product4 from '../../assets/images/Carousel/handCream.PNG';
import product5 from '../../assets/images/Carousel/mintOil.webp';
import product6 from '../../assets/images/Carousel/venoSray.PNG';

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
      product: "Bio Collagen Cream",
      type: "Cream",
      price: 29.99,
    },
    {
      id: 2,
      image: product2,
      product: "Eucaliptus Oil",
      type: "Oil",
      price: 34.99,
    },
    {
      id: 3,
      image: product3,
      product: "Hair Loss Spray",
      type: "Spray",
      price: 24.99,
    },
    {
      id: 4,
      image: product4,
      product: "Hand Cream",
      type: "Cream",
      price: 39.99,
    },
    {
      id: 5,
      image: product5,
      product: "Mint Oil",
      type: "Oil",
      price: 35.99,
    },
    {
      id: 6,
      image: product6,
      product: "Veno Spray",
      type: "Spray",
      price: 69.99,
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
          <span className={styles.subtitle}>TRENDING NOW</span>
          <h2 className={styles.title}>Our Best Sellers</h2>
          <p className={styles.description}>
            Discover our most popular skincare products loved by our customers
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
                      <span className={styles.productPrice}>${item.price}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button className={styles.viewAllBtn} onClick={() => navigate('/products')}>
          View All Products
          <span className={styles.arrow}>→</span>
        </button>
      </div>
    </section>
  );
};

export default BestSeller;
