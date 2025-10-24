"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import StoryItem from "./StoryItem";
import catImg from "../../assets/images/cat-img.jpg";

const defaultStories = [
  { id: 1, username: "bbcnews", imageUrl: "/cat-img.jpg", isViewed: false },
  { id: 2, username: "ecommurz", imageUrl: "/cat-img.jpg", isViewed: true },
  { id: 3, username: "formula_one", imageUrl: "/cat-img.jpg", isViewed: false },
  { id: 4, username: "_alvian.de...", imageUrl: "/cat-img.jpg", isViewed: true },
  { id: 5, username: "gcoal", imageUrl: "/cat-img.jpg", isViewed: false },
  { id: 6, username: "apple", imageUrl: "/cat-img.jpg", isViewed: true },
  { id: 7, username: "samsung", imageUrl: "/cat-img.jpg", isViewed: false },
  { id: 8, username: "idntimes", imageUrl: "/cat-img.jpg", isViewed: true },
  { id: 9, username: "kretyastudio", imageUrl: "/cat-img.jpg", isViewed: true },
  { id: 10, username: "fitra.eri", imageUrl: "/cat-img.jpg", isViewed: false },
  { id: 11, username: "fitra.eri", imageUrl: "/cat-img.jpg", isViewed: false },
  { id: 12, username: "fitra.eri", imageUrl: "/cat-img.jpg", isViewed: false },
  { id: 13, username: "fitra.eri", imageUrl: "/cat-img.jpg", isViewed: false },
  { id: 14, username: "fitra.eri", imageUrl: "/cat-img.jpg", isViewed: false },
  { id: 15, username: "fitra.eri", imageUrl: "/cat-img.jpg", isViewed: false },
];

const BuletinStory = ({ storyData = defaultStories }) => {
  return (
    <section className="mt-12 lg:mt-16 xl:mt-20">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-[36px] md:text-[40px] 2xl:text-[64px] font-medium leading-tight f-poppins text-gray-900">
            Buletin Story
          </h2>
          <a href="#" className="text-lg text-primary hover:text-primary/90 font-medium flex items-center group">
            See all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-0.5"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.295a.75.75 0 111.04-1.09l5.5 5.25a.75.75 0 010 1.09l-5.5 5.25a.75.75 0 11-1.04-1.09l4.158-3.955H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Stories Container - Swiper Slider */}
        {/* The 'pb-2' class is kept to ensure the scrollbar has some space if needed */}
        <div className="pb-2">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={false}
            speed={400}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            breakpoints={{
              767: {
                slidesPerView: 5,
              },
              991: {
                slidesPerView: 6,
              },
              1280: {
                slidesPerView: 8,
              },
              1536: {
                slidesPerView: 10,
              },
            }}
            modules={[Autoplay, Navigation]}
          >
            {storyData.map((story) => (
              <SwiperSlide key={story.id} className="flex-shrink-0">
                <StoryItem
                  imageUrl={story.imageUrl}
                  username={story.username}
                  isViewed={story.isViewed}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BuletinStory;