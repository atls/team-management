// @ts-expect-error:next-line
import type { useRouter } from 'next/navigation'

import { GH_AUTH_URL }    from './registration.constants.js'
import { GH_AUTH_SCOPES } from './registration.constants.js'

export const githubAuthRedirectHook = (router: typeof useRouter) => {
  const CURRENT_URL = new URL(window.location.href)

  const GH_CLIENT_ID = process.env.NEXT_PUBLIC_GH_CLIENT_ID!

  GH_AUTH_URL.searchParams.set('client_id', GH_CLIENT_ID)
  GH_AUTH_URL.searchParams.set('scope', GH_AUTH_SCOPES)

  GH_AUTH_URL.searchParams.set('redirect_uri', `${CURRENT_URL.origin}/api/github-auth-cookie`)

  router.replace(GH_AUTH_URL.href)
}
