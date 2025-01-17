'use server'

import { FormResponse } from '@/app/common/interfaces/form-response.interface'
import { redirect } from 'next/navigation'
import { post } from '@/app/common/util/fetch'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function createUser(
	_prevState: FormResponse,
	formData: FormData
) {
	const { error } = await post('users', formData)

	if (error) {
		return { error }
	}
	redirect('/')
}
