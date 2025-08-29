import Link from "next/link"

type Project = {
  title: string
  summary: string
  details: string
  stack: string[]
  links?: { label: string; href: string }[]
  coverAlt: string
  placeholderQuery: string
  coverSrc?: string
}

const projects: Project[] = [
  {
    title: "Hand Gesture Controlled Subway Surfers",
    summary: "Webcam-based hand tracking to control gameplay in real time.",
    details:
      "Built with Mediapipe + OpenCV for robust hand detection and PyAutoGUI for input control. Used BlueStacks for Android emulation.",
    stack: ["Python", "Mediapipe", "OpenCV", "PyAutoGUI", "VS Code", "Git/GitHub"],
    links: [],
    coverAlt: "Hand tracking controlling a running game",
    placeholderQuery: "Hand Gesture Controlled Subway Surfers",
    coverSrc: "/images/gesture-cover.png",
  },
  {
    title: "AI-Based Quality Education Platform",
    summary: "Platform using IBM Watson for blueprint analysis, team formation, and task management.",
    details: "Integrated real-time collaboration and AI-driven project management workflows.",
    stack: ["Python", "Django", "MySQL", "Anaconda", "APIs", "HTML", "CSS", "JavaScript"],
    links: [],
    coverAlt: "Collaborative education platform interface",
    placeholderQuery: "AI-Based Quality Education Platform",
    coverSrc: "/images/education-cover.png",
  },
  {
    title: "Bike Classification Web App (Django + MobileNetV2)",
    summary: "92% accuracy bike classification in a web app.",
    details: "Used TensorFlow and OpenCV with MobileNetV2, deployed via Django with a clean UI.",
    stack: ["Django", "TensorFlow", "MobileNetV2", "OpenCV", "HTML", "CSS", "JavaScript"],
    links: [],
    coverAlt: "Bike image classification result screen",
    placeholderQuery: "Bike Classification Web App",
    coverSrc: "/images/bike-cover.png",
  },
]

function StackBadge({ label }: { label: string }) {
  return (
    <span className="text-[11px] leading-none rounded-md border border-border bg-secondary px-2 py-1">{label}</span>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-10 md:py-16 border-t border-border">
      <div className="grid gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-border bg-card overflow-hidden">
              <div className="aspect-[16/9] w-full bg-secondary">
                <img
                  src={
                    p.coverSrc
                      ? p.coverSrc
                      : p.placeholderQuery === "Hand Gesture Controlled Subway Surfers"
                        ? "/placeholder.svg?height=360&width=640&query=Hand%20Gesture%20Controlled%20Subway%20Surfers"
                        : p.placeholderQuery === "AI-Based Quality Education Platform"
                          ? "/placeholder.svg?height=360&width=640&query=AI-Based%20Quality%20Education%20Platform"
                          : "/placeholder.svg?height=360&width=640&query=Bike%20Classification%20Web%20App"
                  }
                  alt={p.coverAlt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 md:p-5 grid gap-3">
                <h3 className="text-lg font-semibold group-hover:text-sky-400 transition-colors">{p.title}</h3>
                <p className="text-muted-foreground">{p.summary}</p>
                <p className="text-sm text-muted-foreground">{p.details}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {p.stack.map((s) => (
                    <StackBadge key={p.title + s} label={s} />
                  ))}
                </div>
                {p.links && p.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-1">
                    {p.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-sky-400 hover:underline"
                      >
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
