import { getGithubAuthToken } from '@globals/utils'
import { createAppAuth }      from '@octokit/auth-app'

// @ts-ignore:next-line
import { cookies }            from 'next/headers'
// @ts-ignore:next-line
import { redirect }           from 'next/navigation'

export async function githubAuthCookieHandle(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const token = await getGithubAuthToken(code)
  cookies().set('token', token)
  const redirectUrl = new URL(request.url)
  return redirect(redirectUrl.origin)
}
