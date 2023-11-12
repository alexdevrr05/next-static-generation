/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 500 * 1000,
  },
};

module.exports = nextConfig;
