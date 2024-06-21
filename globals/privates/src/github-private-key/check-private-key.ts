import { GH_APP_PRIVATE_KEY } from './github-private-key.js'

export const checkPrivateKey = async () => {
  if (!GH_APP_PRIVATE_KEY) throw new Error('need github app private key')
}
