/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
  experimental: {
    enableUndici: true,
  },
};

module.exports = nextConfig;
