"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TopHeaderProps {
  title?: string
  showBackButton?: boolean
  showMenuButton?: boolean
  onBack?: () => void
  onMenuClick?: () => void
  onGoToLandingPage?: () => void // New prop for navigating to landing page
}

export default function TopHeader({
  title,
  showBackButton = true,
  showMenuButton = true,
  onBack,
  onMenuClick,
  onGoToLandingPage, // Destructure new prop
}: TopHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-background border-b border-border/50 shadow-sm">
      {showBackButton ? (
        <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent" onClick={onBack}>
          <ArrowLeft className="h-6 w-6" />
          <span className="sr-only">Back</span>
        </Button>
      ) : (
        <div className="w-10" /> // Placeholder to maintain spacing
      )}
      {title && <h1 className="text-2xl font-serif font-bold text-foreground">{title}</h1>}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        {showMenuButton && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent" onClick={onMenuClick}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {onGoToLandingPage && <DropdownMenuItem onClick={onGoToLandingPage}>Back to Website</DropdownMenuItem>}
              {/* Other menu items can go here */}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  )
}
