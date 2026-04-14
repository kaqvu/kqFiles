"use client"

import { useEffect, useState } from "react"

export function InfoContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <p 
          className={`text-muted-foreground text-sm uppercase tracking-widest mb-8 transition-all duration-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          About
        </p>
        
        <div className="space-y-12">
          <div 
            className={`transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-6 leading-tight text-balance">
              Creating Minecraft modifications and tools that enhance gameplay.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {"I'm"} kaqvu, a developer focused on crafting Minecraft modifications, resource packs, and automation tools. This site showcases my collection of files and tools for the Minecraft community.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              My journey started with a passion for creating tools that solve real problems in Minecraft gameplay. Whether {"it's"} automation mods, utility tools, or custom modifications, I focus on delivering solutions that are both powerful and easy to use.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every modification I create is an opportunity to learn something new and push the boundaries of what can be done in Minecraft. I believe in writing clean code and building tools that people actually want to use. The goal is always to make Minecraft more enjoyable and accessible for everyone.
            </p>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Focus Areas
            </h2>
            <div className="grid gap-3">
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                <p className="text-foreground">Minecraft Modifications</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                <p className="text-foreground">Automation Tools</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                <p className="text-foreground">Resource Packs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
