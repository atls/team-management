import type { NextRequest } from 'next/server'

import { NextResponse }     from 'next/server'

export const middleware = (request: NextRequest): NextResponse => {
  const TOKEN_COOKIE_NAME = process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME || ''
  if (!request.cookies.has(TOKEN_COOKIE_NAME)) {
    return NextResponse.redirect(new URL('/registration', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/organizations', '/members'],
}
