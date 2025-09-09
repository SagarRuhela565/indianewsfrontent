import React from "react";
import { CustomFetch } from "../lib/customApi";

const NewsPage = async () => {
  // Server-side fetch for news data
  const newsData = await CustomFetch("news");

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-2xl font-bold mb-4">Latest News</h1>
      {newsData && newsData.length > 0 ? (
        <ul className="space-y-4">
          {newsData.map((newsItem) => (
            <li key={newsItem.id} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{newsItem.title}</h2>
              <p>{newsItem.description}</p>
              <a href={newsItem.link} className="text-blue-500">
                Read more
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news available at the moment.</p>
      )}
    </div>
  );
};

export default NewsPage;