import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Container, CssBaseline } from '@mui/material'
import Header from './header/header'
import Providers from './providers'
import authenticated from './auth/authenticated'

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

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const isAuthenticated = await authenticated()

	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers authenticated={isAuthenticated}>
					<CssBaseline />
					<Header />
					<Container>{children}</Container>
				</Providers>
			</body>
		</html>
	)
}
