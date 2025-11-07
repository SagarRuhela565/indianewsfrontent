import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Media from '../Media/Media';
import SectionHeader from '../seccomponent/SectionHeader';

type NewsItem = {
  id: string;
  image: string;
  source: string;
  meta: string;          // "3 hours ago" or "April 17, 2023"
  title: string;
  excerpt: string;
  category: string;      // e.g. "Sport"
  readTime: string;      // e.g. "8 min read"
  href?: string;
};

const items: NewsItem[] = [
  {
    id: "1",
    image: "/images/news-1.jpg",
    source: "Formula 1",
    meta: "3 hours ago",
    title:
      "‘He deserves a lot more’ Verstappen backs Alonso",
    excerpt:
      "Max Verstappen believes his fellow two-time world champion Fernando Alonso 'deserves a lot more' victories and has backed the Spaniard…",
    category: "Sport",
    readTime: "8 min read",
    href: "#",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    source: "BBC",
    meta: "12 hours ago",
    title:
      "Liverpool hammer Leeds for first win in five games",
    excerpt:
      "Mohamed Salah and Diogo Jota both scored twice as Liverpool ended a poor run with a convincing league win at Elland Road…",
    category: "Sport",
    readTime: "8 min read",
    href: "#",
  },
  {
    id: "3",
    image: "/images/news-3.jpg",
    source: "IDN Times",
    meta: "April 17, 2023",
    title:
      "Papua: At least one killed in hunt for kidnapped NZ pilot…",
    excerpt:
      "Officials report one Indonesian soldier killed during operations to locate a kidnapped New Zealand pilot in Papua…",
    category: "Crime",
    readTime: "8 min read",
    href: "#",
  },
  {
    id: "4",
    image: "/images/news-4.jpg",
    source: "BBC",
    meta: "April 15, 2023",
    title:
      "Jeremy Bowen: Israel’s unclear road ahead",
    excerpt:
      "Tensions between Israelis and Palestinians are rising again, with hopes of peace and a two-state solution as far away as ever…",
    category: "Middle East",
    readTime: "8 min read",
    href: "#",
  },
];


const MustReadSection = () => {
  return (
    <section className="mt-12 lg:mt-16 xl:mt-20 bg-bg poppular-stories">
      <div className="container">
        <SectionHeader title="Must Read" url="#" />


        {/* Grid Layout Container */}
        <div className="grid grid-cols-1  md:grid-cols-12 lg:grid-cols-11 gap-6">
          {/* 1. Left Column */}
          <div className="md:col-span-6 lg:col-span-3">
            <NewsCard item={items[0]} />
          </div>

          {/* 2. Center Column (Custom Layout for item[1]) */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-gray-200 aspect-square popolar-center-img text-white">
              <img
                src={items[1].image}
                alt={items[1].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Text content overlay */}
              <div className="absolute bottom-0 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-[14px] mb-3">
                  <Media
                    mediaId={71}
                    className="w-8 h-8 object-cover object-center rounded-full"
                  />
                  <span>{items[1].source}</span>
                  <span>•</span>
                  <span>{items[1].meta}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {items[1].title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                  {items[1].excerpt}
                </p>
                <p className="text-xs font-medium">
                  {items[1].category} • {items[1].readTime}
                </p>
              </div>
            </div>
          </div>

          {/* 3. Right Column */}
          <div className="md:col-span-12 lg:col-span-3 space-y-5 flex flex-col pt-2 small-img">
            <NewsCard item={items[2]} para={false} />
            <NewsCard item={items[3]} para={false} />
          </div>
        </div>
      </div>
    </section>

  );
};

export default MustReadSection;