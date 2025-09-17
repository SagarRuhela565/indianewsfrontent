// // components/WpImage.tsx
// import React from "react";
// import Image from "next/image";
// import { wpFetch } from "../../lib/globalApi";

// interface MediaProps {
//   mediaId: number;
//   alt?: string;
//   width?: number;
//   height?: number;
//   className?: string;
// }

// const ClientMedia: React.FC<MediaProps> = async ({ mediaId, alt = "Media", width = 600, height = 400, className = "" }) => {
//   // Fetch media details by ID using wpFetch
//   const media = await wpFetch<any>(`media/${mediaId}`);

//   if (!media?.source_url) {
//     return <div className="bg-gray-200 w-full h-[300px] rounded-lg" />;
//   }

//   return (
//     <Image
//       src={media.source_url}
//       alt={alt}
//       width={width}
//       height={height}
//       className={className}
//     />
//   );
// };

// export default ClientMedia;
