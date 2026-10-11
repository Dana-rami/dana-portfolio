import type { Project } from "../data/projects"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-sand/80 bg-card p-6 shadow-[0_10px_30px_-18px_rgba(80,60,40,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(80,60,40,0.45)]">
      <p className="text-xs tracking-[0.18em] text-gold-deep uppercase">
        {project.categories.join(" · ")}
      </p>
      <h3 className="font-display mt-3 text-2xl text-ink">{project.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-cream px-3 py-1 text-xs text-ink"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.githubUrl}
          className="rounded-full bg-ink px-4 py-2 text-sm text-ivory transition hover:bg-gold-deep"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            className="rounded-full border border-sand px-4 py-2 text-sm text-ink transition hover:border-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        ) : null}
      </div>
    </article>
  )
}
