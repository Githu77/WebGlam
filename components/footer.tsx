import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 dark:from-indigo-950 dark:via-indigo-900 dark:to-indigo-950 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2 text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start space-x-3 mb-4 group">
              {/* Light mode logo */}
              <img src="https://res.cloudinary.com/dhiouuz96/image/upload/v1750248220/TheGlam_6_iynz5m.png" alt="WebGlam Logo" className="w-12 h-12 group-hover:scale-110 transition-transform duration-300 block dark:hidden" />
              {/* Dark mode logo */}
              <img src="https://res.cloudinary.com/dhiouuz96/image/upload/v1750353742/TheGlam_7_rxtkjq.png" alt="WebGlam Logo" className="w-12 h-12 group-hover:scale-110 transition-transform duration-300 hidden dark:block" />
              <span className="text-2xl font-bold text-white">WebGlam</span>
            </Link>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Transforming ideas into exceptional digital experiences through innovative design, cutting-edge
              technology, and strategic marketing solutions.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-indigo-200 text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-indigo-200 text-sm">Years Experience</div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 pt-4">
              {[
                { icon: "facebook", href: "https://facebook.com", label: "Facebook" },
                { icon: "twitter", href: "https://twitter.com", label: "Twitter" },
                { icon: "instagram", href: "https://instagram.com", label: "Instagram" },
                { icon: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
              ].map((social) => (
                <Link
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                >
                  <div className="h-5 w-5 text-white group-hover:text-indigo-100 transition-colors">
                    {social.icon === "facebook" && (
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    )}
                    {social.icon === "twitter" && (
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    )}
                    {social.icon === "instagram" && (
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    )}
                    {social.icon === "linkedin" && (
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/#about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-indigo-200 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-xl mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4 text-center">
              <li className="flex items-start space-x-3">
                <div className="bg-white/10 p-2 rounded-lg mt-0.5">
                  <Mail className="h-4 w-4 text-indigo-200" />
                </div>
                <div>
                  <p className="text-indigo-200 text-sm">Email</p>
                  <Link
                    href="mailto:info@webglam.com"
                    className="text-white font-medium hover:text-indigo-100 transition-colors"
                  >
                    contact@webglam.co.ke
                  </Link>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-white/10 p-2 rounded-lg mt-0.5">
                  <Phone className="h-4 w-4 text-indigo-200" />
                </div>
                <div>
                  <p className="text-indigo-200 text-sm">Phone</p>
                  <Link
                    href="tel:+15551234567"
                    className="text-white font-medium hover:text-indigo-100 transition-colors"
                  >
                    + (254) 742 532606
                  </Link>
                </div>
              </li>
            </ul>

            {/* Theme Toggle */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center justify-center md:justify-between">
                <span className="text-indigo-200 text-sm">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-indigo-200 text-sm text-center md:text-left">
              <span>&copy; {new Date().getFullYear()} WebGlam. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-3 w-3 text-red-400 fill-current" />
                <span>in Kenya</span>
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/privacy" className="text-indigo-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-indigo-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-indigo-200 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-indigo-200 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
