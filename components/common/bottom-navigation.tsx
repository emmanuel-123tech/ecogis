"use client"

import { Home, Tractor, FileText, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface BottomNavigationProps {
  activeTab: "home" | "farmers" | "reports" | "profile"
  onTabChange: (tab: "home" | "farmers" | "reports" | "profile") => void
}

export default function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const navItems = [
    { name: "Home", icon: Home, tab: "home" },
    { name: "Farmers", icon: Tractor, tab: "farmers" },
    { name: "Reports", icon: FileText, tab: "reports" },
    { name: "Profile", icon: User, tab: "profile" }, // Using User icon for profile for now
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg flex justify-around items-center h-16 px-2 z-40">
      {navItems.map((item) => (
        <Button
          key={item.tab}
          variant="ghost"
          className={`flex flex-col items-center justify-center h-full w-full text-sm font-medium ${
            activeTab === item.tab ? "text-brand-green-dark" : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => onTabChange(item.tab as "home" | "farmers" | "reports" | "profile")}
        >
          {item.tab === "profile" ? (
            <Image
              src="/placeholder.svg?height=24&width=24" // Placeholder for profile image
              alt="Profile"
              width={24}
              height={24}
              className={`rounded-full ${activeTab === item.tab ? "border-2 border-brand-green-dark" : ""}`}
            />
          ) : (
            <item.icon className="h-6 w-6 mb-1" />
          )}
          <span className="sr-only sm:not-sr-only">{item.name}</span>
        </Button>
      ))}
    </div>
  )
}
