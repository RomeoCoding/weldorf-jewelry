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
      const scrollAmount = current.offsetWidth * 0.8;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="collection" className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-heading font-bold">Our Collection</h2>
            <p className="mt-4 max-w-2xl mx-auto text-text font-sans">
              A selection of our most coveted pieces, each embodying the spirit of Weldorf.
            </p>
          </div>
        </AnimatedSection>
        <div className="relative">
            <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow-md hidden lg:block transition-all">
                <ChevronLeft className="text-heading" />
            </button>
            <div 
              ref={scrollContainerRef}
              className="flex space-x-8 overflow-x-auto pb-8 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }}
            >
              {FEATURED_PRODUCTS.map((product, index) => (
                <div key={product.id} className="flex-shrink-0 w-4/5 sm:w-2/5 lg:w-1/4" style={{ scrollSnapAlign: 'start' }}>
                  <AnimatedSection delay={index * 100}>
                      <ProductCard product={product} />
                  </AnimatedSection>
                </div>
              ))}
            </div>
             <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow-md hidden lg:block transition-all">
                <ChevronRight className="text-heading" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;