const path = require("path");

module.exports = {
    verbose: true,
    coverageThreshold: {
      "global": {
        "branches": 0,
        "functions": 0,
        "lines": 0,
        "statements": 0
      }
    },
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    coverageReporters: ["json", "html"],
    modulePathIgnorePatterns: ["cypress"],
    moduleNameMapper: {
       "\\.(scss|less)$": "identity-obj-proxy",
       "^Components(.*)$": "<rootDir>/src/components$1",
       "^App(.*)$": "<rootDir>/src$1"
    },
    setupFilesAfterEnv: [path.resolve(__dirname, "test/setupTests.js")]
  };