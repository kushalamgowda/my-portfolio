import Link from "next/link"

export function Contact() {
  const contactBgs = ["/images/skills-bg.jpg", "/images/my.jpg", "/images/hero-bg.png"]
  const contactBg = contactBgs[Math.floor(Math.random() * contactBgs.length)]
  return (
    <section id="contact" className="relative overflow-hidden py-10 md:py-16 border-t border-border">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${contactBg})` }} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="grid gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <div className="grid gap-3 text-muted-foreground">
          <p>I’m open to internships, projects, and collaborations in ML and full‑stack development.</p>
          <div className="flex flex-col sm:flex-row gap-2 text-sm">
            <a className="text-sky-400 hover:underline" href="mailto:kushalamgowda0@gmail.com">
              kushalamgowda0@gmail.com
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <Link
              className="text-sky-400 hover:underline"
              href="https://www.linkedin.com/in/kushala-m-gowda-67b347263/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <Link
              className="text-sky-400 hover:underline"
              href="https://github.com/kushalamgowda"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <Link
              className="text-sky-400 hover:underline"
              href="https://drive.google.com/drive/folders/1JCazlolt_PjVTtTnWcq_NzHo6oCGx__W"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume (Google Drive)
            </Link>
          </div>
          <p className="text-xs">
            If the resume doesn’t open, ensure the Drive folder is shared with “Anyone with the link”.
          </p>
        </div>
      </div>
    </section>
  )
}
