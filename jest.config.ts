export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  setupFiles: ["./setupTests.ts"],
  testEnvironment: "jsdom",
};
