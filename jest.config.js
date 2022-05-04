module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  clearMocks: true,
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/components/**/*",
    "./src/containers/**/*",
    "./src/pages/**/*",
    "./src/hooks/**/*",
  ],
  coveragePathIgnorePatterns: [
    "node_modules",
    "types.",
    ".css.",
    "testData.",
    "mockdata.",
    "index.ts",
    ".stories.",
    ".skeleton.",
    "./src/components/ErrorBoundary/*",
    "./src/components/ThemeProvider/*",
  ],
  reporters: [
    "default",
    [
      "jest-sonar",
      {
        outputDirectory: ".",
        outputName: "test-results.xml",
      },
    ],
  ],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/style.mock.js",
    "\\.(gif|ttf|eot|svg|woff|woff2)$": "<rootDir>/__mocks__/file.mock.js",
  },
  modulePathIgnorePatterns: [".*__mocks__.*"],
};
