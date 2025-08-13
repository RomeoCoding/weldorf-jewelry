import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Search, X, ChevronDown } from 'react-feather';

interface HeaderProps {
  onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const NavLink: React.FC<{item: (typeof NAV_ITEMS)[0]}> = ({ item }) => {
    return (
      <Link
        to={item.href}
        className="text-text font-sans tracking-wide text-sm uppercase relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary flex items-center gap-1"
      >
        {item.label}
        {item.children && <ChevronDown size={16} />}
      </Link>
    );
  };

  const MobileNavLink: React.FC<{item: (typeof NAV_ITEMS)[0]}> = ({ item }) => {
     const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

     const hasChildren = item.children && item.children.length > 0;

     const handleToggle = () => {
         if (hasChildren) {
             setIsSubMenuOpen(!isSubMenuOpen);
         } else {
            setIsMenuOpen(false);
         }
     }

     if(!hasChildren) {
        return (
            <Link to={item.href} onClick={handleToggle} className="text-2xl font-serif text-heading py-3 block w-full">{item.label}</Link>
        );
     }

     return (
        <div>
            <button onClick={handleToggle} className="text-2xl font-serif text-heading py-3 flex justify-between items-center w-full">
                <span>{item.label}</span>
                <ChevronDown size={24} className={`transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {isSubMenuOpen && (
                <div className="pl-4 border-l-2 border-primary/20 ml-2">
                    {item.children?.map(child => (
                        <Link key={child.label} to={child.href} onClick={() => setIsMenuOpen(false)} className="block py-2 text-xl font-sans text-text">
                            {child.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
     );
  };


  return (
    <>
      <header className="fixed top-0 z-40 w-full transition-all duration-300 ease-in-out bg-background/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-heading">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary">
                <path d="M12 2L8.5 9L12 22L15.5 9L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M4.5 10.5L8.5 9L12 11L15.5 9L19.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <span className="text-4xl font-brand">Weldorf</span>
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <div 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => item.children && setOpenDropdown(null)}
                >
                  <NavLink item={item} />
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-0 pt-5 bg-white shadow-xl rounded-md py-3 w-48 animate-fade-in-down">
                      {item.children.map(child => (
                        <Link key={child.label} to={child.href} className="block px-5 py-2 text-sm text-text hover:bg-accent-light hover:text-primary transition-colors">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <button onClick={onSearchClick} className="text-heading hover:text-primary transition-colors" aria-label="Open search">
                <Search size={20}/>
              </button>
              <button className="bg-primary text-white font-sans px-6 py-2.5 rounded-full hover:bg-primary-dark transition-colors duration-300 text-sm font-medium">
                Book Appointment
              </button>
            </div>
            
            <button className="lg:hidden text-heading z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X size={28} />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Nav */}
      <div className={`fixed top-0 left-0 h-screen w-full bg-background/95 backdrop-blur-lg z-30 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out lg:hidden`}>
          <div className="container mx-auto px-6 pt-28 pb-8 flex flex-col h-full">
            <nav className="flex-grow">
               {NAV_ITEMS.map(item => <MobileNavLink key={item.label} item={item} />)}
            </nav>
            <div className="mt-8">
                 <button onClick={() => { onSearchClick(); setIsMenuOpen(false); }} className="flex items-center justify-center gap-3 w-full text-lg border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
                    <Search size={20}/>
                    Search
                </button>
                <button className="mt-4 w-full bg-primary text-white text-lg px-6 py-3 rounded-full hover:bg-primary-dark transition-colors duration-300">
                    Book Appointment
                </button>
            </div>
          </div>
      </div>
    </>
  );
};

export default Header;