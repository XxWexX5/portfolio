import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'proud-book-588e97a674.media.strapiapp.com',
      },
    ],
  },
};

export default nextConfig;
