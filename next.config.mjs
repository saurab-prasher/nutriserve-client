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

  images: {
    // Add the domain from which you want to allow images
    domains: ["therecipecritic.com", "fedandfit.com"],
  },
};

export default nextConfig;
