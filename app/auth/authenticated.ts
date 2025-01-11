import { cookies } from 'next/headers'

export default async function authenticated() {
	const cookiesInstance = await cookies()
	const authCookie = cookiesInstance.get('Authentication')
	return !!authCookie
}
