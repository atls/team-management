import { createOAuthUserAuth } from '@octokit/auth-oauth-user'

// @ts-ignore:next-line
import { cookies }             from 'next/headers'
// @ts-ignore:next-line
import { redirect }            from 'next/navigation'

export async function RegistrationServerGet(request: Request) {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')

  let token: string

  if (code) {
    const auth = createOAuthUserAuth({
      clientId: process.env.NEXT_PUBLIC_GH_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GH_CLIENT_SECRET,
      code,
    })

    const authResult = await auth()
    token = authResult.token
  } else {
    throw new Error('auth error')
  }

  if (token) cookies().set('token', token)
  // TODO locales
  else throw new Error('auth error')

  const redirectUrl = new URL(request.url)
  return redirect(redirectUrl.origin)
}
