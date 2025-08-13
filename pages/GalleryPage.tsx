import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

interface GalleryPageProps {
  onImageClick: (index: number) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onImageClick }) => {
  return (
    <>
      <section className="py-32 md:py-40 bg-background">
        <div className="container mx-auto px-6 text-center">
            <AnimatedSection>
                <h1 className="text-5xl md:text-7xl font-serif text-heading font-bold">The Weldorf Gallery</h1>
                <p className="mt-6 max-w-2xl mx-auto text-text font-sans text-lg">
                    A curated collection of moments, masterpieces, and memories that define our world.
                </p>
            </AnimatedSection>
        </div>
      </section>
      
      <div className="container mx-auto px-4 md:px-6 pb-24">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <AnimatedSection key={index} delay={(index % 4) * 100} className="mb-4 break-inside-avoid">
              <button 
                onClick={() => onImageClick(index)}
                className="group relative overflow-hidden rounded-lg shadow-lg w-full block"
                aria-label={`View image: ${img.alt}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-sans text-left">{img.alt}</p>
                 </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;