import hero1200 from "../assets/hero-1200.jpg"
import hero600 from "../assets/hero-600.jpg"
import { profile } from "../data/profile"

export function Hero() {
  return (
    <section id="home" className="relative px-5 pt-14 pb-14 sm:pt-16 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-16 -left-16 h-64 w-64 rounded-full bg-sand/50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-12">
        <div>
          <p className="reveal text-xs font-medium tracking-[0.22em] text-gold-deep uppercase">
            Portfolio
          </p>
          <h1 className="reveal reveal-delay-1 font-display mt-4 text-[3.3rem] leading-tight font-semibold text-ink sm:text-[4.125rem] lg:text-[4.95rem]">
            Hi, I&apos;m {profile.name}.
          </h1>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-muted sm:text-xl">
            Computer Engineering Student
          </p>
        </div>
        <div className="hero-photo-frame">
          <img
            src={hero600}
            srcSet={`${hero600} 600w, ${hero1200} 1200w`}
            sizes="(min-width: 1024px) 480px, min(100vw, 480px)"
            width={480}
            height={480}
            alt={`Portrait of ${profile.name}`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  )
}
