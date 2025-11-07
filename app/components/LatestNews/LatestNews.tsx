import Media from "../Media/Media";
import NewsCard from "../NewsCard/NewsCard";
import SectionHeader from "../seccomponent/SectionHeader";

type NewsItem = {
  id: string;
  href: string;
  title: string;
  excerpt: string;
  source: string;
  meta: string;
  category: string;
  readTime: string;
  featured_media: number;
};

export default function LatestNews({ latestNews }: { latestNews: any[] }) {
  // Transform WordPress posts into NewsCard-friendly data
  const items: NewsItem[] = latestNews.map((post) => {
    // Convert ISO date → readable date format
    const date = new Date(post.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return {
      id: post.id,
      href: post.link || "#",
      title: post.title?.rendered || "Untitled",
      excerpt:
        post.content?.rendered
          ?.replace(/<[^>]+>/g, "") // strip HTML
          ?.slice(0, 120) + "…" || "",
      source: "Admin", // customize or map to post.author name if available
      meta: date,
      category: post.categories?.length ? "Feature" : "News",
      readTime: "5 min read", // static or calculate dynamically later
      featured_media: post.featured_media,
    };
  });

  return (
    <section className="container mt-12 lg:mt-16 xl:mt-20">
      <SectionHeader title="Featured News" url="#" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((n) => (
          <NewsCard key={n.id} item={n} />
        ))}
      </div>
    </section>
  );
}
