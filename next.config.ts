
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/shufeltforjp26website", // Add this line
  allowedDevOrigins: ["0.0.0.0"],
};

