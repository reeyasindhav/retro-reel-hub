import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FilmCard } from "@/components/film-card";
import { Reveal } from "@/components/reveal";
import { decades, films } from "@/data/archive";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/decades")({
  head: () => ({
    meta: [
      { title: "Browse by decade — Retrowave archive" },
      {
        name: "description",
        content:
          "Travel the archive decade by decade: silent expressionism, postwar neorealism, widescreen noir and the new waves of the 1960s.",
      },
      { property: "og:title", content: "Browse by decade — Retrowave archive" },
      {
        property: "og:description",
        content: "Silent expressionism to the new waves — 20 restored classics sorted by decade.",
      },
      { property: "og:image", content: decades[0]!.cover },
      { name: "twitter:image", content: decades[0]!.cover },
    ],
  }),
  component: DecadesPage,
});

const sorts = ["Highest rated", "Oldest first", "A – Z"] as const;

function DecadesPage() {
  const [sort, setSort] = useState<(typeof sorts)[number]>("Highest rated");

  const sorted = [...films].sort((a, b) => {
    if (sort === "Oldest first") return a.year - b.year;
    if (sort === "A – Z") return a.title.localeCompare(b.title);
    return b.rating - a.rating;
  });

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="grain border-b border-border bg-sand">
        <div className="mx-auto max-w-[1180px] px-5 py-14">
          <p className="label-mono animate-fade-in text-accent">Catalogue</p>
          <h1 className="animate-fade-up mt-4 max-w-2xl font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl">
            Four decades, one long night.
          </h1>
          <p className="animate-fade-up mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground [animation-delay:120ms]">
            Each era in the archive has its own weather. Pick a decade and let it set the mood.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {decades.map((d, i) => (
            <Reveal key={d.id} delay={i * 80}>
              <Link
                to="/decades/$decade"
                params={{ decade: d.id }}
                className="group relative block overflow-hidden vhs-frame"
              >
                <div className="grain scanlines aspect-[16/9] overflow-hidden bg-ink">
                  <img
                    src={d.cover}
                    alt={d.title}
                    loading="lazy"
                    className="size-full object-cover opacity-70 grayscale transition-all duration-[1000ms] group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute inset-0 z-30 flex flex-col justify-end bg-gradient-to-t from-ink via-ink/30 to-transparent p-6">
                  <span className="label-mono text-accent">{d.label}</span>
                  <h2 className="mt-2 font-display text-3xl text-ink-foreground">{d.title}</h2>
                  <p className="mt-2 max-w-sm text-sm text-ink-foreground/70">{d.blurb}</p>
                  <span className="label-mono mt-4 flex items-center gap-2 text-ink-foreground">
                    {films.filter((f) => f.decade === d.id).length} films
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 pb-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
          <h2 className="font-display text-3xl tracking-tight">The whole archive</h2>
          <div className="flex gap-2">
            {sorts.map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className={cn(
                  "label-mono px-3 py-2 transition-colors",
                  sort === s
                    ? "bg-ink text-ink-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {sorted.map((film, i) => (
            <Reveal key={film.slug} delay={(i % 4) * 60}>
              <FilmCard film={film} compact />
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
