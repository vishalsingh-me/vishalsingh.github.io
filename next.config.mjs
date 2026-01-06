import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const isPages = process.env.GITHUB_ACTIONS === "true";

// Allow explicit override via env (useful for GitHub Pages project sites)
const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH;

// Repo name from GitHub Actions, used for project sites like /my-repo
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repo.endsWith(".github.io");

// Only set basePath for project sites (or when explicitly provided)
const basePath =
  explicitBasePath ?? (isPages && !isUserSite && repo ? `/${repo}` : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],

  // Static export for GitHub Pages
  output: "export",
  trailingSlash: true,

  // Needed so assets work under /<repo> on Pages
  basePath,
  assetPrefix: basePath,

  images: {
    // Required for export (no Next image optimizer on Pages)
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },

  // Server Actions must be removed for GitHub Pages
  experimental: {
    // keep empty or remove entirely
  },
};

export default withMDX(nextConfig);
