import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

interface GiftSectionProps {
  to: string;
  title: string;
  imageUrl: string;
}

const GiftSection: React.FC<GiftSectionProps> = ({ to, title, imageUrl }) => {
  return (
    <Link to={to} className="relative group w-full md:w-1/2 h-[90vh] md:h-screen bg-black overflow-hidden">
      {/* Background Image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-1 opacity-70 group-hover:opacity-100"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-all duration-500"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-white text-center p-8 md:p-12 pb-24">
         <AnimatedSection>
            <h2 className="text-5xl md:text-7xl font-serif font-bold transition-transform duration-500 group-hover:-translate-y-2" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
              {title}
            </h2>
            <div className="mt-6 border-2 border-white w-24 mx-auto transition-all duration-500 group-hover:w-32"></div>
            <p className="font-sans tracking-widest text-lg uppercase mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
              Explore Collection
            </p>
         </AnimatedSection>
      </div>
    </Link>
  );
};

const GiftsPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <GiftSection to="/gifts/for-her" title="For Her" imageUrl="https://picsum.photos/seed/gifts-her/1200/1800" />
      <GiftSection to="/gifts/for-him" title="For Him" imageUrl="https://picsum.photos/seed/gifts-him/1200/1800" />
    </div>
  );
};

export default GiftsPage;