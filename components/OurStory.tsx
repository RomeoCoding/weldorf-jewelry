import React from 'react';
import AnimatedSection from './AnimatedSection';

const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/seed/story/1000/1200" 
                alt="Boutique Interior" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif text-heading mb-6 font-bold">The Heart of Beverly Hills</h2>
              <p className="font-sans text-text mb-4 leading-relaxed">
                Founded in 1988, Weldorf began with a singular vision: to create jewelry that transcends trends and becomes a part of one's legacy. Our Beverly Hills boutique is more than a store; it's a sanctuary of beauty where every client is family.
              </p>
              <p className="font-sans text-text mb-8 leading-relaxed">
                We travel the world to source the most exceptional gemstones, from brilliant diamonds to rare colored sapphires, ensuring that every piece tells a unique and captivating story. Our master artisans then bring these stories to life with unparalleled skill and passion.
              </p>
              <a
                href="#bespoke"
                className="inline-block bg-primary text-white font-sans px-8 py-3 rounded-full hover:bg-primary-dark transition-colors duration-300"
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