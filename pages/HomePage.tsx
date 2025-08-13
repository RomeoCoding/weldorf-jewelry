import React from 'react';
import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import OurStory from '../components/OurStory';
import FoundersNote from '../components/FoundersNote';
import Craftsmanship from '../components/Craftsmanship';
import Showcase from '../components/Showcase';
import BespokeServices from '../components/BespokeServices';
import Testimonials from '../components/Testimonials';
import PressFeed from '../components/PressFeed';
import InstagramFeed from '../components/InstagramFeed';

const HomePage: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
