"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Code, Globe, LineChart, Code2, Palette, Sparkles, Zap, Search, Headset, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from 'next/script'
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

interface ValueCardProps {
  title: string
  description: string
}

interface PortfolioCardProps {
  image: string
  title: string
  category: string
  href: string
}

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  avatar: string
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WebGlam',
    url: 'https://webglam.co.ke',
    logo: 'https://res.cloudinary.com/dhiouuz96/image/upload/v1750237052/TheGlam-removebg-preview_hmudyt.png',
    description: 'Professional digital services agency offering web design, software engineering, and marketing services to help your business thrive in the digital landscape.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    sameAs: [
      'https://twitter.com/webglam',
      'https://linkedin.com/company/webglam',
      'https://facebook.com/webglam'
    ]
  }

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen relative">
        <Header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm" />

        <main className="relative">
          <section className="relative min-h-[90vh] flex items-center justify-center pt-24">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src=""
                alt="Hero Background"
                fill
                className="object-cover opacity-30"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/30 to-background/20 dark:from-background/40 dark:via-background/30 dark:to-background/20"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/40"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/5 dark:bg-indigo-700/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-lavender-200/5 dark:bg-indigo-800/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

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

            <div className="container relative z-10 px-6 md:px-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  className="space-y-10"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-gradient-to-r from-indigo-100/40 to-purple-100/40 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-900 dark:text-indigo-100 border border-indigo-200/40 dark:border-indigo-700/30 shadow-sm backdrop-blur-sm"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">Trusted Since 2019</span>
                  </motion.div>

                  <div className="space-y-6">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight font-display"
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 animate-gradient">
                        We Don't Use Templates.
                      </span>
                      <br className="hidden sm:block" />
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-300 animate-gradient-reverse">
                        We Craft Digital Art.
                      </span>
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-lg md:text-xl text-gray-800 dark:text-gray-100 leading-relaxed max-w-xl font-medium"
                    >
                      Bespoke websites forged with React & Next.js for brands who lead, not follow.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button
                      size="lg"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all duration-200 hover:scale-105"
                    >
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-indigo-300/50 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100/10 transition-all hover:scale-105"
                      asChild
                    >
                      <Link href="#portfolio">View Our Work</Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right Column - Ultra Modern Design */}
                <div className="relative hidden lg:block">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="relative"
                  >
                    {/* Main Container with Glassmorphism */}
                    <div className="relative bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-white/10 p-8 shadow-2xl">
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400/30 to-purple-500/30 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-pink-400/20 to-indigo-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                      
                      {/* Content Grid */}
                      <div className="relative z-10 space-y-8">
                        {/* Top Row - Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { label: "Projects", value: "50+", color: "from-indigo-500 to-purple-500" },
                            { label: "Clients", value: "25+", color: "from-purple-500 to-pink-500" },
                            { label: "Years", value: "5+", color: "from-pink-500 to-indigo-500" }
                          ].map((stat, i) => (
                            <motion.div
                              key={stat.label}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                              className="text-center"
                            >
                              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                                {stat.value}
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                                {stat.label}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Center - Feature Showcase */}
                        <div className="space-y-6">
                          {[
                            {
                              icon: <Palette className="w-5 h-5" />,
                              title: "Modern Design",
                              description: "Cutting-edge aesthetics",
                              gradient: "from-indigo-500/20 to-purple-500/20"
                            },
                            {
                              icon: <Zap className="w-5 h-5" />,
                              title: "Lightning Fast",
                              description: "Optimized performance",
                              gradient: "from-purple-500/20 to-pink-500/20"
                            },
                            {
                              icon: <Shield className="w-5 h-5" />,
                              title: "Secure & Reliable",
                              description: "Enterprise-grade security",
                              gradient: "from-pink-500/20 to-indigo-500/20"
                            }
                          ].map((feature, i) => (
                            <motion.div
                              key={feature.title}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                              className="group relative"
                            >
                              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                              <div className="relative bg-white/30 dark:bg-black/30 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-white/20 hover:border-white/60 dark:hover:border-white/40 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                  <div className="p-2 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                                    <div className="text-indigo-600 dark:text-indigo-400">
                                      {feature.icon}
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm">
                                      {feature.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">
                                      {feature.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Bottom - CTA Section */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.9 }}
                          className="relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-lg"></div>
                          <div className="relative bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/40 dark:border-white/20">
                            <div className="text-center space-y-3">
                              <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                  Available for new projects
                                </span>
                              </div>
                              <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                                Ready to start your journey?
                              </div>
                              <Button
                                size="sm"
                                className="bg-white/80 hover:bg-white text-indigo-600 hover:text-indigo-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                              >
                                Let's Talk
                                <ArrowRight className="ml-2 h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-8 -left-8 w-16 h-16 border border-indigo-300/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border border-purple-300/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 mt-4 bg-gradient-to-br from-white/60 via-indigo-50/40 to-purple-50/30 dark:from-background/60 dark:via-indigo-950/30 dark:to-purple-950/20">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Successful Projects</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Dedicated Support</div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/40 dark:bg-indigo-700/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-lavender-200/40 dark:bg-indigo-800/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <div className="container px-4 md:px-6 relative z-10">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-6 shadow-lg backdrop-blur-sm"
                >
                  <Badge variant="floating">
                    Our Expertise
                  </Badge>
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-display mb-4"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300">
                    Proven Solutions for Modern Businesses
                  </span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-800 dark:text-gray-100 text-lg max-w-2xl mx-auto font-medium"
                >
                  With over 5 years of experience and 10+ successful projects, we've mastered the art of creating exceptional digital experiences that drive results.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {[
                  {
                    title: "Web Design & Development",
                    description: "Crafting unique, high-performance websites that stand out in the digital landscape. Our 5-year track record speaks to our commitment to excellence.",
                    features: ["Custom Design", "Responsive Layout", "SEO Optimization"],
                    href: "/services#web-development"
                  },
                  {
                    title: "Software Engineering",
                    description: "Building scalable, innovative solutions that solve real business challenges. Trusted by clients for our technical expertise and reliable delivery.",
                    features: ["Custom Solutions", "API Integration", "Cloud Services"],
                    href: "/services#software-engineering"
                  },
                  {
                    title: "Marketing Services",
                    description: "Data-driven strategies that have helped numerous businesses achieve their growth objectives. Proven results through our comprehensive approach.",
                    features: ["Digital Marketing", "Content Strategy", "Analytics"],
                    href: "/services#marketing-services"
                  }
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 rounded-xl p-6 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col space-y-3 hover:shadow-xl transition-all duration-300 hover:border-white/60 dark:hover:border-white/30">
                      <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{service.title}</h3>
                      <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-200">
                            <Zap className="w-4 h-4 text-indigo-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="outline"
                        className="w-full mt-4 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 border-white/40 dark:border-white/20"
                        asChild
                      >
                        <Link href={service.href}>Learn More</Link>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-pink-50/30 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-pink-950/20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4 mb-16">
                <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-6 shadow-lg backdrop-blur-sm">
                  <Badge variant="floating">
                    Why Choose Us
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-display">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300">
                    Our Competitive Advantage
                  </span>
                </h2>
                <p className="text-gray-800 dark:text-gray-100 max-w-[800px] text-lg font-medium">
                  What sets us apart from the competition and makes us the right partner for your digital journey
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <ValueCard
                  title="Affordable Solutions"
                  description="Competitive pricing without compromising on quality or results"
                />
                <ValueCard
                  title="Scalable Architecture"
                  description="Future-proof solutions that grow with your business needs"
                />
                <ValueCard
                  title="Modern Aesthetic"
                  description="Cutting-edge designs that keep you ahead of industry trends"
                />
                <ValueCard
                  title="SME-Focused"
                  description="Specialized expertise in helping small and medium enterprises thrive"
                />
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-white/60 via-lavender-50/40 to-indigo-50/30 dark:from-background/60 dark:via-lavender-950/30 dark:to-indigo-950/20" id="portfolio">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4 mb-16">
                <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-6 shadow-lg backdrop-blur-sm">
                  <Badge variant="floating">
                    Recent Project
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-display">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-300">
                    Brook of Cherith
                  </span>
                </h2>
                <p className="text-gray-800 dark:text-gray-100 max-w-[800px] text-lg font-medium">
                  A modern hospitalwebsite designed to connect and engage with the community
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100/40 to-purple-100/40 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-indigo-200/20 dark:border-indigo-800/20 shadow-xl">
                    <Image
                      src="https://res.cloudinary.com/dhiouuz96/image/upload/v1748041887/site_ax7bfk.png"
                      alt="Brook of Cherith Website"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <Button
                          variant="secondary"
                          size="lg"
                          className="bg-white/90 hover:bg-white text-indigo-600 hover:text-indigo-700"
                          asChild
                        >
                          <Link href="https://brookofcherith.co.ke" target="_blank" rel="noopener noreferrer">
                            Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Project Overview</h3>
                    <p className="text-gray-800 dark:text-gray-100 leading-relaxed font-medium">
                    A comprehensive hospital website designed to serve as a digital hub for our healthcare community.
                     The platform features modern design elements, seamless navigation, and essential functionality to support patients, visitors, and medical staff alike
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Key Features</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-indigo-100/50 dark:bg-indigo-900/50">
                          <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-100">Responsive Design</h4>
                          <p className="text-sm text-gray-700 dark:text-gray-200">Mobile-first approach</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-indigo-100/50 dark:bg-indigo-900/50">
                          <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-100">Modern Stack</h4>
                          <p className="text-sm text-gray-700 dark:text-gray-200">Next.js & React</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-indigo-100/50 dark:bg-indigo-900/50">
                          <Palette className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-100">Custom UI</h4>
                          <p className="text-sm text-gray-700 dark:text-gray-200">Unique design system</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-indigo-100/50 dark:bg-indigo-900/50">
                          <LineChart className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-100">Performance</h4>
                          <p className="text-sm text-gray-700 dark:text-gray-200">Optimized loading</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="px-3 py-1">Php</Badge>
                      <Badge variant="secondary" className="px-3 py-1">Js</Badge>
                      <Badge variant="secondary" className="px-3 py-1">TypeScript</Badge>
                      <Badge variant="secondary" className="px-3 py-1">CSS</Badge>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all duration-200"
                      asChild
                    >
                      <Link href="https://brookofcherith.co.ke" target="_blank" rel="noopener noreferrer">
                        View Live Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-pink-50/30 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-pink-950/20" id="testimonials">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4 mb-16">
                <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-6 shadow-lg backdrop-blur-sm">
                  <Badge variant="floating">
                    Testimonials
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-display">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300">
                    What Our Clients Say
                  </span>
                </h2>
                <p className="text-gray-800 dark:text-gray-100 max-w-[800px] text-lg font-medium">
                  Don't just take our word for it - hear from some of our satisfied clients
                </p>
              </div>

              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-2 md:p-4">
                    <TestimonialCard
                      quote="Working with this agency transformed our online presence. Their team delivered a website that exceeded our expectations and has significantly increased our conversion rates."
                      name="Pauline Kaniu"
                      title="DOO, Brooks of Cherith Hospital"
                      avatar="/placeholder.svg?height=80&width=80"
                    />
                  </CarouselItem>
                </CarouselContent>
                <div className="flex justify-center mt-8 gap-2">
                  <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-white dark:bg-background hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800" />
                  <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-white dark:bg-background hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800" />
                </div>
              </Carousel>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 md:py-32">
            <div className="container px-4 md:px-6 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-[10%] w-24 h-24 border border-indigo-400/30 rounded-full"></div>
              <div className="absolute bottom-0 right-[15%] w-32 h-32 border border-indigo-400/20 rounded-full"></div>
              <div className="absolute top-1/3 right-[10%] w-6 h-6 bg-indigo-300/30 rounded-full"></div>

              <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-display">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 leading-tight">
                    Ready to Elevate Your Business?
                  </span>
                </h2>
                <p className="text-grey-800 dark:text-gray-100 max-w-[800px] text-lg md:text-xl leading-relaxed font-medium">
                  Take the first step towards transforming your digital presence and achieving your business goals
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/contact">
                      Schedule a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-white/60 via-lavender-50/40 to-indigo-50/30 dark:from-background/60 dark:via-lavender-950/30 dark:to-indigo-950/20 relative overflow-hidden" id="about">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/20 via-purple-200/20 to-pink-200/20 dark:from-indigo-800/20 dark:via-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-200/20 via-purple-200/20 to-pink-200/20 dark:from-indigo-800/20 dark:via-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container px-4 md:px-6 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-8 order-2 lg:order-1">
                  <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-6 shadow-lg backdrop-blur-sm">
                    <Badge variant="floating">
                      Our Journey
                    </Badge>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-display">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-300">
                      A Legacy of Innovation
                    </span>
                  </h2>
                  <div className="space-y-6">
                    <p className="text-gray-800 dark:text-gray-100 text-lg leading-relaxed font-medium">
                      At Webglam, we believe that exceptional digital experiences shouldn't be a luxury—they should be the standard. Our story began with three core passions: crafting stunning web designs that captivate, building robust software solutions that perform, and creating marketing strategies that convert.
                    </p>
                    <p className="text-gray-800 dark:text-gray-100 text-lg leading-relaxed font-medium">
                      We're not just building websites and software; we're building the future of digital experiences, one project at a time. The journey continues, and we're just getting started.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-6">
                    <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-white/40 to-indigo-50/40 dark:from-background/40 dark:to-indigo-950/40 border border-indigo-200/40 dark:border-indigo-800/40 hover:border-indigo-300/60 dark:hover:border-indigo-700/60 transition-all duration-300">
                      <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">10+</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">Years Experience</span>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-white/40 to-indigo-50/40 dark:from-background/40 dark:to-indigo-950/40 border border-indigo-200/40 dark:border-indigo-800/40 hover:border-indigo-300/60 dark:hover:border-indigo-700/60 transition-all duration-300">
                      <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">10+</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">Projects Completed</span>
                    </div>
                  </div>
                </div>
                <div className="relative order-1 lg:order-2">
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200/40 via-purple-200/40 to-pink-200/40 dark:from-indigo-800/30 dark:via-purple-800/30 dark:to-pink-800/30 rounded-2xl -rotate-6 transform-gpu blur-sm"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-200/40 via-purple-200/40 to-indigo-200/40 dark:from-pink-800/30 dark:via-purple-800/30 dark:to-indigo-800/30 rounded-2xl rotate-3 transform-gpu blur-sm"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Our Team"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* SEO Keywords - Hidden from users but readable by search engines */}
      <div className="sr-only" aria-hidden="true">
        <span className="text-[1px] text-transparent opacity-0 select-none pointer-events-none">
          Kenya website designers, Nairobi website designers, Affordable website design, Web Design in Kenya, Web design and development in Kenya, Web Development, web hosting service in Kenya, Web Design Kenya, Web Design in Kenya, Affordable Web Hosting in Nairobi, Reseller hosting in Kenya, Web Design in Nairobi, Domain Registration in Kenya, website design in kenya, kenya web developers, web design kenya, web hosting kenya, web designers in kenya, kenya web designers, web designing kenya, kenya web designing, web designer, website design, design web, web design hosting, web design in nairobi, website designers in Kenya, Web Design in Kenya, web designers in Nairobi, website developers in Kenya, web developers in Kenya, web developers in Nairobi, web designers in Nairobi, web design in Nairobi, web designers in Nairobi, website designers in Nairobi, website developers in Nairobi, web developers in Nairobi, Top Web Design Companies in Kenya, website firm nairobi, computer firm nairobi, software development nairobi, professional web design, professional web designer, reliable hosting, web hosting, website hosting, domain registration, ICT related services, Affordable Web Hosting in Nairobi, Web design in Kenya, Kenya Domains, Reseller hosting in Kenya, Web Design in Nairobi, Domain Registration in Kenya, website design in kenya, kenya web developers, web design kenya, web hosting kenya, web designers in kenya, kenya web designers, web designing kenya, kenya web designing, web designer, website design, design web, web design hosting, web design in nairobi, website designing, web site design, web domain, website designer, website designer, web development, business web design, best web design, free web hosting, web host, ecommerce web hosting, web hosting domain, web hosting server, best web hosting, affordable web hosting, cheap hosting, dedicated hosting, server hosting, web hosts, domain name hosting, website hosting, Web designers in Kenya, web Hosting, web design in Kenya, website designing, Internet Marketing, search engine optimisation, web hosting, graphic design, website design, custom web development, top web design company in Nairobi, Kenya website designers, Web Hosting in Nairobi, Nairobi website Designers, SEO Company in Kenya, Nairobi Web Designers, Graphic design in nairobi, Logo design in nairobi, web designers in Kenya, PPC kenya, SEO Nairobi, Nyahururu website designers, Nyahururu web designers, Web design in Nyahururu, Website design Nyahururu, Nyahururu web development, Web designers in Nyahururu, Website designers in Nyahururu, Affordable web design Nyahururu, Professional web design Nyahururu, Nyahururu web hosting, Domain registration Nyahururu, Web design services Nyahururu, Website development Nyahururu, Nyahururu SEO services, Digital marketing Nyahururu, Graphic design Nyahururu, Logo design Nyahururu, E-commerce website Nyahururu, Business website Nyahururu, Nyahururu IT services, Computer services Nyahururu, Software development Nyahururu, Nyahururu digital agency, Web agency Nyahururu, Nyahururu web solutions, Website maintenance Nyahururu, Nyahururu web consultancy, Web design company Nyahururu, Top web designers Nyahururu, Best web design Nyahururu, Nyahururu website company, Web hosting Nyahururu, Nyahururu domain services, Website redesign Nyahururu, Nyahururu web experts, Professional web designers Nyahururu, Nyahururu web studio, Web design firm Nyahururu, Nyahururu digital services, Website creation Nyahururu, Nyahururu web consultancy, Web development company Nyahururu, Nyahururu website builders, Affordable website design Nyahururu, Nyahururu web professionals, Web design agency Nyahururu, Nyahururu internet services, Website hosting Nyahururu, Nyahururu web specialists, Custom web design Nyahururu, Nyahururu web solutions, Web design experts Nyahururu, Nyahururu website development, Professional website design Nyahururu, Web design services in Nyahururu, Website design services Nyahururu, Nyahururu Kenya web development company
        </span>
      </div>
    </>
  )
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, href }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border group h-full">
      <CardHeader className="pb-4">
        <div className="mb-4 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 inline-flex transition-colors duration-300 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50">
          {icon}
        </div>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          className="text-indigo-600 dark:text-indigo-400 p-0 hover:bg-transparent hover:text-indigo-800 dark:hover:text-indigo-300 group-hover:translate-x-1 transition-transform duration-300"
          asChild
        >
          <Link href={href}>
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 rounded-xl p-6 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col space-y-3 hover:shadow-xl transition-all duration-300 hover:border-white/60 dark:hover:border-white/30">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-sm">
          <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{title}</h3>
      </div>
      <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{description}</p>
    </div>
  )
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, title, category, href }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-white dark:bg-background transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Badge className="mb-3 bg-indigo-600/90 hover:bg-indigo-600 text-white border-none">
              {category}
            </Badge>
            <h3 className="font-bold text-2xl text-white mb-3">{title}</h3>
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-white/90 hover:bg-white text-indigo-600 hover:text-indigo-700 transition-all duration-300"
              asChild
            >
              <Link href={href} className="flex items-center">
                View Project 
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <Badge variant="outline" className="mb-3 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800">
          {category}
        </Badge>
        <h3 className="font-semibold text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  )
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, avatar }) => {
  return (
    <div className="bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 rounded-xl p-6 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col space-y-3 hover:shadow-xl transition-all duration-300 hover:border-white/60 dark:hover:border-white/30">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-100/40 via-purple-100/40 to-pink-100/40 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-full blur-sm"></div>
          <Image
            src={avatar || "/placeholder.svg"}
            alt={name}
            width={80}
            height={80}
            className="rounded-full border-4 border-white dark:border-background shadow-sm relative"
          />
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white p-1.5 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
            </svg>
          </div>
        </div>
        <p className="text-gray-800 dark:text-gray-100 italic text-lg leading-relaxed font-medium">"{quote}"</p>
        <div>
          <h4 className="font-semibold text-lg text-indigo-900 dark:text-indigo-100">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  )
}
