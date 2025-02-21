import { GH_TOKEN_URL } from './get-github-auth-token.constants.js'

export const getGithubAuthToken = async (code: string) => {
  GH_TOKEN_URL.searchParams.set('client_id', process.env.NEXT_PUBLIC_GH_CLIENT_ID!)
  GH_TOKEN_URL.searchParams.set('client_secret', process.env.NEXT_PUBLIC_GH_CLIENT_SECRET!)
  GH_TOKEN_URL.searchParams.set('code', code)

  const response = await fetch(GH_TOKEN_URL, {
    method: 'post',
    headers: {
      Accept: 'application/json',
    },
  })

  const userAuth = await response.json()

  const { access_token: token } = userAuth

  return token
}
