"use client"

import { useState, useMemo } from "react" // Import useMemo
import TopHeader from "@/components/common/top-header"
import BottomNavigation from "@/components/common/bottom-navigation"
import { Input } from "@/components/ui/input"
import { Search, ArrowUpRight, ChevronDown, MapPin } from "lucide-react"
import Image from "next/image"

interface DashboardHomeProps {
  userName: string
  userLocation: string | null
  onTabChange: (tab: "home" | "farmers" | "reports" | "profile") => void
  activeTab: "home" | "farmers" | "reports" | "profile"
}

// Define lists of cities/states
const nigerianCitiesStates = [
  "Lagos",
  "Abuja",
  "Kano",
  "Ibadan",
  "Port Harcourt",
  "Kaduna",
  "Benin City",
  "Enugu",
  "Maiduguri",
  "Jos",
]

const usCitiesStates = [
  "California",
  "Texas",
  "Florida",
  "New York",
  "Illinois",
  "Pennsylvania",
  "Ohio",
  "Georgia",
  "North Carolina",
  "Michigan",
]

export default function DashboardHome({ userName, userLocation, onTabChange, activeTab }: DashboardHomeProps) {
  const [showMoreAnalyses, setShowMoreAnalyses] = useState(false)

  const handleMenuClick = () => {
    alert("Menu clicked!")
  }

  const generateLocationStats = useMemo(() => {
    const normalizedLocation = userLocation?.toLowerCase()
    let locations: string[] = []

    if (normalizedLocation?.includes("nigeria")) {
      locations = nigerianCitiesStates
    } else if (normalizedLocation?.includes("united states") || normalizedLocation?.includes("usa")) {
      locations = usCitiesStates
    } else if (userLocation) {
      // For any other specific location, just use it as the primary entry
      locations = [userLocation, `Region A`, `Region B`, `Region C`, `Region D`, `Region E`]
    } else {
      // Default generic locations if no userLocation is provided
      locations = ["City A", "City B", "City C", "City D", "City E", "City F"]
    }

    // Shuffle and pick the first 6, or use all if less than 6
    const shuffled = locations.sort(() => 0.5 - Math.random())
    const selectedLocations = shuffled.slice(0, 6)

    return selectedLocations.map((loc) => `${loc} ${Math.floor(Math.random() * 50) + 10} farmers`) // Random farmers count
  }, [userLocation]) // Re-generate only when userLocation changes

  const renderMap = () => {
    const normalizedLocation = userLocation?.toLowerCase()

    if (normalizedLocation?.includes("nigeria")) {
      return (
        <Image
          src="/images/nigeria-map.png"
          alt="Map of Nigeria"
          width={250}
          height={200}
          className="w-full max-w-[250px] h-auto"
          priority
        />
      )
    } else if (normalizedLocation?.includes("united states") || normalizedLocation?.includes("usa")) {
      return (
        <Image
          src="/images/usa-map.png"
          alt="Map of United States"
          width={250}
          height={150}
          className="w-full max-w-[250px] h-auto"
          priority
        />
      )
    } else if (userLocation) {
      // Display the actual location text for any other input
      return (
        <div className="flex flex-col items-center justify-center h-[150px] w-full max-w-[250px] text-center bg-muted/20 rounded-lg border border-border text-foreground">
          <MapPin className="h-10 w-10 text-brand-green-dark mb-2" />
          <p className="text-lg font-semibold">{userLocation}</p>
          <p className="text-sm text-muted-foreground">Location Overview</p>
        </div>
      )
    } else {
      // Default placeholder if no location is specified
      return (
        <div className="flex flex-col items-center justify-center h-[150px] w-full max-w-[250px] text-center bg-muted/20 rounded-lg border border-border text-muted-foreground">
          <MapPin className="h-10 w-10 mb-2" />
          <p className="text-sm">No location specified</p>
        </div>
      )
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopHeader title="" showBackButton={false} showMenuButton={true} onMenuClick={handleMenuClick} />
      <div className="flex-grow p-6 pb-20">
        {" "}
        {/* Added pb-20 for bottom nav spacing */}
        <h1 className="text-3xl font-serif font-bold text-foreground leading-tight tracking-tight">
          Hi, <span className="italic">{userName}</span>
        </h1>
        <p className="text-base text-muted-foreground">Welcome back!</p>
        <div className="relative mt-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search farmers by location, crop type"
            className="pl-10 pr-4 py-2 rounded-full border border-input bg-card text-foreground focus:ring-ring focus:border-primary"
          />
        </div>
        <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">Your Ethical Sourcing Hub</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card p-4 rounded-lg flex flex-col items-start justify-between min-h-[120px] shadow-sm border border-border hover:bg-accent/50 transition-colors cursor-pointer">
            <span className="text-lg font-semibold text-foreground">Add Farmer</span>
            <ArrowUpRight className="text-brand-green-dark h-6 w-6 self-end" />
          </div>
          <div className="bg-card p-4 rounded-lg flex flex-col items-start justify-between min-h-[120px] shadow-sm border border-border hover:bg-accent/50 transition-colors cursor-pointer">
            <span className="text-lg font-semibold text-foreground">Add Transaction</span>
            <ArrowUpRight className="text-brand-green-dark h-6 w-6 self-end" />
          </div>
        </div>
        <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">Analyses</h2>
        <div className="space-y-4">
          <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
            <p className="text-sm text-muted-foreground">Total Farmers Sourced From</p>
            <p className="text-lg font-semibold text-foreground">You are sourcing from 25 farmers.</p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
            <p className="text-sm text-muted-foreground">Percentage of Compliant Farmers</p>
            <p className="text-lg font-semibold text-foreground">92% of your farmers are fully ESG compliant.</p>
          </div>

          {/* Users in different states chart */}
          <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-foreground">Users in different states</h3>
              <button
                onClick={() => setShowMoreAnalyses(!showMoreAnalyses)}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Expand{" "}
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${showMoreAnalyses ? "rotate-180" : ""}`} />
              </button>
            </div>
            <div className="mt-4 flex justify-center">{renderMap()}</div>
            <div className="grid grid-cols-2 gap-2 mt-4 text-sm text-muted-foreground">
              {generateLocationStats.map((stat, i) => (
                <div key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full mr-2" />
                  {stat}
                </div>
              ))}
            </div>
          </div>

          {showMoreAnalyses && (
            <div className="bg-card p-4 rounded-lg shadow-sm border border-border mt-4">
              <h3 className="text-lg font-semibold text-foreground">Certified vs. Non-Certified Farmers</h3>
              <div className="mt-4 flex justify-center">
                {/* Placeholder for circular progress chart */}
                <svg width="150" height="150" viewBox="0 0 100 100" className="w-full max-w-[150px] h-auto">
                  <circle cx="50" cy="50" r="40" stroke="hsl(var(--muted))" strokeWidth="10" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#60A5FA" // Blue for certified
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="180 251.2" // Example: 70% certified
                    strokeDashoffset="-45"
                    transform="rotate(-90 50 50)"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#FBBF24" // Orange for non-certified
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="70 251.2" // Example: 30% non-certified
                    strokeDashoffset="135"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <div className="flex justify-center gap-4 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#60A5FA] rounded-full mr-2" /> Certified
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#FBBF24] rounded-full mr-2" /> Non-Certified
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <BottomNavigation activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  )
}
