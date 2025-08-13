import React, { useState } from 'react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { Settings, X, Type, Sun, Underline } from 'react-feather';

const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    highContrast, 
    toggleHighContrast, 
    fontSizeMultiplier,
    setFontSizeMultiplier, 
    underlineLinks, 
    toggleUnderlineLinks 
  } = useAccessibility();

  const handleFontSizeChange = (level: number) => {
    setFontSizeMultiplier(level);
  };
  
  const getFontSizeButtonStyle = (level: number) => {
    return fontSizeMultiplier === level ? 'bg-primary text-white' : 'hover:bg-gray-200';
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 bg-heading text-white p-4 rounded-full shadow-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-light z-50 transition-colors"
        aria-label="Open Accessibility Menu"
      >
        <Settings size={24} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 sm:bottom-5 sm:right-5 bg-white shadow-2xl rounded-none sm:rounded-lg w-full sm:w-72 border-t sm:border border-gray-200 z-50 p-4 font-sans animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-heading text-lg">Accessibility</h4>
        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800" aria-label="Close Accessibility Menu">
          <X size={24} />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="highContrast" className="text-text flex items-center">
            <Sun size={18} className="mr-2" /> High Contrast
          </label>
          <button
            id="highContrast"
            onClick={toggleHighContrast}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${highContrast ? 'bg-primary' : 'bg-gray-300'}`}
            aria-pressed={highContrast}
          >
            <span className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${highContrast ? 'translate-x-6' : ''}`}></span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="underlineLinks" className="text-text flex items-center">
            <Underline size={18} className="mr-2" /> Underline Links
          </label>
          <button
            id="underlineLinks"
            onClick={toggleUnderlineLinks}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${underlineLinks ? 'bg-primary' : 'bg-gray-300'}`}
             aria-pressed={underlineLinks}
          >
            <span className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${underlineLinks ? 'translate-x-6' : ''}`}></span>
          </button>
        </div>

        <div>
          <label className="text-text flex items-center mb-2">
            <Type size={18} className="mr-2" /> Font Size
          </label>
          <div className="flex items-center justify-between bg-gray-100 rounded-full p-1">
            <button onClick={() => handleFontSizeChange(1)} className={`w-1/3 py-1 text-sm rounded-full transition-colors ${getFontSizeButtonStyle(1)}`}>A</button>
            <button onClick={() => handleFontSizeChange(1.1)} className={`w-1/3 py-1 text-lg rounded-full transition-colors ${getFontSizeButtonStyle(1.1)}`}>A</button>
            <button onClick={() => handleFontSizeChange(1.2)} className={`w-1/3 py-1 text-xl rounded-full transition-colors ${getFontSizeButtonStyle(1.2)}`}>A</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityWidget;