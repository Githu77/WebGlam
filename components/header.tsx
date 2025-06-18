"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { createPortal } from "react-dom"

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)

    // Handle anchor links for homepage sections
    if (href.startsWith("/#") && typeof window !== 'undefined') {
      const targetId = href.substring(2)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        setTimeout(() => {
          const offsetTop = targetElement.offsetTop
          window.scrollTo({
            top: offsetTop - 80,
            behavior: "smooth",
          })
        }, 100)
      }
    }
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    if (href.startsWith("/#")) {
      return pathname === "/" && (typeof window !== 'undefined' ? window.location.hash === href.substring(1) : false)
    }
    return pathname.startsWith(href)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-lg shadow-md py-3" : "bg-background/40 backdrop-blur-md py-3"
    } ${className}`}>
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 z-10 group">
          <img src="https://res.cloudinary.com/dhiouuz96/image/upload/v1750248220/TheGlam_6_iynz5m.png" alt="WebGlam Logo" className="w-12 h-12 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-500 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-300 transition-all duration-300 group-hover:from-indigo-500 group-hover:via-purple-400 group-hover:to-indigo-400 tracking-tight">
              WebGlam
            </span>
            <span className="text-[10px] font-medium text-muted-foreground/80 tracking-wider uppercase">
              Digital Excellence
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                isActive(item.href)
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30"
                  : "text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20"
              }`}
              onClick={(e) => {
                if (item.href.startsWith("/#")) {
                  e.preventDefault()
                  handleNavClick(item.href)
                }
              }}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full transform scale-x-100 transition-transform duration-300" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-full px-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
            className={`focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-background rounded-full transition-all duration-300 hover:scale-105 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 ${
              isMobileMenuOpen ? 'bg-indigo-50 dark:bg-indigo-900/30' : ''
            }`}
            aria-label="Open mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && typeof window !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[999999] bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-2xl flex flex-col animate-mobile-menu-overlay"
          onClick={(e) => {
            // Close menu when clicking on backdrop
            if (e.target === e.currentTarget) {
              setIsMobileMenuOpen(false)
            }
          }}
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 999999,
            transform: 'translateZ(0)'
          }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/5 dark:bg-indigo-700/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/5 dark:bg-purple-700/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-100/10 via-purple-100/10 to-pink-100/10 dark:from-indigo-800/10 dark:via-purple-800/10 dark:to-pink-800/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container flex h-20 items-center justify-between px-4 border-b border-border/20 relative z-10">
            <Link href="/" className="flex items-center space-x-2 group">
              <img src="https://res.cloudinary.com/dhiouuz96/image/upload/v1750237052/TheGlam-removebg-preview_hmudyt.png" alt="WebGlam Logo" className="w-10 h-10 transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-500 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-300">
                  WebGlam
                </span>
                <span className="text-[10px] font-medium text-muted-foreground/80 tracking-wider uppercase">
                  Digital Excellence
                </span>
              </div>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-background rounded-full transition-all duration-300 hover:scale-105 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <nav className="flex flex-col flex-1 overflow-y-auto relative z-10">
            <div className="container flex flex-col space-y-3 px-4 py-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-6 py-5 rounded-2xl text-lg font-medium transition-all duration-300 relative transform hover:scale-105 animate-mobile-menu-item group ${
                    isActive(item.href)
                      ? "text-indigo-600 dark:text-indigo-400 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 shadow-lg border border-indigo-200/50 dark:border-indigo-700/50"
                      : "text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20 border border-transparent hover:border-indigo-200/30 dark:hover:border-indigo-700/30"
                  }`}
                  onClick={(e) => {
                    if (item.href.startsWith("/#")) {
                      e.preventDefault()
                    }
                    handleNavClick(item.href)
                  }}
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{item.name}</span>
                    {isActive(item.href) && (
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 rounded-full shadow-sm"></div>
                    )}
                  </div>
                  {isActive(item.href) && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            <div className="mt-auto border-t border-border/20 p-6 relative z-10">
              <Button
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 rounded-2xl py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-mobile-menu-item"
                asChild
                style={{
                  animationDelay: `${navItems.length * 150}ms`
                }}
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>,
        document.body
      )}
    </header>
  )
}
