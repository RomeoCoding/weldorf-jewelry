export interface Product {
  id: number;
  name: string;
  category: string;
  subCategory?: string;
  price: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
  children?: NavItem[];
}


export interface AccessibilityState {
  fontSizeMultiplier: number;
  highContrast: boolean;
  underlineLinks: boolean;
}

export interface AccessibilityContextProps extends AccessibilityState {
  setFontSizeMultiplier: (multiplier: number) => void;
  toggleHighContrast: () => void;
  toggleUnderlineLinks: () => void;
}

export interface InstagramPost {
  id: number;
  imageUrl: string;
  postUrl: string;
  likes: number;
  comments: number;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

export interface PressLogo {
  name: string;
  imageUrl: string;
}