/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/movies/:movieId/settings",
        destination: "/settings",
      },
    ];
  },
};

module.exports = nextConfig;
