import React, { useState, useEffect } from 'react';
import { X, Search } from 'react-feather';
import { Link } from 'react-router-dom';
import { ALL_PRODUCTS, NAV_ITEMS } from '../constants';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const jewelryCollections = NAV_ITEMS.find(item => item.label === 'Jewelry')?.children || [];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
  
  const searchResults = ALL_PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 5);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center animate-fade-in p-4 pt-[15vh] md:pt-[20vh]" 
      onClick={onClose}
    >
      <div 
        className="bg-background rounded-lg shadow-2xl w-full max-w-2xl mx-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-heading" 
          aria-label="Close search"
        >
          <X size={28} />
        </button>
        
        <div className="p-6 md:p-8">
          <div className="flex items-center border-b-2 border-gray-200 focus-within:border-primary transition-colors">
            <Search size={24} className="text-gray-400 flex-shrink-0" />
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a masterpiece..."
              className="w-full bg-transparent p-3 md:p-4 text-xl sm:text-2xl font-serif text-heading placeholder-gray-400 focus:outline-none"
              autoFocus
            />
          </div>

          {searchTerm ? (
            <div className="mt-6">
                {searchResults.length > 0 ? (
                     <ul className="space-y-2">
                        {searchResults.map(product => (
                            <li key={product.id}>
                                <Link to={`/jewelry/${product.category.toLowerCase()}`} onClick={onClose} className="flex items-center gap-4 p-2 -ml-2 rounded-md hover:bg-accent-light group">
                                    <img src={product.imageUrl} alt={product.name} className="w-16 h-20 object-cover rounded-md" />
                                    <div>
                                        <h4 className="font-serif text-heading text-lg group-hover:text-primary transition-colors">{product.name}</h4>
                                        <p className="text-sm text-text/70">{product.category}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-text py-8">No results found for "{searchTerm}"</p>
                )}
            </div>
          ) : (
            <div className="mt-8">
              <h3 className="font-sans text-sm tracking-widest text-text/70 uppercase">Popular Collections</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {jewelryCollections.map(item => (
                  <Link 
                    key={item.href} 
                    to={item.href} 
                    onClick={onClose} 
                    className="bg-accent text-text px-4 py-2 rounded-full hover:bg-primary-light hover:text-heading transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;