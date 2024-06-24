// @ts-ignore:next-line
import type { NextRequest } from 'next/server'

// @ts-ignore:next-line
import { NextResponse }     from 'next/server'

export const middleware = (request: NextRequest) => {
  if (!request.cookies.has('token')) {
    return NextResponse.redirect(new URL('/registration', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/organizations', '/users'],
}
