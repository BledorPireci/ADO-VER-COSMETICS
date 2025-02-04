import React, { useState, useRef, useEffect } from 'react';
import styles from './Categories.module.scss';
import { categories } from '../ProductData/products';

const Categories = ({ selectedCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCurrentCategory = () => {
    return categories.find(cat => cat.id === selectedCategory)?.name || 'All Categories';
  };

  return (
    <div className={styles.categoriesContainer} ref={dropdownRef}>
      <div 
        className={`${styles.customSelect} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.selectedOption}>{getCurrentCategory()}</span>
        <span className={styles.arrow}>↓</span>
      </div>
      {isOpen && (
        <div className={styles.optionsContainer}>
          {categories.map(category => (
            <div
              key={category.id}
              className={`${styles.option} ${selectedCategory === category.id ? styles.selected : ''}`}
              onClick={() => {
                onCategoryChange(category.id);
                setIsOpen(false);
              }}
            >
              {category.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;