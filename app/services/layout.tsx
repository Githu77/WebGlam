import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - WebGlam',
  description: 'Explore our comprehensive range of digital services including web design, software engineering, and marketing solutions tailored to your business needs.',
  openGraph: {
    title: 'Our Services - WebGlam',
    description: 'Explore our comprehensive range of digital services including web design, software engineering, and marketing solutions tailored to your business needs.',
    url: 'https://webglam.co.ke/services',
  },
  twitter: {
    title: 'Our Services - WebGlam',
    description: 'Explore our comprehensive range of digital services including web design, software engineering, and marketing solutions tailored to your business needs.',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 