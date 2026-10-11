import { useMemo, useState } from "react"
import { ProjectCard } from "../components/ProjectCard"
import { SectionHeading } from "../components/SectionHeading"
import {
  projectFilters,
  projects,
  type ProjectFilter,
} from "../data/projects"

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All")

  const visibleProjects = useMemo(() => {
    if (filter === "All") return projects
    return projects.filter((project) => project.categories.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="Repositories from GitHub. Technologies are taken from each repository’s languages, description, and topics."
        />
        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter projects"
        >
          {projectFilters.map((item) => {
            const selected = item === filter
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  selected
                    ? "bg-ink text-ivory"
                    : "border border-sand bg-card text-muted hover:border-gold hover:text-ink"
                }`}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            )
          })}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {visibleProjects.length === 0 ? (
          <p className="mt-8 text-center text-sm text-muted">
            No projects in this category yet.
          </p>
        ) : null}
      </div>
    </section>
  )
}
