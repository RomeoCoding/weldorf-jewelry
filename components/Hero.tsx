import React from 'react';
import AnimatedSection from './AnimatedSection';

const HERO_VIDEO_URL = '/heromedia/herovid1.mp4';


const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        style={{ objectFit: 'cover' }}
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-20 text-center p-6">
        <AnimatedSection>
          <h2 className="text-xl md:text-2xl font-sans tracking-widest uppercase text-white/90">
            Timeless by Design
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black my-4 text-white" style={{textShadow: '2px 2px 10px rgba(0,0,0,0.3)'}}>
            Weldorf
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg font-sans text-gray-200 mb-10">
            Discover a world where classic elegance meets contemporary artistry. Each piece is a testament to our dedication to beauty and quality.
          </p>
          <a
            href="#collection"
            className="bg-transparent border-2 border-white text-white font-sans font-medium px-10 py-4 rounded-full hover:bg-white hover:text-heading transition-all duration-300 transform hover:scale-105"
          >
            Explore Collections
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;