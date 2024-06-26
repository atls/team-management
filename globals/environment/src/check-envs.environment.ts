export const checkEnvs = () => {
  if (!process.env.NEXT_PUBLIC_GH_CLIENT_ID) throw new Error('need github cliend id')
  if (!process.env.NEXT_PUBLIC_GH_CLIENT_SECRET) throw new Error('need github cliend secret')
  if (!process.env.GH_APP_ID) throw new Error('need github app id')
  if (!process.env.GH_APP_PRIVATE) throw new Error('need github app private key')
}
