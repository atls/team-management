import { createAppAuth } from '@octokit/auth-app'

import fs                from 'fs'
// @ts-ignore:next-line
import { cookies }       from 'next/headers'
// @ts-ignore:next-line
import { redirect }      from 'next/navigation'

export async function RegistrationServerGet(request: Request) {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')

  const privateKeyFilepath = './src/private/atls-team-management-app.2024-06-21.private-key.pem'
  const privateKeyData = await fs.promises.readFile(privateKeyFilepath, { encoding: 'utf8' })

  const auth = createAppAuth({
    // TODO to env
    appId: 926806,
    // TODO checks on launch
    privateKey: privateKeyData,
    clientId: process.env.NEXT_PUBLIC_GH_CLIENT_ID as string,
    clientSecret: process.env.NEXT_PUBLIC_GH_CLIENT_SECRET as string,
  })

  const userAuthentication = await auth({ type: 'oauth-user', code: code })

  console.log(userAuthentication)
  const { token } = userAuthentication

  cookies().set('token', token)

  const redirectUrl = new URL(request.url)
  return redirect(redirectUrl.origin)
}
