import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import { notFound } from "next/navigation"

// Portfolio item type definition
type PortfolioItem = {
  id: string
  title: string
  category: string
  image: string
  description: string
  client: string
  year: string
  challenge: string
  solution: string
  results: string
  technologies: string[]
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
    challenge:
      "The client needed a scalable e-commerce solution that could handle their growing product catalog and provide a seamless shopping experience across devices.",
    solution:
      "We developed a custom e-commerce platform using Next.js and a headless CMS, with advanced filtering, search functionality, and integrated payment processing.",
    results:
      "The new platform increased conversion rates by 35% and reduced cart abandonment by 25% within the first three months after launch.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Sanity CMS"],
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    category: "Software Engineering",
    image: "/placeholder.svg?height=600&width=800",
    description: "A comprehensive inventory management system with real-time tracking and analytics.",
    client: "LogiTech Solutions",
    year: "2023",
    challenge:
      "The client was struggling with inventory discrepancies and inefficient stock management across multiple warehouses.",
    solution:
      "We built a custom inventory management system with real-time tracking, barcode scanning, and advanced analytics to optimize stock levels.",
    results: "The system reduced inventory discrepancies by 95% and improved order fulfillment times by 40%.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
  },
  {
    id: "marketing-campaign",
    title: "Digital Marketing Campaign",
    category: "Marketing",
    image: "/placeholder.svg?height=600&width=800",
    description: "A multi-channel digital marketing campaign that increased client conversions by 200%.",
    client: "GrowthBrand",
    year: "2022",
    challenge:
      "The client needed to increase brand awareness and lead generation for their new product launch with a limited marketing budget.",
    solution:
      "We developed a targeted multi-channel digital marketing strategy focusing on content marketing, social media, and paid advertising.",
    results:
      "The campaign generated a 200% increase in qualified leads and a 150% increase in social media engagement.",
    technologies: ["Google Analytics", "Facebook Ads", "Google Ads", "HubSpot", "Mailchimp"],
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = portfolioItems.find((item) => item.id === params.slug)

  if (!project) {
    notFound()
  }

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
                <Badge variant="floating">{project.category}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 dark:from-indigo-300 dark:via-indigo-400 dark:to-indigo-200 leading-tight">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium">
                {project.description}
              </p>
              <div className="flex justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                <span>Client: {project.client}</span>
                <span>•</span>
                <span>Year: {project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16 md:py-24 bg-white dark:bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Results</h2>
                  <p className="text-muted-foreground">{project.results}</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 rounded-xl p-6 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Client</h4>
                    <p className="text-gray-800 dark:text-gray-100">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Year</h4>
                    <p className="text-gray-800 dark:text-gray-100">{project.year}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Category</h4>
                    <p className="text-gray-800 dark:text-gray-100">{project.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <Badge variant="floating">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full" asChild>
                <Link href="/portfolio">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 md:py-24 bg-indigo-50 dark:bg-indigo-950/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Related Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems
              .filter((item) => item.id !== project.id && item.category === project.category)
              .slice(0, 3)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 rounded-xl p-6 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur-xl hover:shadow-xl transition-all duration-300 hover:border-white/60 dark:hover:border-white/30"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="floating">{item.category}</Badge>
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <Button variant="link" className="p-0 text-indigo-600 dark:text-indigo-400" asChild>
                      <Link href={`/portfolio/${item.id}`}>View Project</Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>

          {portfolioItems.filter((item) => item.id !== project.id && item.category === project.category).length ===
            0 && <p className="text-center text-muted-foreground">No related projects found.</p>}
        </div>
      </section>
    </div>
  )
}
