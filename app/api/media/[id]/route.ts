import { mediaApi } from "@/app/lib/mediaApi";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const mediaId = Number(params.id);
  const media = await mediaApi(mediaId);
  return NextResponse.json(media);
}