
import React, { useState, useEffect } from 'react';

const HERO_IMAGES = [
  'https://picsum.photos/seed/hero1/1920/1280',
  'https://picsum.photos/seed/hero2/1920/1280',
  'https://picsum.photos/seed/hero3/1920/1280',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[85vh] w-full flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {HERO_IMAGES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${src})`, transform: `scale(${index === currentImageIndex ? 1.05 : 1})`, transition: 'transform 7s ease-in-out, opacity 1s ease-in-out' }}
        ></div>
      ))}

      <div className="relative z-20 text-center p-6">
        <h2 className="text-xl md:text-2xl font-sans tracking-widest uppercase text-accent-light">
          Timeless by Design
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold my-4 text-white drop-shadow-lg">
          Weldorf
        </h1>
        <p className="max-w-xl mx-auto text-base md:text-lg font-sans text-gray-200 mb-8">
          Discover a world where classic elegance meets contemporary artistry. Each piece is a testament to our dedication to beauty and quality.
        </p>
        <a
          href="#collection"
          className="bg-transparent border-2 border-white text-white font-sans px-8 py-3 rounded-full hover:bg-white hover:text-heading transition-all duration-300 transform hover:scale-105"
        >
          Explore Collections
        </a>
      </div>
    </section>
  );
};

export default Hero;