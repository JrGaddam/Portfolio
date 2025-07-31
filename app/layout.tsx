import type React from "react"
import "./globals.css"
import { Space_Mono } from "next/font/google"

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata = {
  title: "Jayanth Reddy Gaddam - Portfolio",
  description: "Computer Science Student at University of Texas at Arlington",
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  )
}



import './globals.css'