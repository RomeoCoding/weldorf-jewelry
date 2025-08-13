import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AccessibilityWidget from './components/AccessibilityWidget';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import SearchModal from './components/SearchModal';
import GalleryLightbox from './components/GalleryLightbox';
import { GALLERY_IMAGES } from './constants';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages using the '@' alias for robust path resolution
const HomePage = lazy(() => import('@/pages/HomePage'));
const JewelryCollectionPage = lazy(() => import('@/pages/JewelryCollectionPage'));
const GiftsPage = lazy(() => import('@/pages/GiftsPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, scroll to the element
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // We use a timeout to ensure the element is rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return;
      }
    }
    
    // Otherwise, scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  
  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };
  
  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };
  
  const handleNextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };
  
  const handlePrevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <AccessibilityProvider>
      <div className="bg-background font-sans text-text min-h-screen">
        <Header onSearchClick={() => setIsSearchOpen(true)} />
        <ScrollHandler />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/jewelry" element={<JewelryCollectionPage />} />
              <Route path="/jewelry/:category" element={<JewelryCollectionPage />} />
              <Route path="/gifts" element={<GiftsPage />} />
              <Route path="/gifts/:for" element={<JewelryCollectionPage />} />
              <Route path="/gallery" element={<GalleryPage onImageClick={handleOpenLightbox} />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <AccessibilityWidget />

        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <GalleryLightbox 
          activeIndex={activeLightboxIndex}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      </div>
    </AccessibilityProvider>
  );
};

export default App;