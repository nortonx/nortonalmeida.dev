import * as React from "react"
import { cn } from "@/lib/utils"

export interface NSectionProps extends React.ComponentProps<"section"> {
  title: string
}

export default function XSection({
  title,
  className,
  children,
  ...props
}: NSectionProps) {
  return (
    <section
      aria-label={title}
      className={cn(
        "relative border rounded-md p-4 border-slate-300",
        className,
      )}
      {...props}
    >
      <span className="absolute -top-3.5 left-4 inline-block rounded-sm bg-background px-2 text-xl font-bold dark:text-slate-200 text-slate-800">
        {title}
      </span>
      {children}
    </section>
  )
}
