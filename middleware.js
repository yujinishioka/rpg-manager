import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/characters/')) {
    if (pathname === '/characters/create') {
      return NextResponse.next();
    }

    const idMatch = pathname.match(/^\/characters\/(\d+)$/);
    if (!idMatch) {
      return NextResponse.redirect(new URL('/404', request.url));
    }
  }

  return NextResponse.next();
}
