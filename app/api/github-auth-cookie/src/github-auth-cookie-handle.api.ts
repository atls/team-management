/* eslint-disable */

// @ts-expect-error:next-line
import { cookies }             from 'next/headers'
// @ts-expect-error:next-line
import { redirect }            from 'next/navigation'

import { getGithubAuthToken }  from '@globals/github-hooks'

import { COOKIE_EXPIRES_WEEK } from './github-auth-cookie-handle.constants.js'
import { RU_MESSAGES }         from './github-auth-cookie-handle.messages.js'

export async function githubAuthCookieHandle(request: Request) {
  const REQUEST_URL = new URL(request.url)
  const REQUEST_ORIGIN = REQUEST_URL.origin
  const { searchParams } = REQUEST_URL
  const CODE = searchParams.get('code')

  const REGISTRATION_URL = new URL('/registration', REQUEST_ORIGIN)

  if (CODE) {
    try {
      const TOKEN = await getGithubAuthToken(CODE)

      const TOKEN_COOKIE_NAME = process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME
      cookies().set(TOKEN_COOKIE_NAME!, TOKEN, {
        expires: Date.now() + COOKIE_EXPIRES_WEEK,
      })
    } catch (e: any) {
      console.error(e)
      REGISTRATION_URL.searchParams.set('errorMessage', RU_MESSAGES.tokenError)
      return redirect(REGISTRATION_URL.href)
    }
  }

  return redirect(REQUEST_ORIGIN)
}
