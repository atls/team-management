const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  stream: require.resolve('stream-browserify'),
  buffer: require.resolve('buffer'),
};

config.projectRoot = __dirname;

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
];

module.exports = config;