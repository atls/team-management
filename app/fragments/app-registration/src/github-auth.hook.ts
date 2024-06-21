// @ts-ignore:next-line
import { useRouter }   from 'next/navigation'

import { GH_AUTH_URL } from './registration.constants.js'

export const githubAuthRedirectHook = (router: typeof useRouter) => {
  console.log('URL AUTH')
  const CURRENT_URL = new URL(window.location.href)

  const GH_CLIENT_ID = process.env.NEXT_PUBLIC_GH_CLIENT_ID as string

  GH_AUTH_URL.searchParams.set('client_id', GH_CLIENT_ID)
  GH_AUTH_URL.searchParams.append('scope', `user:email`)

  console.log('URL AUTH')
  console.log(GH_AUTH_URL.href)

  GH_AUTH_URL.searchParams.set('redirect_uri', `${CURRENT_URL.origin}/registration/getcode`)

  router.replace(GH_AUTH_URL.href)
}
