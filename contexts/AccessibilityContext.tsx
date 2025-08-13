import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';
import { AccessibilityContextProps, AccessibilityState } from '../types';

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AccessibilityState>({
    fontSizeMultiplier: 1,
    highContrast: false,
    underlineLinks: false,
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('data-high-contrast', String(state.highContrast));
    htmlElement.setAttribute('data-links-underlined', String(state.underlineLinks));
    htmlElement.setAttribute('data-font-scale', String(state.fontSizeMultiplier));
  }, [state]);

  const contextValue = useMemo(() => ({
    ...state,
    setFontSizeMultiplier: (multiplier: number) => setState(s => ({ ...s, fontSizeMultiplier: multiplier })),
    toggleHighContrast: () => setState(s => ({ ...s, highContrast: !s.highContrast })),
    toggleUnderlineLinks: () => setState(s => ({ ...s, underlineLinks: !s.underlineLinks })),
  }), [state]);

  return (
    <AccessibilityContext.Provider value={contextValue}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextProps => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
