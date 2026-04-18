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
  testMatch: [
    "<rootDir>/__tests__/**/*.test.ts",
    "<rootDir>/__tests__/**/*.test.tsx",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^public/(.*)$": "<rootDir>/public/$1",
    "^framer-motion$": "<rootDir>/__mocks__/framer-motion.tsx",
    "^d3-scale$": "<rootDir>/__mocks__/d3-scale.ts",
    "^d3-time-format$": "<rootDir>/__mocks__/d3-time-format.ts",
  },
}

export default createJestConfig(customJestConfig)
