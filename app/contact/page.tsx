"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({})

  const validateForm = () => {
    const errors: {
      name?: string;
      email?: string;
      message?: string;
    } = {}

    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format'
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear validation error for the field being edited
    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
    // Clear general error when user starts typing
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setValidationErrors({})

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background/60 via-indigo-50/40 to-purple-50/30 dark:from-background/60 dark:via-indigo-950/30 dark:to-purple-950/20">
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
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/40 dark:bg-indigo-700/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-lavender-200/40 dark:bg-indigo-800/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-6 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-gradient-to-r from-indigo-100/40 to-purple-100/40 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-900 dark:text-indigo-100 border border-indigo-200/40 dark:border-indigo-700/30 shadow-sm backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Get in Touch</span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300">
                  Let's Create Something Amazing Together
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-100 max-w-2xl mx-auto font-medium">
                Ready to transform your business? We'd love to hear about your project and discuss how we can help you
                achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-pink-50/30 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-pink-950/20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-6 shadow-lg backdrop-blur-sm">
                  <Badge variant="floating">
                    Send us a Message
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-display">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-300">
                    Get in Touch
                  </span>
                </h2>
                <p className="text-gray-800 dark:text-gray-100 text-lg max-w-2xl mx-auto font-medium">
                  Prefer to reach out directly? Here are all the ways you can contact us.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 rounded-xl p-8 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur-xl hover:shadow-xl transition-all duration-300 hover:border-white/60 dark:hover:border-white/30">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-100/40 to-purple-100/40 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Message Sent Successfully!</h3>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40">
                        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className={`h-12 bg-white/50 dark:bg-background/50 border-indigo-200/40 dark:border-indigo-800/40 focus:border-indigo-500 dark:focus:border-indigo-400 ${
                            validationErrors.name ? 'border-red-500 dark:border-red-500' : ''
                          }`}
                          required
                        />
                        {validationErrors.name && (
                          <p className="text-sm text-red-600 dark:text-red-400">{validationErrors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className={`h-12 bg-white/50 dark:bg-background/50 border-indigo-200/40 dark:border-indigo-800/40 focus:border-indigo-500 dark:focus:border-indigo-400 ${
                            validationErrors.email ? 'border-red-500 dark:border-red-500' : ''
                          }`}
                          required
                        />
                        {validationErrors.email && (
                          <p className="text-sm text-red-600 dark:text-red-400">{validationErrors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        rows={6}
                        className={`resize-none bg-white/50 dark:bg-background/50 border-indigo-200/40 dark:border-indigo-800/40 focus:border-indigo-500 dark:focus:border-indigo-400 ${
                          validationErrors.message ? 'border-red-500 dark:border-red-500' : ''
                        }`}
                        required
                      />
                      {validationErrors.message && (
                        <p className="text-sm text-red-600 dark:text-red-400">{validationErrors.message}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white h-12 text-base shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="h-4 w-4" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Company Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-6 shadow-lg backdrop-blur-sm">
                  <Badge variant="floating">
                    Contact Information
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-display">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300">
                    Talk to Us (❁´◡`❁)
                  </span>
                </h2>
                <p className="text-gray-800 dark:text-gray-100 text-lg max-w-2xl mx-auto font-medium">
                  Connect with us or drop us a message.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ContactInfoCard
                  icon={<Mail className="h-6 w-6" />}
                  title="Email Us"
                  primary="info@webglam.com"
                  secondary=""
                  description="We typically respond within 2-4 hours"
                />
                <ContactInfoCard
                  icon={<Phone className="h-6 w-6" />}
                  title="Call Us"
                  primary="+254 742 532 606"
                  secondary=""
                  description="Mon-Fri, 9:00 AM - 6:00 PM EST"
                />
                <ContactInfoCard
                  icon={<MapPin className="h-6 w-6" />}
                  title="Connect With Us"
                  primary="Follow us on [Social Media Links]"
                  secondary="@webglam on Twitter, Instagram, LinkedIn"
                  description="Stay updated with our latest projects and insights"
                />
                <ContactInfoCard
                  icon={<Clock className="h-6 w-6" />}
                  title="Business Hours"
                  primary="Monday - Friday"
                  secondary="9:00 AM - 6:00 PM EST"
                  description="Weekend support available"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-white/60 via-lavender-50/40 to-indigo-50/30 dark:from-background/60 dark:via-lavender-950/30 dark:to-indigo-950/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-indigo-100/90 via-purple-100/90 to-pink-100/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-pink-900/90 mb-6 shadow-lg backdrop-blur-sm">
              <Badge variant="floating">
                FAQ
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-display">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-gray-800 dark:text-gray-100 text-lg max-w-2xl mx-auto font-medium">
              Have questions? Here are some of the most common questions we receive from our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FAQCard
              question="How long does a typical project take?"
              answer="Project timelines vary depending on scope and complexity. A simple website typically takes 4-6 weeks, while custom software development can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
            />
            <FAQCard
              question="What's included in your pricing?"
              answer="Our pricing includes design, development, testing, deployment, and initial support. We provide transparent pricing with no hidden fees and offer flexible payment plans for larger projects."
            />
            <FAQCard
              question="Do you provide ongoing support?"
              answer="Yes! We offer various support packages including maintenance, updates, hosting, and technical support. Our team is always available to help you grow and evolve your digital presence."
            />
            <FAQCard
              question="Can you work with our existing systems?"
              answer="We specialize in integrating with existing systems and can work with your current technology stack. We'll assess your needs and recommend the best approach for seamless integration."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface ContactInfoCardProps {
  icon: React.ReactNode
  title: string
  primary: string
  secondary: string
  description: string
}

function ContactInfoCard({ icon, title, primary, secondary, description }: ContactInfoCardProps) {
  return (
    <div className="bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 rounded-xl p-6 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col space-y-4 hover:shadow-xl transition-all duration-300 hover:border-white/60 dark:hover:border-white/30">
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-sm">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{primary}</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{secondary}</p>
        <p className="text-gray-700 dark:text-gray-200 text-sm">{description}</p>
      </div>
    </div>
  )
}

interface FAQCardProps {
  question: string
  answer: string
}

function FAQCard({ question, answer }: FAQCardProps) {
  return (
    <div className="bg-gradient-to-br from-white/60 to-indigo-50/60 dark:from-background/60 dark:to-indigo-950/60 rounded-xl p-6 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur-xl hover:shadow-xl transition-all duration-300 hover:border-white/60 dark:hover:border-white/30">
      <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-3">{question}</h3>
      <p className="text-gray-700 dark:text-gray-200">{answer}</p>
    </div>
  )
}
