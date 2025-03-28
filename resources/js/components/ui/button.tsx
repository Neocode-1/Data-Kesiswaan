import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        red: "text-white bg-gradient-to-r from-red-500 via red-600 to-red-700",
        green: "text-white bg-gradient-to-r from-green-500 via green-600 to-green-700",
        orange: "text-white bg-gradient-to-r from-orange-500 via orange-600 to-orange-700",
        blue: "text-white bg-gradient-to-r from-blue-500 via blue-600 to-blue-700",
        yellow: "text-white bg-gradient-to-r from-yellow-500 via yellow-600 to-yellow-700",
        purple: "text-white bg-gradient-to-r from-purple-500 via purple-600 to-purple-700",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3 rounded-lg",
        xs: "h-6 rounded-md px-3 text-xs",
        sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-xl px-8 has-[>svg]:px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
