import React from 'react';
import AnimatedSection from './AnimatedSection';

const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="/earrings/Tourmaline-and-Pink-Sapphire-Earrings-in-18K-Pink-Gold1.webp" 
                  alt="Boutique Interior" 
                  className="rounded-lg shadow-2xl w-full z-10 relative"
                />
                <div className="absolute -top-4 -right-4 w-full h-full rounded-lg bg-accent z-0"></div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-heading mb-6 font-bold">The Heart of Beverly Hills</h2>
              <p className="font-sans text-text mb-6 leading-relaxed text-lg">
                Founded in 1988, Weldorf began with a singular vision: to create jewelry that transcends trends and becomes a part of one's legacy. Our Beverly Hills boutique is more than a store; it's a sanctuary of beauty where every client is family.
              </p>
              <p className="font-sans text-text mb-10 leading-relaxed">
                We travel the world to source the most exceptional gemstones, from brilliant diamonds to rare colored sapphires, ensuring that every piece tells a unique and captivating story. Our master artisans then bring these stories to life with unparalleled skill and passion.
              </p>
              <a
                href="#bespoke"
                className="inline-block bg-primary text-white font-sans font-medium px-10 py-4 rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Discover Bespoke Services
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OurStory;