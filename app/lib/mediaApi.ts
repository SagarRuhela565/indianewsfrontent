// lib/api.ts
import "server-only";

const STAGE_URL = process.env.STAGE_URL; // http://supperadmindemo.demo.gurukashiuniversity.in

// Fetches the media object by ID and returns the image URL (or null if not found)
export async function mediaApi(mediaId: number, revalidate = 3600): Promise<any | null> {
  if (!STAGE_URL) {
    throw new Error("STAGE_URL environment variable is not set!");
  }
  const url = `${STAGE_URL}/wp-json/wp/v2/media/${mediaId}`;
  const res = await fetch(url, {
    next: { revalidate }, // ISR caching (in seconds)
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}
