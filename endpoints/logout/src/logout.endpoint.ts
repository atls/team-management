import { cookies }  from 'next/headers'
import { redirect } from 'next/navigation'

export const logoutHandle = (request: Request) => {
  console.log('LOGOUT')
  cookies().delete('token')
  const redirectUrl = new URL(request.url)
  return redirect(redirectUrl.origin)
}
