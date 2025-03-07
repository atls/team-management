import type { GithubAuthResponse } from './get-github-auth-token.interfaces.js'

import { GH_TOKEN_URL }            from './get-github-auth-token.constants.js'

export const getGithubAuthToken = async (code: string): Promise<string | null> => {
  GH_TOKEN_URL.searchParams.set('client_id', process.env.NEXT_PUBLIC_GH_CLIENT_ID ?? '')
  GH_TOKEN_URL.searchParams.set('client_secret', process.env.NEXT_PUBLIC_GH_CLIENT_SECRET ?? '')
  GH_TOKEN_URL.searchParams.set('code', code)

  const response = await fetch(GH_TOKEN_URL, {
    method: 'post',
    headers: {
      Accept: 'application/json',
    },
  })

  const userAuth: GithubAuthResponse = await response.json()

  const { access_token: token } = userAuth

  return token
}
