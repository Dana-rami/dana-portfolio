import { SectionHeading } from "../components/SectionHeading"
import { education } from "../data/education"

export function Education() {
  return (
    <section id="education" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Studies" title="Education" />
        <div className="mx-auto max-w-2xl space-y-6">
          {education.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-sand/80 bg-card p-8 shadow-[0_12px_32px_-20px_rgba(80,60,40,0.35)]"
            >
              <h3 className="font-display text-3xl text-ink">
                {item.institution}
              </h3>
              <p className="mt-2 text-base text-muted">{item.major}</p>
              <dl className="mt-6 grid gap-5 text-sm text-muted sm:grid-cols-3">
                <div>
                  <dt className="text-xs tracking-[0.16em] text-gold-deep uppercase">
                    Start Date
                  </dt>
                  <dd className="mt-1 text-ink">{item.startDate}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.16em] text-gold-deep uppercase">
                    Expected Graduation
                  </dt>
                  <dd className="mt-1 text-ink">{item.expectedGraduation}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.16em] text-gold-deep uppercase">
                    GPA
                  </dt>
                  <dd className="mt-1 text-ink">{item.gpa}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
