"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import TopHeader from "@/components/common/top-header" // Use TopHeader

interface AccountTypeSelectionProps {
  onContinue: (type: string) => void
  onBack: () => void
}

export default function AccountTypeSelection({ onContinue, onBack }: AccountTypeSelectionProps) {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined)

  const handleContinue = () => {
    if (selectedType) {
      console.log("Selected Account Type:", selectedType)
      onContinue(selectedType) // Call the prop to navigate
    } else {
      alert("Please select an account type to continue.")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopHeader title="" onBack={onBack} showMenuButton={false} />
      <div className="flex flex-col flex-grow p-6 pt-0">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-foreground leading-tight tracking-tight">
            Account Type Selection
          </h1>
          <p className="mt-2 text-base text-muted-foreground">Who are you? Let&apos;s tailor your experience!</p>
        </div>

        <RadioGroup
          value={selectedType}
          onValueChange={setSelectedType}
          className="flex flex-col gap-4 w-full max-w-md mx-auto flex-grow"
        >
          <Label
            htmlFor="buyer"
            className={`flex flex-col items-start p-6 border rounded-xl cursor-pointer transition-all duration-200 shadow-sm ${
              selectedType === "buyer"
                ? "border-brand-green-light ring-2 ring-brand-green-light bg-card"
                : "border-border hover:border-accent bg-card"
            }`}
          >
            <div className="flex items-center w-full">
              <RadioGroupItem value="buyer" id="buyer" className="mr-3" />
              <div className="flex flex-col items-start">
                <span className="text-lg font-semibold text-foreground">Buyer</span>
                <span className="text-sm text-muted-foreground">I source ethically and need compliance reports.</span>
              </div>
            </div>
          </Label>

          <Label
            htmlFor="compliance-overseer"
            className={`flex flex-col items-start p-6 border rounded-xl cursor-pointer transition-all duration-200 shadow-sm ${
              selectedType === "compliance-overseer"
                ? "border-brand-green-light ring-2 ring-brand-green-light bg-card"
                : "border-border hover:border-accent bg-card"
            }`}
          >
            <div className="flex items-center w-full">
              <RadioGroupItem value="compliance-overseer" id="compliance-overseer" className="mr-3" />
              <div className="flex flex-col items-start">
                <span className="text-lg font-semibold text-foreground">Compliance Overseer</span>
                <span className="text-sm text-muted-foreground">I trade carbon credits and connect with farmers.</span>
              </div>
            </div>
          </Label>
        </RadioGroup>

        <div className="mt-8 w-full max-w-xs mx-auto flex-shrink-0">
          <Button
            className="w-full py-6 text-lg rounded-full bg-brand-green-light hover:bg-brand-green-light/90 text-white"
            onClick={handleContinue}
            disabled={!selectedType}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
