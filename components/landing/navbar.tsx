"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Brain } from "lucide-react"
import Image from "next/image"

interface NavbarProps {
  onTryMvp: () => void
}

export default function Navbar({ onTryMvp }: NavbarProps) {
  const handleAiProductClick = () => {
    window.open("https://huggingface.co/spaces/Ebiendele90/cocoa-disease-detector", "_blank", "noopener,noreferrer")
  }

  return (
    <nav className="w-full bg-background/80 backdrop-blur-sm fixed top-0 z-50 border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/images/logo-color.svg" alt="Ecogis Logo" width={40} height={40} className="h-10 w-10" />
          <span className="text-xl font-bold text-foreground font-serif">Ecogis</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#home"
            className="text-foreground hover:text-brand-green-dark transition-colors text-lg font-medium"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-foreground hover:text-brand-green-dark transition-colors text-lg font-medium"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-foreground hover:text-brand-green-dark transition-colors text-lg font-medium"
          >
            Services
          </Link>
          <button
            onClick={handleAiProductClick}
            className="flex items-center gap-2 text-foreground hover:text-brand-green-dark transition-colors text-lg font-medium"
          >
            <Brain className="h-5 w-5" />
            AI Product
          </button>
          <Button
            onClick={onTryMvp}
            className="bg-brand-green-dark hover:bg-brand-green-dark/90 text-white rounded-full px-6 py-2 text-lg"
          >
            Try our MVP
          </Button>
        </div>
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          {/* Mobile menu button can be added here later if needed */}
        </div>
        <div className="hidden md:flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
