"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Globe,
  LineChart,
  Smartphone,
  Database,
  Palette,
  Search,
  TrendingUp,
  Users,
  Shield,
  Layers,
  Monitor,
  Cpu,
  BarChart3,
  Target,
  Zap,
  Sparkles,
  ShoppingCart,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { motion } from "framer-motion"

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
}

const services: ServiceFeature[] = [
  {
    icon: <Globe className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />,
    title: "Web Design & Development",
    description: "Create stunning, responsive websites that captivate your audience and drive conversions with modern design principles and cutting-edge technology.",
    features: ["Custom Website Design", "E-commerce Solutions", "Performance Optimization"],
    href: "#web-development"
  },
  {
    icon: <Code className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />,
    title: "Software Engineering",
    description: "Build scalable, robust software solutions tailored to your business needs, from mobile applications to enterprise-level systems.",
    features: ["Custom Software Development", "Mobile App Development", "Cloud Solutions"],
    href: "#software-engineering"
  },
  {
    icon: <LineChart className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />,
    title: "Marketing Services",
    description: "Amplify your brand's reach and drive growth with data-driven marketing strategies that deliver measurable results.",
    features: ["Digital Marketing Strategy", "Search Engine Optimization", "Social Media Marketing"],
    href: "#marketing-services"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Centered Background Image - Fixed and in Front */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
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

      {/* Services Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/5 dark:bg-indigo-700/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-lavender-200/5 dark:bg-indigo-800/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Decorative elements */}
          <div className="hidden md:block absolute top-20 right-[20%] w-16 h-16 border border-indigo-200/40 dark:border-indigo-700/40 rounded-full"></div>
          <div className="hidden md:block absolute bottom-32 left-[15%] w-24 h-24 border border-lavender-200/40 dark:border-indigo-800/40 rounded-full"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="space-y-6 max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-gradient-to-r from-indigo-100/40 to-purple-100/40 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-900 dark:text-indigo-100 border border-indigo-200/40 dark:border-indigo-700/30 shadow-sm backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Our Services</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight font-display"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 animate-gradient">
                  Digital Solutions
                </span>
                <br className="hidden sm:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-300 animate-gradient-reverse">
                  That Drive Results
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium"
              >
                From stunning websites to powerful software solutions and strategic marketing campaigns, we deliver
                comprehensive digital services tailored to your business needs.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all duration-200 hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-white/60 via-lavender-50/40 to-indigo-50/30 dark:from-background/60 dark:via-lavender-950/30 dark:to-indigo-950/20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/20 via-purple-200/20 to-pink-200/20 dark:from-indigo-800/20 dark:via-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-200/20 via-purple-200/20 to-pink-200/20 dark:from-indigo-800/20 dark:via-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-6 shadow-lg backdrop-blur-sm"
            >
              <Badge variant="floating" className="bg-white/50 dark:bg-background/50 text-indigo-900 dark:text-indigo-100 border-indigo-200/40 dark:border-indigo-700/30">
                Our Expertise
              </Badge>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-display"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-300">
                What We Do Best
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-800 dark:text-gray-100 max-w-[800px] text-lg mx-auto mt-4 font-medium"
            >
              Discover our comprehensive range of digital services designed to elevate your business
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: ServiceFeature, index: number) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <ServiceOverviewCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  href={service.href}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Design & Development Section */}
      <section id="web-development" className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-6 shadow-lg backdrop-blur-sm"
              >
                <Badge variant="floating" className="bg-white/50 dark:bg-background/50 text-indigo-900 dark:text-indigo-100 border-indigo-200/40 dark:border-indigo-700/30">
                  Web Development
                </Badge>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-display"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-300">
                  Beautiful Websites That Convert
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-700 dark:text-gray-300"
              >
                We create stunning, responsive websites that not only look beautiful but also drive real business results. Our web development services combine cutting-edge design with powerful functionality to deliver exceptional user experiences.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all duration-200 hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dhiouuz96/image/upload/v1750246733/code-820275_xlwrdk.jpg"
                  alt="Web Development Services"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-20"></div>
            </motion.div>
          </div>

          {/* Web Development Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ServiceDetailCard
              icon={<Palette className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="Custom Design"
              description="Unique, brand-aligned designs that capture your vision and engage your audience."
              features={[
                "Responsive Design",
                "UI/UX Best Practices",
                "Brand Integration",
                "Modern Aesthetics"
              ]}
            />
            <ServiceDetailCard
              icon={<Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="Development"
              description="Clean, efficient code that powers your website with optimal performance."
              features={[
                "Modern Frameworks",
                "Performance Optimization",
                "SEO Best Practices",
                "Cross-browser Compatibility"
              ]}
            />
            <ServiceDetailCard
              icon={<ShoppingCart className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="E-commerce"
              description="Powerful online stores that drive sales and provide seamless shopping experiences."
              features={[
                "Secure Payment Integration",
                "Inventory Management",
                "Order Processing",
                "Customer Accounts"
              ]}
            />
          </div>

          {/* Development Process */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold tracking-tight font-display"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-300">
                  Our Development Process
                </span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-700 dark:text-gray-300 max-w-[600px] mx-auto mt-4"
              >
                We follow a proven process to ensure your project is delivered on time and exceeds expectations
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessCard
                step="01"
                title="Discovery"
                description="We learn about your business, goals, and requirements to create a tailored solution."
                icon={<Search className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />}
              />
              <ProcessCard
                step="02"
                title="Design"
                description="Our designers create stunning mockups that align with your brand and vision."
                icon={<Palette className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />}
              />
              <ProcessCard
                step="03"
                title="Development"
                description="We build your website with clean, efficient code and modern technologies."
                icon={<Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />}
              />
              <ProcessCard
                step="04"
                title="Launch"
                description="Thorough testing and smooth deployment to ensure everything works perfectly."
                icon={<Zap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />}
              />
            </div>

            {/* Pricing Section */}
            <div className="mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-bold tracking-tight font-display"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-300">
                    Transparent Pricing
                  </span>
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-700 dark:text-gray-300 max-w-[600px] mx-auto mt-4"
                >
                  Choose the perfect plan for your business needs
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <PricingCard
                  title="Landing Page"
                  price="Ksh 15,000"
                  description="Perfect for small businesses and startups looking to establish their online presence."
                  features={[
                    "1 Page",
                    "Responsive Design",
                    "Contact Form",
                    "Basic SEO",
                    "Social Media Integration",
                    "1 Month Support"
                  ]}
                />
                <PricingCard
                  title="Basic Website"
                  price="Ksh 30,000"
                  description="Perfect for small businesses and startups looking to establish their online presence."
                  features={[
                    "5 Pages",
                    "Responsive Design",
                    "Contact Form",
                    "Basic SEO",
                    "Social Media Integration",
                    "1 Month Support"
                  ]}
                />
                <PricingCard
                  title="Business Website"
                  price="Ksh 50,000"
                  description="Ideal for growing businesses that need more features and functionality."
                  features={[
                    "10 Pages",
                    "Custom Design",
                    "Advanced SEO",
                    "Blog Integration",
                    "Analytics Setup",
                    "3 Months Support",
                    "Performance Optimization"
                  ]}
                  featured={true}
                />
                <PricingCard
                  title="E-commerce Website"
                  price="Ksh 80,000"
                  description="Complete online store solution for businesses ready to sell online."
                  features={[
                    "Unlimited Products",
                    "Secure Payment Gateway",
                    "Inventory Management",
                    "Customer Accounts",
                    "Order Management",
                    "6 Months Support",
                    "Marketing Tools"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Engineering Section */}
      <section id="software-engineering" className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ServiceDetailCard
                icon={<Cpu className="h-6 w-6" />}
                title="Custom Software"
                description="Tailored solutions for your business needs"
                features={["Requirements Analysis", "System Architecture", "Custom Development", "Quality Assurance"]}
              />
              <ServiceDetailCard
                icon={<Smartphone className="h-6 w-6" />}
                title="Mobile Apps"
                description="Native and cross-platform mobile applications"
                features={["iOS Development", "Android Development", "Cross-platform", "App Store Optimization"]}
              />
              <ServiceDetailCard
                icon={<Layers className="h-6 w-6" />}
                title="API Development"
                description="Robust APIs for seamless integration"
                features={["RESTful APIs", "GraphQL", "Third-party Integrations", "Documentation"]}
              />
              <ServiceDetailCard
                icon={<Shield className="h-6 w-6" />}
                title="Cloud Solutions"
                description="Scalable cloud infrastructure and deployment"
                features={["Cloud Migration", "DevOps", "Scalability", "Security"]}
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-2">
                <Badge className="bg-white/50 dark:bg-background/50 text-indigo-900 dark:text-indigo-100 border-indigo-200/40 dark:border-indigo-700/30 px-4 py-1">
                  Software Engineering
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Custom Software Solutions</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Build scalable, robust software solutions tailored to your business needs. From mobile applications to
                enterprise-level systems, we engineer solutions that grow with your business and deliver exceptional
                performance.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Java", "React Native", "Flutter", "AWS", "Docker"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Process & Pricing */}
          <Tabs defaultValue="process" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="process">Our Process</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
            </TabsList>
            <TabsContent value="process" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ProcessCard
                  step="01"
                  title="Requirements"
                  description="Analyzing your business processes and software needs"
                  icon={<Target className="h-6 w-6" />}
                />
                <ProcessCard
                  step="02"
                  title="Architecture"
                  description="Designing system architecture and database structure"
                  icon={<Layers className="h-6 w-6" />}
                />
                <ProcessCard
                  step="03"
                  title="Development"
                  description="Building with agile methodologies and regular updates"
                  icon={<Code className="h-6 w-6" />}
                />
                <ProcessCard
                  step="04"
                  title="Deployment"
                  description="Testing, optimization, and production deployment"
                  icon={<Zap className="h-6 w-6" />}
                />
              </div>
            </TabsContent>
            <TabsContent value="pricing" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PricingCard
                  title="MVP Development"
                  price="Ksh 25,000"
                  description="Perfect for startups"
                  features={["Core functionality", "Basic UI/UX", "Database setup", "Basic testing", "Deployment"]}
                />
                <PricingCard
                  title="Full Application"
                  price="Ksh 50,000"
                  description="Complete software solution"
                  features={[
                    "Full feature set",
                    "Advanced UI/UX",
                    "Comprehensive testing",
                    "Documentation",
                    "Training",
                    "6 months support",
                  ]}
                  featured={true}
                />
                <PricingCard
                  title="Enterprise Solution"
                  price="Custom"
                  description="Large-scale applications"
                  features={[
                    "Complex integrations",
                    "Advanced security",
                    "Scalable architecture",
                    "Ongoing maintenance",
                    "24/7 support",
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Marketing Services Section */}
      <section id="marketing-services" className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-2">
                <Badge className="bg-white/50 dark:bg-background/50 text-indigo-900 dark:text-indigo-100 border-indigo-200/40 dark:border-indigo-700/30 px-4 py-1">
                  Marketing Services
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Data-Driven Marketing That Works
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Amplify your brand's reach and drive growth with strategic marketing campaigns that deliver measurable
                results. Our data-driven approach ensures every marketing dollar works harder for your business.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Google Analytics", "Google Ads", "Facebook Ads", "HubSpot", "Mailchimp", "SEMrush"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ServiceDetailCard
                icon={<Search className="h-6 w-6" />}
                title="SEO Optimization"
                description="Improve visibility in search engine results"
                features={["Keyword Research", "On-page SEO", "Technical SEO", "Link Building"]}
              />
              <ServiceDetailCard
                icon={<Users className="h-6 w-6" />}
                title="Social Media"
                description="Build brand presence across social platforms"
                features={["Content Strategy", "Community Management", "Paid Advertising", "Influencer Partnerships"]}
              />
              <ServiceDetailCard
                icon={<TrendingUp className="h-6 w-6" />}
                title="PPC Advertising"
                description="Drive targeted traffic through paid campaigns"
                features={["Google Ads", "Facebook Ads", "Campaign Optimization", "Conversion Tracking"]}
              />
              <ServiceDetailCard
                icon={<BarChart3 className="h-6 w-6" />}
                title="Analytics"
                description="Comprehensive tracking and performance analysis"
                features={["Performance Tracking", "Custom Dashboards", "ROI Analysis", "Monthly Reports"]}
              />
            </div>
          </div>

          {/* Process & Pricing */}
          <Tabs defaultValue="process" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="process">Our Process</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
            </TabsList>
            <TabsContent value="process" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ProcessCard
                  step="01"
                  title="Strategy"
                  description="Analyzing market, competitors, and target audience"
                  icon={<Target className="h-6 w-6" />}
                />
                <ProcessCard
                  step="02"
                  title="Setup"
                  description="Creating content and launching campaigns"
                  icon={<Zap className="h-6 w-6" />}
                />
                <ProcessCard
                  step="03"
                  title="Optimization"
                  description="Monitoring and improving campaign performance"
                  icon={<TrendingUp className="h-6 w-6" />}
                />
                <ProcessCard
                  step="04"
                  title="Reporting"
                  description="Regular insights and growth recommendations"
                  icon={<BarChart3 className="h-6 w-6" />}
                />
              </div>
            </TabsContent>
            <TabsContent value="pricing" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PricingCard
                  title="Starter"
                  price="Ksh 5,000/mo"
                  description="Perfect for small businesses"
                  features={["SEO optimization", "Social media management", "Monthly reporting", "Email support"]}
                />
                <PricingCard
                  title="Growth"
                  price="Ksh 15,000/mo"
                  description="For growing businesses"
                  features={[
                    "Full SEO & PPC",
                    "Advanced social media",
                    "Content marketing",
                    "Weekly reporting",
                    "Phone support",
                  ]}
                  featured={true}
                />
                <PricingCard
                  title="Enterprise"
                  price="Custom"
                  description="For large organizations"
                  features={["Custom strategy", "Dedicated account manager", "Advanced analytics", "24/7 support"]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50 dark:from-indigo-950/50 dark:via-purple-950/50 dark:to-pink-950/50"></div>
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-6 shadow-lg backdrop-blur-sm"
            >
              <Badge variant="floating" className="bg-white/50 dark:bg-background/50 text-indigo-900 dark:text-indigo-100 border-indigo-200/40 dark:border-indigo-700/30">
                Get Started
              </Badge>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-display"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-300">
                Ready to Transform Your Digital Presence?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
            >
              Let's work together to create a stunning website that drives results for your business.
              Contact us today to get started.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

type ServiceOverviewCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
};

function ServiceOverviewCard({ icon, title, description, features, href }: ServiceOverviewCardProps) {
  return (
    <div className="bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 rounded-xl p-6 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col space-y-4 hover:shadow-xl transition-all duration-300 hover:border-white/60 dark:hover:border-white/30">
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-sm">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-100">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-200">
            <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        className="w-full mt-4 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 border-white/40 dark:border-white/20"
        asChild
      >
        <Link href={href}>Learn More</Link>
      </Button>
    </div>
  )
}

type ServiceDetailCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

function ServiceDetailCard({ icon, title, description, features }: ServiceDetailCardProps) {
  return (
    <div className="bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 rounded-xl p-6 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col space-y-4 hover:shadow-xl transition-all duration-300 hover:border-white/60 dark:hover:border-white/30">
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-sm">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-100">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-200">
            <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

type ProcessCardProps = {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

function ProcessCard({ step, title, description, icon }: ProcessCardProps) {
  return (
    <div className="bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 rounded-xl p-6 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col space-y-4 hover:shadow-xl transition-all duration-300 hover:border-white/60 dark:hover:border-white/30">
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-sm">
          {icon}
        </div>
        <div>
          <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{step}</div>
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{title}</h3>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-200">{description}</p>
    </div>
  )
}

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

function PricingCard({ title, price, description, features, featured = false }: PricingCardProps) {
  return (
    <div className={`bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 rounded-xl p-6 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col space-y-4 hover:shadow-xl transition-all duration-300 hover:border-white/60 dark:hover:border-white/30 ${featured ? 'ring-2 ring-indigo-500/50' : ''}`}>
      <div className="text-center">
        <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
        <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{price}</div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
      </div>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-200">
            <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`w-full mt-4 ${featured ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-white/80 hover:bg-white text-gray-800 dark:bg-black/80 dark:hover:bg-black dark:text-gray-100'}`}
      >
        Get Started
      </Button>
    </div>
  )
}
