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
  
  const QuoteIcon = () => (
    <svg className="w-16 h-16 text-primary/20" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.596 0.399994C18.66 0.399994 20.444 1.14 21.948 2.62C23.516 4.03333 24.3 5.92666 24.3 8.3C24.3 10.54 23.692 12.6133 22.476 14.52C21.324 16.4267 19.892 18.2 18.18 19.84L13.032 24.04L13.752 24.76C15.256 26.1733 16.48 27.52 17.424 28.8C18.368 30.0133 18.84 31.36 18.84 32.84C18.84 33.1533 18.804 33.4533 18.732 33.74C18.66 33.96 18.504 34 18.264 34H12.456C12.144 34 11.916 33.9267 11.772 33.78C11.628 33.5667 11.556 33.34 11.556 33.1C11.556 31.98 11.196 30.7933 10.476 29.54C9.756 28.22 8.716 26.78 7.356 25.22L0.516 18.02C0.191999 17.7 0.0320001 17.3333 0.0320001 16.92C0.0320001 16.5067 0.191999 16.14 0.516 15.82L3.132 13.2C3.456 12.88 3.816 12.72 4.212 12.72C4.544 12.72 4.86 12.8467 5.16 13.1C5.46 13.3533 5.61 13.6333 5.61 13.94C5.61 14.12 5.548 14.3333 5.424 14.58C5.3 14.76 5.238 14.94 5.238 15.12C5.238 15.2333 5.322 15.38 5.49 15.56L9.66 12.38C11.568 10.38 12.984 8.28666 13.908 6.1C14.896 3.84666 15.636 1.94 16.128 0.56C16.236 0.453333 16.396 0.399994 16.596 0.399994ZM40.896 0.399994C42.96 0.399994 44 1.14 44 2.62C44 4.03333 44 5.92666 44 8.3C44 10.54 44 12.6133 44 14.52C44 16.4267 44 18.2 44 19.84L38.852 24.04L39.572 24.76C41.076 26.1733 42.3 27.52 43.244 28.8C44 30.0133 44 31.36 44 32.84C44 33.1533 44 33.4533 44 33.74C44 33.96 44 34 44 34H38.276C37.964 34 37.736 33.9267 37.592 33.78C37.448 33.5667 37.376 33.34 37.376 33.1C37.376 31.98 37.016 30.7933 36.296 29.54C35.576 28.22 34.536 26.78 33.176 25.22L26.336 18.02C26.012 17.7 25.852 17.3333 25.852 16.92C25.852 16.5067 26.012 16.14 26.336 15.82L28.952 13.2C29.276 12.88 29.636 12.72 30.032 12.72C30.364 12.72 30.68 12.8467 30.98 13.1C31.28 13.3533 31.43 13.6333 31.43 13.94C31.43 14.12 31.368 14.3333 31.244 14.58C31.12 14.76 31.058 14.94 31.058 15.12C31.058 15.2333 31.142 15.38 31.31 15.56L35.48 12.38C37.388 10.38 38.804 8.28666 39.728 6.1C40.716 3.84666 40.896 1.94 40.896 0.56C40.896 0.453333 40.896 0.399994 40.896 0.399994Z" fill="currentColor"/>
    </svg>
  )

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-heading font-bold">Patrons' Voices</h2>
        </AnimatedSection>
        <div className="relative h-72 flex items-center justify-center overflow-hidden">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center justify-center text-center px-8 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <QuoteIcon />
              <blockquote className="text-2xl md:text-3xl font-serif text-heading italic max-w-4xl mt-6">
                “{testimonial.quote}”
              </blockquote>
              <cite className="mt-6 font-sans text-text tracking-wider not-italic uppercase text-sm">
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
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-primary scale-125' : 'bg-primary/30 hover:bg-primary/50'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;