import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    // Invite-link page for the Kono & Mylo app: static file in public/konoandmylo/
    return [{ source: "/konoandmylo", destination: "/konoandmylo/index.html" }];
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
