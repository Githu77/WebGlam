import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans, Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Background } from "@/components/background"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: true,
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: "Webglam - Modern Web Development",
  description: "We create beautiful, modern websites that help businesses grow.",
  appleWebApp: {
    title: "WebGlam",
    capable: true,
    statusBarStyle: "default"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10">
            <Background />
          </div>
          <div className="relative z-0">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
