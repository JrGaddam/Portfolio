"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import CommandCenter from "@/components/CommandCenter"
import LoadingScreen from "@/components/LoadingScreen"

const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), { ssr: false })

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="h-screen w-screen overflow-hidden bg-black text-green-500">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ParticleBackground />
          <div className="relative z-10">
            <CommandCenter />
          </div>
        </>
      )}
    </main>
  )
}

