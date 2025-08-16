import React, { useMemo, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ALL_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import { ChevronDown } from 'react-feather';

const collectionDetails: { [key: string]: { title: string; description: string; heroImage: string } } = {
  rings: { title: 'Rings', description: 'Timeless symbols of commitment and style.', heroImage: '/rings/rings_categoy.webp.jpeg' },
  necklaces: { title: 'Necklaces', description: 'Adorn your neckline with unparalleled elegance.', heroImage: '/necklaces/pendants_category.webp.jpeg' },
  bracelets: { title: 'Bracelets', description: 'Grace your wrist with our exquisite designs.', heroImage: '/bracelets/bangle_category.webp.jpeg' },
  earrings: { title: 'Earrings', description: 'Illuminate your features with sparkling details.', heroImage: '/earrings/earrings_category.webp.jpeg' },
  'for-her': { title: 'Gifts For Her', description: 'Find the perfect token of affection and elegance.', heroImage: '/rings/0.65-CT-Diamond-Stars-Multicolor-Pinky-Ring-in-18K-Yellow-Gold-600x600.webp.jpeg' },
  'for-him': { title: 'Gifts For Him', description: 'Discover distinguished gifts of timeless sophistication.', heroImage: '/bracelets/Sedimentary-ruby-diamond-band-600x600.webp.jpeg' },
  default: { title: 'Our Collection', description: 'Discover pieces that tell a story of elegance and artistry.', heroImage: '/rings/2aabda1c-1a0a-408e-b8ee-7ec3a632187b.jpeg' },
};

const JewelryCollectionPage: React.FC = () => {
  const { category, for: forGift } = useParams<{ category?: string; for?: string }>();
  const location = useLocation();
  const pageKey = category || forGift || 'default';
  
  const [activeFilter, setActiveFilter] = useState('All');

  const currentCollection = collectionDetails[pageKey] || collectionDetails.default;

  const baseProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(p => {
      if(category) return p.category.toLowerCase() === category.toLowerCase();
      if(forGift === 'for-her') return p.category.toLowerCase() === 'gifts for her';
      if(forGift === 'for-him') return p.category.toLowerCase() === 'gifts for him';
      if(location.pathname.includes('jewelry')) return ['Rings', 'Necklaces', 'Bracelets', 'Earrings'].includes(p.category);
      return false;
    });
  }, [category, forGift, location.pathname]);

  const subCategories = useMemo(() => {
    const subs = new Set(baseProducts.map(p => p.subCategory).filter(Boolean));
    return ['All', ...Array.from(subs)];
  }, [baseProducts]);

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All') return baseProducts;
    return baseProducts.filter(p => p.subCategory === activeFilter);
  }, [activeFilter, baseProducts]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 w-full h-full animate-kenburns" style={{ backgroundImage: `url(${currentCollection.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative z-20 flex items-center justify-center h-full text-center p-6">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}>
              {currentCollection.title}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90 font-sans">
              {currentCollection.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

       {/* Filter and Sort Bar */}
      {subCategories.length > 2 && (
        <section className="bg-background border-b border-gray-200 sticky top-[76px] z-30">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 overflow-x-auto">
                {subCategories.map(sub => (
                  <button
                    key={sub}
                    onClick={() => setActiveFilter(sub)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${activeFilter === sub ? 'bg-primary text-white' : 'bg-accent-light text-text hover:bg-gray-200'}`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
          </div>
        </section>
      )}

      {/* Product Grid */}
      <section className="py-20 md:py-28 bg-accent-light">
        <div className="container mx-auto px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <AnimatedSection key={product.id} delay={index * 50}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-serif text-heading">Coming Soon</h2>
              <p className="mt-4 text-text/80">Our artisans are crafting new pieces for this collection. Please check back later.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JewelryCollectionPage;