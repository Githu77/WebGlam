"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Rocket, Heart, Lightbulb, Zap, Sparkles } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Team Members", value: "25+" },
    { label: "Years Experience", value: "10+" },
  ]

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description: "We're passionate about creating digital experiences that make a difference.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and close collaboration with our clients.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to user experience.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "David Kim",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background/60 via-indigo-50/40 to-purple-50/30 dark:from-background/60 dark:via-indigo-950/30 dark:to-purple-950/20">
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/40 dark:bg-indigo-700/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-lavender-200/40 dark:bg-indigo-800/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-gradient-to-r from-indigo-100/40 to-purple-100/40 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-900 dark:text-indigo-100 border border-indigo-200/40 dark:border-indigo-700/30 shadow-sm backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Our Story</span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 leading-tight">
                  Crafting Digital Excellence
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium">
                We're a team of passionate creators, innovators, and problem-solvers dedicated to transforming ideas into exceptional digital experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-6 shadow-lg backdrop-blur-sm">
              <Badge variant="floating">
                Our Values
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-display">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-300">
                What Drives Us
              </span>
            </h2>
            <p className="text-gray-800 dark:text-gray-100 text-lg max-w-2xl mx-auto font-medium">
              Our core values shape everything we do and help us deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 rounded-xl p-6 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col space-y-3 hover:shadow-xl transition-all duration-300 hover:border-white/60 dark:hover:border-white/30">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-sm">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{value.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-pink-50/30 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-pink-950/20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-300">
                  Ready to Start Your Project?
                </span>
              </h2>
              <p className="text-gray-800 dark:text-gray-100 text-lg font-medium">
                Let's work together to bring your vision to life. We're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 