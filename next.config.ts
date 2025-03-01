import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "flagsapi.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "**"
      },
    ]
  }
};

export default nextConfig;
