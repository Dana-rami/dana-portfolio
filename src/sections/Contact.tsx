import { useState, type FormEvent } from "react"
import { SectionHeading } from "../components/SectionHeading"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    /**
     * Integration point:
     * Connect this form to an email service such as Formspree, Netlify Forms,
     * or a custom backend endpoint. Until then, the UI stays in place without
     * sending a message.
     */
    setSubmitted(true)
  }

  return (
    <section id="contact" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Let’s connect"
          title="Contact"
          description="Send a message using the form below."
        />
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl rounded-3xl border border-sand/80 bg-card p-8"
          noValidate
        >
          <label className="block text-sm text-ink" htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              required
              className="mt-2 w-full rounded-2xl border border-sand bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
              autoComplete="name"
            />
          </label>
          <label className="mt-4 block text-sm text-ink" htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-2xl border border-sand bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
              autoComplete="email"
            />
          </label>
          <label className="mt-4 block text-sm text-ink" htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-y rounded-2xl border border-sand bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
            />
          </label>
          <button
            type="submit"
            className="mt-6 rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-ivory transition hover:bg-gold-deep"
          >
            Send
          </button>
          {submitted ? (
            <p className="mt-4 text-sm text-sage" role="status">
              Form is ready, but no email service is connected yet.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
