import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Limit linting to key project directories to avoid noise
    dirs: ["src", "__tests__", "e2e", "public"],
    // Skip Next.js lint during builds; use ESLint CLI in CI
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
