import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-background text-foreground font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-secondary text-foreground px-3 py-2 rounded"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Kushala M</div>
          <ul className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <li>
              <a className="hover:text-sky-400 transition-colors" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-sky-400 transition-colors" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="hover:text-sky-400 transition-colors" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:text-sky-400 transition-colors" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div id="main" className="mx-auto max-w-5xl px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <footer className="border-t border-border mt-12">
        <div className="mx-auto max-w-5xl px-4 py-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kushala M. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
