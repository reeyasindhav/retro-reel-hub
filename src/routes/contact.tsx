import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Retrowave" },
      { name: "description", content: "Get in touch with the Retrowave archive team." },
      { property: "og:title", content: "Contact — Retrowave" },
      { property: "og:description", content: "Get in touch with the Retrowave archive team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent", { description: "We’ll get back to you as soon as possible." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="grain border-b border-border bg-sand">
          <div className="mx-auto max-w-[1180px] px-5 py-20">
            <span className="label-mono flex items-center gap-2 text-accent">
              <Mail className="size-3.5" />
              Contact
            </span>
            <h1 className="mt-5 font-display text-5xl tracking-tight sm:text-6xl">Let’s talk about film.</h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Have a suggestion, a correction, or just want to say hello? Fill out the form below or reach us
              directly at hello@retrowave.archive.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <Mail className="size-5 text-accent" />
                <h3 className="mt-4 font-display text-lg">Email</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  <a href="mailto:hello@retrowave.archive" className="text-accent underline-offset-4 hover:underline">
                    hello@retrowave.archive
                  </a>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <MessageSquare className="size-5 text-accent" />
                <h3 className="mt-4 font-display text-lg">Response time</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We usually reply within a couple of days. For urgent issues, please include “URGENT” in the
                  subject line.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <MapPin className="size-5 text-accent" />
                <h3 className="mt-4 font-display text-lg">Archive HQ</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Retrowave is a distributed demo project. We do not maintain a public office, but we read
                  every message.
                </p>
              </div>
            </div>

            <form onSubmit={submit} className="rounded-lg border border-border bg-card p-6">
              <div className="space-y-5">
                <div>
                  <label className="label-mono text-xs text-muted-foreground">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm outline-none focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="label-mono text-xs text-muted-foreground">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm outline-none focus:border-accent"
                    placeholder="you@archive.film"
                  />
                </div>
                <div>
                  <label className="label-mono text-xs text-muted-foreground">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm outline-none focus:border-accent"
                    rows={5}
                    placeholder="Tell us what’s on your mind..."
                  />
                </div>
                <button
                  type="submit"
                  className="label-mono w-full bg-ink px-5 py-4 text-ink-foreground transition-colors hover:bg-accent"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
