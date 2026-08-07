
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  //  basePath: "/shufeltforjp5.com", // Add this line
  allowedDevOrigins: ["0.0.0.0"],
};

