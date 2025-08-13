import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import OurStory from './components/OurStory';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import Craftsmanship from './components/Craftsmanship';
import BespokeServices from './components/BespokeServices';
import AccessibilityWidget from './components/AccessibilityWidget';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import InstagramFeed from './components/InstagramFeed';
import FoundersNote from './components/FoundersNote';
import Testimonials from './components/Testimonials';
import PressFeed from './components/PressFeed';

const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <div className="bg-background font-sans text-text min-h-screen">
        <Header />
        <main>
          <Hero />
          <FeaturedCollection />
          <OurStory />
          <FoundersNote />
          <Craftsmanship />
          <Showcase />
          <BespokeServices />
          <Testimonials />
          <PressFeed />
          <InstagramFeed />
        </main>
        <Footer />
        <AccessibilityWidget />
      </div>
    </AccessibilityProvider>
  );
};

export default App;