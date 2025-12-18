module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/cypress/'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/jest-style-mock.ts'
  },
  moduleFileExtensions: ['ts', 'js', 'html', 'svg', 'cjs'],
  transform: {
    '^.+\\.(ts|mjs|js)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json'
      }
    ],
    '^.+\\.(html|svg)$': '<rootDir>/jest-html-transform.cjs'
  }
};
