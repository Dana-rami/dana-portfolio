import type { Activity } from "../data/activities"

type ActivityCardProps = {
  activity: Activity
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-sand/80 bg-card p-6 shadow-[0_10px_30px_-18px_rgba(80,60,40,0.3)]">
      <p className="text-xs tracking-[0.18em] text-gold-deep uppercase">
        {activity.date}
      </p>
      <h3 className="font-display mt-3 text-2xl text-ink">{activity.activity}</h3>
      <p className="mt-2 text-sm font-medium text-ink">{activity.role}</p>
      <p className="mt-1 text-sm text-muted">{activity.organization}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {activity.description}
      </p>
      <div className="card-link mt-auto pt-5">
        <a
          href={activity.sourceUrl}
          className="inline-block text-sm text-ink underline decoration-gold underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn post
        </a>
      </div>
    </article>
  )
}
