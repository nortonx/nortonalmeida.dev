import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import type { LucideIcon } from "lucide-react"

export interface XInputProps extends React.ComponentProps<typeof Input> {
  icon?: LucideIcon
}

export default function XInput({
  className,
  icon: Icon,
  ...props
}: XInputProps) {
  return (
    <div className={cn("relative", props.disabled && "opacity-80")}>
      {Icon && (
        <Icon
          className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
          aria-hidden="true"
        />
      )}
      <Input
        {...props}
        className={cn("rounded-full", Icon ? "pl-9" : "", className)}
      />
    </div>
  )
}
