import { createFileRoute } from "@tanstack/react-router";
import { HelpCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Retrowave" },
      { name: "description", content: "Frequently asked questions about Retrowave, classic cinema browsing, and how to use the archive." },
      { property: "og:title", content: "FAQ — Retrowave" },
      { property: "og:description", content: "Frequently asked questions about Retrowave." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    question: "What is Retrowave?",
    answer:
      "Retrowave is a curated visual demo archive for classic, cult, and vintage cinema. It’s built for browsing by decade, director, and shared taste rather than algorithm-driven recommendations.",
  },
  {
    question: "Do I need an account to browse?",
    answer:
      "You can explore much of the archive without signing in. Creating an account unlocks your personal shelf, film clubs, and dashboard features.",
  },
  {
    question: "Is the content free?",
    answer:
      "Retrowave is a demo project and is free to explore. It does not host full films or guarantee streaming access.",
  },
  {
    question: "How are titles selected?",
    answer:
      "Titles are chosen for craft, historical interest, and lasting influence. We focus on curated quality over volume.",
  },
  {
    question: "Can I suggest a film or correction?",
    answer:
      "Yes. Use the contact form or email hello@retrowave.archive with corrections, additions, or suggestions.",
  },
  {
    question: "Do you sell or share my data?",
    answer:
      "No. We do not sell personal data. See the privacy policy for details on what is stored and how you can control it.",
  },
  {
    question: "Why is some content illustrative?",
    answer:
      "Because Retrowave is a demo. Metadata, posters, and availability may be illustrative rather than production-ready.",
  },
  {
    question: "How do I join a film club?",
    answer:
      "From the Film clubs page, open a club and choose to join. Club activity appears in your dashboard.",
  },
];

function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="grain border-b border-border bg-sand">
          <div className="mx-auto max-w-[1180px] px-5 py-20">
            <span className="label-mono flex items-center gap-2 text-accent">
              <HelpCircle className="size-3.5" />
              FAQ
            </span>
            <h1 className="mt-5 font-display text-5xl tracking-tight sm:text-6xl">
              Questions, answered.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Everything you need to know about exploring and using Retrowave. If you still have questions,
              reach out through the contact page.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-5 py-16">
          <div className="mx-auto max-w-3xl">
            <div className="divide-y divide-border rounded-lg border border-border">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="font-display text-lg">{item.question}</span>
                      <span className="label-mono text-accent">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
