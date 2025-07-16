"use client"

import { useState } from "react"
import TopHeader from "@/components/common/top-header"
import BottomNavigation from "@/components/common/bottom-navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UserProfileProps {
  userName: string
  userEmail: string
  onTabChange: (tab: "home" | "farmers" | "reports" | "profile") => void
  activeTab: "home" | "farmers" | "reports" | "profile"
  onBack: () => void
  onLogout: () => void
}

export default function UserProfile({
  userName,
  userEmail,
  onTabChange,
  activeTab,
  onBack,
  onLogout,
}: UserProfileProps) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)

  const handleSettingClick = (setting: string) => {
    alert(`Navigating to ${setting} settings.`)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopHeader title="" onBack={onBack} showMenuButton={true} onMenuClick={() => alert("Menu clicked!")} />
      <div className="flex-grow p-6 pb-20">
        {" "}
        {/* Added pb-20 for bottom nav spacing */}
        <div className="flex items-center space-x-4 mb-8">
          <Avatar className="h-20 w-20 border-2 border-brand-green-light shadow-md">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User Avatar" />
            <AvatarFallback className="bg-muted text-foreground">
              {userName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-semibold text-foreground">{userName}</h2>
            <p className="text-muted-foreground">{userEmail}</p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Notification</h3>
          <div className="flex items-center justify-between bg-card p-4 rounded-lg shadow-sm border border-border">
            <div>
              <p className="text-foreground">Push notifications are disabled.</p>
              <p className="text-sm text-muted-foreground">Enable alerts to get updates sent to your phone</p>
            </div>
            <Switch
              checked={notificationsEnabled}
              onCheckedChange={setNotificationsEnabled}
              className="data-[state=checked]:bg-brand-green-dark"
            />
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Settings</h3>
          <div className="bg-card rounded-lg shadow-sm border border-border divide-y divide-border">
            <button
              className="flex items-center justify-between w-full p-4 hover:bg-accent transition-colors"
              onClick={() => handleSettingClick("Personal Information")}
            >
              <span className="text-foreground">Personal Information</span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
            <button
              className="flex items-center justify-between w-full p-4 hover:bg-accent transition-colors"
              onClick={() => handleSettingClick("Change Password")}
            >
              <span className="text-foreground">Change Password</span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
            <button
              className="flex items-center justify-between w-full p-4 hover:bg-accent transition-colors"
              onClick={() => handleSettingClick("Support")}
            >
              <span className="text-foreground">Support</span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
        <div className="w-full max-w-xs mx-auto">
          <Button variant="link" className="w-full py-4 text-lg text-destructive hover:underline" onClick={onLogout}>
            Log out
          </Button>
        </div>
      </div>
      <BottomNavigation activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  )
}
