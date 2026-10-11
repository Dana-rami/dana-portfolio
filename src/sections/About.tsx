import { SectionHeading } from "../components/SectionHeading"

export function About() {
  return (
    <section id="about" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="A concise introduction based on my studies and current focus."
        />
        <div className="mx-auto max-w-3xl rounded-3xl border border-sand/80 bg-card p-8 shadow-[0_12px_32px_-20px_rgba(80,60,40,0.35)] sm:p-10">
          <p className="text-base leading-relaxed text-muted">
            I am a Computer Engineering student with an interest in software
            development and problem-solving. I enjoy understanding how software
            systems work, designing practical solutions, and writing clean,
            reliable code.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted">
            I am continuously developing my technical skills through structured
            learning, hands-on practice, and personal projects. I believe in
            learning by doing, improving step by step, and building a strong
            foundation in software engineering.
          </p>
        </div>
      </div>
    </section>
  )
}
