"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import TopHeader from "@/components/common/top-header"

interface LoginFormProps {
  onLogin: (email: string, password: string) => void
  onBack: () => void
}

export default function LoginForm({ onLogin, onBack }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(email, password) // Pass credentials to parent for validation
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopHeader title="" onBack={onBack} showMenuButton={false} />
      <div className="flex flex-col flex-grow p-6 pt-0">
        <div className="text-left mb-8">
          <h1 className="text-3xl font-serif font-bold text-foreground leading-tight tracking-tight">Sign In</h1>
          <p className="mt-2 text-base text-muted-foreground">Enter your credentials to access your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
          <div className="space-y-6 flex-grow">
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
          </div>
          <div className="mt-8 w-full max-w-xs mx-auto flex-shrink-0">
            <Button
              type="submit"
              className="w-full py-6 text-lg rounded-full bg-brand-green-dark hover:bg-brand-green-dark/90 text-white"
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
