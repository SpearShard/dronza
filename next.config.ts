import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["rockspace.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
