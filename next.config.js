/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable built-in optimizations
  compress: true,

  async redirects() {
    return [
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/privacy-policy/", destination: "/privacy", permanent: true },
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/terms-of-service/", destination: "/terms", permanent: true },
    ];
  },
};

module.exports = nextConfig;
