/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // Disable Next.js image optimization — required for Cloudflare Pages/Edge
    unoptimized: true,
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
