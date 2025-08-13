import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MobileNav = () => (
    <div className={`absolute top-0 left-0 h-screen w-full bg-background z-50 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
      <div className="flex justify-end p-6">
        <button onClick={() => setIsMenuOpen(false)} className="text-heading">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(' ', '-')}`}
            onClick={() => setIsMenuOpen(false)}
            className="text-text font-serif tracking-wide text-3xl uppercase hover:text-primary transition-colors duration-300"
          >
            {link}
          </a>
        ))}
         <button className="mt-8 bg-primary text-white font-sans px-8 py-3 rounded-full hover:bg-primary-dark transition-colors duration-300 text-lg">
          Book Appointment
        </button>
      </nav>
    </div>
  );

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-4xl font-serif font-bold text-heading">
          Weldorf
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-text font-sans tracking-wide text-sm uppercase hover:text-primary transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>
        <button className="hidden md:block bg-primary text-white font-sans px-5 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300 text-sm">
          Book Appointment
        </button>
        <button className="md:hidden text-heading z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {!isMenuOpen && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        {isMenuOpen && <MobileNav />}
      </div>
    </header>
  );
};

export default Header;
