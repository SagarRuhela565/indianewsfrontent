"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface MediaProps {
  mediaId: number;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Media: React.FC<MediaProps> = ({
  mediaId,
  alt = "Media",
  width = 600,
  height = 400,
  className,
}) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!mediaId) return;
    fetch(`/api/media/${mediaId}`)
      .then((res) => res.json())
      .then((media) => {
        setSrc(media?.source_url || null);
      });
  }, [mediaId]);

  if (!src) {
    // return <div className="bg-gray-200 w-full h-[300px] rounded-lg" />;
    return "";

  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Media;
