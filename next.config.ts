import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/quietude",
        destination: "/jing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
