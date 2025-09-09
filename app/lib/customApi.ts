// lib/customApi.ts
import "server-only";

const STAGE_URL = process.env.STAGE_URL; // http://supperadmindemo.demo.gurukashiuniversity.in

// Universal fetch helper with caching
export async function CustomFetch<T>(endpoint: string, revalidate = 3600): Promise<T> {
  const url = `${STAGE_URL}/wp-json/custom/v1/${endpoint}`;
  const res = await fetch(url, {
    next: { revalidate }, // ISR caching (in seconds)
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch Custom Api: ${url}`);
  }
  return res.json();
}
