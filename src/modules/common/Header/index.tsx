import React from "react"
import Link from "next/link"
import { useState } from "react"
import { BrandLogo } from "./BrandLogo"
import { Button } from "~/components/ui/button"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="flex items-center justify-between h-16 px-6 border-b bg-background text-foreground">
      <Link href="/" className="flex items-center gap-2">
        <BrandLogo className="h-6 w-auto" />
      </Link>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-foreground text-2xl hover:text-primary transition-colors duration-200"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Optional: dropdown panel shown when menuOpen = true */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-popover border border-border rounded-md shadow-md p-4 z-50 min-w-[200px]">
          <nav className="flex flex-col gap-2">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
            {/* Add more as needed */}
          </nav>
        </div>
      )}
    </header>
  )
}
