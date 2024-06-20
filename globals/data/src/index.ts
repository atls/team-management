import { createOAuthUserAuth } from '@octokit/auth-oauth-user'
export const getGithubAccessToken = async (code) => {
  const auth = createOAuthUserAuth({
    clientId: process.env.NEXT_PUBLIC_GH_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_GH_CLIENT_SECRET,
    code,
  })

  const { token } = await auth()
  return token
}
