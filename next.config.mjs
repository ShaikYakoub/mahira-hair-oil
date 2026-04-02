import createAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = createAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable Next.js image optimization — required for Cloudflare Pages/Edge
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withBundleAnalyzer(nextConfig);
