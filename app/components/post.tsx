// app/components/Posts.tsx
import { wpFetch } from "../lib/globalApi";

export default async function Posts() {
  const posts = await wpFetch<any[]>("posts?per_page=5");

  return (
    <div>
      <h2 className="text-xl font-bold">Latest Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
