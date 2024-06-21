import { getGithubPrivateKey } from './get-github-private-key.js'

export const checkPrivateKey = async () => {
  const GH_APP_PRIVATE_KEY = await getGithubPrivateKey()
  if (!GH_APP_PRIVATE_KEY) throw new Error('need github app private key')
}
