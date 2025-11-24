import React from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="flex flex-col items-start justify-center min-h-[60vh] py-20 gap-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Norton Almeida
        </h1>
        <h2 className="text-xl text-muted-foreground">
          JavaScript | Typescript | React.js | Next.js | Vue.js | Nuxt.js |
          Node.js
        </h2>
      </div>

      <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Bachelor's degree in Information Systems, with over 20 years in
        technology—including more than 15 years working with Fortune 500
        companies and over 10 years focused on front-end development. Highly
        skilled front-end software developer.
      </p>

      <div className="flex gap-4">
        <Button asChild variant="default">
          <Link href="mailto:norton.almeida@gmail.com">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link
            href="https://linkedin.com/in/norton-almeida"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link
            href="https://github.com/nortonx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </Button>
      </div>
    </section>
  )
}
