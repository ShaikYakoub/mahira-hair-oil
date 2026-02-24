/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow local /public images and SVGs without strict optimization
    unoptimized: false,
    remotePatterns: [],
  },
};

export default nextConfig;
