"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  showCursor?: boolean
}

export default function TypewriterText({
  text,
  speed = 30,
  delay = 0,
  showCursor = false,
}: TypewriterTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!isInView) return
    let i = 0
    let interval: ReturnType<typeof setInterval>

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [isInView, text, speed, delay])

  return (
    <span ref={ref}>
      {displayed}
      {showCursor && (
        <span
          className={
            done
              ? "inline-block w-[2px] h-[0.9em] bg-primary ml-0.5 align-middle animate-[blink_1s_step-end_infinite]"
              : displayed.length > 0
                ? "inline-block w-[2px] h-[0.9em] bg-primary ml-0.5 align-middle"
                : ""
          }
        />
      )}
    </span>
  )
}
