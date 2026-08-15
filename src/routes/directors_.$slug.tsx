import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FilmCard } from "@/components/film-card";
import { Reveal } from "@/components/reveal";
import { directorBySlug, directors, filmsByDirector } from "@/data/archive";

export const Route = createFileRoute("/directors_/$slug")({
  loader: ({ params }) => {
    const director = directorBySlug(params.slug);
    if (!director) throw notFound();
    return { director };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Director not found — Retrowave" }, { name: "robots", content: "noindex" }],
      };
    }
    const { director } = loaderData;
    const title = `${director.name} — filmography on Retrowave`;
    return {
      meta: [
        { title },
        { name: "description", content: director.bio },
        { property: "og:title", content: title },
        { property: "og:description", content: director.bio },
        { property: "og:image", content: director.portrait },
        { name: "twitter:image", content: director.portrait },
      ],
    };
  },
  component: DirectorPage,
});

function DirectorPage() {
  const { director } = Route.useLoaderData();
  const list = filmsByDirector(director.slug);
  const peers = directors.filter((d) => d.slug !== director.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="grain border-b border-border bg-sand">
        <div className="mx-auto max-w-[1180px] px-5 py-14">
          <Link
            to="/directors"
            className="label-mono inline-flex items-center gap-2 text-muted-foreground hover:text-accent"
          >
            <ArrowLeft className="size-3.5" /> All directors
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[320px_1fr] lg:items-end">
            <div className="scanlines animate-scale-in border-[8px] border-ink">
              <img
                src={director.portrait}
                alt={director.name}
                className="aspect-[3/4] w-full object-cover grayscale"
              />
            </div>
            <div className="animate-fade-up">
              <p className="label-mono text-accent">
                {director.era} · {director.country}
              </p>
              <h1 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
                {director.name}
              </h1>
              <p className="label-mono mt-4 text-muted-foreground">{director.years}</p>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                {director.bio}
              </p>
              <div className="mt-8 flex flex-wrap gap-10 border-t border-border pt-6">
                <div>
                  <p className="label-mono text-muted-foreground">Credits</p>
                  <p className="mt-1 font-display text-3xl">{director.filmCount}</p>
                </div>
                <div>
                  <p className="label-mono text-muted-foreground">In archive</p>
                  <p className="mt-1 font-display text-3xl">{list.length}</p>
                </div>
                <div className="max-w-xs">
                  <p className="label-mono text-muted-foreground">Signature</p>
                  <p className="mt-1.5 text-sm">{director.signature}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-16">
        <Reveal>
          <p className="label-mono text-accent">Filmography</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight">Held in the archive</h2>
        </Reveal>
        <div className="mt-9 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((f, i) => (
            <Reveal key={f.slug} delay={i * 80}>
              <FilmCard film={f} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grain border-t border-border bg-sand">
        <div className="mx-auto max-w-[1180px] px-5 py-14">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight">Watched next</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {peers.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Link
                  to="/directors/$slug"
                  params={{ slug: p.slug }}
                  className="hover-lift flex items-center gap-4 border border-border bg-card p-4"
                >
                  <img src={p.portrait} alt={p.name} loading="lazy" className="size-12 object-cover grayscale" />
                  <div className="min-w-0">
                    <p className="truncate font-display text-lg leading-tight">{p.name}</p>
                    <p className="label-mono mt-1 text-muted-foreground">{p.era}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
