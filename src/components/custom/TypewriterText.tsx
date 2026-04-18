"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
}

export default function TypewriterText({
  text,
  speed = 30,
  delay = 0,
}: TypewriterTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    if (!isInView) return
    let i = 0
    let interval: ReturnType<typeof setInterval> | undefined

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [isInView, text, speed, delay])

  return <span ref={ref}>{displayed}</span>
}
