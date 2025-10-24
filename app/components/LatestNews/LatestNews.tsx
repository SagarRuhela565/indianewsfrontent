import Media from "../Media/Media";
import NewsCard from "../NewsCard/NewsCard";

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

export default function LatestNews() {
    return (
        <section className="container mt-12 lg:mt-16 xl:mt-20">
            <div className="lg:mb-5 mb-3 flex items-center justify-between">
                <h3 className="text-[36px] md:text-[40px] 2xl:text-[64px] font-medium leading-tight f-poppins text-gray-900">
                    Featured News
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
