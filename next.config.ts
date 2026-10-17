import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  devIndicators: false,
  images: {
    unoptimized: true, // <-- Add this to allow the default <Image> tag to work
  },
};

export default nextConfig;
