"use client"

import { useState } from "react"
import LoadingScreen from "@/components/loading-screen"
import OnboardingCarousel from "@/components/onboarding-carousel"
import AccountTypeSelection from "@/components/account-type-selection"
import CreateAccountForm from "@/components/auth/create-account-form"
import LoginForm from "@/components/auth/login-form"
import CompanyDetailsForm from "@/components/auth/company-details-form"
import DashboardHome from "@/components/dashboard/dashboard-home"
import FarmersList from "@/components/dashboard/farmers-list"
import ReportsList from "@/components/dashboard/reports-list"
import UserProfile from "@/components/dashboard/user-profile"
import LandingPage from "@/components/landing/landing-page" // Import the new LandingPage

type AppScreen =
  | "landing" // New landing screen
  | "loading"
  | "onboarding"
  | "account-selection"
  | "create-account"
  | "login"
  | "company-details"
  | "dashboard-home"
  | "farmers-list"
  | "reports-list"
  | "user-profile"

interface UserData {
  name: string
  email: string
  password?: string // Added password for client-side demo
  accountType: string | null
  location?: string | null // Added location
}

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("landing") // Start on landing page
  const [loggedInUser, setLoggedInUser] = useState<UserData | null>(null)
  const [registeredUser, setRegisteredUser] = useState<UserData | null>(null) // To store the created user

  const handleTryMvp = () => {
    setCurrentScreen("loading") // Transition to loading screen of the app
  }

  const handleLoadingComplete = () => {
    setCurrentScreen("onboarding")
  }

  const handleGetStarted = () => {
    setCurrentScreen("account-selection")
  }

  const handleSkipOnboarding = () => {
    setCurrentScreen("account-selection")
  }

  const handleAccountTypeSelected = (type: string) => {
    // Store account type temporarily, will be part of loggedInUser later
    setLoggedInUser((prev) => ({ ...prev, accountType: type }) as UserData)
    setCurrentScreen("create-account")
  }

  const handleCreateAccountNext = (email: string, password: string, name: string) => {
    // Simulate account creation and immediate login
    const newUser: UserData = { name, email, password, accountType: loggedInUser?.accountType || "buyer" }
    setRegisteredUser(newUser) // Store the newly registered user
    setLoggedInUser(newUser) // Log in the newly registered user
    setCurrentScreen("company-details")
  }

  const handleLogin = (email: string, password: string) => {
    // Check against registered user first
    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      setLoggedInUser(registeredUser)
      setCurrentScreen("dashboard-home")
      return
    }

    // Fallback to hardcoded test user if no registered user or credentials don't match
    if (email === "test@example.com" && password === "password") {
      setLoggedInUser({ name: "Test User", email: "test@example.com", accountType: "buyer", location: "Nigeria" }) // Default account type and location for test user
      setCurrentScreen("dashboard-home")
    } else {
      alert("Login failed. Please use the credentials you created, or test@example.com / password")
    }
  }

  const handleCompanyDetailsNext = (location: string) => {
    // Update loggedInUser with the location from CompanyDetailsForm
    setLoggedInUser((prev) => ({ ...prev, location: location }) as UserData)
    setCurrentScreen("dashboard-home") // After company details, go to dashboard
  }

  const handleTabChange = (tab: "home" | "farmers" | "reports" | "profile") => {
    if (tab === "home") setCurrentScreen("dashboard-home")
    else if (tab === "farmers") setCurrentScreen("farmers-list")
    else if (tab === "reports") setCurrentScreen("reports-list")
    else if (tab === "profile") setCurrentScreen("user-profile")
  }

  const handleLogout = () => {
    // Reset state to go back to the beginning of the flow
    setCurrentScreen("landing") // Go back to landing page on logout
    setLoggedInUser(null)
    setRegisteredUser(null) // Clear registered user on logout
    // In a real app, you'd clear user session/tokens here
  }

  const handleBack = () => {
    // Simple back logic for the auth flow
    if (currentScreen === "create-account") setCurrentScreen("account-selection")
    else if (currentScreen === "login")
      setCurrentScreen("account-selection") // Back from login goes to account type
    else if (currentScreen === "company-details") setCurrentScreen("create-account") // Back from company details goes to create account
    // For main app screens, back button might not always go to previous screen,
    // but for now, it's just a placeholder.
  }

  const handleGoToLandingPage = () => {
    setCurrentScreen("landing")
  }

  // Render the appropriate screen based on currentScreen state
  const renderScreen = () => {
    switch (currentScreen) {
      case "landing":
        return <LandingPage onTryMvp={handleTryMvp} />
      case "loading":
        return <LoadingScreen onLoaded={handleLoadingComplete} />
      case "onboarding":
        return <OnboardingCarousel onGetStarted={handleGetStarted} onSkip={handleSkipOnboarding} />
      case "account-selection":
        return <AccountTypeSelection onContinue={handleAccountTypeSelected} onBack={handleBack} />
      case "create-account":
        return (
          <CreateAccountForm
            onNext={handleCreateAccountNext}
            onBack={handleBack}
            onSignIn={() => setCurrentScreen("login")}
          />
        )
      case "login":
        return <LoginForm onLogin={handleLogin} onBack={handleBack} />
      case "company-details":
        return <CompanyDetailsForm onNext={handleCompanyDetailsNext} onBack={handleBack} />
      case "dashboard-home":
        return loggedInUser ? (
          <DashboardHome
            userName={loggedInUser.name}
            userLocation={loggedInUser.location || null} // Pass userLocation
            onTabChange={handleTabChange}
            activeTab="home"
          />
        ) : (
          <LoginForm onLogin={handleLogin} onBack={handleBack} /> // Fallback if somehow not logged in
        )
      case "farmers-list":
        return (
          <FarmersList
            onTabChange={handleTabChange}
            activeTab="farmers"
            onBack={() => setCurrentScreen("dashboard-home")}
          />
        )
      case "reports-list":
        return (
          <ReportsList
            onTabChange={handleTabChange}
            activeTab="reports"
            onBack={() => setCurrentScreen("dashboard-home")}
          />
        )
      case "user-profile":
        return loggedInUser ? (
          <UserProfile
            userName={loggedInUser.name}
            userEmail={loggedInUser.email}
            onTabChange={handleTabChange}
            activeTab="profile"
            onBack={() => setCurrentScreen("dashboard-home")}
            onLogout={handleLogout}
          />
        ) : (
          <LoginForm onLogin={handleLogin} onBack={handleBack} /> // Fallback if somehow not logged in
        )
      default:
        return <div className="text-center">Something went wrong.</div>
    }
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-background">
      {renderScreen()}
    </main>
  )
}
