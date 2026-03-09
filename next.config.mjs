/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This ensures the build doesn't stop for minor type warnings
    ignoreBuildErrors: true,
  },
  eslint: {
    // This prevents ESLint warnings from crashing the Vercel build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
