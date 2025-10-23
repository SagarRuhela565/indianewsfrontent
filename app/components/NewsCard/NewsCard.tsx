import Media from "../Media/Media";

// app/components/LatestNews.tsx
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
        image: "/images/news-2.jpg",
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

function NewsCard({
    item,
}: {
    item: NewsItem;
}) {
    return (
        <section className="space-y-3">
            {/* image */}
            <a href={item.href || "#"} className="block overflow-hidden rounded-[1rem]">
                <Media mediaId={58} className="w-full h-auto aspect-square object-center object-cover" />
            </a>

            {/* meta row */}
            <div className="flex items-center gap-2 text-[14px] text-text-muted">
                <Media mediaId={71} className="w-8 h-8 object-cover object-center rounded-full" />
                <span>{item.source}</span>
                <span>•</span>
                <span>{item.meta}</span>
            </div>

            {/* title */}
            <a href={item.href || "#"} className="block">
                <h4 className="text-gray-900 font-extrabold leading-snug text-[22px] sm:text-[24px] 
             line-clamp-2">
                    {item.title}
                </h4>
            </a>

            {/* excerpt */}
            <p className="text-text-muted line-clamp-3">
                {item.excerpt}
            </p>

            {/* footer */}
            <div className="flex items-center gap-3 pt-1 text-[14px]">
                <span className="text-primary">{item.category}</span>
                <span className="text-text-muted">• {item.readTime}</span>
            </div>
        </section>
    );
}

export default function LatestNews() {
    return (
        <section className="container mt-12 lg:mt-16 xl:mt-20">
            <div className="lg:mb-5 mb-3 flex items-center justify-between">
                <h3 className="text-[36px] md:text-[40px] 2xl:text-[64px] font-medium leading-tight f-poppins text-gray-900">
                    Latest News
                </h3>
                <a
                    href="#"
                    className="text-link hover:text-link-hover text-sm font-medium"
                >
                    See all →
                </a>
                
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((n) => (
                    <NewsCard key={n.id} item={n} />
                ))}
            </div>
        </section>
    );
}
