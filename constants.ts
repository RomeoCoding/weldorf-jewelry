import { Product, InstagramPost, Testimonial, PressLogo, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Jewelry',
    href: '/jewelry',
    children: [
      { label: 'Rings', href: '/jewelry/rings' },
      { label: 'Necklaces', href: '/jewelry/necklaces' },
      { label: 'Bracelets', href: '/jewelry/bracelets' },
      { label: 'Earrings', href: '/jewelry/earrings' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Gifts', href: '/gifts' },
  { label: 'Our Story', href: '/#our-story', isAnchor: true },
  { label: 'Bespoke', href: '/#bespoke', isAnchor: true },
];

export const ALL_PRODUCTS: Product[] = [
  { id: 1, name: 'The Weldorf Solitaire', category: 'Rings', subCategory: 'Solitaire Rings', price: '$18,500', imageUrl: 'https://picsum.photos/seed/jewelry1/800/1000' },
  { id: 2, name: 'Orion\'s Belt Bracelet', category: 'Bracelets', subCategory: 'Diamond Bracelets', price: '$22,000', imageUrl: 'https://picsum.photos/seed/jewelry2/800/1000' },
  { id: 3, name: 'The Empress Necklace', category: 'Necklaces', subCategory: 'Pendant Necklaces', price: '$35,750', imageUrl: 'https://picsum.photos/seed/jewelry3/800/1000' },
  { id: 4, name: 'Celestial Drop Earrings', category: 'Earrings', subCategory: 'Drop Earrings', price: '$9,800', imageUrl: 'https://picsum.photos/seed/jewelry4/800/1000' },
  { id: 5, name: 'The Sovereign Signet', category: 'Rings', subCategory: 'Signet Rings', price: '$12,300', imageUrl: 'https://picsum.photos/seed/jewelry5/800/1000' },
  { id: 6, name: 'River of Light Tennis Bracelet', category: 'Bracelets', subCategory: 'Diamond Bracelets', price: '$45,000', imageUrl: 'https://picsum.photos/seed/jewelry6/800/1000' },
  { id: 7, name: 'Midnight Sapphire Pendant', category: 'Necklaces', subCategory: 'Pendant Necklaces', price: '$19,900', imageUrl: 'https://picsum.photos/seed/jewelry7/800/1000' },
  { id: 8, name: 'Sunburst Diamond Studs', category: 'Earrings', subCategory: 'Stud Earrings', price: '$7,200', imageUrl: 'https://picsum.photos/seed/jewelry8/800/1000' },
  { id: 9, name: 'Eternal Love Band', category: 'Rings', subCategory: 'Eternity Bands', price: '$6,800', imageUrl: 'https://picsum.photos/seed/jewelry9/800/1000' },
  { id: 10, name: 'Athena Link Bracelet', category: 'Bracelets', subCategory: 'Chain Bracelets', price: '$15,500', imageUrl: 'https://picsum.photos/seed/jewelry10/800/1000' },
  { id: 11, name: 'The Rose Gold Locket', category: 'Necklaces', subCategory: 'Locket Necklaces', price: '$8,450', imageUrl: 'https://picsum.photos/seed/jewelry11/800/1000' },
  { id: 12, name: 'Emerald Halo Earrings', category: 'Earrings', subCategory: 'Drop Earrings', price: '$28,000', imageUrl: 'https://picsum.photos/seed/jewelry12/800/1000' },
  { id: 13, name: 'The Statesman Watch Links', category: 'Gifts for Him', price: '$4,200', imageUrl: 'https://picsum.photos/seed/jewelry13/800/1000' },
  { id: 14, name: 'Onyx Cufflinks', category: 'Gifts for Him', price: '$3,100', imageUrl: 'https://picsum.photos/seed/jewelry14/800/1000' },
  { id: 15, name: 'Monogrammed Tie Bar', category: 'Gifts for Him', price: '$1,900', imageUrl: 'https://picsum.photos/seed/jewelry15/800/1000' },
  { id: 16, name: 'Woven Gold Bangle', category: 'Gifts for Her', price: '$9,600', imageUrl: 'https://picsum.photos/seed/jewelry16/800/1000' },
  { id: 17, name: 'Diamond Initial Pendant', category: 'Gifts for Her', price: '$5,300', imageUrl: 'https://picsum.photos/seed/jewelry17/800/1000' },
  { id: 18, name: 'Birthstone Charm Bracelet', category: 'Gifts for Her', price: '$7,800', imageUrl: 'https://picsum.photos/seed/jewelry18/800/1000' },
];

export const GALLERY_IMAGES = [
    { src: 'https://picsum.photos/seed/gallery1/800/1200', alt: 'A glance over the shoulder.' },
    { src: 'https://picsum.photos/seed/gallery2/800/1000', alt: 'The fine details of a Weldorf creation.' },
    { src: 'https://picsum.photos/seed/gallery3/800/600', alt: 'Our Beverly Hills boutique entrance.' },
    { src: 'https://picsum.photos/seed/gallery4/800/1200', alt: 'A moment of quiet elegance.' },
    { src: 'https://picsum.photos/seed/gallery5/800/1000', alt: 'The Empress Necklace in its element.' },
    { src: 'https://picsum.photos/seed/gallery6/800/1200', alt: 'Craftsmanship in progress.' },
    { src: 'https://picsum.photos/seed/gallery7/800/600', alt: 'The sparkle of a freshly set stone.' },
    { src: 'https://picsum.photos/seed/gallery8/800/1000', alt: 'Weldorf style on the streets of Paris.' },
    { src: 'https://picsum.photos/seed/gallery9/800/1200', alt: 'Ready for the evening.' },
    { src: 'https://picsum.photos/seed/gallery10/800/1000', alt: 'Our signature packaging.' },
    { src: 'https://picsum.photos/seed/gallery11/800/600', alt: 'The showcase solitaire ring.' },
    { src: 'https://picsum.photos/seed/gallery12/800/1200', alt: 'Reflections of beauty.' },
];

export const FEATURED_PRODUCTS: Product[] = ALL_PRODUCTS.slice(0, 4);

export const INSTAGRAM_POSTS: InstagramPost[] = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/insta1/1000/1000', postUrl: 'https://www.instagram.com/', likes: 1234, comments: 56 },
  { id: 2, imageUrl: 'https://picsum.photos/seed/insta2/1000/1000', postUrl: 'https://www.instagram.com/', likes: 2453, comments: 89 },
  { id: 3, imageUrl: 'https://picsum.photos/seed/insta3/1000/1000', postUrl: 'https://www.instagram.com/', likes: 987, comments: 32 },
  { id: 4, imageUrl: 'https://picsum.photos/seed/insta4/1000/1000', postUrl: 'https://www.instagram.com/', likes: 3102, comments: 121 },
  { id: 5, imageUrl: 'https://picsum.photos/seed/insta5/1000/1000', postUrl: 'https://www.instagram.com/', likes: 1876, comments: 77 },
  { id: 6, imageUrl: 'https://picsum.photos/seed/insta6/1000/1000', postUrl: 'https://www.instagram.com/', likes: 4031, comments: 205 },
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