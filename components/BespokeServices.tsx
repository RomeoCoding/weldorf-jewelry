import React from 'react';
import AnimatedSection from './AnimatedSection';

const BespokeServices: React.FC = () => {
  return (
    <section id="bespoke" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
            <div className="md:w-1/2">
              <div className="relative">
                 <img 
                  src="https://picsum.photos/seed/bespoke/1000/1200" 
                  alt="Jeweler working on a custom piece" 
                  className="rounded-lg shadow-2xl w-full z-10 relative"
                />
                <div className="absolute -top-4 -left-4 w-full h-full rounded-lg bg-accent z-0"></div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-heading mb-6 font-bold">Create Your Legacy</h2>
              <p className="font-sans text-text mb-6 leading-relaxed text-lg">
                For the ultimate expression of individuality, our bespoke service offers you the opportunity to bring your vision to life. Collaborate directly with our designers and artisans to create a piece that is uniquely yours.
              </p>
              <p className="font-sans text-text mb-10 leading-relaxed">
                Whether reimagining a family heirloom or starting with a fresh idea, we guide you through every step—from gemstone selection to the final, personal engraving.
              </p>
              <a
                href="#contact"
                className="inline-block bg-primary text-white font-sans font-medium px-10 py-4 rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Begin Your Journey
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BespokeServices;