import { cookies } from 'next/headers'
import { API_URL } from '../constants/api'
import { getErrorMessage } from './errors'

export const getHeaders = async () => {
	const cookiesData = await cookies()
	return {
		Cookie: cookiesData.toString(),
	}
}

export const post = async (path: string, data: FormData | object) => {
	const body = data instanceof FormData ? Object.fromEntries(data) : data
	const headers = await getHeaders()
	const res = await fetch(`${API_URL}/${path}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', ...headers },
		body: JSON.stringify(body),
	})

	const parsedRes = await res.json()

	if (!res.ok) {
		return { error: getErrorMessage(parsedRes) }
	}

	return { error: '', data: parsedRes }
}

export const get = async <T>(path: string, tags?: string[]) => {
	const headers = await getHeaders()
	const res = await fetch(`${API_URL}/${path}`, {
		headers: { ...headers },
		next: { tags },
	})
	return res.json() as T
}
