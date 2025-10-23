import FeaturedCarousel from "./components/FeaturedCarousel/FeaturedCarousel";
import LatestNews from "./components/LatestNews/LatestNews";
import Media from "./components/Media/Media";
import NewsCard from "./components/NewsCard/NewsCard";
import PageMainBox from "./components/PageMainBox/PageMainBox";
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
      <PageMainBox />
      <LatestNews />
      <NewsCard />

      {/* <Posts /> */}
      {/* <FeaturedCarousel /> */}

      <main className="container">

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
