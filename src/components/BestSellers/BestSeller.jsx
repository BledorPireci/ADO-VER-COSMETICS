import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import categoryImg from '../../assets/images/Categories/category1.png';
import styles from './BestSellers.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const BestSeller = () => {
  const navigate = useNavigate();

  const bestSellers = [
    {
      id: 1,
      image: categoryImg,
      product: "Face Cream",
      type: "Anti-Age",
      price: 29.99,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      image: categoryImg,
      product: "Night Cream",
      type: "Moisturizing",
      price: 34.99,
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      image: categoryImg,
      product: "Day Cream",
      type: "UV Protection",
      price: 24.99,
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      image: categoryImg,
      product: "Face Serum",
      type: "Brightening",
      price: 39.99,
      rating: 4.9,
      reviews: 201
    },
    {
      id: 5,
      image: categoryImg,
      product: "Hydrating Cream",
      type: "Brightening",
      price: 35.99,
      rating: 4.8,
      reviews: 167
    },
    {
      id: 6,
      image: categoryImg,
      product: "Retinol Serum",
      type: "Brightening",
      price: 69.99,
      rating: 4.9,
      reviews: 143
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
            slidesPerView={'auto'}
            initialSlide={1}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 1.2,
                spaceBetween: 20,
                centeredSlides: true,
              },
              575: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                centeredSlides: true,
              },
              648: {
                slidesPerView: 1.7,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: true,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: true,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides: false,
              }
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
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
                    <div className={styles.rating}>
                      <span className={styles.stars}>{'★'.repeat(Math.floor(item.rating))}</span>
                      <span className={styles.ratingNumber}>{item.rating}</span>
                      <span className={styles.reviews}>({item.reviews})</span>
                    </div>
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
