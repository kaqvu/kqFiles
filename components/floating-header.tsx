"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function FloatingHeader() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none">
      <nav className="flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-secondary/80 backdrop-blur-md border border-border/50 pointer-events-auto">
        <Link
          href="/files"
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive("/files")
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Files
        </Link>
        
        <Link
          href="/"
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive("/") && pathname === "/"
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          kq
        </Link>
        
        <Link
          href="/info"
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive("/info")
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Info
        </Link>
      </nav>
    </header>
  )
}
