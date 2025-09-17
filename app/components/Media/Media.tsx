// "use client"
import React from "react";
import Image from "next/image";
import { mediaApi } from "@/app/lib/mediaApi";


interface MediaProps {
  mediaId: number;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Media = async ({
  mediaId,
  alt = "Media",
  width = 600,
  height = 400,
  className,
}: MediaProps) => {
  if (!mediaId) {
    return <div className="bg-gray-200 w-full h-[300px] rounded-lg" />;
  }

  // Get the full media object (not just the URL)
  const media = await mediaApi(mediaId);

  if (!media || !media.source_url) {
    return <div className="bg-gray-200 w-full h-[300px] rounded-lg" />;
  }

  return (
    <Image
      src={media.source_url}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Media;
