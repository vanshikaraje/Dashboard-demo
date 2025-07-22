// File: app/layout.js

import { Inter } from 'next/font/google'
import './globals.css' // ✅ Correct relative path

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lama Dev Next.js Admin Dashboard',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
