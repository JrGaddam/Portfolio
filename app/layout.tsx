import type React from "react"
import "./globals.css"
import { Space_Mono } from "next/font/google"

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata = {
  title: "Futuristic Developer Portfolio",
  description: "An interactive, sci-fi inspired portfolio for a software developer",
    generator: 'v0.dev'
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