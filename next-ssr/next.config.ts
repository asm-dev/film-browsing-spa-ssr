import { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        shared: path.resolve(__dirname, "../shared"),
      },
    };

    config.infrastructureLogging = {
      level: "error",
    };

    return config;
  },
};

export default nextConfig;
