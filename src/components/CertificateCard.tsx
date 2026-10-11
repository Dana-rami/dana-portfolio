import { useEffect, useState } from "react"
import type { Certificate } from "../data/certificates"

type CertificateCardProps = {
  certificate: Certificate
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const previews = certificate.previewImages ?? []
  const labels = certificate.previewLabels ?? []
  const hasSingleImage = Boolean(certificate.imageSrc) && previews.length === 0
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (activeIndex === null) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null)
      }
      if (event.key === "ArrowRight" && previews.length > 0) {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % previews.length,
        )
      }
      if (event.key === "ArrowLeft" && previews.length > 0) {
        setActiveIndex((current) =>
          current === null
            ? 0
            : (current - 1 + previews.length) % previews.length,
        )
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [activeIndex, previews.length])

  return (
    <article className="flex h-full flex-col rounded-3xl border border-sand/80 bg-card p-6 shadow-[0_10px_30px_-18px_rgba(80,60,40,0.3)]">
      {hasSingleImage ? (
        <div className="mb-4 flex items-center justify-center">
          <img
            src={certificate.imageSrc}
            alt={`${certificate.name} certificate preview`}
            className="h-auto w-full rounded-2xl object-contain"
          />
        </div>
      ) : previews.length > 0 ? (
        <div className="mb-5 grid grid-cols-2 gap-2">
          {previews.map((src, index) => (
            <button
              key={src}
              type="button"
              className="rounded-xl bg-cream p-1.5 transition hover:bg-sand/70"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${labels[index] ?? `certificate ${index + 1}`} larger`}
            >
              <img
                src={src}
                alt={`${certificate.name} – ${labels[index] ?? `certificate ${index + 1}`}`}
                className="h-auto w-full object-contain"
              />
            </button>
          ))}
        </div>
      ) : (
        <div className="mb-5 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-cream">
          <p className="px-6 text-center text-sm text-muted">
            Certificate preview placeholder
            <span className="mt-1 block text-xs">
              Add an image path to `imageSrc` in `src/data/certificates.ts`.
            </span>
          </p>
        </div>
      )}
      <h3 className="font-display text-2xl text-ink">{certificate.name}</h3>
      <p className="mt-2 text-sm text-gold-deep">{certificate.organization}</p>
      <p className="mt-1 text-sm text-muted">{certificate.date}</p>
      {certificate.sourceNote ? (
        <p className="mt-3 text-xs text-muted">{certificate.sourceNote}</p>
      ) : null}
      {certificate.linkedinPostUrl || certificate.credentialUrl ? (
        <div className="mt-auto pt-4">
          {certificate.linkedinPostUrl ? (
            <a
              href={certificate.linkedinPostUrl}
              className="inline-flex rounded-full border border-sand px-4 py-2 text-sm text-ink transition hover:border-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LinkedIn Post
            </a>
          ) : (
            <a
              href={certificate.credentialUrl}
              className="text-sm text-ink underline decoration-gold underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View credential
            </a>
          )}
        </div>
      ) : null}
      {activeIndex !== null && previews[activeIndex] ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${certificate.name} certificate viewer`}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={previews[activeIndex]}
              alt={`${certificate.name} – ${labels[activeIndex] ?? `certificate ${activeIndex + 1}`}`}
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />
            <p className="mt-3 text-sm text-ivory">
              {labels[activeIndex] ?? `Certificate ${activeIndex + 1}`}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                className="rounded-full bg-card px-4 py-2 text-sm text-ink"
                onClick={() =>
                  setActiveIndex(
                    (activeIndex - 1 + previews.length) % previews.length,
                  )
                }
              >
                Previous
              </button>
              <button
                type="button"
                className="rounded-full bg-card px-4 py-2 text-sm text-ink"
                onClick={() => setActiveIndex(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="rounded-full bg-card px-4 py-2 text-sm text-ink"
                onClick={() =>
                  setActiveIndex((activeIndex + 1) % previews.length)
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  )
}
