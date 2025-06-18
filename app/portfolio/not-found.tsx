import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "@/components/header"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 md:px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Project Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          Sorry, we couldn't find the project you're looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <Link href="/portfolio">Return to Portfolio</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
