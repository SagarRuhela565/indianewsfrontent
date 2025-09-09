import React from "react";

export interface logoItem {
  src: string;
  alt: string;
}

const CustomLogo: React.FC<{ logo: logoItem[] }> = ({ logo }) => {
  return (
    <div className="logo">
      {logo.map((item, index) => (
        <img key={index} src={item.src} alt={item.alt} className="h-10" />
      ))}
    </div>
  );
};

export default CustomLogo;