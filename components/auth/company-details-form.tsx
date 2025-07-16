"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import TopHeader from "@/components/common/top-header"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CompanyDetailsFormProps {
  onNext: (location: string) => void // Pass location to onNext
  onBack: () => void
}

export default function CompanyDetailsForm({ onNext, onBack }: CompanyDetailsFormProps) {
  const [companyName, setCompanyName] = useState("")
  const [industry, setIndustry] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Company details:", { companyName, industry, location })
    onNext(location) // Pass location
  }

  const handleUseCurrentLocation = () => {
    alert("Using current location (functionality not implemented).")
    setLocation("Current Location (Simulated)")
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopHeader title="" onBack={onBack} showMenuButton={false} />
      <div className="flex flex-col flex-grow p-6 pt-0">
        <div className="text-left mb-8">
          <h1 className="text-3xl font-serif font-bold text-foreground leading-tight tracking-tight">
            Tell Us About Your Company
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Help us personalize your experience by sharing a few details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
          <div className="space-y-6 flex-grow">
            <div>
              <Label htmlFor="company-name" className="text-foreground">
                Company Name
              </Label>
              <Input
                id="company-name"
                type="text"
                placeholder="Enter company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className="mt-1 bg-card text-foreground border-input focus:ring-ring focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="industry" className="text-foreground">
                Industry
              </Label>
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger className="w-full mt-1 bg-card text-foreground border-input focus:ring-ring focus:border-primary">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent className="bg-popover text-popover-foreground border-border">
                  <SelectItem value="agriculture">Agriculture</SelectItem>
                  <SelectItem value="food-processing">Food Processing</SelectItem>
                  <SelectItem value="logistics">Logistics</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="location" className="text-foreground">
                Location
              </Label>
              <Input
                id="location"
                type="text"
                placeholder="Enter location (e.g., Nigeria, United States)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="mt-1 bg-card text-foreground border-input focus:ring-ring focus:border-primary"
              />
              <Button
                variant="link"
                onClick={handleUseCurrentLocation}
                className="mt-2 text-brand-green-dark hover:underline px-0"
              >
                Use current location
              </Button>
            </div>
          </div>
          <div className="mt-8 w-full max-w-xs mx-auto flex-shrink-0">
            <Button
              type="submit"
              className="w-full py-6 text-lg rounded-full bg-brand-green-dark hover:bg-brand-green-dark/90 text-white"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
