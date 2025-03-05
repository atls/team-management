/* eslint-disable */

// @ts-expect-error:next-line
import { cookies }  from 'next/headers'
// @ts-expect-error:next-line
import { redirect } from 'next/navigation'

export const logoutHandle = (request: Request) => {
  cookies().delete('token')
  const redirectUrl = new URL(request.url)
  return redirect(redirectUrl.origin)
}
