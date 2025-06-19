import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        floating:
          "bg-gradient-to-r from-indigo-200/95 via-purple-200/95 to-pink-200/95 dark:from-indigo-800/95 dark:via-purple-800/95 dark:to-pink-800/95 text-indigo-900 dark:text-indigo-100 hover:from-indigo-300 hover:via-purple-300 hover:to-pink-300 dark:hover:from-indigo-700 dark:hover:via-purple-700 dark:hover:to-pink-700 px-5 py-2 border-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium text-sm tracking-wide backdrop-blur-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
