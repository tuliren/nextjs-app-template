module.exports = {
  testTimeout: 30000,
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/tests/**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        outputPath: 'tests/test-report.html',
      },
    ],
  ],
  verbose: true
};
