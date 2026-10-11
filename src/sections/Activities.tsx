import { ActivityCard } from "../components/ActivityCard"
import { SectionHeading } from "../components/SectionHeading"
import { activities } from "../data/activities"

export function Activities() {
  return (
    <section id="activities" className="bg-cream/40 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Beyond coursework"
          title="Volunteering & Activities"
          description="Public activities shared on LinkedIn. Additional roles can be added in the data file when they are available."
        />
        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:auto-rows-fr">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  )
}
