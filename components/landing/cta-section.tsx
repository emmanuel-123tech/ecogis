"use client"

import { Button } from "@/components/ui/button"

interface CtaSectionProps {
  onTryMvp: () => void
}

export default function CtaSection({ onTryMvp }: CtaSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-brand-green-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Ready to Transform Your Supply Chain?</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
          Experience the power of transparency and sustainability with Ecogis. Try our MVP today and join the movement
          towards a more ethical agricultural future.
        </p>
        <Button
          onClick={onTryMvp}
          className="bg-white text-brand-green-dark hover:bg-gray-100 rounded-full px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  )
}
