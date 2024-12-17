'use client'

import { Button, Link, Stack, TextField } from '@mui/material'
import NextLink from 'next/link'
import { useActionState } from 'react'
import createUser from './create-user'

export default function Signup() {
	const [state, formAction] = useActionState(createUser, { error: '' })

	return (
		<form action={formAction} className='w-full max-w-xs'>
			<Stack spacing={2}>
				<TextField name='Email' label='Email' variant='outlined' type='email' />
				<TextField
					name='Password'
					label='Password'
					variant='outlined'
					type='password'
				/>
				<Button type='submit' variant='contained'>
					Signup
				</Button>
				<Link component={NextLink} href='/auth/login' className='self-center'>
					Login
				</Link>
			</Stack>
		</form>
	)
}
