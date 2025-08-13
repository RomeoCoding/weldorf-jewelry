import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import AnimatedSection from './AnimatedSection';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 6000); // Change testimonial every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-heading font-bold">Patrons' Voices</h2>
        </AnimatedSection>
        <div className="relative h-64 flex items-center justify-center overflow-hidden">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center justify-center text-center px-8 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <blockquote className="text-2xl md:text-4xl font-serif text-heading italic max-w-4xl">
                “{testimonial.quote}”
              </blockquote>
              <cite className="mt-6 font-sans text-text tracking-wider not-italic">
                — {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-3 mt-8">
            {TESTIMONIALS.map((_, index) => (
                <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-primary' : 'bg-accent'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;