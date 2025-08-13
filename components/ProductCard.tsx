
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group text-left cursor-pointer relative overflow-hidden rounded-lg shadow-sm">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-auto object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <h3 className="text-2xl font-serif">{product.name}</h3>
        <p className="text-md font-sans opacity-80">{product.price}</p>
        <button className="mt-4 bg-white/90 text-heading px-6 py-2 rounded-full font-sans text-sm hover:bg-white">
            View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;