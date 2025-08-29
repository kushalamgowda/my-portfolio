import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function About() {
  const aboutBgs = ["/images/skills-bg.jpg", "/images/my.jpg", "/images/hero-bg.png"]
  const aboutBg = aboutBgs[Math.floor(Math.random() * aboutBgs.length)]
  return (
    <section id="about" className="relative overflow-hidden py-10 md:py-16 border-t border-border">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutBg})` }} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="grid gap-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
          <Avatar className="size-12 ring-1 ring-border">
            <AvatarImage src="/images/my.jpg" alt="Profile photo of Kushala M" className="object-cover object-center" />
            <AvatarFallback>KM</AvatarFallback>
          </Avatar>
        </div>
        <div className="grid gap-4 text-muted-foreground leading-relaxed">
          <p>
            I’m Kushala, born in Tumkur and brought up in Bangalore. I’m pursuing a B.E. in Computer Science (CGPA
            8.22). I enjoy applying Python and Machine Learning to solve practical problems and collaborating in teams.
          </p>
          <p>
            I’ve completed internships and certifications with IBM and Microsoft, gaining valuable hands‑on exposure. I
            value time and money management, and I’m working on avoiding spending too long perfecting small details.
            Outside academics, I recharge by playing games and sleeping.
          </p>
        </div>
      </div>
    </section>
  )
}
