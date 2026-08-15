import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FilmCard } from "@/components/film-card";
import { Reveal } from "@/components/reveal";
import { decades, filmsByDecade } from "@/data/archive";

export const Route = createFileRoute("/decades_/$decade")({
  loader: ({ params }) => {
    const decade = decades.find((d) => d.id === params.decade);
    if (!decade) throw notFound();
    return { decade };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Decade not found — Retrowave" }, { name: "robots", content: "noindex" }] };
    }
    const { decade } = loaderData;
    const title = `${decade.label}: ${decade.title} — Retrowave`;
    return {
      meta: [
        { title },
        { name: "description", content: decade.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: decade.blurb },
        { property: "og:image", content: decade.cover },
        { name: "twitter:image", content: decade.cover },
      ],
    };
  },
  component: DecadePage,
});

function DecadePage() {
  const { decade } = Route.useLoaderData();
  const list = filmsByDecade(decade.id);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="grain scanlines relative overflow-hidden bg-ink">
        <img
          src={decade.cover}
          alt={decade.title}
          className="absolute inset-0 size-full object-cover opacity-30 grayscale"
        />
        <div className="relative z-30 mx-auto max-w-[1180px] px-5 py-20">
          <Link
            to="/decades"
            className="label-mono inline-flex items-center gap-2 text-ink-foreground/60 hover:text-accent"
          >
            <ArrowLeft className="size-3.5" /> All decades
          </Link>
          <p className="label-mono animate-fade-in mt-8 text-accent">{decade.label}</p>
          <h1 className="animate-fade-up mt-3 font-display text-5xl tracking-tight text-ink-foreground sm:text-6xl">
            {decade.title}
          </h1>
          <p className="animate-fade-up mt-4 max-w-lg text-[15px] text-ink-foreground/70 [animation-delay:120ms]">
            {decade.blurb}
          </p>
          <div className="mt-10 flex gap-10">
            {[
              ["Films", String(list.length)],
              ["Avg. rating", (list.reduce((s, f) => s + f.rating, 0) / list.length).toFixed(1)],
              ["Directors", String(new Set(list.map((f) => f.directorSlug)).size)],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="label-mono text-ink-foreground/50">{label}</p>
                <p className="mt-1 font-display text-3xl text-ink-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-16">
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((film, i) => (
            <Reveal key={film.slug} delay={i * 70}>
              <FilmCard film={film} />
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
