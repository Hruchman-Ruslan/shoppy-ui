'use client'

import { ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ReactElement } from 'react'
import darTheme from './dark.theme'
import { AuthContext } from './auth/auth-context'

interface ProvidersProps {
	children: ReactElement[]
	authenticated: boolean
}

export default function Providers({ children, authenticated }: ProvidersProps) {
	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={darTheme}>
				<AuthContext.Provider value={authenticated}>
					{children}
				</AuthContext.Provider>
			</ThemeProvider>
		</AppRouterCacheProvider>
	)
}
