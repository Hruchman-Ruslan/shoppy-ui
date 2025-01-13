import { NextRequest } from 'next/server'
import { unauthenticatedRoutes } from './app/common/constants/routes'
import { AUTHENTICATION_COOKIE } from './app/auth/auth-cookie'

export function middleware(request: NextRequest) {
	const authCookie = request.cookies.get(AUTHENTICATION_COOKIE)?.value

	if (
		!authCookie &&
		!unauthenticatedRoutes.some(route =>
			request.nextUrl.pathname.startsWith(route.path)
		)
	) {
		return Response.redirect(new URL('/auth/login', request.url))
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)'],
}
