/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {   
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  trailingSlash: true, // Ensures all static files get exported correctly
};

module.exports = nextConfig;
