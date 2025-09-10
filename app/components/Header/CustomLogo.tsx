import Image from "next/image";
import React from "react";

// Define the shape of the logo prop
export type logoItem = {
  url?: string;
  alt?: string;
  title?: string;
  children?: logoItem[];
  width?: number;
  height?: number;
};

interface CustomLogoProps {
  logo: logoItem;
}

const CustomLogo: React.FC<CustomLogoProps> = ({ logo }) => {
  if (!logo) return null;

  return (
    <a href="/" className="flex items-center">
      <Image
        src={logo.url || ""}
        alt={logo.alt || "Logo"}
        className="h-10 sm:h-15 w-auto "
        title={logo.title || ""}
        width={logo.width || 150}
        height={logo.height || 50}
      />
    </a>
  );
};

export default CustomLogo;
