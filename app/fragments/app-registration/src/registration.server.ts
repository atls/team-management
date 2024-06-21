import { createAppAuth } from '@octokit/auth-app'

// @ts-ignore:next-line
import { cookies }       from 'next/headers'
// @ts-ignore:next-line
import { redirect }      from 'next/navigation'

export async function RegistrationServerGet(request: Request) {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')

  const auth = createAppAuth({
    appId: 1,
    privateKey: '-----BEGIN PRIVATE KEY-----\n...',
    clientId: process.env.NEXT_PUBLIC_GH_CLIENT_ID as string,
    clientSecret: process.env.NEXT_PUBLIC_GH_CLIENT_SECRET as string,
  })

  const userAuthentication = await auth({ type: 'app' })
  // const userAuthentication = await auth({ type: 'oauth-user', code: code })

  const appAuthentication = await auth({ type: 'app' })
  console.log(appAuthentication)

  cookies().set('token', 'token')

  const redirectUrl = new URL(request.url)
  return redirect(redirectUrl.origin)
}
