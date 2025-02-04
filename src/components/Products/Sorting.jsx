import React, { useState, useRef, useEffect } from 'react';
import styles from './Sorting.module.scss';
import { sortOptions } from '../Data/products';

const Sorting = ({ currentSort, onSortChange }) => {
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

  const handleOptionClick = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  const getCurrentLabel = () => {
    return sortOptions.find(option => option.value === currentSort)?.label;
  };

  return (
    <div className={styles.sortingContainer} ref={dropdownRef}>
      <div 
        className={`${styles.customSelect} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.selectedOption}>{getCurrentLabel()}</span>
        <span className={styles.arrow}>↓</span>
      </div>
      {isOpen && (
        <div className={styles.optionsContainer}>
          {sortOptions.map(option => (
            <div
              key={option.value}
              className={`${styles.option} ${currentSort === option.value ? styles.selected : ''}`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sorting;