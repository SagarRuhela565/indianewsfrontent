import FeaturedCarousel from "./components/FeaturedCarousel/FeaturedCarousel";
import Media from "./components/Media/Media";
import Posts from "./components/post";
import { wpFetch } from "./lib/globalApi";

export default async function Home() {
  // 1. Fetch the page
  const page = await wpFetch<any>("pages/2");

  // 2. Get the related news IDs from ACF
  const newsIds: number[] = page?.acf?.select_feature_news || [];

  // 3. Fetch the related news posts (if any IDs exist)
  let featuredNews = [];
  if (newsIds.length > 0) {
    featuredNews = await wpFetch<any[]>(`news?include=${newsIds.join(",")}`);
  }

  return (
    <>
      <Posts />
      <FeaturedCarousel/>

      <main className="container">
        <section className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/feature-poster.jpg"
              alt="John Wick Chapter 4 Poster"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            {/* Info text */}
            <div className="flex items-center gap-2 text-[16px] text-text-muted">
              <img src="/icons/netflix.svg" alt="Netflix" className="h-5 w-5" />
              <span>Netflix</span>
              <span>•</span>
              <span>12 minutes ago</span>
            </div>

            {/* Heading */}
            <h1
              className="
            font-extrabold leading-tight
            text-[36px] md:text-[40px]  2xl:text-[64px]
          "
            >
              Where To Watch 'John Wick: Chapter 4'
            </h1>

            {/* Body text */}
            <p className="text-[26px] text-text-muted leading-relaxed">
              There&apos;s been no official announcement regarding John Wick:
              Chapter 4&apos;s streaming release. However, given it&apos;s a
              Lionsgate film, John Wick: Chapter 4 will eventually be released on
              Starz…
            </p>

            {/* Category + read time */}
            <div className="flex items-center gap-3 text-[16px]">
              <a href="#" className="text-primary hover:underline">
                Movies
              </a>
              <span className="text-text-muted">• 4 min read</span>
            </div>
          </div>
        </section>
      </main>





      <main className="container py-12 space-y-10">
        {/* Headings */}
        <section>
          <h1 className="text-4xl font-extrabold text-primary mb-2">Primary Heading</h1>
          <h2 className="text-2xl font-bold text-link">Link / Accent Heading</h2>
          <p className="text-text-muted mt-2">This is muted body text.</p>
        </section>

        {/* Buttons */}
        <section className="flex flex-wrap gap-4">
          <button className="bg-primary text-primary-fg px-5 py-2 rounded-lg shadow-pop">
            Primary Button
          </button>
          <button className="bg-link text-white px-5 py-2 rounded-lg">
            Secondary / Link Button
          </button>
          <button className="border border-edge bg-surface px-5 py-2 rounded-lg text-text-normal">
            Surface Button
          </button>
        </section>

        {/* Cards */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-edge bg-surface p-6">
            <h3 className="text-xl font-semibold text-primary">Primary Card</h3>
            <p className="text-text-muted mt-2">Background uses <code>bg-surface</code>.</p>
          </div>
          <div className="rounded-xl border border-edge bg-bg p-6">
            <h3 className="text-xl font-semibold text-link">Secondary Card</h3>
            <p className="text-text-normal mt-2">Background uses <code>bg-bg</code>.</p>
          </div>
        </section>

        {/* Links */}
        <section>
          <a href="#" className="text-link hover:text-link-hover text-lg font-medium">
            This is a link (hover to test)
          </a>
        </section>
      </main>
      <header className="site-header">
        <div className="site-header-inner">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="Buletin" className="h-7 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="hover:text-primary" href="/stories">Stories</a>
            <a className="hover:text-primary" href="/creator">Creator</a>
            <a className="hover:text-primary" href="/community">Community</a>
            <a className="hover:text-primary" href="/subscribe">Subscribe</a>
          </nav>
        </div>
      </header>
    </>
  );
}
