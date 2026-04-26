import nextJs from "next/jest.js"

const createJestConfig = nextJs({
  dir: "./",
})

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  verbose: true,
  // Prevent jest-haste-map from scanning the Next.js build output, which
  // with `output: "standalone"` contains a nested package.json that would
  // collide with the project's own.
  modulePathIgnorePatterns: ["/\\.next/"],
  testMatch: ["**/__tests__/**/*.test.ts", "**/__tests__/**/*.test.tsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^public/(.*)$": "<rootDir>/public/$1",
    "^framer-motion$": "<rootDir>/__mocks__/framer-motion.tsx",
    "^d3-scale$": "<rootDir>/__mocks__/d3-scale.ts",
    "^d3-time-format$": "<rootDir>/__mocks__/d3-time-format.ts",
  },
}

export default createJestConfig(customJestConfig)
