"use client";

import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setState("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result: { message?: string } = await response.json();

      if (!response.ok) {
        setState("error");
        setFeedback(result.message ?? "Your message could not be sent. Please try again.");
        return;
      }

      form.reset();
      setState("sent");
      setFeedback("Thanks for reaching out. Your message is on its way.");
    } catch {
      setState("error");
      setFeedback("A connection issue stopped your message. Please try again.");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-primary" htmlFor="name">
          Your name
          <input
            autoComplete="name"
            className="min-h-12 w-full rounded-2xl border border-white/10 bg-background px-4 text-sm text-primary placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none"
            id="name"
            maxLength={100}
            name="name"
            placeholder="Jane Smith"
            required
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-primary" htmlFor="email">
          Email address
          <input
            autoComplete="email"
            className="min-h-12 w-full rounded-2xl border border-white/10 bg-background px-4 text-sm text-primary placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none"
            id="email"
            maxLength={254}
            name="email"
            placeholder="jane@company.com"
            required
            type="email"
          />
        </label>
      </div>
      <label className="block space-y-2 text-sm font-medium text-primary" htmlFor="subject">
        What can I help with?
        <select
          className="min-h-12 w-full appearance-none rounded-2xl border border-white/10 bg-background px-4 text-sm text-primary focus:border-accent focus:outline-none"
          id="subject"
          name="subject"
          defaultValue=""
          required
        >
          <option disabled value="">Choose a topic</option>
          <option>Build a new application</option>
          <option>Modernize an existing system</option>
          <option>Architecture or performance</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="block space-y-2 text-sm font-medium text-primary" htmlFor="message">
        A little about the project
        <textarea
          className="min-h-36 w-full resize-y rounded-2xl border border-white/10 bg-background px-4 py-3 text-sm leading-6 text-primary placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none"
          id="message"
          maxLength={5000}
          minLength={10}
          name="message"
          placeholder="What are you working on, and where could you use a hand?"
          required
        />
      </label>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input autoComplete="off" id="website" name="website" tabIndex={-1} />
      </div>
      <div className="flex flex-col items-start gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white transition hover:bg-accent-secondary disabled:cursor-wait disabled:opacity-70"
          disabled={state === "sending"}
          type="submit"
        >
          {state === "sending" ? (
            <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
          ) : state === "sent" ? (
            <CheckCircle2 aria-hidden="true" className="size-4" />
          ) : (
            <ArrowUpRight aria-hidden="true" className="size-4" />
          )}
          {state === "sending" ? "Sending..." : state === "sent" ? "Message sent" : "Send message"}
        </button>
        <p aria-live="polite" className="min-h-5 text-sm text-muted" role="status">
          {feedback}
        </p>
      </div>
    </form>
  );
}