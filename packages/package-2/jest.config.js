/** @type {import('jest').Config} */
module.exports = {
  collectCoverageFrom: ["src/**/*.js"],
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text", "json"],
};
