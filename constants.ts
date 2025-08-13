import { Product, InstagramPost, Testimonial, PressLogo } from './types';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'The Weldorf Solitaire',
    category: 'Engagement Rings',
    price: '$18,500',
    imageUrl: 'https://picsum.photos/seed/jewelry1/800/1000',
  },
  {
    id: 2,
    name: 'Orion\'s Belt Bracelet',
    category: 'Bracelets',
    price: '$22,000',
    imageUrl: 'https://picsum.photos/seed/jewelry2/800/1000',
  },
  {
    id: 3,
    name: 'The Empress Necklace',
    category: 'Necklaces',
    price: '$35,750',
    imageUrl: 'https://picsum.photos/seed/jewelry3/800/1000',
  },
   {
    id: 4,
    name: 'Celestial Drop Earrings',
    category: 'Earrings',
    price: '$9,800',
    imageUrl: 'https://picsum.photos/seed/jewelry4/800/1000',
  },
];

export const NAV_LINKS = ['Collection', 'Showcase', 'Our Story', 'Bespoke', 'Contact'];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/seed/insta1/1000/1000',
    postUrl: 'https://www.instagram.com/',
    likes: 1234,
    comments: 56,
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/seed/insta2/1000/1000',
    postUrl: 'https://www.instagram.com/',
    likes: 2453,
    comments: 89,
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/seed/insta3/1000/1000',
    postUrl: 'https://www.instagram.com/',
    likes: 987,
    comments: 32,
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/seed/insta4/1000/1000',
    postUrl: 'https://www.instagram.com/',
    likes: 3102,
    comments: 121,
  },
  {
    id: 5,
    imageUrl: 'https://picsum.photos/seed/insta5/1000/1000',
    postUrl: 'https://www.instagram.com/',
    likes: 1876,
    comments: 77,
  },
  {
    id: 6,
    imageUrl: 'https://picsum.photos/seed/insta6/1000/1000',
    postUrl: 'https://www.instagram.com/',
    likes: 4031,
    comments: 205,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, quote: "The attention to detail is simply unparalleled. My ring is more beautiful than I could have ever imagined.", author: "Charlotte H., New York" },
  { id: 2, quote: "Weldorf turned my dream into a reality. The bespoke process was a journey of creation I'll never forget.", author: "James P., London" },
  { id: 3, quote: "A true heirloom piece. The quality and craftsmanship are evident from every angle. It feels like wearing a piece of art.", author: "Isabelle D., Paris" }
];

export const PRESS_LOGOS: PressLogo[] = [
    { name: 'Vogue', imageUrl: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=200&auto=format&fit=crop' },
    { name: 'Harper\'s Bazaar', imageUrl: 'https://images.unsplash.com/photo-1629821999980-165c71b3ea0a?q=80&w=200&auto=format&fit=crop' },
    { name: 'Robb Report', imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=200&auto=format&fit=crop' },
    { name: 'Financial Times', imageUrl: 'https://images.unsplash.com/photo-1516542076529-1ea0855399f2?q=80&w=200&auto=format&fit=crop' },
    { name: 'Tatler', imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=200&auto=format&fit=crop' }
];