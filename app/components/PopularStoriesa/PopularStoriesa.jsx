import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

 const imageUrl = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3";

const SideArticle = ({ source, time, title, tag, readTime, imageUrl }) => (
  <a href="#" className="flex space-x-4 group pb-4 border-b border-edge hover:bg-surface/50 transition-colors">
    <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-200">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="flex-grow">
      {/* Source and Time */}
      <p className="text-xs text-text-muted mb-1">
        <span className="font-semibold">{source}</span> • {time}
      </p>
      {/* Title */}
      <h4 className="text-sm font-semibold text-text group-hover:text-link transition-colors">
        {title}
      </h4>
      {/* Footer Muted Text */}
      <p className="text-xs text-text-muted mt-2">
        {tag} • {readTime}
      </p>
    </div>
  </a>
);

// Reusable component for the card with the image on top (like the Tank article)
const TopImageArticle = ({ source, time, title, excerpt, tag, readTime, imageUrl }) => (
  <div className="card h-full p-0">
    <div className="relative overflow-hidden rounded-t-[var(--radius-2xl)] h-48 md:h-56 bg-gray-200">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      {/* CNN/Source overlay - optional */}
      <div className="absolute top-3 left-3 bg-white text-xs font-bold px-2 py-0.5 rounded-sm">
        CNN
      </div>
    </div>
    <div className="p-4 sm:p-5 flex flex-col h-full">
      {/* Source and Time */}
      <p className="text-xs text-text-muted mb-2">
        <span className="font-semibold">CNN</span> • {time}
      </p>
      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-text mb-3 f-poppins">
        {title}
      </h3>
      {/* Excerpt */}
      <p className="text-sm text-text-muted flex-grow mb-4">
        {excerpt}
      </p>
      {/* Footer Muted Text */}
      <p className="text-xs text-text-muted mt-auto">
        {tag} • {readTime}
      </p>
    </div>
  </div>
);


const MustReadSection = () => {
  return (
    <section className="py-12 bg-bg">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-text f-poppins">Must Read</h2>
          <a href="#" className="text-lg text-primary hover:text-primary/90 font-medium flex items-center group">
            See all
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-0.5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.295a.75.75 0 111.04-1.09l5.5 5.25a.75.75 0 010 1.09l-5.5 5.25a.75.75 0 11-1.04-1.09l4.158-3.955H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Grid Layout Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* 1. Ukraine Article (Left Column: Span 4 cols on MD+) */}
          <div className="md:col-span-4">
            {/* <TopImageArticle
              imageUrl={imageUrl}
              source="CNN"
              time="10 hours ago"
              title="Ukraine’s silence along southern front fuels counteroffensive..."
              excerpt="Miles of empty fields where you might expect a build-up of armor. Tank tracks that emerge in the mud from nowhere..."
              tag="War"
              readTime="8 min read"
            /> */}
            <NewsCard />
          </div>

          {/* 2. Taylor Swift Article (Center Column: Span 4 cols on MD+) */}
          <div className="md:col-span-4">
            <div className="card p-0 h-full">
              <div className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-gray-200 h-96">
                <img src={imageUrl} alt="Taylor Swift" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Text content overlay */}
                <div className="absolute bottom-0 p-5 sm:p-6 text-white">
                  <p className="text-xs font-semibold mb-2">CNN • 5 hours ago</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 f-poppins">
                    Taylor Swift is sending a powerful message to women on the Eras...
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                    My first stirrings of discomfort at Taylor Swift's show in Las Vegas hit after the infectious beat faded from fan-favorite “Cruel Summer,” the...
                  </p>
                  <p className="text-xs font-medium">
                    Entertainment • 10 min read
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Side Articles (Right Column: Span 4 cols on MD+) */}
          <div className="md:col-span-4 space-y-5 flex flex-col pt-2">
            <h3 className="hidden md:block text-text-muted text-lg font-semibold border-b border-edge pb-2">More Stories</h3>
            
            {/* 3a. Qatar Article */}
            <SideArticle
              imageUrl={imageUrl}
              source="BBC News"
              time="20 hours ago"
              title="Inside Qatar’s ‘city of the future’..."
              tag="Travel"
              readTime="4 min read"
            />
            
            {/* 3b. Wrexham Article */}
            <SideArticle
              imageUrl={imageUrl}
              source="Goal"
              time="22 hours ago"
              title="Wrexham secures promotion in front of..."
              tag="Sport"
              readTime="6 min read"
            />
             {/* Divider to separate from other sections */}
            <div className="border-b border-edge mt-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MustReadSection;