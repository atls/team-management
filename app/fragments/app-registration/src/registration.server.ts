import { createOAuthUserAuth } from '@octokit/auth-oauth-user'

// @ts-ignore:next-line
import { cookies }             from 'next/headers'
// @ts-ignore:next-line
import { redirect }            from 'next/navigation'

export async function RegistrationServerGet(request: Request) {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')

  if (!code) {
    throw new Error('auth error; code not recived from github')
  }

  // env checks on root layout
  const auth = createOAuthUserAuth({
    clientId: process.env.NEXT_PUBLIC_GH_CLIENT_ID as string,
    clientSecret: process.env.NEXT_PUBLIC_GH_CLIENT_SECRET as string,
    code,
  })

  const { token } = await auth()
  if (!token) {
    throw new Error('auth error; token not recived from octokit auth func')
  }
  cookies().set('token', token)

  const redirectUrl = new URL(request.url)
  return redirect(redirectUrl.origin)
}
