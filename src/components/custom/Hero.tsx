"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

function useTypewriter(text: string, speed = 55, startDelay = 800) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined
    let i = 0

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return { displayed, done }
}

function TypewriterTag({ text, delay }: { text: string; delay: number }) {
  const { displayed } = useTypewriter(text, 40, delay)
  if (!displayed) return null
  return (
    <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
      {displayed}
    </span>
  )
}

export default function Hero() {
  const { displayed: nameDisplayed, done: nameDone } = useTypewriter(
    "Norton Almeida",
    70,
    200,
  )
  const { displayed, done } = useTypewriter(
    "Solutions Architect · Full Stack Developer",
    55,
    1200,
  )
  const { displayed: bioDisplayed, done: bioDone } = useTypewriter(
    "Designing scalable solutions and crafting exceptional user experiences. With over 20 years in technology and a specialization in frontend development, I bridge the gap between complex backend logic and beautiful, intuitive interfaces.",
    5,
    3600,
  )
  const { displayed: eduDisplayed } = useTypewriter(
    "Bachelor\u2019s in Information Systems \u2022 Postgrad Solutions Architect (2026)",
    10,
    4800,
  )

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  return (
    <section className="relative flex flex-col items-start justify-center min-h-[85vh] py-20 gap-8 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6 max-w-4xl">
        <motion.div variants={item} className="space-y-3">
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 pb-2 min-h-[1.2em]">
            {nameDisplayed}
            {!nameDone && nameDisplayed.length > 0 && (
              <span className="inline-block w-[3px] h-[0.9em] bg-slate-900 dark:bg-white ml-1 align-middle" />
            )}
          </h1>

          {/* Typewriter line */}
          <h2 className="font-mono text-xl text-slate-600 dark:text-slate-300 min-h-[1.75rem]">
            {displayed}
            {!done && displayed.length > 0 && (
              <span className="inline-block w-[2px] h-[1.1em] bg-primary ml-0.5 align-middle" />
            )}
          </h2>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-2 text-sm text-muted-foreground font-mono">
          {[
            "JavaScript",
            "TypeScript",
            "Vue",
            "Nuxt",
            "React",
            "Next.js",
            "Node.js",
            "NestJS",
            "ElysiaJS",
            "Bun",
          ].map((tech, i) => (
            <TypewriterTag key={tech} text={tech} delay={2600 + i * 120} />
          ))}
        </motion.div>

        <motion.div variants={item}>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 min-h-[6rem]">
            {bioDisplayed}
            {!bioDone && bioDisplayed.length > 0 && (
              <span className="inline-block w-[2px] h-[0.9em] bg-primary ml-0.5 align-middle" />
            )}
            {bioDone && (
              <>
                <br />
                <span className="block mt-4 text-sm text-slate-500 italic">
                  {eduDisplayed}
                </span>
              </>
            )}
          </p>
        </motion.div>

        <motion.div variants={item} className="flex gap-4 pt-4">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
            <Link href="mailto:norton.almeida@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Get in Touch
            </Link>
          </Button>

          <div className="flex gap-2">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full">
              <Link
                href="https://linkedin.com/in/norton-almeida"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full">
              <Link
                href="https://github.com/nortonx"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
