import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import localFont from 'next/font/local'
import './globals.css'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import darTheme from './dark.theme'
import Header from './header/header'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<AppRouterCacheProvider>
					<ThemeProvider theme={darTheme}>
						<CssBaseline />
						<Header />
						<Container>{children}</Container>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
