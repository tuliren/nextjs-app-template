module.exports = {
  testTimeout: 30000,
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/tests/**/*.test.ts'],
  transform: {
    // rootDir + incremental:false keep ts-jest's emit layout unambiguous under
    // TypeScript 6 (avoids TS5011); the base tsconfig sets noEmit/incremental
    // for editor + `tsc --noEmit` type-checking.
    '^.+\\.ts$': ['ts-jest', { tsconfig: { rootDir: '.', incremental: false } }],
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
