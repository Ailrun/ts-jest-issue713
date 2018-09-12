module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  errorOnDeprecated: true,
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  moduleFileExtensions: [
    'js', 'jsx', 'json', 'ts', 'tsx',
  ],
  rootDir: './',
  testMatch: [
    '<rootDir>/test/**/*.ts',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
