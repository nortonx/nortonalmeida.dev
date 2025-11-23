import NSection from "@/components/custom/XSection"
import Hero from "@/components/custom/Hero"

export default function Home() {
  return (
    <div data-testid="home-page" className="space-y-20 pb-20">
      <Hero />

      <NSection title="About" id="about">
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            Bachelor's degree in Information Systems, with over 20 years in
            technology and more than 10 years focused on front-end development.
            Highly skilled front-end software developer with over 15 years of
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
        <div className="space-y-8">
          <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 ml-2">
            <h3 className="text-lg font-bold">Full Stack Developer</h3>
            <p className="text-sm text-muted-foreground">
              NACS Ltda • Mar 2025 - Present
            </p>
            <p className="mt-2">Remote • Brasil</p>
          </div>

          <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 ml-2">
            <h3 className="text-lg font-bold">Senior Frontend Developer</h3>
            <p className="text-sm text-muted-foreground">
              87Labs • Jul 2024 - Mar 2025
            </p>
            <p className="mt-2">Remote</p>
          </div>

          <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 ml-2">
            <h3 className="text-lg font-bold">Senior Frontend Developer</h3>
            <p className="text-sm text-muted-foreground">
              Defensoria Pública do Estado de Minas Gerais • Nov 2023 - Aug 2024
            </p>
            <p className="mt-2">Hybrid • Belo Horizonte, Minas Gerais</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              <li>
                Responsible for developing current modules and new platform
                features that support the Public Defender's Office demands.
              </li>
              <li>Maintenance of current front-end code for Chat app.</li>
              <li>Digital Signature User Interface development.</li>
              <li>
                Help with agile methodologies adoption, and process
                improvements.
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 ml-2">
            <h3 className="text-lg font-bold">Senior Frontend Developer</h3>
            <p className="text-sm text-muted-foreground">
              Avenue Code • Aug 2014 - Jul 2023
            </p>
            <p className="mt-2">Hybrid • Belo Horizonte</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              <li>Front-end Developer Consultant for Fortune 500 companies.</li>
              <li>Development of fast and responsive web apps.</li>
              <li>
                New delivery features for products bought at department stores.
              </li>
              <li>REST API Integration, A/B testing, Unit tests.</li>
              <li>
                Development and optimization of components for the Component
                Style Guide (CSG).
              </li>
              <li>Checkout and Splash page optimization.</li>
              <li>Figma prototypes implementation (pixel perfect).</li>
            </ul>
          </div>

          <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 ml-2">
            <h3 className="text-lg font-bold">Software Developer</h3>
            <p className="text-sm text-muted-foreground">
              AgilityFeat • Aug 2022 - Sep 2022
            </p>
            <p className="mt-2">Belo Horizonte, Minas Gerais, Brazil</p>
            <p className="mt-2 text-sm">Ruby on Rails, React, AWS, Scrum</p>
          </div>
        </div>
      </NSection>

      <NSection title="Education" id="education">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold">PUC Minas</h3>
            <p className="text-muted-foreground">
              Postgraduate Degree, Solutions Architect
            </p>
            <p className="text-sm">Expected May 2025</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">FCSL</h3>
            <p className="text-muted-foreground">
              Bacharel em Sistemas de Informação, Tecnologia da Informação
            </p>
            <p className="text-sm">2010 - 2013</p>
          </div>
        </div>
      </NSection>

      <NSection title="Skills" id="skills">
        <div className="flex flex-wrap gap-2">
          {[
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
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </NSection>

      <NSection title="Causes" id="causes">
        <div className="flex flex-wrap gap-2">
          {[
            "Poverty Alleviation",
            "Science and Technology",
            "Arts and Culture",
            "Human Rights",
            "Education",
            "Environment",
            "Health",
            "Civil Rights and Social Action",
          ].map((cause) => (
            <span
              key={cause}
              className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-full text-sm"
            >
              {cause}
            </span>
          ))}
        </div>
      </NSection>
    </div>
  )
}
