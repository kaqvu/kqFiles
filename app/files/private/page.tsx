"use client"

import { privateFiles } from "@/lib/files-data"
import { useEffect, useState } from "react"
import { Download } from "lucide-react"

export default function PrivateFilesPage() {
  const [mounted, setMounted] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="pt-24 md:pt-32">
      <section className="min-h-[80vh] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`mb-16 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Downloads
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              Files
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            {privateFiles.map((file, index) => (
              <div
                key={file.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden transition-all duration-700 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="relative flex items-center justify-between p-8 md:p-12 rounded-2xl bg-secondary/20 border border-border/30 transition-all duration-500 group-hover:bg-secondary/40 group-hover:border-primary/30">
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent rounded-2xl transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary">
                        {file.version}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {file.name}
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
                      {file.description}
                    </p>
                  </div>
                  <div className="relative z-10 flex-shrink-0 ml-8">
                    <a
                      href={file.downloadUrl}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-border/50 group-hover:border-primary group-hover:glow-primary transition-all duration-500"
                    >
                      <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                      <Download className="relative z-10 w-6 h-6 md:w-8 md:h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </a>
                  </div>
                  <div className="absolute bottom-3 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-primary via-primary/50 to-transparent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </div>
            ))}
          </div>
          <div 
            className={`mt-16 text-center transition-all duration-1000 delay-700 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-muted-foreground/60 text-sm">
              More files coming soon
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
