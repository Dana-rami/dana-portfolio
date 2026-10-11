import { SectionHeading } from "../components/SectionHeading"
import { skillCategories } from "../data/skills"

export function Skills() {
  return (
    <section id="skills" className="bg-cream/40 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical Skills"
          description="Organized by the areas I use in coursework and projects."
        />
        <div className="grid items-stretch gap-6 md:grid-cols-2 md:auto-rows-fr">
          {skillCategories.map((category) => (
            <article
              key={category.id}
              className="flex h-full flex-col rounded-3xl border border-sand/80 bg-card p-6 shadow-[0_10px_28px_-20px_rgba(80,60,40,0.35)]"
            >
              <h3 className="font-display text-2xl text-ink">{category.title}</h3>
              <ul className="mt-5 flex flex-wrap content-start gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-sand bg-ivory px-3.5 py-1.5 text-sm text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
