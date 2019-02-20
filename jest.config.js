const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  // This is the only part which you can keep
  // from the above linked tutorial's config:
  cacheDirectory: '.jest/cache',
}
// const { jsWithBabel: tsjPreset } = require('ts-jest/presets')

// module.exports = {
//   ...tsjPreset,
//   preset: 'react-native',
//   globals: {
//     'ts-jest': {
//       babelConfig: true,
//       diagnostics: false,
//     },
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// collectCoverage: true,
// coverageThreshold: {
//   global: {
//     branches: 100,
//     functions: 100,
//     lines: 100,
//     statements: 100,
//   },
// },
//   transform: {
//     ...tsjPreset.transform,
//   },
//   testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
//   cacheDirectory: '.jest/cache',
// }
