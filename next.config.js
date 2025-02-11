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
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     global.performance = global.performance || { now: () => new Date().getTime() };
  //   }
  //   return config;
  // },
  // experimental: {
  //   outputFileTracingIncludes: {
  //     '*': ['./public/yandex_309d527f9b6b86d9.html']
  //   }}
};

module.exports = nextConfig;
