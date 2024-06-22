// @ts-ignore:next-line
import { cookies }            from 'next/headers'
// @ts-ignore:next-line
import { redirect }           from 'next/navigation'

import { getGithubAuthToken } from '@globals/utils'

import { COOKIE_EXPIRES }     from './github-auth-cookie-handle.constants.js'

export async function githubAuthCookieHandle(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const token = await getGithubAuthToken(code)
  cookies().set('token', token, { expires: Date.now() + COOKIE_EXPIRES })

  const redirectUrl = new URL(request.url)
  return redirect(redirectUrl.origin)
}
