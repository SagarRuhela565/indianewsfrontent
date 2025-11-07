"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import CatagoryItem from "./CatagoryItem";
import SectionHeader from "../seccomponent/SectionHeader";

const CatagoryHighlight = ({ cardsData }) => {
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
                                imageID={card?.image}
                                title={card?.heading}
                                description={card?.text}
                                buttonText={card?.button?.title}
                                buttonLink={card?.button?.url}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CatagoryHighlight;