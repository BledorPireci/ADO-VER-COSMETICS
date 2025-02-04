import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import styles from './Products.module.scss';
import ProductCard from './ProductCard';
import Categories from './Categories';
import Sorting from './Sorting';
import { products } from '../data/products';

const Products = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: 'power1.out'
      }
    });

    // Simple fade in for filter section
    tl.fromTo(`.${styles.filterSection}`,
      { opacity: 0 },
      { opacity: 1 }
    )
    // Clean fade in for products
    .fromTo(`.${styles.productsGrid} > div`,
      { opacity: 0 },
      { 
        opacity: 1,
        stagger: 0.1
      }
    );
  }, [selectedCategory, sortBy]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  const displayedProducts = useMemo(() => {
    let filtered = selectedCategory === 'all'
      ? [...products]
      : products.filter(product => product.category === selectedCategory);

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }, [selectedCategory, sortBy]);

  return (
    <div className={styles.productsPage}>
      <div className={styles.productsContainer}>
        <div className={styles.filterSection}>
          <Categories 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <Sorting 
            currentSort={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        {displayedProducts.length === 0 ? (
          <div className={styles.noProducts}>
            <div className={styles.emptyStateIcon}>×</div>
            <p>No products found in this category.</p>
          </div>
        ) : (
          <div className={styles.productsGrid}>
            {displayedProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;