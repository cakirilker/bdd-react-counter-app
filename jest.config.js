const { mapValues, mapKeys } = require('lodash');
const escapeStringRegexp = require('escape-string-regexp');
const { _moduleAliases } = require('./package.json');

const toRegex = alias => `^${escapeStringRegexp(alias)}(.*)$`;

// // Maps _moduleAliases in package.json to Jest's regex format that it can read
const moduleAliasesMap = mapValues(mapKeys(_moduleAliases, (_, alias) => toRegex(alias)), path => `<rootDir>/${path}/$1`);

const cssFiles = '^.+\\.(css|less|scss)$';
const staticFiles = '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$';

// jest.config.js
// const { defaults } = require('jest-config');

module.exports = {
  // ...
  cache: false,
  clearMocks: true,
  errorOnDeprecated: true,
  notifyMode: 'failure',
  moduleFileExtensions: ['js', 'jsx', 'scss'],
  rootDir: process.cwd(),
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    [staticFiles]: '<rootDir>/__mocks__/fileMock.js',
    [cssFiles]: 'identity-obj-proxy',
    ...moduleAliasesMap
  },
  unmockedModulePathPatterns: ['<rootDir>/node_modules'],
  // ...
};