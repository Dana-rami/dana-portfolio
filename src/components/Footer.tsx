import { profile } from "../data/profile"

export function Footer() {
  return (
    <footer className="border-t border-sand bg-cream/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row">
        <p>{profile.name} · Computer Engineering student</p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href={profile.githubUrl}
            className="hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={profile.linkedinUrl}
            className="hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink">
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
