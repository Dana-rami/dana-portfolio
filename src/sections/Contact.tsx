import emailjs from "@emailjs/browser"
import { useState, type FormEvent } from "react"
import { SectionHeading } from "../components/SectionHeading"
import { emailJsConfig } from "../data/emailjs"

type FormStatus = "idle" | "sending" | "success" | "error"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [feedback, setFeedback] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()

    if (!name || !email || !message) {
      setStatus("error")
      setFeedback("Please fill in your name, email, and message.")
      return
    }

    if (!emailPattern.test(email)) {
      setStatus("error")
      setFeedback("Please enter a valid email address.")
      return
    }

    if (!emailJsConfig.publicKey) {
      setStatus("error")
      setFeedback(
        "The contact form is not fully configured yet. Please try again later.",
      )
      return
    }

    setStatus("sending")
    setFeedback("")

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        { name, email, message },
        { publicKey: emailJsConfig.publicKey },
      )
      form.reset()
      setStatus("success")
      setFeedback("Thank you. Your message was sent successfully.")
    } catch {
      setStatus("error")
      setFeedback(
        "Sorry, the message could not be sent. Please try again in a moment.",
      )
    }
  }

  const sending = status === "sending"

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
        >
          <label className="block text-sm text-ink" htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              required
              disabled={sending}
              className="mt-2 w-full rounded-2xl border border-sand bg-ivory px-4 py-3 text-sm outline-none focus:border-gold disabled:opacity-60"
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
              disabled={sending}
              className="mt-2 w-full rounded-2xl border border-sand bg-ivory px-4 py-3 text-sm outline-none focus:border-gold disabled:opacity-60"
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
              disabled={sending}
              className="mt-2 w-full resize-y rounded-2xl border border-sand bg-ivory px-4 py-3 text-sm outline-none focus:border-gold disabled:opacity-60"
            />
          </label>
          <button
            type="submit"
            disabled={sending}
            className="mt-6 rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-ivory transition hover:bg-gold-deep disabled:pointer-events-none disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send"}
          </button>
          {feedback ? (
            <p
              className={`mt-4 text-sm ${status === "success" ? "text-sage" : "text-ink"}`}
              role={status === "error" ? "alert" : "status"}
            >
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
