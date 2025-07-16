"use client"

import TopHeader from "@/components/common/top-header"
import BottomNavigation from "@/components/common/bottom-navigation"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

interface ReportsListProps {
  onTabChange: (tab: "home" | "farmers" | "reports" | "profile") => void
  activeTab: "home" | "farmers" | "reports" | "profile"
  onBack: () => void
}

const dummyReports = [
  {
    id: "1",
    reportName: "Compliance Report",
    dateGenerated: "23/01/2025",
    farmer: "Priscilla Nwachukwu",
  },
  {
    id: "2",
    reportName: "Compliance Report",
    dateGenerated: "23/01/2025",
    farmer: "Deborah Rabiu",
  },
  {
    id: "3",
    reportName: "Compliance Report",
    dateGenerated: "23/01/2025",
    farmer: "Stephen Opuogbo",
  },
  {
    id: "4",
    reportName: "Compliance Report",
    dateGenerated: "23/01/2025",
    farmer: "David Bashir",
  },
  {
    id: "5",
    reportName: "Compliance Report",
    dateGenerated: "23/01/2025",
    farmer: "Joshua Akani",
  },
]

export default function ReportsList({ onTabChange, activeTab, onBack }: ReportsListProps) {
  const handleFilter = () => alert("Filter options for reports would appear here.")

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopHeader title="Reports" onBack={onBack} showMenuButton={true} onMenuClick={() => alert("Menu clicked!")} />
      <div className="flex-grow p-6 pb-20">
        {" "}
        {/* Added pb-20 for bottom nav spacing */}
        <div className="mb-6">
          <Button
            variant="outline"
            className="w-full py-6 text-lg rounded-full border-brand-green-light text-brand-green-dark hover:bg-brand-green-light/5 bg-transparent hover:text-brand-green-dark"
            onClick={handleFilter}
          >
            <Filter className="h-5 w-5 mr-2" /> Filter
          </Button>
        </div>
        <div className="space-y-4">
          {dummyReports.map((report) => (
            <div key={report.id} className="bg-card p-4 rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground">{report.farmer}</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
                <div>
                  <p>Report Name</p>
                  <p className="font-medium text-foreground">{report.reportName}</p>
                </div>
                <div className="text-right">
                  <p>Date Generated</p>
                  <p className="font-medium text-foreground">{report.dateGenerated}</p>
                </div>
                <div>
                  <p>Farmer</p>
                  <p className="font-medium text-foreground">{report.farmer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNavigation activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  )
}
