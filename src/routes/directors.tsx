import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { directors, filmsByDirector } from "@/data/archive";

export const Route = createFileRoute("/directors")({
  head: () => ({
    meta: [
      { title: "Directors — Retrowave filmographies" },
      {
        name: "description",
        content:
          "Profiles and filmographies of the directors who built vintage cinema: Godard, Hitchcock, Kurosawa, Bergman, Lang, Fellini, Ozu and Wilder.",
      },
      { property: "og:title", content: "Directors — Retrowave filmographies" },
      {
        property: "og:description",
        content: "Eight archive directors, their signatures and the films we hold.",
      },
      { property: "og:image", content: directors[0]!.portrait },
      { name: "twitter:image", content: directors[0]!.portrait },
    ],
  }),
  component: DirectorsPage,
});

function DirectorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="grain border-b border-border bg-sand">
        <div className="mx-auto max-w-[1180px] px-5 py-14">
          <p className="label-mono animate-fade-in text-accent">The authors</p>
          <h1 className="animate-fade-up mt-4 max-w-2xl font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl">
            Someone chose every frame.
          </h1>
          <p className="animate-fade-up mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground [animation-delay:120ms]">
            Directors are the fastest route through an archive. Learn one hand and the rest of the
            century opens up.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-14">
        <ul className="divide-y divide-border border-y border-border">
          {directors.map((d, i) => (
            <Reveal as="li" key={d.slug} delay={i * 55}>
              <Link
                to="/directors/$slug"
                params={{ slug: d.slug }}
                className="group grid items-center gap-5 py-6 sm:grid-cols-[80px_1.2fr_1fr_auto]"
              >
                <div className="grain size-20 overflow-hidden bg-secondary">
                  <img
                    src={d.portrait}
                    alt={d.name}
                    loading="lazy"
                    className="size-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div>
                  <h2 className="font-display text-2xl leading-tight transition-colors group-hover:text-accent">
                    {d.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {d.years} · {d.country}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{d.signature}</p>
                <div className="flex items-center gap-5">
                  <span className="label-mono text-muted-foreground">
                    {filmsByDirector(d.slug).length} in archive
                  </span>
                  <ArrowUpRight className="size-4 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </div>
  );
}
