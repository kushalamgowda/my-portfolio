"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Hero() {
  return (
    <section className="relative isolate pt-14 md:pt-20 pb-8 md:pb-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/images/my.jpg")' }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-[1px]" />
      <div className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          Bangalore, India
        </div>

        {/* Profile headshot avatar */}
        <div className="flex items-center gap-3">
          <Avatar className="size-16 ring-1 ring-border">
            <AvatarImage src="/images/my.jpg" alt="Profile photo of Kushala M" className="object-cover object-center" />
            <AvatarFallback>KM</AvatarFallback>
          </Avatar>
          <h1 className="text-pretty text-3xl md:text-5xl font-semibold tracking-tight">
            Hi, I’m <span className="text-sky-400">Kushala</span>. I build ML and full‑stack projects.
          </h1>
        </div>

        <p className="max-w-2xl text-muted-foreground leading-relaxed">
          Computer Science student (CGPA 8.22) with strong fundamentals in Python and Machine Learning. Hands-on
          experience across Django, Flask, TensorFlow/PyTorch, OpenCV, and modern web stacks. I value practical
          problem‑solving, teamwork, and shipping real value.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white">
            <a href="mailto:kushalamgowda0@gmail.com" aria-label="Email Kushala">
              Email me
            </a>
          </Button>
          <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white">
            <Link
              href="https://drive.google.com/drive/folders/1JCazlolt_PjVTtTnWcq_NzHo6oCGx__W"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume on Google Drive"
            >
              View Resume
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white">
              <Link
                href="https://www.linkedin.com/in/kushala-m-gowda-67b347263/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile in a new tab"
              >
                LinkedIn
              </Link>
            </Button>
            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white">
              <Link
                href="https://github.com/kushalamgowda"
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile in a new tab"
              >
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
