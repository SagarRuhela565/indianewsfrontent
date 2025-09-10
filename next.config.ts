import type { NextConfig } from "next";

// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.MAIN_STAGE_URL, // use env value
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: process.env.MAIN_STAGE_URL,
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
