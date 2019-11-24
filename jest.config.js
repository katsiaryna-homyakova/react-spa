const path = require("path");

module.exports = {
    verbose: true,
    coverageThreshold: {
      "global": {
        "branches": 60,
        "functions": 60,
        "lines": 60,
        "statements": 60
      }
    },
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    coverageReporters: ["json", "html"],
    modulePathIgnorePatterns: ["cypress"],
    moduleNameMapper: {
       "\\.(scss|less)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: [path.resolve(__dirname, "test/setupTests.js")]
  };