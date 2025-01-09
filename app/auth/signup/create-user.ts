'use server'

import { FormError } from '@/app/common/interfaces/form-error.interface'
import { redirect } from 'next/navigation'
import { post } from '@/app/common/util/fetch'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function createUser(
	_prevState: FormError,
	formData: FormData
) {
	const { error } = await post('users', formData)

	if (error) {
		return { error }
	}
	redirect('/')
}
