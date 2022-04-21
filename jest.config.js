module.exports = {
  moduleFileExtensions: ['js', 'css', 'ts', 'tsx', 'json'],
  modulePathIgnorePatterns: ['__generated__'],
  testEnvironment: 'jsdom',
  testRegex: '/__tests__/.*',
    testPathIgnorePatterns: [
    '/node_modules/',
    '/__generated__/',
    '__generated__'
  ],
  transform: {
    "\\.[jt]sx?$": "babel-jest"
  },
};
