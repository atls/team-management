import { App } from '@octokit/app'

import fs      from 'fs'

const checkEnvs = () => {
  if (!process.env.NEXT_PUBLIC_GH_CLIENT_ID) throw new Error('need github cliend id')
  if (!process.env.NEXT_PUBLIC_GH_CLIENT_SECRET) throw new Error('need github cliend secret')
}

export const RootLayoutServer = async () => {
  console.log('SERVER SCRIPT ON LAUNCH')

  checkEnvs()

  const privateKeyFilepath = './src/private/atls-team-management-app.2024-06-21.private-key.pem'
  const privateKeyData = await fs.promises.readFile(privateKeyFilepath, { encoding: 'utf8' })

  const app = new App({
    // TODO to env
    appId: 926806,
    // TODO checks on launch
    privateKey: privateKeyData,
    oauth: {
      clientId: process.env.NEXT_PUBLIC_GH_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GH_CLIENT_SECRET as string,
    },
  })

  const { data } = await app.octokit.request('/app')
  console.log('authenticated as %s', data.name)

  for await (const { installation } of app.eachInstallation.iterator()) {
    console.log(installation)
  }
}
