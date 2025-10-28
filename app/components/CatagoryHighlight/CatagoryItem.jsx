// components/CardItem.jsx
import React from 'react';

const CatagoryItem = ({ imageUrl, title, description, buttonText, buttonLink }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="relative overflow-hidden rounded-t-[var(--radius-2xl)] h-50 sm:h-70">
        <img 
          src={imageUrl} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-gray-900 font-extrabold leading-snug text-[24px] sm:text-[28px] line-clamp-2">
          {title}
        </h4>
        <p className="text-text-muted line-clamp-3 mb-3 leading-relaxed">
          {description}
        </p>
        <a href={buttonLink} className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default CatagoryItem;