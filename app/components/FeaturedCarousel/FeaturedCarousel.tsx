'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import Media from '../Media/Media';

type Slide = {
  tag?: string;
  season?: string;
  title: string;
  excerpt: string;
  image: string;
  ctaHref?: string;
  ctaText?: string;
};

const slides: Slide[] = [
  {
    tag: 'FEATURE',
    season: 'Summer 2025',
    title: 'On Common Ground',
    excerpt:
      'Classes that bring together students and incarcerated students — Inside–Out courses — have the power to challenge worldviews and change lives. Significant grant funding lets the program expand its reach and engage more deeply with local communities.',
    image: '/images/feature-1.jpg',
    ctaText: 'Read Story',
    ctaHref: '#',
  },
  {
    tag: 'FEATURE',
    season: 'Summer 2025',
    title: 'A Boundless Legacy',
    excerpt:
      'With unprecedented support, the campaign met and exceeded its goals despite external headwinds—unlocking resources for current and future learners.',
    image: '/images/feature-2.jpg',
    ctaText: 'Read Story',
    ctaHref: '#',
  },
  // add more…
];

export default function FeaturedCarousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="relative px-10">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        speed={600}
        spaceBetween={24}
        onBeforeInit={(swiper) => {
          // @ts-ignore: swiper types don't know initial null
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          // these get replaced onBeforeInit above
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="!overflow-visible"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <article className="grid items-center gap-8 lg:grid-cols-2">
              {/* Left (copy) */}
              <div className="order-2 lg:order-1">
                {/* chips / meta */}
                <div className="mb-6 flex items-center gap-3 text-[16px]">
                  {s.tag && (
                    <span className="uppercase tracking-widest text-primary font-semibold">
                      {s.tag}
                    </span>
                  )}
                  {s.season && (
                    <span className="rounded-full border border-edge bg-surface px-3 py-1 text-[14px]">
                      {s.season}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="font-extrabold leading-tight text-[36px] md:text-[40px] 2xl:text-[64px]">
                  {s.title}
                </h2>

                {/* Excerpt */}
                <p className="mt-6 text-[26px] leading-relaxed text-text-muted">
                  {s.excerpt}
                </p>

                {/* CTA */}
                {s.ctaText && (
                  <a
                    href={s.ctaHref || '#'}
                    className="mt-8 inline-flex items-center rounded-[2rem] bg-primary px-6 py-3 text-[16px] font-semibold text-on-primary hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 ring-primary"
                  >
                    {s.ctaText}
                  </a>
                )}
              </div>

              {/* Right (image) */}
              <div className="order-1 lg:order-2">
                <div className="overflow-hidden rounded-[1.25rem] border border-edge shadow-[var(--shadow-card)]">
                 <Media mediaId={58} className="w-full h-auto" />
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom-right navigation */}
      <div className="pointer-events-none absolute -bottom-4 right-0 flex items-center gap-3">
        <button
          ref={prevRef}
          aria-label="Previous"
          className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-edge bg-surface text-text hover:bg-bg"
        >
          {/* left arrow */}
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12.707 15.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L8.414 10l4.293 4.293a1 1 0 0 1 0 1.414Z" />
          </svg>
        </button>

        <button
          ref={nextRef}
          aria-label="Next"
          className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-on-primary hover:opacity-95"
        >
          {/* right arrow */}
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L11.586 10 7.293 5.707a1 1 0 0 1 0-1.414Z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
