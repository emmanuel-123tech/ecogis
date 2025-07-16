"use client"

import TopHeader from "@/components/common/top-header"
import BottomNavigation from "@/components/common/bottom-navigation"
import { Button } from "@/components/ui/button"
import { Filter, Download, Upload, Plus } from "lucide-react"

interface FarmersListProps {
  onTabChange: (tab: "home" | "farmers" | "reports" | "profile") => void
  activeTab: "home" | "farmers" | "reports" | "profile"
  onBack: () => void
}

const dummyFarmers = [
  {
    id: "1",
    name: "Priscilla Nwachukwu",
    location: "Abuja, FCT",
    farmerId: "98765456FA",
    cropType: "Cocoa",
    esgScore: "92/100",
    carbonCredits: "Good",
  },
  {
    id: "2",
    name: "Izuokumo Bozimo",
    location: "Abuja, FCT",
    farmerId: "98765456FA",
    cropType: "Cocoa",
    esgScore: "92/100",
    carbonCredits: "Good",
  },
  {
    id: "3",
    name: "Deborah Rabiu",
    location: "Lagos, Nigeria",
    farmerId: "12345678FB",
    cropType: "Coffee",
    esgScore: "88/100",
    carbonCredits: "Excellent",
  },
  {
    id: "4",
    name: "Stephen Opuogbo",
    location: "Enugu, Nigeria",
    farmerId: "87654321FC",
    cropType: "Palm Oil",
    esgScore: "95/100",
    carbonCredits: "Very Good",
  },
  {
    id: "5",
    name: "David Bashir",
    location: "Kano, Nigeria",
    farmerId: "54321098FD",
    cropType: "Maize",
    esgScore: "80/100",
    carbonCredits: "Fair",
  },
  {
    id: "6",
    name: "Joshua Akani",
    location: "Port Harcourt, Nigeria",
    farmerId: "99887766FE",
    cropType: "Rubber",
    esgScore: "90/100",
    carbonCredits: "Good",
  },
]

export default function FarmersList({ onTabChange, activeTab, onBack }: FarmersListProps) {
  const handleFilter = () => alert("Filter options would appear here.")
  const handleExport = () => alert("Exporting farmers data...")
  const handleImport = () => alert("Importing farmers data...")
  const handleAddFarmer = () => alert("Navigating to Add Farmer form...")
  const handleViewProfile = (farmerName: string) => alert(`Viewing profile for ${farmerName}`)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopHeader title="Farmers" onBack={onBack} showMenuButton={true} onMenuClick={() => alert("Menu clicked!")} />
      <div className="flex-grow p-6 pb-20">
        {" "}
        {/* Added pb-20 for bottom nav spacing */}
        <div className="space-y-4 mb-6">
          <Button
            variant="outline"
            className="w-full py-6 text-lg rounded-full border-brand-green-light text-brand-green-dark hover:bg-brand-green-light/5 bg-transparent hover:text-brand-green-dark"
            onClick={handleFilter}
          >
            <Filter className="h-5 w-5 mr-2" /> Filter
          </Button>
          <Button
            className="w-full py-6 text-lg rounded-full bg-brand-green-dark hover:bg-brand-green-dark/90 text-white"
            onClick={handleExport}
          >
            <Download className="h-5 w-5 mr-2" /> Export as
          </Button>
          <Button
            variant="outline"
            className="w-full py-6 text-lg rounded-full border-input text-foreground hover:bg-accent bg-card"
            onClick={handleImport}
          >
            <Upload className="h-5 w-5 mr-2" /> Import Farmer
          </Button>
          <Button
            variant="outline"
            className="w-full py-6 text-lg rounded-full border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark/5 bg-transparent hover:text-brand-green-dark"
            onClick={handleAddFarmer}
          >
            <Plus className="h-5 w-5 mr-2" /> Add Farmer
          </Button>
        </div>
        <div className="space-y-4">
          {dummyFarmers.map((farmer) => (
            <div key={farmer.id} className="bg-card p-4 rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground">{farmer.name}</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
                <div>
                  <p>Report Name</p>
                  <p className="font-medium text-foreground">Compliance Report</p>
                </div>
                <div className="text-right">
                  <p>Date Generated</p>
                  <p className="font-medium text-foreground">23/01/2025</p>
                </div>
                <div>
                  <p>Farmer</p>
                  <p className="font-medium text-foreground">{farmer.name}</p>
                </div>
                <div>
                  <p>Location</p>
                  <p className="font-medium text-foreground">{farmer.location}</p>
                </div>
                <div>
                  <p>Farmer ID</p>
                  <p className="font-medium text-foreground">{farmer.farmerId}</p>
                </div>
                <div>
                  <p>Crop Type</p>
                  <p className="font-medium text-foreground">{farmer.cropType}</p>
                </div>
                <div>
                  <p>ESG Score</p>
                  <p className="font-medium text-foreground">{farmer.esgScore}</p>
                </div>
                <div>
                  <p>Carbon Credits</p>
                  <p className="font-medium text-foreground">{farmer.carbonCredits}</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full py-4 mt-4 text-base rounded-full border-brand-green-light text-brand-green-dark hover:bg-brand-green-light/5 bg-transparent hover:text-brand-green-dark"
                onClick={() => handleViewProfile(farmer.name)}
              >
                View Profile
              </Button>
            </div>
          ))}
        </div>
      </div>
      <BottomNavigation activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  )
}
