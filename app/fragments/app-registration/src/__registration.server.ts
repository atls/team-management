import { createOAuthUserAuth } from '@octokit/auth-oauth-user'

// @ts-ignore:next-line
import { cookies }             from 'next/headers'
// @ts-ignore:next-line
import { redirect }            from 'next/navigation'

export async function RegistrationServerGet(request: Request) {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')

  const getPrimaryGithubToken = async (code) => {
    const auth = createOAuthUserAuth({
      clientId: process.env.NEXT_PUBLIC_GH_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GH_CLIENT_SECRET as string,
      code,
    })
    const { token } = await auth()
    return token
  }
  const primaryGithubToken = await getPrimaryGithubToken(code)

  const getSecondaryGithubToken = async (primaryGithubToken) => {
    // TODO scopes in constant
    const auth = createOAuthUserAuth({
      clientType: 'oauth-app',
      clientId: process.env.NEXT_PUBLIC_GH_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GH_CLIENT_SECRET as string,
      token: primaryGithubToken,
      scopes: ['read:user', 'user:email'],
    })
    const authObject = await auth()
    const { token } = authObject
    return token
  }
  const secondaryGithubToken = await getSecondaryGithubToken(primaryGithubToken)

  cookies().set('token', secondaryGithubToken)

  const redirectUrl = new URL(request.url)
  return redirect(redirectUrl.origin)
}
