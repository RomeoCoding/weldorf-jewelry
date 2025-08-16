import React from 'react';
import { FEATURED_PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import AnimatedSection from './AnimatedSection';

const FeaturedCollection: React.FC = () => {
  return (
    <section id="collection" className="py-24 md:py-32 bg-accent-light">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-heading font-bold">Our Collection</h2>
            <p className="mt-6 max-w-2xl mx-auto text-text font-sans text-lg">
              A selection of our most coveted pieces, each embodying the spirit of Weldorf.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 100}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;