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
  { id: 1, name: 'The Weldorf Solitaire', category: 'Rings', subCategory: 'Solitaire Rings', price: '$18,500', imageUrl: '/rings/0.65-CT-Diamond-Stars-Multicolor-Pinky-Ring-in-18K-Yellow-Gold.webp' },
  { id: 2, name: 'Orion\'s Belt Bracelet', category: 'Bracelets', subCategory: 'Diamond Bracelets', price: '$22,000', imageUrl: '/bracelets/2.45-CT-Diamond-Stars-Bracelet-copy.webp' },
  { id: 3, name: 'The Empress Necklace', category: 'Necklaces', subCategory: 'Pendant Necklaces', price: '$35,750', imageUrl: '/necklaces/chaos_diamonds_pendantV1.webp_1.jpeg' },
  { id: 4, name: 'Celestial Drop Earrings', category: 'Earrings', subCategory: 'Drop Earrings', price: '$9,800', imageUrl: '/earrings/diamond-hoop-earrings-600x600.webp' },
  { id: 5, name: 'The Sovereign Signet', category: 'Rings', subCategory: 'Signet Rings', price: '$12,300', imageUrl: '/rings/2_a02.jpg' },
  { id: 6, name: 'River of Light Tennis Bracelet', category: 'Bracelets', subCategory: 'Diamond Bracelets', price: '$45,000', imageUrl: '/bracelets/Cluster-Diamond-Bracelet-S1CN1T0023.webp' },
  { id: 7, name: 'Midnight Sapphire Pendant', category: 'Necklaces', subCategory: 'Pendant Necklaces', price: '$19,900', imageUrl: '/necklaces/e1dacff2-2c05-41de-a810-e99337b1f705.jpeg' },
  { id: 8, name: 'Sunburst Diamond Studs', category: 'Earrings', subCategory: 'Stud Earrings', price: '$7,200', imageUrl: '/earrings/Tourmaline-and-Pink-Sapphire-Earrings-in-18K-Pink-Gold1-600x600.webp' },
  { id: 9, name: 'Eternal Love Band', category: 'Rings', subCategory: 'Eternity Bands', price: '$6,800', imageUrl: '/rings/2_c02.jpg' },
  { id: 10, name: 'Athena Link Bracelet', category: 'Bracelets', subCategory: 'Chain Bracelets', price: '$15,500', imageUrl: '/bracelets/Sedimentary-ruby-diamond-band2-600x600.webp' },
  { id: 11, name: 'The Rose Gold Locket', category: 'Necklaces', subCategory: 'Locket Necklaces', price: '$8,450', imageUrl: '/necklaces/78d9dbb4-ace4-45f9-9214-b3c57194f5e5.jpeg' },
  { id: 12, name: 'Emerald Halo Earrings', category: 'Earrings', subCategory: 'Drop Earrings', price: '$28,000', imageUrl: '/earrings/Tourmaline-and-Pink-Sapphire-Earrings-in-18K-Pink-Gold1.webp' },
  { id: 13, name: 'The Statesman Watch Links', category: 'Gifts for Him', price: '$4,200', imageUrl: '/bracelets/Diamond-Stars-Bracelet-copy-2.webp' },
  { id: 14, name: 'Onyx Cufflinks', category: 'Gifts for Him', price: '$3,100', imageUrl: '/bracelets/Sedimentary-ruby-diamond-band2.webp_1.jpeg' },
  { id: 15, name: 'Monogrammed Tie Bar', category: 'Gifts for Him', price: '$1,900', imageUrl: '/bracelets/f6749b8a-b9f9-4e5b-a210-6f780fbd612a.jpeg' },
  { id: 16, name: 'Woven Gold Bangle', category: 'Gifts for Her', price: '$9,600', imageUrl: '/rings/2_b02.jpg' },
  { id: 17, name: 'Diamond Initial Pendant', category: 'Gifts for Her', price: '$5,300', imageUrl: '/necklaces/pendants_category.webp' },
  { id: 18, name: 'Birthstone Charm Bracelet', category: 'Gifts for Her', price: '$7,800', imageUrl: '/bracelets/bangle_category.webp' },
];

export const GALLERY_IMAGES = [
    { src: '/rings/0.65-CT-Diamond-Stars-Multicolor-Pinky-Ring-in-18K-Yellow-Gold-600x600.webp', alt: 'A multi-color diamond ring catching the light.' },
    { src: '/earrings/Tourmaline-and-Pink-Sapphire-Earrings-in-18K-Pink-Gold1.webp', alt: 'Exquisite tourmaline and sapphire earrings.' },
    { src: '/heromedia/workinghands.jpeg', alt: 'The artisan\'s touch: crafting a masterpiece.' },
    { src: '/bracelets/Cluster-Diamond-Bracelet-S1CN1T0023.webp', alt: 'A classic cluster diamond bracelet on display.' },
    { src: '/necklaces/chaos_diamonds_pendantV1.webp_1.jpeg', alt: 'The intricate design of our Chaos diamond pendant.' },
    { src: '/rings/2aabda1c-1a0a-408e-b8ee-7ec3a632187b.jpeg', alt: 'A timeless solitaire, symbol of elegance.' },
    { src: '/bracelets/Sedimentary-ruby-diamond-band3-600x600.webp', alt: 'A bold statement with ruby and diamond.' },
    { src: '/earrings/diamond-hoop-earrings-600x600.webp', alt: 'Sparkling diamond hoops, perfect for any occasion.' },
    { src: '/rings/2_a02.jpg', alt: 'A detailed view of a custom Weldorf ring.' },
    { src: '/necklaces/pendants_category.webp', alt: 'Our signature pendant collection.' },
    { src: '/bracelets/bangle_category.webp', alt: 'The smooth elegance of a golden bangle.' },
    { src: '/rings/5b3be0bb-8bee-45ee-980a-8f390af71cec.jpeg', alt: 'A unique design, showcasing our creative spirit.' },
];

export const FEATURED_PRODUCTS: Product[] = ALL_PRODUCTS.slice(0, 8);

export const INSTAGRAM_POSTS: InstagramPost[] = [
  { id: 1, imageUrl: '/rings/0.65-CT-Diamond-Stars-Multicolor-Pinky-Ring-in-18K-Yellow-Gold.webp', postUrl: 'https://www.instagram.com/', likes: 1234, comments: 56 },
  { id: 2, imageUrl: '/earrings/earrings_category.webp', postUrl: 'https://www.instagram.com/', likes: 2453, comments: 89 },
  { id: 3, imageUrl: '/bracelets/Sedimentary-ruby-diamond-band2-600x600.webp', postUrl: 'https://www.instagram.com/', likes: 987, comments: 32 },
  { id: 4, imageUrl: '/necklaces/e1dacff2-2c05-41de-a810-e99337b1f705.jpeg', postUrl: 'https://www.instagram.com/', likes: 3102, comments: 121 },
  { id: 5, imageUrl: '/rings/2_b02.jpg', postUrl: 'https://www.instagram.com/', likes: 1876, comments: 77 },
  { id: 6, imageUrl: '/heromedia/workinghands.jpeg', postUrl: 'https://www.instagram.com/', likes: 4031, comments: 205 },
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