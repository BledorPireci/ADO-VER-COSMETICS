import React, { useState, useRef } from 'react';
import styles from './ImageZoom.module.scss';

const ImageZoom = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  return (
    <div 
      className={styles.imageZoomContainer}
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
      ref={imageRef}
    >
      <img 
        src={src} 
        alt={alt} 
        className={styles.baseImage}
      />
      {isZoomed && (
        <div 
          className={styles.zoomedImage}
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${position.x}% ${position.y}%`
          }}
        />
      )}
      {isZoomed && (
        <div className={styles.zoomLens} 
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`
          }}
        />
      )}
    </div>
  );
};

export default ImageZoom;