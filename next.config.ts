import type { NextConfig } from "next";

// Set by the GitHub Actions workflow so the exported site works at
// https://webdarts.github.io/Sereen/ — local dev stays at the root path.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/Sereen" : "",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
