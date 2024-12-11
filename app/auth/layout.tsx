import { Box } from '@mui/material'
import { ReactNode } from 'react'

interface AuthLayoutProps {
	children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<Box className='h-screen flex items-center justify-center'>{children}</Box>
	)
}
