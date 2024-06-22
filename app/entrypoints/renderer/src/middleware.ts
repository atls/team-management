import type { NextRequest } from 'next/server'

import { NextResponse }     from 'next/server'

export const middleware = (request: NextRequest) => {
  if (!request.cookies.has('token')) {
    return NextResponse.redirect(new URL('/registration', request.url))
  }
}

export const config = {
  matcher: ['/organizations', '/users'],
}
