type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium tracking-[0.22em] text-gold-deep uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </header>
  )
}
