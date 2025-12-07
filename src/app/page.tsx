import NSection from "@/components/custom/XSection"
import Hero from "@/components/custom/Hero"
import Timeline from "@/components/custom/Timeline"
import SkillCloud from "@/components/custom/SkillCloud"

export default function Home() {
  const experienceData = [
    {
      title: "Full Stack Developer",
      company: "NACS Ltda",
      period: "Mar 2025 - Present",
      location: "Remote • Brasil",
    },
    {
      title: "Senior Frontend Developer",
      company: "87Labs",
      period: "Jul 2024 - Mar 2025",
      location: "Remote",
    },
    {
      title: "Senior Frontend Developer",
      company: "Defensoria Pública do Estado de Minas Gerais",
      period: "Nov 2023 - Aug 2024",
      location: "Hybrid • Belo Horizonte, Minas Gerais",
      description:
        "Responsible for developing current modules and new features supporting the Public Defender's Office demands.",
      skills: [
        "Maintenance of Chat app front-end",
        "Digital Signature User Interface development",
        "Agile methodologies adoption and process improvements",
      ],
    },
    {
      title: "Senior Frontend Developer",
      company: "Avenue Code",
      period: "Aug 2014 - Jul 2023",
      location: "Hybrid • Belo Horizonte",
      description: "Front-end Developer Consultant for Fortune 500 companies.",
      skills: [
        "Development of fast and responsive web apps",
        "New delivery features for department stores",
        "REST API Integration, A/B testing, Unit tests",
        "Component Style Guide (CSG) development",
        "Checkout and Splash page optimization",
        "Pixel-perfect Figma implementation",
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
  ]

  const skillsData = [
    "Vue.js",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Nuxt.js",
    "Node.js",
    "Agile Methodologies",
    "Microfrontends",
    "Vuex",
    "Pinia",
    "Express",
    "HTML",
    "CSS",
    "SASS",
    "LESS",
    "Shell Script",
    "Storybook",
    "Ruby on Rails",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "AWS",
  ]

  const causesData = [
    "Poverty Alleviation",
    "Science and Technology",
    "Arts and Culture",
    "Human Rights",
    "Education",
    "Environment",
    "Health",
    "Civil Rights and Social Action",
  ]

  return (
    <div data-testid="home-page" className="space-y-12 pb-20">
      <Hero />

      <NSection title="About" id="about">
        <div className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 space-y-6 max-w-3xl">
          <p>
            Bachelor's degree in Information Systems, with over{" "}
            <strong>20 years</strong> in technology and more than{" "}
            <strong>10 years</strong> focused on front-end development. Highly
            skilled front-end software developer with over 15 years of
            experience working with Fortune 500 companies as a consultant and
            developer.
          </p>
          <p>
            Strong experience in developing responsive web applications and
            mobile-first designs. Proven track record of delivering high-quality
            work on time and within budget.
          </p>
          <p>
            I’m a professional with excellent communication and collaboration
            skills. Passionate about creating user-friendly and visually
            appealing web applications. Currently looking for remote
            opportunities to work with international teams again.
          </p>
        </div>
      </NSection>

      <NSection title="Experience" id="experience">
        <Timeline items={experienceData} />
      </NSection>

      <NSection title="Education" id="education">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <h3 className="text-xl font-bold mb-1">PUC Minas</h3>
            <p className="text-muted-foreground font-medium mb-2">
              Postgraduate Degree, Solutions Architect
            </p>
            <p className="text-sm text-slate-500">Expected May 2025</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <h3 className="text-xl font-bold mb-1">FCSL</h3>
            <p className="text-muted-foreground font-medium mb-2">
              Bacharel em Sistemas de Informação
            </p>
            <p className="text-sm text-slate-500">2010 - 2013</p>
          </div>
        </div>
      </NSection>

      <NSection title="Skills" id="skills">
        <SkillCloud skills={skillsData} />
      </NSection>

      <NSection title="Causes" id="causes">
        <SkillCloud skills={causesData} />
      </NSection>
    </div>
  )
}
