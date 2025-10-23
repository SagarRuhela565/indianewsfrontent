"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Media from "../Media/Media";

export default function LatestNews() {
    return (
        <section className="mt-12 lg:mt-16 xl:mt-20">
            <div className="container relative">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={false}
                    speed={1200}
                    // autoplay={{
                    //     delay: 10000,
                    //     disableOnInteraction: false,
                    //     pauseOnMouseEnter: true,
                    // }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div className="overflow-hidden rounded-2xl">
                                <Media mediaId={58} className="w-full h-auto" />
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 text-[16px] text-text-muted">
                                    <Media mediaId={71} className="w-8 h-8 object-cover object-center rounded-full" />
                                    <span>Netflix</span>
                                    <span>•</span>
                                    <span>12 minutes ago</span>
                                </div>
                                <h1 className="font-extrabold leading-tight text-[36px] md:text-[40px] 2xl:text-[64px]">
                                    Where To Watch 'John Wick: Chapter 4'
                                </h1>
                                <p className="text-[26px] text-text-muted leading-relaxed">
                                    There&apos;s been no official announcement regarding John Wick:
                                    Chapter 4&apos;s streaming release. However, given it&apos;s a
                                    Lionsgate film, John Wick: Chapter 4 will eventually be released on
                                    Starz…
                                </p>
                                <div className="flex items-center gap-3 text-[16px]">
                                    <a href="#" className="text-primary hover:underline">
                                        Movies
                                    </a>
                                    <span className="text-text-muted">• 4 min read</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div className="overflow-hidden rounded-2xl">
                                <Media mediaId={58} className="w-full h-auto" />
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 text-[16px] text-text-muted">
                                    <Media mediaId={71} className="w-8 h-8 object-cover object-center rounded-full" />
                                    <span>Prime Video</span>
                                    <span>•</span>
                                    <span>20 minutes ago</span>
                                </div>
                                <h1 className="font-extrabold leading-tight text-[36px] md:text-[40px] 2xl:text-[64px]">
                                    Another Featured Movie
                                </h1>
                                <p className="text-[26px] text-text-muted leading-relaxed">
                                    Some text about another movie streaming info…
                                </p>
                                <div className="flex items-center gap-3 text-[16px]">
                                    <a href="#" className="text-primary hover:underline">
                                        Series
                                    </a>
                                    <span className="text-text-muted">• 6 min read</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
