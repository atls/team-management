// @ts-ignore:next-line
import { cookies }  from 'next/headers'
// @ts-ignore:next-line
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')
  cookies().set('code', code)

  const redirectUrl = new URL(request.url)
  return redirect(redirectUrl.origin)
}
