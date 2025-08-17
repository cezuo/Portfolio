import type { PropsWithChildren } from "react"
import Navbar from "./Navbar"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <footer className="mx-auto max-w-6xl px-4 py-10 opacity-80">
        <p className="text-xs">© {new Date().getFullYear()} Sebastian</p>
      </footer>
    </div>
  )
}
