import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Circle, Film, Play, Users } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FilmCard } from "@/components/film-card";
import { Reveal } from "@/components/reveal";
import { clubs, decades, films, heroStill } from "@/data/archive";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Retrowave — The films that refuse to fade" },
      {
        name: "description",
        content:
          "A living collection of classic, cult and overlooked cinema. Find your next obsession by decade, director, or the feeling you can't quite name.",
      },
      { property: "og:title", content: "Retrowave — The films that refuse to fade" },
      {
        property: "og:description",
        content: "Curated vintage cinema, decade-based browsing and classic movie clubs.",
      },
      { property: "og:image", content: heroStill },
      { name: "twitter:image", content: heroStill },
    ],
  }),
  component: Index,
});

const eras = ["All eras", ...decades.map((d) => d.label)];

function Index() {
  const [era, setEra] = useState("All eras");
  const shown = (era === "All eras" ? films : films.filter((f) => f.decade === era)).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="grain border-b border-border bg-sand">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <p className="label-mono text-accent">A cinema archive for the curious</p>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              The films that
              <br />
              <em className="text-accent">refuse</em> to fade.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              A living collection of classic, cult and overlooked cinema. Find your next obsession by
              decade, director, or the feeling you can't quite name.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                to="/signup"
                className="label-mono group flex items-center gap-2.5 bg-ink px-5 py-4 text-ink-foreground transition-colors hover:bg-accent"
              >
                <Circle className="size-3 fill-current" />
                Start watching
              </Link>
              <Link
                to="/decades"
                className="label-mono group flex items-center gap-2 border-b border-foreground/30 pb-1 transition-colors hover:border-accent hover:text-accent"
              >
                Browse by decade
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="animate-scale-in [animation-delay:180ms]">
            <div className="relative">
              <span className="label-mono absolute -top-3 right-4 z-30 bg-accent px-2.5 py-1.5 text-accent-foreground">
                Now showing
              </span>
              <div className="scanlines border-[10px] border-ink bg-ink shadow-[0_30px_60px_-40px_oklch(0.248_0.032_258/0.8)]">
                <Link
                  to="/films/$slug"
                  params={{ slug: "breathless" }}
                  className="group relative block aspect-[16/10] overflow-hidden"
                >
                  <img
                    src={heroStill}
                    alt="Empty cinema auditorium bathed in red light"
                    className="size-full object-cover opacity-90 transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                  <span className="animate-flicker absolute bottom-6 left-6 z-30">
                    <span className="label-mono block text-accent">Retrowave pick · 1960</span>
                    <span className="mt-1 block font-display text-3xl italic text-ink-foreground">
                      Breathless
                    </span>
                  </span>
                  <span className="absolute right-6 top-1/2 z-30 grid size-14 -translate-y-1/2 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-500 group-hover:scale-110">
                    <Play className="size-5 fill-current" />
                  </span>
                </Link>
              </div>
              <div className="mt-4 flex justify-between">
                <span className="label-mono text-muted-foreground">Curated weekly</span>
                <span className="label-mono text-muted-foreground">Vol. 07 / Side A</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="grain overflow-hidden border-b border-border bg-ink py-3">
        <div className="animate-marquee flex w-max gap-10">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-10">
              {films.slice(0, 10).map((f) => (
                <span key={f.slug} className="label-mono whitespace-nowrap text-ink-foreground/60">
                  {f.title} <span className="text-accent">·</span> {f.year}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Archive grid */}
      <section className="mx-auto max-w-[1180px] px-5 py-16 lg:py-20">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="label-mono text-accent">The archive</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Start somewhere strange.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Hand-picked films with a little more dust on them, and a lot more to say.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8 flex flex-wrap gap-2 border-b border-border pb-4">
          {eras.map((e) => (
            <button
              key={e}
              onClick={() => setEra(e)}
              className={cn(
                "label-mono px-3.5 py-2 transition-colors",
                era === e
                  ? "bg-ink text-ink-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {e}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((film, i) => (
            <Reveal key={film.slug} delay={i * 70}>
              <FilmCard film={film} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link
            to="/decades"
            className="label-mono group flex items-center gap-2 border border-border px-5 py-4 transition-colors hover:bg-secondary"
          >
            See the full archive
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      {/* Clubs */}
      <section className="grain border-y border-border bg-sand">
        <div className="mx-auto max-w-[1180px] px-5 py-16 lg:py-20">
          <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="label-mono text-accent">The screening room</p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                Find your people.
              </h2>
            </div>
            <Link
              to="/clubs"
              className="label-mono group flex items-center gap-2 hover:text-accent"
            >
              Explore all clubs
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {clubs.slice(0, 3).map((club, i) => (
              <Reveal key={club.slug} delay={i * 90}>
                <Link
                  to="/clubs/$slug"
                  params={{ slug: club.slug }}
                  className="hover-lift flex h-full gap-4 border border-border bg-card p-4"
                >
                  <img
                    src={club.cover}
                    alt={club.name}
                    loading="lazy"
                    className="size-16 shrink-0 object-cover grayscale"
                  />
                  <div className="min-w-0">
                    <h3 className="font-display text-lg leading-tight">{club.name}</h3>
                    <p className="mt-1 truncate text-sm text-muted-foreground">{club.blurb}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="label-mono flex items-center gap-1.5 text-muted-foreground">
                        <Users className="size-3" /> {club.members}
                      </span>
                      <span className="label-mono text-accent">Join club</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Directors teaser */}
      <section className="mx-auto max-w-[1180px] px-5 py-16 lg:py-20">
        <Reveal className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="label-mono text-accent">Beyond the frame</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Every film is a doorway.
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              Follow the threads: explore director filmographies, read the stories behind the scenes,
              and see what the people who made one great film watched next.
            </p>
            <Link
              to="/directors"
              className="label-mono group mt-8 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 hover:border-accent hover:text-accent"
            >
              Meet the directors
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="flex items-center gap-4 border-l-2 border-accent pl-6">
            <Film className="size-6 shrink-0 text-accent" />
            <div>
              <p className="label-mono text-muted-foreground">Coming soon</p>
              <p className="mt-1 text-[15px]">Director deep dives & full filmographies</p>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
