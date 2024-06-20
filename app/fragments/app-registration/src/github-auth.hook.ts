// @ts-ignore:next-line
import { useRouter }        from 'next/navigation'

import { GH_AUTH_BASE_URL } from './registration.constants.js'

export const githubAuthRedirectHook = (router: typeof useRouter) => {
  let gitHubAuthUrl = new URL('', GH_AUTH_BASE_URL)
  let currentUrl = new URL(window.location.href)

  const NEXT_PUBLIC_GH_CLIENT_ID = process.env.NEXT_PUBLIC_GH_CLIENT_ID

  if (!NEXT_PUBLIC_GH_CLIENT_ID) throw new Error('need github cliend id')
  gitHubAuthUrl.searchParams.set('client_id', NEXT_PUBLIC_GH_CLIENT_ID)

  gitHubAuthUrl.searchParams.set('redirect_uri', `${currentUrl.origin}/registration/getcode`)

  router.replace(gitHubAuthUrl.href)
}
