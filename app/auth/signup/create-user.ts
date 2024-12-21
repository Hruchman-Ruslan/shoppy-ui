'use server'

import { redirect } from 'next/navigation'
import { post } from '@/app/utils/fetch'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function createUser(_prevState: any, formData: FormData) {
	const { error } = await post('users', formData)

	if (error) {
		return { error }
	}
	redirect('/')
}
