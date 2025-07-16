"use client"

import Navbar from "./navbar"
import HeroSection from "./hero-section"
import AboutSection from "./about-section"
import ServicesSection from "./services-section"
import CtaSection from "./cta-section"
import Footer from "./footer" // Reusing the existing footer component

interface LandingPageProps {
  onTryMvp: () => void
}

export default function LandingPage({ onTryMvp }: LandingPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar onTryMvp={onTryMvp} />
      <main className="flex-grow">
        <HeroSection onTryMvp={onTryMvp} />
        <AboutSection />
        <ServicesSection />
        <CtaSection onTryMvp={onTryMvp} />
      </main>
      <Footer />
    </div>
  )
}
