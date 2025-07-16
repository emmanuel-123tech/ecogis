"use client"

export default function Footer() {
  return (
    <footer className="bg-card p-6 text-center border-t border-border/50 text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Ecogis. All rights reserved.</p> {/* Updated company name */}
      <p className="mt-2 text-sm">
        Built with <span className="text-brand-green-dark">&hearts;</span> for a sustainable future.
      </p>
    </footer>
  )
}
