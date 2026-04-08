"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Team", href: "/team" },
    { label: "Awardees", href: "/awardees" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className={`sticky top-0 z-50 bg-white border-b border-border shadow-sm transition-all duration-300 p-0`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/fames-logo.png" 
              alt="FAMES Hawaii" 
              width={isScrolled ? 50 : 200} 
              height={isScrolled ? 50 : 200} 
              className={`transition-all duration-300 ${isScrolled ? 'w-[50px]' : 'w-[200px]'} h-auto`}
            />
           
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || 
                (link.href !== "/" && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors text-sm font-medium ${
                    isActive 
                      ? "text-primary border-b-2 border-primary pb-1" 
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-3">
            <Link
              href="/join"
              className="px-5 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-sm"
            >
              Join
            </Link>
            <Link
              href="/donate"
              className="px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || 
                  (link.href !== "/" && pathname.startsWith(link.href))
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`transition-colors font-medium px-4 py-2 ${
                      isActive 
                        ? "text-primary bg-primary/10 border-l-4 border-primary" 
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="flex gap-2 pt-2 px-4">
                <Link
                  href="/join"
                  className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-sm flex-1 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Join
                </Link>
                <Link
                  href="/donate"
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm flex-1 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
