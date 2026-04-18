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
    location: "Remote \u2022 Full-time",
    description:
      "Delivering senior front-end consulting for a Fortune 500 beverage industry client; building enterprise web applications with Vue.js and TypeScript on Microsoft Azure, with Azure DevOps pipelines.",
    skills: [
      "Built custom productivity workflows and automated code-reviewer bots leveraging LLMs to standardize reviews, catch regressions earlier, and compress feedback cycles across the team",
      "Driving code quality through reviews, unit/integration testing, and design-system alignment across distributed teams",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "NACS Ltda",
    period: "Mar 2025 - Present",
    location: "Remote \u2022 Freelance",
    description:
      "Consultant for NACS clients, working as a Solutions Architect and Full Stack Developer.",
    skills: [
      "Built a Financial Tracker MVP using Nuxt 3, Vue 3, Shadcn/Tailwind, Nest.js, and PostgreSQL with Playwright E2E testing",
      "Developed platforms for multiple business domains (work safety, finance tracking) with full-stack ownership",
      "Delivered consulting services with agile methodologies and modern tooling (Bun, ElysiaJS, Drizzle, Pinia); integrated AI-assisted development (Claude Code, GitHub Copilot) to compress time-to-MVP while maintaining test coverage",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "87Labs",
    period: "Jul 2024 - Mar 2025",
    location: "Remote \u2022 Contract",
    description:
      "Consulted for Locaweb (major Brazilian ISP) on their Customer Central platform, delivering Vue.js component development and unit testing.",
    skills: [
      "Reverse-engineered undocumented legacy Ruby on Rails platform to enable modernization",
      "Automated deployment pipelines with Azure DevOps; monitored performance via Sentry and Grafana",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Public Defender\u2019s Office of Minas Gerais",
    period: "Nov 2023 - Aug 2024",
    location: "Hybrid \u2022 Belo Horizonte",
    description:
      "Developed Digital Signature UI in Vue.js, integrating with REST APIs to enable digital signing of legal petitions.",
    skills: [
      "Maintained and enhanced the internal Chat application with new components and desktop-optimized views",
      "Contributed to agile adoption and process improvement initiatives",
    ],
  },
  {
    title: "Senior Frontend Developer / Consultant",
    company: "Avenue Code",
    period: "Aug 2014 - Jul 2023",
    location: "Hybrid \u2022 Belo Horizonte",
    description:
      "Served as front-end consultant for Fortune 500 companies across retail and automotive industries for 9 years; 5 years of dedicated AEM frontend development (HTL/Sightly, component/template authoring, clientlibs, Granite UI, Coral UI).",
    skills: [
      "Led implementation of Customer Journey for a Car Rental product as sole front-end developer, delivered on time and within budget",
      "Executed rebranding projects for 3 major car manufacturers, involving CSS overhauls and new component libraries",
      "Built and optimized Component Style Guide (CSG) and Storybook-based component libraries for department stores",
      "Performed REST API integration, A/B testing, and checkout optimization during peak Holiday seasons",
      "Mentored junior and mid-level developers; led onboarding, code reviews, and client presentations",
    ],
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
  "Vue.js",
  "Nuxt.js",
  "Vuex",
  "Pinia",
  "Quasar",
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "Nest.js",
  "Ruby on Rails",
  "HTML5",
  "CSS3",
  "SASS",
  "LESS",
  "Tailwind CSS",
  "Shadcn",
  "Storybook",
  "Zustand",
  "Jest",
  "Vitest",
  "React Testing Library",
  "Playwright",
  "Cypress",
  "A/B Testing",
  "Microsoft Azure",
  "Azure DevOps",
  "AWS",
  "GCP",
  "Docker",
  "CI/CD (GitHub Actions, GitLab CI)",
  "Vercel",
  "Heroku",
  "Sentry",
  "Grafana",
  "Datadog",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Supabase",
  "Prisma",
  "Drizzle",
  "Zod",
  "REST APIs",
  "Microfrontends",
  "WCAG",
  "Core Web Vitals",
  "Agile/Scrum",
  "Code Review",
  "Mentoring",
  "AEM Frontend (HTL/Sightly)",
  "AI-Augmented Development",
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
    <div data-testid="home-page" className="space-y-6 pb-12">
      <GitHubHeatmap />
      <Hero />

      <NSection title="About" id="about">
        <div className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 space-y-4 max-w-3xl">
          <p>
            <TypewriterText
              text="Senior Front-End Developer with 20+ years in technology and 10+ years of dedicated front-end expertise. Vue/Nuxt specialist with strong React/Next.js experience. Proven track record as a consultant for Fortune 500 companies, delivering high-performance web applications, leading rebranding initiatives, and mentoring development teams."
              speed={5}
            />
          </p>
          <p>
            <TypewriterText
              text="Skilled in modern JavaScript frameworks, responsive design, accessibility (WCAG), agile methodologies, and AI-augmented development workflows \u2014 including custom productivity automations and code-review bots."
              speed={5}
              delay={1500}
            />
          </p>
        </div>
      </NSection>

      <NSection title="Experience" id="experience">
        <Timeline items={experienceData} />
      </NSection>

      <NSection title="Education" id="education">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
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
              <TypewriterText text="2025 \u2013 2026" speed={30} delay={1200} />
            </p>
          </div>
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <h3 className="text-xl font-bold mb-1">
              <TypewriterText text="FCSL" speed={40} />
            </h3>
            <p className="text-muted-foreground font-medium mb-2">
              <TypewriterText
                text="Bachelor\u2019s in Information Systems"
                speed={20}
                delay={200}
              />
            </p>
            <p className="text-sm text-slate-500">
              <TypewriterText text="2013" speed={30} delay={900} />
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
