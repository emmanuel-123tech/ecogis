"use client"

import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
          <Image
            src="/images/full-shot-asian-farmers-cultivating-crop-farm.jpeg" // Updated to the new about image
            alt="Asian farmers cultivating crops in a farm"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
            Our Vision: A Transparent & Ethical Agricultural Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Ecogis, we envision a world where every agricultural product can be traced back to its sustainable
            origins. Our platform is built on the principle of fostering transparency and trust, connecting conscious
            buyers with farmers committed to ethical and environmentally responsible practices.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We empower businesses to make informed sourcing decisions by providing robust tools for real-time compliance
            monitoring, comprehensive audit-ready reporting, and seamless access to critical farm data. Join Ecogis and
            contribute to a more responsible, resilient, and sustainable global food system.
          </p>
        </div>
      </div>
    </section>
  )
}
