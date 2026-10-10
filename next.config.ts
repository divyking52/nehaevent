import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nehaevent.com",
      },
    ],
  },
};

export default nextConfig;
