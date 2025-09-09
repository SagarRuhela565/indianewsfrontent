import Image from "next/image";
import React from "react";

// Define the shape of the logo prop
export type logoItem = {
  url?: string;
  alt?: string;
  title?: string;
  children?: logoItem[];
}

interface CustomLogoProps {
  logoArray: logoItem[];
}

const CustomLogo: React.FC<CustomLogoProps> = ({ logoArray }) => {
  console.log("title", logoArray);

  return (
    <a href="/" className="flex items-center">
      <Image
        src={logoArray.url}
        alt={logoArray.alt || "Logo"}
        className="h-15 w-auto"
        title={logoArray.title || ""}
        width={150}
        height={50}
      />
    </a>
  );
};

export default CustomLogo;
