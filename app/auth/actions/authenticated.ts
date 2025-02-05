import { cookies } from 'next/headers'
import { AUTHENTICATION_COOKIE } from '../auth-cookie'

export default async function authenticated() {
	const cookiesInstance = await cookies()
	const authCookie = cookiesInstance.get(AUTHENTICATION_COOKIE)?.value
	return !!authCookie
}
