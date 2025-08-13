import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Mail, Phone } from 'react-feather';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({ href, children, 'aria-label': ariaLabel }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="text-text hover:text-primary transition-colors duration-300">
    {children}
  </a>
);

const FooterLink: React.FC<{to: string; children: React.ReactNode}> = ({to, children}) => (
    <li>
        <Link to={to} className="hover:text-primary transition-colors duration-300">
            {children}
        </Link>
    </li>
);

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-accent-light text-text font-sans">
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-brand text-heading mb-4">Weldorf</h3>
            <p className="text-sm text-text/80 mb-6 max-w-sm">
              Be the first to know about new collections, special events, and the latest from our atelier.
            </p>
            <form className="flex items-center max-w-sm">
              <label htmlFor="email-newsletter" className="sr-only">Email for newsletter</label>
              <input 
                id="email-newsletter"
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white border border-primary/30 rounded-l-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-shadow" 
              />
              <button 
                type="submit" 
                aria-label="Subscribe to newsletter" 
                className="bg-primary text-white p-3.5 rounded-r-full hover:bg-primary-dark transition-colors flex-shrink-0"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="font-bold text-heading mb-4 tracking-wider uppercase text-sm">Shop</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink to="/jewelry/rings">Rings</FooterLink>
              <FooterLink to="/jewelry/necklaces">Necklaces</FooterLink>
              <FooterLink to="/jewelry/bracelets">Bracelets</FooterLink>
              <FooterLink to="/jewelry/earrings">Earrings</FooterLink>
              <FooterLink to="/gifts">Gifts</FooterLink>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-heading mb-4 tracking-wider uppercase text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink to="/#our-story">Our Story</FooterLink>
              <FooterLink to="/#craftsmanship">Craftsmanship</FooterLink>
              <FooterLink to="/#bespoke">Bespoke Services</FooterLink>
              <FooterLink to="/gallery">Gallery</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-heading mb-4 tracking-wider uppercase text-sm">Visit Us</h4>
            <ul className="space-y-4 text-sm text-text/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <p>9501 Wilshire Blvd<br/>Beverly Hills, CA 90212</p>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-1 flex-shrink-0" />
                <a href="mailto:concierge@weldorf.com" className="hover:text-primary transition-colors">concierge@weldorf.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                <a href="tel:+13101234567" className="hover:text-primary transition-colors">+1 (310) 123-4567</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-text/70 text-center md:text-left">&copy; {new Date().getFullYear()} Weldorf. All Rights Reserved.</p>
          <div className="flex items-center space-x-5">
            <SocialIcon href="https://www.instagram.com/weldorf.beverlyhills" aria-label="Weldorf on Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></SocialIcon>
            <SocialIcon href="#" aria-label="Weldorf on Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></SocialIcon>
            <SocialIcon href="#" aria-label="Weldorf on Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;