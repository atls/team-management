const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

const config = getDefaultConfig(__dirname)

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  stream: require.resolve('stream-browserify'),
  buffer: require.resolve('buffer')
}

config.resolver.nodeModulesPaths = [path.resolve(__dirname, 'node_modules')]

config.watchFolders = [
  path.resolve(__dirname, '../screens'),
  path.resolve(__dirname, '../ui-mobile'),
]

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName.startsWith('@ui-mobile')) {
    const modulePath = moduleName.replace('@ui-mobile', path.resolve(__dirname, '../ui-mobile'));
    return context.resolveRequest(context, modulePath, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
}

module.exports = config
