import React from 'react';
import { INSTAGRAM_POSTS } from '../constants';
import AnimatedSection from './AnimatedSection';
import InstagramPostCard from './InstagramPostCard';
import { Instagram } from 'react-feather';

const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram-feed" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-heading font-bold">The World of Weldorf</h2>
          <p className="mt-4 max-w-2xl mx-auto text-text font-sans">
            A glimpse into our moments of creation, elegance, and inspiration.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {INSTAGRAM_POSTS.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 100}>
                <InstagramPostCard post={post} />
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={300}>
            <div className="text-center mt-16">
                <a
                    href="https://www.instagram.com/weldorf.beverlyhills"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary text-white font-sans px-8 py-3 rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
                >
                    <Instagram size={20} className="mr-3" />
                    Follow on Instagram
                </a>
            </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default InstagramFeed;