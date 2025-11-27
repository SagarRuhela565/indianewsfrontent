import { mediaApi } from "@/app/lib/mediaApi";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const mediaId = Number(id);
  const media = await mediaApi(mediaId);
  return NextResponse.json(media);
}