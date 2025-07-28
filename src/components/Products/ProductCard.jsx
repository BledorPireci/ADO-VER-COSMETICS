import React, { useState, useEffect } from 'react';
import styles from './ProductCard.module.scss';
import { FiX } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <div className={styles.card} onClick={() => setIsModalOpen(true)}>
        <div className={styles.productImage}>
          <img src={product.image} alt={product.name} />
          {product.badge && (
            <span className={styles.badge}>{product.badge}</span>
          )}
        </div>
        
        <div className={styles.contentWrapper}>
          <span className={styles.category}>{product.category}</span>
          <h3 className={styles.name}>{product.name}</h3>
          <span className={styles.price}>{product.price}€</span>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button 
              className={styles.closeModal}
              onClick={() => setIsModalOpen(false)}
            >
              <FiX size={24} />
            </button>
            
            <div className={styles.modalImage}>
              <img src={product.image} alt={product.name} />
            </div>
            
            <div className={styles.modalDetails}>
              <span className={styles.category}>{product.category}</span>
              <h2 className={styles.name}>{product.name}</h2>
              <p className={styles.description}>{product.description}</p>
              <span className={styles.price}>{product.price}€</span>
              
              <div className={styles.ingredients}>
                <h4>Përbërësit Kryesorë</h4>
                <ul>
                  {product.ingredients?.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;