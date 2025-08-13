import React, { useRef } from 'react';
import { FEATURED_PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import AnimatedSection from './AnimatedSection';
import { ChevronLeft, ChevronRight } from 'react-feather';

const FeaturedCollection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.offsetWidth * 0.9;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="collection" className="py-24 md:py-32 bg-accent-light relative">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20 px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-heading font-bold">Our Collection</h2>
            <p className="mt-6 max-w-2xl mx-auto text-text font-sans text-lg">
              A selection of our most coveted pieces, each embodying the spirit of Weldorf.
            </p>
          </div>
        </AnimatedSection>
        <div className="relative">
            <button 
              onClick={() => scroll('left')} 
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg hidden lg:block transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll left"
            >
                <ChevronLeft className="text-heading" size={32} />
            </button>
            <div 
              ref={scrollContainerRef}
              className="flex space-x-6 md:space-x-8 overflow-x-auto pb-8 scroll-smooth px-6 md:px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }}
            >
              {FEATURED_PRODUCTS.map((product, index) => (
                <div key={product.id} className="flex-shrink-0 w-4/5 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5" style={{ scrollSnapAlign: 'start' }}>
                  <AnimatedSection delay={index * 100}>
                      <ProductCard product={product} />
                  </AnimatedSection>
                </div>
              ))}
            </div>
             <button 
              onClick={() => scroll('right')} 
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg hidden lg:block transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll right"
            >
                <ChevronRight className="text-heading" size={32} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;