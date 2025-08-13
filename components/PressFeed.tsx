import React from 'react';
import { PRESS_LOGOS } from '../constants';
import AnimatedSection from './AnimatedSection';

const PressFeed: React.FC = () => {
  return (
    <section id="press-feed" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-heading font-bold">As Seen In</h2>
           <p className="mt-4 max-w-2xl mx-auto text-text font-sans">
            Weldorf is honored to be featured by the world's most discerning publications.
          </p>
        </AnimatedSection>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {PRESS_LOGOS.map((logo, index) => (
                <AnimatedSection key={logo.name} delay={index * 100}>
                    <div className="group">
                        <img 
                            src={logo.imageUrl} 
                            alt={logo.name} 
                            title={logo.name}
                            className="h-8 md:h-10 object-contain filter grayscale transition duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                        />
                    </div>
                </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PressFeed;