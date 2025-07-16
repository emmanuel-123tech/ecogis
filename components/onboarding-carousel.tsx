"use client"

import { useEffect } from "react"
import { useState, useCallback } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay" // Import Autoplay plugin

interface OnboardingSlideProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  showGetStartedButton: boolean
  onGetStarted?: () => void
}

function OnboardingSlide({
  imageSrc,
  imageAlt,
  title,
  description,
  showGetStartedButton,
  onGetStarted,
}: OnboardingSlideProps) {
  return (
    <div className="flex flex-col items-center justify-between h-full p-6 text-center bg-background">
      <div className="flex-shrink-0 w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg border border-border">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={300}
          height={400}
          className="w-full h-auto object-cover rounded-2xl"
          priority
        />
      </div>
      <div className="mt-8 flex-grow flex flex-col justify-center items-center">
        <h2 className="text-4xl font-serif font-bold text-foreground leading-tight tracking-tight">
          {title.split(" ").map((word, index) => (
            <span key={index} className={index % 2 === 1 ? "italic" : ""}>
              {word}{" "}
            </span>
          ))}
        </h2>
        <p className="mt-4 text-base text-muted-foreground max-w-xs">{description}</p>
      </div>
      <div className="mt-8 w-full max-w-xs space-y-4 flex-shrink-0">
        {showGetStartedButton ? (
          <Button
            className="w-full py-6 text-lg rounded-full bg-brand-green-dark hover:bg-brand-green-dark/90 text-white"
            onClick={onGetStarted}
          >
            Get Started
          </Button>
        ) : (
          <>
            <Button className="w-full py-6 text-lg rounded-full bg-brand-green-dark hover:bg-brand-green-dark/90 text-white">
              Sign up
            </Button>
            <Button
              variant="outline"
              className="w-full py-6 text-lg rounded-full border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark/5 bg-transparent"
            >
              Login
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

interface OnboardingCarouselProps {
  onGetStarted: () => void
  onSkip: () => void // New prop for skip functionality
}

export default function OnboardingCarousel({ onGetStarted, onSkip }: OnboardingCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      imageSrc: "/images/im1.png",
      imageAlt: "Cocoa pods on a branch",
      title: "Source with Confidence",
      description: "Find farms that meet your ESG standards and generate audit-ready reports in seconds",
    },
    {
      imageSrc: "/images/im2.png",
      imageAlt: "Map with two location pins",
      title: "Track Compliance in Real-Time",
      description: "Monitor your supply chain and ensure every purchase aligns with your sustainability goals.",
    },
    {
      imageSrc: "/images/im3.png",
      imageAlt: "Farmer looking at a phone",
      title: "Access Farm Data Seamlessly",
      description: "Gain insights, boost ratings, and advertise your services to grow your business.",
    },
  ]

  const handleGetStarted = useCallback(() => {
    onGetStarted()
  }, [onGetStarted])

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background p-4">
      {/* Skip Button */}
      {current < slides.length - 1 && ( // Only show skip if not on the last slide
        <Button
          variant="ghost"
          className="absolute top-4 right-4 text-muted-foreground hover:bg-accent"
          onClick={onSkip}
        >
          Skip
        </Button>
      )}

      <Carousel
        setApi={setApi}
        className="w-full max-w-md h-full flex flex-col"
        plugins={[
          Autoplay({
            delay: 1000, // Auto-advance every 1 second
            stopOnInteraction: false, // Keep playing even if user interacts
            stopOnLastSlide: true, // Stop autoplay when the last slide is reached
          }),
        ]}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <OnboardingSlide
                {...slide}
                showGetStartedButton={index === slides.length - 1}
                onGetStarted={handleGetStarted}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8 mb-4 space-x-2 flex-shrink-0">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`block h-2 w-2 rounded-full transition-colors duration-300 ${
                current === index ? "bg-brand-green-light" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}
