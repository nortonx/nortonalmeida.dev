import NSection from "@/components/custom/XSection"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "FinTrack",
    url: "https://fintrack.nortonalmeida.dev",
    image: "/fintrack.png",
    description:
      "A modern, premium financial dashboard to track your expenses, investments, and net worth with sleek charts and dynamic UI.",
  },
  {
    title: "OmniRPG",
    url: "https://rpg-app.nortonalmeida.dev",
    image: "/omnirpg.png",
    description:
      "A comprehensive tabletop RPG tool featuring character stats, inventory management, and immersive fantasy maps.",
  },
]

export default function Portfolio() {
  return (
    <div data-testid="portfolio-page" className="w-full space-y-8">
      <NSection title="Projects">
        <div className="grid grid-cols-1 gap-8 mt-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col md:flex-row overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg dark:hover:shadow-primary/10">
              <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:w-3/5">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>
                <div>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    Visit {project.title}
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </NSection>
    </div>
  )
}
