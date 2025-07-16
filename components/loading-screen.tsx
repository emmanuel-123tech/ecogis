"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onLoaded: () => void
}

export default function LoadingScreen({ onLoaded }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1 // Increment progress
        }
        clearInterval(progressInterval)
        return 100
      })
    }, 20) // Update every 20ms to reach 100% in 2 seconds (100 * 20ms = 2000ms)

    // Simulate loading time and then fade out
    const loadingTimer = setTimeout(() => {
      setIsVisible(false) // Start fade out
      setTimeout(() => {
        onLoaded() // Navigate after fade out
      }, 500) // Match fade-out duration
    }, 2000) // Simulate a 2-second loading time before fade out

    return () => {
      clearInterval(progressInterval)
      clearTimeout(loadingTimer)
    }
  }, [onLoaded])

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-background z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src="/images/logo-color.svg" // Updated to use the colored logo
        alt="Loading Logo"
        width={180}
        height={180}
        className="animate-pulse-subtle"
      />
      <p className="mt-6 text-lg font-medium text-foreground tracking-wide">Loading your experience...</p>

      <div className="w-64 h-2 bg-muted rounded-full mt-8 overflow-hidden">
        <div
          className="h-full bg-brand-green-dark transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{progress}%</p>
    </div>
  )
}
