import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface XButtonProps extends React.ComponentProps<typeof Button> {
  label?: string
}

export default function XButton({
  label,
  className,
  variant = "default",
  size,
  children,
  ...props
}: XButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "rounded-full",
        // Only add default paddings if no size is provided
        !size && "px-4 py-2",
        className,
      )}
      {...props}
    >
      {children ?? label}
    </Button>
  )
}
