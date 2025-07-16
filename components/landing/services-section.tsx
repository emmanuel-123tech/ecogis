"use client"

import { CheckCircle, Leaf, BarChart, Handshake } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <CheckCircle className="h-10 w-10 text-brand-green-dark" />,
      title: "Ethical Sourcing & Verification",
      description: "Connect with verified farmers and suppliers who meet stringent ESG and sustainability standards.",
    },
    {
      icon: <Leaf className="h-10 w-10 text-brand-green-dark" />,
      title: "Real-Time Compliance Tracking",
      description:
        "Monitor your entire supply chain to ensure every transaction aligns with your ethical and green goals.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-brand-green-dark" />,
      title: "Automated Audit Reporting",
      description: "Generate comprehensive, audit-ready reports in seconds, streamlining your compliance processes.",
    },
    {
      icon: <Handshake className="h-10 w-10 text-brand-green-dark" />,
      title: "Farmer Empowerment & Growth",
      description: "Farmers gain valuable insights, boost their ratings, and advertise services to expand their reach.",
    },
  ]

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-serif">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-border"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
