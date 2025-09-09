// lib/api.ts
import "server-only";

const STAGE_URL = process.env.STAGE_URL; // http://supperadmindemo.demo.gurukashiuniversity.in

// Universal fetch helper with caching
export async function wpFetch<T>(endpoint: string, revalidate = 3600): Promise<T> {
  const url = `${STAGE_URL}/wp-json/wp/v2/${endpoint}`;
  const res = await fetch(url, {
    next: { revalidate }, // ISR caching (in seconds)
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${url}`);
  }
  return res.json();
}
