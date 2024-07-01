// @ts-ignore:next-line
import type { NextRequest } from 'next/server'

// @ts-ignore:next-line
import { NextResponse }     from 'next/server'

export const middleware = (request: NextRequest) => {
  const { TOKEN_COOKIE_NAME } = process.env
  if (!request.cookies.has(TOKEN_COOKIE_NAME as string)) {
    return NextResponse.redirect(new URL('/registration', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/organizations', '/users'],
}
