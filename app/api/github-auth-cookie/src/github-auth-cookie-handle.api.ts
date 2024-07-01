// @ts-ignore:next-line
import { cookies }             from 'next/headers'
// @ts-ignore:next-line
import { redirect }            from 'next/navigation'

import { getGithubAuthToken }  from '@globals/data'

import { COOKIE_EXPIRES_WEEK } from './github-auth-cookie-handle.constants.js'

export async function githubAuthCookieHandle(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if (code) {
    try {
      const token = await getGithubAuthToken(code)

      const { TOKEN_COOKIE_NAME } = process.env
      cookies().set(TOKEN_COOKIE_NAME as string, token, {
        expires: Date.now() + COOKIE_EXPIRES_WEEK,
      })

      const requestUrl = new URL(request.url)
      return redirect(requestUrl.origin)
    } catch (e) {
      console.error(e)
      throw new Error('github auth TOKEN hasnt recived')
    }
  }

  const requestUrl = new URL(request.url)
  const registratoinUrl = new URL(requestUrl.origin, '/registration')
  return redirect(registratoinUrl.href)
}
