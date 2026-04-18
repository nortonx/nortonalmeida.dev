import GitHubHeatmap from "@/components/custom/GitHubHeatmap"
import Hero from "@/components/custom/Hero"
import SkillCloud from "@/components/custom/SkillCloud"
import Timeline from "@/components/custom/Timeline"
import TypewriterText from "@/components/custom/TypewriterText"
import NSection from "@/components/custom/XSection"

const experienceData = [
  {
    title: "Full Stack Developer",
    company: "Amaris Consulting",
    period: "Dec 2025 - Present",
    location: "Remote • Full-time",
    description:
      "Providing senior front-end consulting services for enterprise clients.",
  },
  {
    title: "Full-Stack Developer",
    company: "NACS Ltda",
    period: "Mar 2025 - Present",
    location: "Remote • Freelance",
    description:
      "Consultant for NACS clients, working as a Solutions Architect and Full Stack Developer.",
    skills: [
      "Built a Financial Tracker MVP using Next.js 15, React 19, Shadcn/Tailwind, Nest.js, and PostgreSQL with Playwright E2E testing",
      "Developed platforms for multiple business domains (work safety, finance tracking) with full-stack ownership",
      "Delivered consulting services with agile methodologies and modern tooling (Bun, ElysiaJS, Drizzle)",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "87Labs",
    period: "Jul 2024 - Mar 2025",
    location: "Remote • Contract",
    description:
      "Consulted for Locaweb (major ISP) on their Customer Central platform, delivering component development and unit testing.",
    skills: [
      "Reverse-engineered undocumented legacy Ruby on Rails platform to enable modernization",
      "Automated deployment pipelines with Azure DevOps",
      "Monitored performance via Sentry and Grafana",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Defensoria P\u00fablica do Estado de Minas Gerais",
    period: "Nov 2023 - Aug 2024",
    location: "Hybrid • Belo Horizonte, Minas Gerais",
    description:
      "Responsible for developing current modules and new features supporting the Public Defender's Office demands.",
    skills: [
      "Developed Digital Signature UI, integrating with REST APIs to enable digital signing of legal petitions",
      "Maintained and enhanced the internal Chat application with new components and desktop-optimized views",
      "Contributed to agile adoption and process improvement initiatives",
    ],
  },
  {
    title: "Senior Frontend Developer / Consultant",
    company: "Avenue Code",
    period: "Aug 2014 - Jul 2023",
    location: "Hybrid • Belo Horizonte",
    description:
      "Front-end Developer Consultant for Fortune 500 companies across retail and automotive industries for 9 years.",
    skills: [
      "Led implementation of Customer Journey for a Car Rental product as sole front-end developer",
      "Executed rebranding projects for 3 major car manufacturers, involving CSS overhauls and new component libraries",
      "Built and optimized Component Style Guide (CSG) and Storybook-based component libraries for department stores",
      "REST API integration, A/B testing, and checkout optimization during peak Holiday seasons",
      "Mentored junior and mid-level developers; led onboarding, code reviews, and client presentations",
    ],
  },
  {
    title: "Software Developer",
    company: "AgilityFeat",
    period: "Aug 2022 - Sep 2022",
    location: "Belo Horizonte, Minas Gerais, Brazil",
    description: "Short-term consulting project during Avenue Code employment.",
    skills: ["Ruby on Rails", "React", "AWS", "Scrum"],
  },
  {
    title: "Web Developer",
    company: "Self-Employed (Freelancer)",
    period: "2011 - 2014",
    location: "Belo Horizonte",
    description:
      "Developed a Ruby on Rails physical evaluation platform and WordPress websites for various clients.",
    skills: [
      "Set up testing environments with live hosting and Git for instant client review",
    ],
  },
]

const SKILLS = [
  "TypeScript",
  "JavaScript",
  "React.js",
  "Next.js",
  "Vue.js",
  "Vuex",
  "Pinia",
  "Nuxt.js",
  "Node.js",
  "Express",
  "Nest.js",
  "HTML5",
  "CSS3",
  "SASS",
  "LESS",
  "Tailwind CSS",
  "Shadcn",
  "Storybook",
  "Zustand",
  "Quasar",
  "Jest",
  "Vitest",
  "React Testing Library",
  "Playwright",
  "Cypress",
  "A/B Testing",
  "AWS",
  "GCP",
  "Docker",
  "CI/CD",
  "Vercel",
  "Heroku",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Supabase",
  "Prisma",
  "Drizzle",
  "Zod",
  "REST APIs",
  "WCAG",
  "Core Web Vitals",
  "Agile/Scrum",
  "Microfrontends",
  "Code Review",
  "Mentoring",
  "Ruby on Rails",
  "PHP",
  "Shell Script",
]

const CERTIFICATIONS = [
  "Google Agile Essentials \u2013 Coursera",
  "Google AI Essentials \u2013 Credly",
  "Datadog Foundation",
]

const LANGUAGES = [
  "English (Advanced/Fluent)",
  "Portuguese (Native)",
  "Spanish (Basic)",
]

const CAUSES = [
  "Poverty Alleviation",
  "Science and Technology",
  "Arts and Culture",
  "Human Rights",
  "Education",
  "Environment",
  "Health",
  "Civil Rights and Social Action",
]

export default function Home() {
  return (
    <div data-testid="home-page" className="space-y-12 pb-20">
      <GitHubHeatmap />
      <Hero />

      <NSection title="About" id="about">
        <div className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 space-y-6 max-w-3xl">
          <p>
            <TypewriterText
              text="Bachelor's degree in Information Systems, with over 20 years in technology and more than 10 years focused on front-end development. Highly skilled front-end software developer with over 15 years of experience working with Fortune 500 companies as a consultant and developer."
              speed={5}
            />
          </p>
          <p>
            <TypewriterText
              text="Strong experience in developing responsive web applications and mobile-first designs. Proven track record of delivering high-quality work on time and within budget."
              speed={5}
              delay={1500}
            />
          </p>
          <p>
            <TypewriterText
              text="I'm a professional with excellent communication and collaboration skills. Passionate about creating user-friendly and visually appealing web applications. Currently looking for remote opportunities to work with international teams again."
              speed={5}
              delay={2500}
            />
          </p>
        </div>
      </NSection>

      <NSection title="Experience" id="experience">
        <Timeline items={experienceData} />
      </NSection>

      <NSection title="Education" id="education">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <h3 className="text-xl font-bold mb-1">
              <TypewriterText text="PUC Minas" speed={40} />
            </h3>
            <p className="text-muted-foreground font-medium mb-2">
              <TypewriterText
                text="Postgraduate Degree, Solutions Architect"
                speed={20}
                delay={400}
              />
            </p>
            <p className="text-sm text-slate-500">
              <TypewriterText
                text="Expected May 2025"
                speed={30}
                delay={1200}
              />
            </p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <h3 className="text-xl font-bold mb-1">
              <TypewriterText text="FCSL" speed={40} />
            </h3>
            <p className="text-muted-foreground font-medium mb-2">
              <TypewriterText
                text="Bacharel em Sistemas de Informa\u00e7\u00e3o"
                speed={20}
                delay={200}
              />
            </p>
            <p className="text-sm text-slate-500">
              <TypewriterText text="2010 - 2013" speed={30} delay={900} />
            </p>
          </div>
        </div>
      </NSection>

      <NSection title="Skills" id="skills">
        <SkillCloud skills={SKILLS} />
      </NSection>

      <NSection title="Certifications" id="certifications">
        <SkillCloud skills={CERTIFICATIONS} />
      </NSection>

      <NSection title="Languages" id="languages">
        <SkillCloud skills={LANGUAGES} />
      </NSection>

      <NSection title="Causes" id="causes">
        <SkillCloud skills={CAUSES} />
      </NSection>
    </div>
  )
}
