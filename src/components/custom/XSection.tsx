"use client"

import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import ScrollAnimatedSection from "./ScrollAnimatedSection"

function useTypewriterInView(text: string, speed = 45) {
  const ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!isInView) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [isInView, text, speed])

  return { ref, displayed, done }
}

export interface NSectionProps extends React.ComponentProps<"section"> {
  title: string
}

export default function XSection({
  title,
  className,
  children,
  ...props
}: NSectionProps) {
  const { ref, displayed, done } = useTypewriterInView(title)

  return (
    <ScrollAnimatedSection className="w-full">
      <section
        aria-label={title}
        className={cn("relative py-8 md:py-12", className)}
        {...props}>
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h2
            ref={ref}
            className="font-mono text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 shrink-0">
            {displayed}
            {!done && displayed.length > 0 && (
              <span className="inline-block w-[2px] h-[0.9em] bg-primary ml-0.5 align-middle" />
            )}
          </h2>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
        </div>
        {children}
      </section>
    </ScrollAnimatedSection>
  )
}
