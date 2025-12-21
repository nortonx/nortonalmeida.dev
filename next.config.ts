import type { NextConfig } from "next";
import { version } from "./package.json";

const nextConfig: NextConfig = {
	env: {
		NEXT_PUBLIC_APP_VERSION: version,
	},
	/* config options here */
	eslint: {
		// Limit linting to key project directories to avoid noise
		dirs: ["src", "__tests__", "e2e", "public"],
		// Skip Next.js lint during builds; use ESLint CLI in CI
		ignoreDuringBuilds: true,
	},
	output: "standalone",
};

export default nextConfig;
