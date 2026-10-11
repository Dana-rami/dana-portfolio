import { useEffect, useState } from "react"
import { navLinks } from "../data/nav"
import { profile } from "../data/profile"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled
          ? "border-b border-sand/80 bg-ivory/90 backdrop-blur-md shadow-sm"
          : "bg-ivory/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-display text-2xl tracking-wide text-ink">
          {profile.name}
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand bg-card lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-menu"
          className="border-t border-sand bg-ivory px-5 py-6 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 text-lg text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
