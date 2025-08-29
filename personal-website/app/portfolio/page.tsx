import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function PortfolioPage() {
  return (
    <main className="min-h-dvh bg-zinc-950 text-zinc-100 font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zinc-800 text-zinc-100 px-3 py-2 rounded"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
        <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="text-sm text-zinc-300">Kushala M</div>
          <ul className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
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

      <footer className="border-t border-zinc-800/80 mt-12">
        <div className="mx-auto max-w-5xl px-4 py-8 text-xs text-zinc-400">
          © {new Date().getFullYear()} Kushala M. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
