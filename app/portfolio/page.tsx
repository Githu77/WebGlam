"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

// Portfolio item type definition
type PortfolioItem = {
  id: string
  title: string
  category: string
  image: string
  description: string
  client: string
  year: string
  link: string
}

// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    description: "A modern e-commerce platform with advanced filtering and payment processing capabilities.",
    client: "FashionRetail Inc.",
    year: "2023",
    link: "/portfolio/ecommerce-platform",
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    category: "Software Engineering",
    image: "/placeholder.svg?height=600&width=800",
    description: "A comprehensive inventory management system with real-time tracking and analytics.",
    client: "LogiTech Solutions",
    year: "2023",
    link: "/portfolio/inventory-system",
  },
  {
    id: "marketing-campaign",
    title: "Digital Marketing Campaign",
    category: "Marketing",
    image: "/placeholder.svg?height=600&width=800",
    description: "A multi-channel digital marketing campaign that increased client conversions by 200%.",
    client: "GrowthBrand",
    year: "2022",
    link: "/portfolio/marketing-campaign",
  },
  {
    id: "corporate-website",
    title: "Corporate Website Redesign",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    description: "A complete redesign of a corporate website focusing on user experience and conversion optimization.",
    client: "TechCorp Inc.",
    year: "2023",
    link: "/portfolio/corporate-website",
  },
  {
    id: "banking-app",
    title: "Mobile Banking App",
    category: "Software Engineering",
    image: "/placeholder.svg?height=600&width=800",
    description: "A secure and user-friendly mobile banking application with advanced features.",
    client: "FinanceFirst Bank",
    year: "2022",
    link: "/portfolio/banking-app",
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    category: "Marketing",
    image: "/placeholder.svg?height=600&width=800",
    description: "A comprehensive SEO strategy that improved client's search rankings by 150%.",
    client: "OrganicGrowth",
    year: "2023",
    link: "/portfolio/seo-optimization",
  },
  {
    id: "healthcare-platform",
    title: "Healthcare Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    description: "A patient management platform for healthcare providers with scheduling and telemedicine features.",
    client: "MediCare Solutions",
    year: "2022",
    link: "/portfolio/healthcare-platform",
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Service Chatbot",
    category: "Software Engineering",
    image: "/placeholder.svg?height=600&width=800",
    description: "An AI-powered chatbot that handles customer inquiries and provides personalized recommendations.",
    client: "ServiceFirst",
    year: "2023",
    link: "/portfolio/ai-chatbot",
  },
  {
    id: "social-campaign",
    title: "Social Media Campaign",
    category: "Marketing",
    image: "/placeholder.svg?height=600&width=800",
    description: "A viral social media campaign that increased brand awareness and engagement.",
    client: "TrendSetters",
    year: "2022",
    link: "/portfolio/social-campaign",
  },
]

export default function PortfolioPage() {
  // Get unique categories for filter
  const categories = ["All", ...new Set(portfolioItems.map((item) => item.category))]

  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All")

  // Filter items based on active filter
  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Centered Background Image - Fixed and in Front */}
      <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="relative w-96 h-96 opacity-30 dark:opacity-20">
          <Image
            src="https://res.cloudinary.com/dhiouuz96/image/upload/v1750245926/Lovepik_com-380144492-color-gradient-organic-object-3d-element-3d-objects-pink_hiomuq.png"
            alt="Decorative Background Element"
            fill
            className="object-contain animate-pulse"
            style={{ animationDuration: '3s' }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-lavender-50 dark:from-indigo-950 dark:via-background dark:to-indigo-900/30 py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/40 dark:bg-indigo-700/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-lavender-200/40 dark:bg-indigo-800/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-block">
                <span className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200">
                  Our Portfolio
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 dark:from-indigo-300 dark:via-indigo-400 dark:to-indigo-200 leading-tight">
                Our Latest Work
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium">
                Explore our recent projects and see how we've helped businesses achieve their digital goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-background">
        <div className="container px-4 md:px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-6 ${
                  activeFilter === category
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600"
                    : "border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-700 dark:from-indigo-800 dark:via-indigo-700 dark:to-indigo-900">
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-indigo-100 max-w-[800px] text-lg md:text-xl leading-relaxed">
              Let's discuss how we can help bring your vision to life with our expertise in design, development, and
              marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-white border-indigo-300 hover:bg-indigo-500 transition-all duration-300"
                asChild
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/40 dark:border-white/10 bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={400}
          height={300}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Badge variant="floating">{item.category}</Badge>
            <h3 className="font-bold text-2xl text-white mb-3">{item.title}</h3>
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-white/90 hover:bg-white text-indigo-600 hover:text-indigo-700 transition-all duration-300"
              asChild
            >
              <Link href={item.link} className="flex items-center">
                View Project 
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <Badge variant="floating">{item.category}</Badge>
        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {item.title}
        </h3>
      </div>
    </motion.div>
  )
}
