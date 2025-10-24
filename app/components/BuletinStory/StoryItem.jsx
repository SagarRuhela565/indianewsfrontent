const StoryItem = ({ imageUrl, username, isViewed }) => {
  // Use 'border-primary' if not viewed, and 'border-primary/50' if viewed (or use a different color)
  const borderClass = isViewed 
    ? "border-secondary" 
    : "border-primary";

  return (
    <div className="flex-shrink-0 text-center">
      {/* Icon/Image Wrapper: Circular with a 2px border (ring-2) */}
      <div 
        className={`rounded-full p-[2px] border-3 ${borderClass} focus-within:ring-2 ring-primary transition-all cursor-pointer`}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
          <img 
            className="w-full h-full object-cover" 
            src={imageUrl} 
            alt={`${username}'s Story Icon`} 
          />
        </div>
      </div>
      {/* Label */}
      <p className="mt-1.5 text-xs text-text-muted truncate">{username}</p>
    </div>
  );
};

export default StoryItem;   