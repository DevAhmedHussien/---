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
  webpack: (config, { isServer }) => {
    if (isServer) {
      global.performance = global.performance || { now: () => new Date().getTime() };
    }
    return config;
  }
};

module.exports = nextConfig;
