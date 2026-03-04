/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // Allow local /public images and SVGs without strict optimization
    unoptimized: false,
    remotePatterns: [],
  },
  // Dangerously allow production builds to successfully complete even if
  // your project has ESLint errors or TypeScript errors.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
