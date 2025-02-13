import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
    title: 'TechSonix - Blockchain & Web Development Solutions',
    description: 'Professional blockchain and web development services by TechSonix',
    icons: {
        icon: '/images/TechSonix.Icon.png',
        apple: '/images/TechSonix.Icon.png',
    },
    manifest: '/manifest.json',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/images/TechSonix.Icon.png" />
                <link rel="apple-touch-icon" href="/images/TechSonix.Icon.png" />
            </head>
            <body>{children}</body>
        </html>
    )
} 