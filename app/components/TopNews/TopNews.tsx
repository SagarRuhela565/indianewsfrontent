"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Media from "../Media/Media";
import { use } from "react";
import { useEffect, useState } from "react";

export default function TopNews({ topNews }: { topNews: any[] }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

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
                    {/* <SwiperSlide>
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
                    </SwiperSlide> */}









                    {topNews?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="grid gap-12 lg:grid-cols-2 items-center">
                                {/* Featured Image */}
                                <div className="overflow-hidden rounded-2xl">
                                    <Media mediaId={item.featured_media} className="w-full h-auto" />
                                </div>

                                {/* News Details */}
                                <div className="space-y-6">
                                    {/* Author Info (optional) */}
                                    <div className="flex items-center gap-2 text-[16px] text-text-muted">
                                        <Media
                                            mediaId={71} // or replace dynamically if available
                                            className="w-8 h-8 object-cover object-center rounded-full"
                                            width={1000}
                                            height={1000}
                                        />
                                        <span>GKU News</span>
                                        <span>•</span>
                                        {isClient && (
                                            <span>
                                                {new Date(item.date).toLocaleDateString("en-US", {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h1 className="font-extrabold leading-tight text-[36px] md:text-[40px] 2xl:text-[64px]">
                                        {item.title.rendered}
                                    </h1>

                                    {/* Content / Excerpt */}
                                    <p
                                        className="text-[26px] text-text-muted leading-relaxed"
                                        dangerouslySetInnerHTML={{
                                            __html: item.excerpt?.rendered || "",
                                        }}
                                    />

                                    {/* Category and Link */}
                                    <div className="flex items-center gap-3 text-[16px]">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            View More
                                        </a>
                                        <span className="text-text-muted">• {item.categories?.length || 0} Categories</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
