import React from "react";
import Media from "../Media/Media";

const NewsCard = ({ item }) => {
  const {
    href = "#",
    title = "",
    excerpt = "",
    source = "",
    meta = "",
    category = "",
    readTime = "",
    featured_media,
    author_media,
  } = item || {};

  return (
    <section className="space-y-3">
      {/* image */}
      <a href={href} className="block overflow-hidden rounded-[1rem]">
        <Media
          mediaId={featured_media || 58}
          className="w-full h-auto aspect-square object-center object-cover"
        />
      </a>

      {/* meta row */}
      <div className="flex items-center gap-2 text-[14px] text-text-muted">
        <Media
          mediaId={author_media || 71}
          className="w-8 h-8 object-cover object-center rounded-full"
        />
        <span>{source}</span>
        <span>•</span>
        <span>{meta}</span>
      </div>

      {/* title */}
      <a href={href} className="block">
        <h4 className="text-gray-900 font-extrabold leading-snug text-[24px] sm:text-[28px] line-clamp-2">
          {title}
        </h4>
      </a>

      {/* excerpt */}
      <p className="text-text-muted line-clamp-3">{excerpt}</p>

      {/* footer */}
      <div className="flex items-center gap-3 pt-1 text-[14px]">
        <span className="text-primary">{category}</span>
        <span className="text-text-muted">• {readTime}</span>
      </div>
    </section>
  );
};

export default NewsCard;