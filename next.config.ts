
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/nextjstemtemplate", // Add this line
  allowedDevOrigins: ["0.0.0.0"],
};

