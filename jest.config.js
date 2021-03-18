module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  coverageDirectory: 'artifacts/coverage/jest',
  testEnvironment: 'node',
  testMatch: [
    '**/test/unit/**/*.spec.ts',
  ],
}
