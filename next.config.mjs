/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // Rewrites all API requests to you Express server
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
