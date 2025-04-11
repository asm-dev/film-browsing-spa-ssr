import path from "path";
import type { Configuration } from "webpack";

const nextConfig = {
  reactStrictMode: true,
  webpack: (config: Configuration) => {
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        shared: path.resolve(__dirname, "../shared"),
      },
    };
    return config;
  },
};

export default nextConfig;
