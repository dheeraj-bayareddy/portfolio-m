import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  agentRules: false,
  allowedDevOrigins: ["192.168.8.135"],
  devIndicators: false,
};

export default nextConfig;
