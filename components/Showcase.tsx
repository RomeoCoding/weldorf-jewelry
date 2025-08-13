import React from 'react';
import AnimatedSection from './AnimatedSection';

const FeaturePoint: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="text-3xl font-serif text-heading mb-4 font-bold">{title}</h3>
        <p className="text-text font-sans leading-relaxed max-w-md">{children}</p>
    </div>
);

const Showcase: React.FC = () => {

  return (
    <section id="showcase" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-heading font-bold">The Weldorf Showcase</h2>
          <p className="mt-6 max-w-2xl mx-auto text-text font-sans text-lg">
            An intimate look at the piece that defines our collection: The Lumina Solitaire.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2 lg:sticky top-28">
            <AnimatedSection>
              <div className="bg-accent-light rounded-lg p-6 lg:p-10">
                 <img 
                    src="https://picsum.photos/seed/showcase-ring/1000/1000" 
                    alt="The Lumina Solitaire Ring" 
                    className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:w-1/2">
            <div className="space-y-12">
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
      </div>
    </section>
  );
};

export default Showcase;