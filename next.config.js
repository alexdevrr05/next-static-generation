/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 300 * 1000,
  },
};

module.exports = nextConfig;
