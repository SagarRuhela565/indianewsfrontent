
import Media from "../Media/Media";
import NewsCard from "../NewsCard/NewsCard";
import SectionHeader from "../seccomponent/SectionHeader";

type NewsItem = {
    id: string;
    image: string;
    source: string;
    meta: string;         
    title: string;
    excerpt: string;
    category: string;    
    readTime: string;   
    href?: string;
};



export default function LatestNews({latestNews}: {latestNews: any[]}) {

    const items= latestNews;





    console.log("Latest News Data in Component:", latestNews);
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
