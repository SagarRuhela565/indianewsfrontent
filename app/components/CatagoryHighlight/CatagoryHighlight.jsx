"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import CatagoryItem from "./CatagoryItem";
import SectionHeader from "../seccomponent/SectionHeader";

const dummyCardData = [
    {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        title: "Student Life",
        description:
            "Lorem ipsum de la loits-anpenanceringa, ndt anisit the osipelity.",
        buttonText: "Learn More",
        buttonLink: "#student-life",
    },
    {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        title: "Academics",
        description:
            "Lorem ipsum de la letus-anpaurcemngs, lanssienisat the tte vipardite.",
        buttonText: "Learn More",
        buttonLink: "#academics",
    },
    {
        id: 3,
        imageUrl:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        title: "Alumni",
        description:
            "Lorem ipsum de la loits-anpaurcemngs, liteitohceol the tte virtuoite.",
        buttonText: "Learn More",
        buttonLink: "#alumni",
    },
    {
        id: 4,
        imageUrl:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        title: "Campus News",
        description:
            "Stay informed about the latest lantourcments, and featured stories from the university.",
        buttonText: "View all News",
        buttonLink: "#campus-news",
    },
       {
        id: 5,
        imageUrl:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        title: "Campus News",
        description:
            "Stay informed about the latest lantourcments, and featured stories from the university.",
        buttonText: "View all News",
        buttonLink: "#campus-news",
    },
       {
        id: 6,
        imageUrl:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        title: "Campus News",
        description:
            "Stay informed about the latest lantourcments, and featured stories from the university.",
        buttonText: "View all News",
        buttonLink: "#campus-news",
    },
];

const CatagoryHighlight = ({ cardsData = dummyCardData }) => {
    return (
        <section className="py-16 md:py-24 bg-surface mt-12 lg:mt-16 xl:mt-20">
            <div className="container mx-auto">

                 <SectionHeader title="Category Highlights"/>


                <Swiper
                    modules={[Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 3, spaceBetween: 28 },
                        1280: { slidesPerView: 4, spaceBetween: 32 },
                    }}
                    className="pb-12"
                >
                    {cardsData.map((card) => (
                        <SwiperSlide key={card.id} className="h-auto">
                            <CatagoryItem
                                imageUrl={card.imageUrl}
                                title={card.title}
                                description={card.description}
                                buttonText={card.buttonText}
                                buttonLink={card.buttonLink}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CatagoryHighlight;