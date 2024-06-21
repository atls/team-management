import { getGithubPrivateKey } from '@globals/utils'
import { createAppAuth }       from '@octokit/auth-app'

export const getGithubAuthToken = async (code: string) => {
  const auth = createAppAuth({
    appId: process.env.GH_APP_ID,
    privateKey: await getGithubPrivateKey,
    clientId: process.env.NEXT_PUBLIC_GH_CLIENT_ID as string,
    clientSecret: process.env.NEXT_PUBLIC_GH_CLIENT_SECRET as string,
  })

  const userAuthentication = await auth({ type: 'oauth-user', code: code })
  const { token } = userAuthentication
  return token
}
