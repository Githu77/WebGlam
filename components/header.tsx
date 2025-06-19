"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Briefcase, Info, Mail } from "lucide-react"

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
    { name: "Home", href: "/", icon: <Home className="w-5 h-5 mr-3" /> },
    { name: "Services", href: "/services", icon: <Briefcase className="w-5 h-5 mr-3" /> },
    { name: "About", href: "/about", icon: <Info className="w-5 h-5 mr-3" /> },
    { name: "Contact", href: "/contact", icon: <Mail className="w-5 h-5 mr-3" /> },
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
        <AnimatePresence>
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999999] flex flex-col justify-center items-center bg-gradient-to-br from-white/80 via-indigo-100/80 to-purple-100/80 dark:from-background/90 dark:via-indigo-900/80 dark:to-purple-900/80 backdrop-blur-2xl"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsMobileMenuOpen(false)
            }}
            style={{ width: '100vw', height: '100vh', transform: 'translateZ(0)' }}
            aria-modal="true"
            role="dialog"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 z-20 bg-white/70 dark:bg-background/70 rounded-full p-3 shadow-lg hover:bg-white/90 dark:hover:bg-background/90 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Close menu"
            >
              <X className="w-7 h-7 text-indigo-700 dark:text-indigo-300" />
            </button>
            {/* Theme Toggle */}
            <div className="absolute top-6 left-6 z-20">
              <ThemeToggle />
            </div>
            {/* Nav Items */}
            <nav className="flex flex-col items-center justify-center w-full gap-4 mt-12">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.4, type: "spring" }}
                  className="w-full flex justify-center"
                >
                  <Link
                    href={item.href}
                    className={`flex items-center w-72 max-w-[90vw] px-6 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 shadow-lg bg-white/70 dark:bg-background/70 hover:bg-white/90 dark:hover:bg-background/90 text-indigo-700 dark:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-2 ${isActive(item.href) ? 'ring-2 ring-indigo-500' : ''}`}
                    onClick={(e) => {
                      if (item.href.startsWith("/#")) e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    tabIndex={0}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.1 + navItems.length * 0.08, duration: 0.4, type: "spring" }}
              className="w-full flex justify-center mt-8"
            >
              <Button
                className="w-72 max-w-[90vw] py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl"
                asChild
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </header>
  )
}
