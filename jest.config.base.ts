import { join } from 'path'

export default {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testRegex: '(/test/.*.(test|spec)).(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // collectCoverage: true,
  coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?|tsx?)$'],
  verbose: true,
  testEnvironment: 'jest-environment-node',
  globals: {
    'ts-jest': {
      diagnostics: false
      //isolatedModules //https://huafu.github.io/ts-jest/user/config/isolatedModules
    }
  },
  moduleNameMapper: {
    '@lotusengine/(.*)': [join(__dirname, 'packages/$1/src')],
    '(constructs|schemas|sdk|types|core)/src/(.*)': [
      join(__dirname, 'packages/$1/src/$2')
    ]
  },
  modulePaths: ['<rootDir>/src', '<rootDir>/test', '<rootDir>'],
  preset: 'ts-jest'
}
