import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({ href, children, 'aria-label': ariaLabel }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="text-text hover:text-primary transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-accent-light pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif text-heading mb-4">Weldorf</h3>
            <p className="text-text font-sans text-sm">9501 Wilshire Blvd<br />Beverly Hills, CA 90212</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <SocialIcon href="https://www.instagram.com/weldorf.beverlyhills" aria-label="Weldorf on Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></SocialIcon>
              <SocialIcon href="#" aria-label="Weldorf on Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></SocialIcon>
              <SocialIcon href="#" aria-label="Weldorf on Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></SocialIcon>
            </div>
            <a href="https://www.instagram.com/weldorf.beverlyhills" target="_blank" rel="noopener noreferrer" className="text-sm font-sans text-text hover:text-primary transition-colors duration-300 mt-4 inline-block">@weldorf.beverlyhills</a>
          </div>
          
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-serif text-lg text-heading mb-4">Quick Links</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li><a href="#collection" className="text-text hover:text-primary">Collection</a></li>
              <li><a href="#our-story" className="text-text hover:text-primary">Our Story</a></li>
              <li><a href="#bespoke" className="text-text hover:text-primary">Bespoke Services</a></li>
              <li><a href="#" className="text-text hover:text-primary">Appointments</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-heading mb-4">Join Our World</h4>
            <p className="text-text font-sans text-sm mb-4">Receive exclusive invitations and be the first to discover our new creations.</p>
            <form className="flex">
              <input type="email" placeholder="Your email address" className="w-full px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-primary/50 font-sans text-sm" />
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-full hover:bg-primary-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-primary/30 pt-6 text-center">
          <p className="text-text font-sans text-sm">&copy; {new Date().getFullYear()} Weldorf. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;