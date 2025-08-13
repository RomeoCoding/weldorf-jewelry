import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

const FeaturePoint: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-16">
        <h3 className="text-3xl font-serif text-heading mb-3 font-bold">{title}</h3>
        <p className="text-text font-sans leading-relaxed">{children}</p>
    </div>
);

const Showcase: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="showcase" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-heading font-bold">The Weldorf Showcase</h2>
          <p className="mt-4 max-w-2xl mx-auto text-text font-sans">
            An intimate look at the piece that defines our collection: The Lumina Solitaire.
          </p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
          <div className="md:w-1/2 md:sticky top-28">
            <AnimatedSection>
              <div className="bg-accent-light rounded-lg p-8 overflow-hidden">
                 <img 
                    src="https://picsum.photos/seed/showcase-ring/1000/1000" 
                    alt="The Lumina Solitaire Ring" 
                    className="rounded-lg shadow-2xl w-full h-auto transition-transform duration-300 ease-out"
                    style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                />
              </div>
            </AnimatedSection>
          </div>
          
          <div className="md:w-1/2">
            <AnimatedSection delay={100}>
                <FeaturePoint title="The Diamond">
                    At its heart lies a flawless 3-carat, brilliant-cut diamond, ethically sourced and certified for its exceptional clarity and color. Its fire is unmatched, a testament to nature's artistry.
                </FeaturePoint>
            </AnimatedSection>
            <AnimatedSection delay={200}>
                <FeaturePoint title="The Setting">
                    The diamond is cradled in a bespoke platinum setting, designed for both security and maximum light exposure. The delicate prongs are almost invisible, giving the illusion that the stone is floating on air.
                </FeaturePoint>
            </AnimatedSection>
            <AnimatedSection delay={300}>
                <FeaturePoint title="The Craftsmanship">
                    Hand-forged by our master jewelers, the band features a subtle, comfort-fit design. Every curve is polished to perfection, creating a seamless and timeless piece of wearable art destined to become a family heirloom.
                </FeaturePoint>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;