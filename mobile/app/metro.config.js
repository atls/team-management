const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

const config = getDefaultConfig(__dirname)

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  stream: require.resolve('stream-browserify'),
  buffer: require.resolve('buffer'),
  '@ui-mobile/layout': path.resolve(__dirname, '../ui-mobile/layout/src'),
}

config.resolver.nodeModulesPaths = [path.resolve(__dirname, 'node_modules')]

config.watchFolders = [
  path.resolve(__dirname, '../screens'),
  path.resolve(__dirname, '../ui-mobile'),
]

module.exports = config
