"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  images: string[]
  className?: string
  overlayClassName?: string // e.g., "bg-black/50"
}

export function SectionBgRandom({ children, images, className, overlayClassName = "bg-black/50" }: Props) {
  const image = React.useMemo(() => {
    if (!images || images.length === 0) return undefined
    const idx = Math.floor(Math.random() * images.length)
    return images[idx]
  }, [images])

  return (
    <div className={cn("relative overflow-hidden rounded-xl", className)}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover"
        style={image ? { backgroundImage: `url(${image})` } : undefined}
      />
      <div aria-hidden="true" className={cn("absolute inset-0", overlayClassName)} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
