"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import TopHeader from "@/components/common/top-header"

interface CreateAccountFormProps {
  onNext: (email: string, password: string, name: string) => void // Pass email, password, and name
  onBack: () => void
  onSignIn: () => void // New prop for sign-in link
}

export default function CreateAccountForm({ onNext, onBack, onSignIn }: CreateAccountFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [firstName, setFirstName] = useState("") // Added for user name
  const [lastName, setLastName] = useState("") // Added for user name

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    if (!agreedToTerms) {
      alert("You must agree to the Terms & Conditions and Privacy Policy.")
      return
    }
    if (!firstName || !lastName) {
      alert("Please enter your first and last name.")
      return
    }
    const fullName = `${firstName} ${lastName}`
    console.log("Account created:", { email, password, fullName })
    onNext(email, password, fullName) // Pass email, password, and full name
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopHeader title="" onBack={onBack} showMenuButton={false} />
      <div className="flex flex-col flex-grow p-6 pt-0">
        <div className="text-left mb-8">
          <h1 className="text-3xl font-serif font-bold text-foreground leading-tight tracking-tight">
            Create Your Account
          </h1>
          <p className="mt-2 text-base text-muted-foreground">Enter your email and set a password to get started.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
          <div className="space-y-6 flex-grow">
            <div>
              <Label htmlFor="first-name" className="text-foreground">
                First Name
              </Label>
              <Input
                id="first-name"
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="mt-1 bg-card text-foreground border-input focus:ring-ring focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="last-name" className="text-foreground">
                Last Name
              </Label>
              <Input
                id="last-name"
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="mt-1 bg-card text-foreground border-input focus:ring-ring focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 bg-card text-foreground border-input focus:ring-ring focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 bg-card text-foreground border-input focus:ring-ring focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="confirm-password" className="text-foreground">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 bg-card text-foreground border-input focus:ring-ring focus:border-primary"
              />
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(!!checked)}
                className="border-input data-[state=checked]:bg-brand-green-dark data-[state=checked]:text-white"
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the Terms & Conditions and Privacy Policy.
              </Label>
            </div>
          </div>
          <div className="mt-8 w-full max-w-xs mx-auto flex-shrink-0">
            <Button
              type="submit"
              className="w-full py-6 text-lg rounded-full bg-brand-green-dark hover:bg-brand-green-dark/90 text-white"
            >
              Next
            </Button>
            <Button variant="link" onClick={onSignIn} className="w-full mt-4 text-brand-green-dark hover:underline">
              Already have an account? Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
