import React, { useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, ChevronLeft, ChevronRight } from 'react-feather';

interface GalleryLightboxProps {
  activeIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ activeIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrev();
    };

    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, onClose, onNext, onPrev]);

  if (activeIndex === null) return null;

  const activeImage = GALLERY_IMAGES[activeIndex];

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 md:top-5 md:right-5 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      <button 
        className="absolute left-2 md:left-5 text-white/70 hover:text-white transition-colors p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>
      
      <button 
        className="absolute right-2 md:right-5 text-white/70 hover:text-white transition-colors p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>

      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-16" onClick={(e) => e.stopPropagation()}>
        <div className="text-center">
            <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[80vh] max-w-[90vw] sm:max-w-[80vw] object-contain shadow-2xl rounded-lg"
            />
            <p className="text-white/80 mt-4 font-sans text-base md:text-lg">{activeImage.alt}</p>
            <p className="text-white/50 font-sans text-sm mt-1">{activeIndex + 1} / {GALLERY_IMAGES.length}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;