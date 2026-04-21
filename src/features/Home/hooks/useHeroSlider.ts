import { useState, useEffect } from 'react';

export const useHeroSlider = (images: string[], intervalMs: number = 5000) => {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    // Eager loading silente en RAM para evitar flickers
    const preloadImages = () => {
      images.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
      });
    };
    preloadImages();
  }, [images]);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images, intervalMs]);

  return heroIndex;
};
