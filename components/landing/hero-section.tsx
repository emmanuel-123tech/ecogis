"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onTryMvp: () => void
}

export default function HeroSection({ onTryMvp }: HeroSectionProps) {
  const heroImages = [
    "/images/african-man-harvesting-vegetables.jpeg",
    "/images/african-man-harvesting-vegetables-1.jpeg",
    "/images/medium-shot-farmers-with-smartphone.jpeg",
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 3000) // 3 seconds for auto-scroll

    return () => clearInterval(interval)
  }, [heroImages.length])

  const handleDotClick = useCallback((index: number) => {
    setCurrentImageIndex(index)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full py-20 md:py-32 lg:py-48 text-white overflow-hidden flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${heroImages[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.7s ease-in-out", // Smooth transition for background image
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center h-full justify-between">
        {/* Top content */}
        <div className="flex flex-col items-center text-center pt-20 md:pt-32 lg:pt-48">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg font-serif animate-fade-in-up">
            Empowering Sustainable Supply Chains
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-10 opacity-90 animate-fade-in-up delay-200">
            Ecogis: Using technology, AI and Data to improve Farmers productivity and unlock new export market with
            compliant data
          </p>
        </div>

        {/* Bottom content - Button and Dots */}
        <div className="flex flex-col items-center pb-16">
          {" "}
          {/* Added padding-bottom to lift button */}
          <Button
            onClick={onTryMvp}
            className="bg-white text-brand-green-dark hover:bg-gray-100 rounded-full px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400"
          >
            Explore the Platform
          </Button>
          {/* Pagination Dots */}
          <div className="mt-8 flex space-x-2">
            {" "}
            {/* Margin-top to separate from button */}
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  currentImageIndex === index ? "bg-white" : "bg-gray-400 hover:bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
