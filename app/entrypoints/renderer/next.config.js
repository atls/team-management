import { join } from 'path'
import { dirname } from 'path'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('next').NextConfig} */
export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    externalDir: true,
    outputFileTracingRoot: join(__dirname, './'),
    esmExternals: 'loose',
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (webpackConfig, { webpack, isServer }) => {
    // в названии пакета есть ".js", поэтому меняю регекс
    webpackConfig.plugins.push(
      new webpack.NormalModuleReplacementPlugin(new RegExp(/^(\.{1,2}\/)+\S*\.js$/), function (
        /** @type {{ request: string }} */
        resource
      ) {
        resource.request = resource.request.replace('.js', '')
      })
    )

    // discord.js not resolve zLib-sync without it
    // https://github.com/discordjs/discord.js/issues/9592
    webpackConfig.module.rules.push({
      test: /\.node$/,
      loader: 'node-loader',
    })

    return webpackConfig
  },
  output: 'standalone',
}
