const core = [
  "Python",
  "Machine Learning",
  "Flask",
  "Django",
  "TensorFlow",
  "PyTorch",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "SQL",
  "C++/C",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Angular",
  "React",
  "MobileNetV2",
  "OpenCV",
  "Mediapipe",
  "PyAutoGUI",
]
const tools = ["PowerBI", "MS Excel", "LaTeX", "Anaconda", "AWS", "venv", "Git", "GitHub"]

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-secondary px-2.5 py-1 text-xs">
      {label}
    </span>
  )
}

export function Skills() {
  const skillBgs = ["/images/skills-bg.jpg", "/images/my.jpg", "/images/hero-bg.png"]
  const skillBg = skillBgs[Math.floor(Math.random() * skillBgs.length)]
  return (
    <section id="skills" className="relative py-10 md:py-16 border-t border-border overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${skillBg})` }} />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="grid gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>

        <div className="grid gap-3">
          <h3 className="text-sm text-muted-foreground">Core</h3>
          <div className="flex flex-wrap gap-2">
            {core.map((s) => (
              <Chip key={s} label={s} />
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <h3 className="text-sm text-muted-foreground">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <Chip key={t} label={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
