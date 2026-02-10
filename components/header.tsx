"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" aria-label="Gayithi Technical Services Home">
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-3">
            <a href="tel:+971553659379">
              <Phone className="mr-1.5 h-3.5 w-3.5" />
              Call Now
            </a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-md p-2 text-foreground/80 transition-colors hover:bg-muted md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav
          className="border-t border-border/60 bg-card px-4 pb-4 pt-2 md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block rounded-md px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="mt-2 w-full">
            <a href="tel:+971553659379">
              <Phone className="mr-1.5 h-3.5 w-3.5" />
              Call Now
            </a>
          </Button>
        </nav>
      )}
    </header>
  )
}
