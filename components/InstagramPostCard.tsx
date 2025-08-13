import React from 'react';
import { InstagramPost } from '../types';
import { Heart, MessageCircle } from 'react-feather';

interface InstagramPostCardProps {
  post: InstagramPost;
}

const InstagramPostCard: React.FC<InstagramPostCardProps> = ({ post }) => {
  return (
    <a 
      href={post.postUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative aspect-square overflow-hidden rounded-lg"
    >
      <img 
        src={post.imageUrl} 
        alt="Weldorf Instagram Post"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex items-center space-x-6 text-white">
          <div className="flex items-center">
            <Heart size={20} className="mr-2"/>
            <span>{post.likes.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <MessageCircle size={20} className="mr-2"/>
            <span>{post.comments.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default InstagramPostCard;
