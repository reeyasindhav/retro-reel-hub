import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bookmark, Clock, Globe, Play, Star, Users } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FilmCard } from "@/components/film-card";
import { Reveal } from "@/components/reveal";
import { clubs, directorBySlug, filmBySlug, films } from "@/data/archive";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/films/$slug")({
  loader: ({ params }) => {
    const film = filmBySlug(params.slug);
    if (!film) throw notFound();
    return { film };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Film not found — Retrowave" }, { name: "robots", content: "noindex" }] };
    }
    const { film } = loaderData;
    const title = `${film.title} (${film.year}) — Retrowave`;
    return {
      meta: [
        { title },
        { name: "description", content: film.synopsis },
        { property: "og:title", content: title },
        { property: "og:description", content: film.synopsis },
        { property: "og:image", content: film.still },
        { name: "twitter:image", content: film.still },
      ],
    };
  },
  component: FilmPage,
});

function FilmPage() {
  const { film } = Route.useLoaderData();
  const { shelf, toggleShelf } = useAuth();
  const saved = shelf.includes(film.slug);
  const director = directorBySlug(film.directorSlug);
  const related = films.filter((f) => f.slug !== film.slug && f.decade === film.decade).slice(0, 3);
  const club = clubs.find((c) => c.nowWatching === film.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="grain relative overflow-hidden border-b border-border bg-ink">
        <img
          src={film.still}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-25 blur-sm grayscale"
        />
        <div className="relative z-30 mx-auto grid max-w-[1180px] gap-10 px-5 py-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Link
              to="/decades/$decade"
              params={{ decade: film.decade }}
              className="label-mono inline-flex items-center gap-2 text-ink-foreground/60 hover:text-accent"
            >
              <ArrowLeft className="size-3.5" /> {film.decade}
            </Link>
            <p className="label-mono animate-fade-in mt-8 text-accent">
              {film.tag} · {film.country}
            </p>
            <h1 className="animate-fade-up mt-3 font-display text-5xl leading-[0.98] tracking-tight text-ink-foreground sm:text-6xl">
              {film.title}
            </h1>
            <p className="animate-fade-up mt-5 max-w-lg text-[15px] leading-relaxed text-ink-foreground/70 [animation-delay:100ms]">
              {film.synopsis}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <span className="label-mono flex items-center gap-1.5 text-ink-foreground">
                <Star className="size-3.5 fill-accent text-accent" /> {film.rating.toFixed(1)} / 10
              </span>
              <span className="label-mono flex items-center gap-1.5 text-ink-foreground/60">
                <Clock className="size-3.5" /> {film.runtime}
              </span>
              <span className="label-mono flex items-center gap-1.5 text-ink-foreground/60">
                <Globe className="size-3.5" /> {film.year}
              </span>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() => toast.success(`Rolling ${film.title}`, { description: "Visual demo — no stream attached." })}
                className="label-mono flex items-center gap-2.5 bg-accent px-5 py-4 text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                <Play className="size-3.5 fill-current" /> Play film
              </button>
              <button
                onClick={() => {
                  toggleShelf(film.slug);
                  toast(saved ? "Removed from your shelf" : "Saved to your shelf");
                }}
                className={cn(
                  "label-mono flex items-center gap-2.5 border px-5 py-4 transition-colors",
                  saved
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-ink-foreground/25 text-ink-foreground hover:bg-ink-foreground/10",
                )}
              >
                <Bookmark className={cn("size-3.5", saved && "fill-current")} />
                {saved ? "On your shelf" : "Save to shelf"}
              </button>
            </div>
          </div>

          <div className="scanlines animate-scale-in border-[10px] border-background/10">
            <img
              src={film.still}
              alt={`Still from ${film.title}`}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="label-mono text-accent">Archive note</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight">Why it still matters</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{film.notes}</p>
          <dl className="mt-8 grid grid-cols-2 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
            {[
              ["Year", String(film.year)],
              ["Genre", film.genre],
              ["Country", film.country],
              ["Runtime", film.runtime],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="label-mono text-muted-foreground">{k}</dt>
                <dd className="mt-1.5 text-[15px]">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={100} className="space-y-5">
          {director && (
            <Link
              to="/directors/$slug"
              params={{ slug: director.slug }}
              className="hover-lift block border border-border bg-card p-5"
            >
              <p className="label-mono text-muted-foreground">Directed by</p>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src={director.portrait}
                  alt={director.name}
                  className="size-16 object-cover grayscale"
                />
                <div>
                  <h3 className="font-display text-xl leading-tight">{director.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{director.years}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{director.signature}</p>
            </Link>
          )}

          {club && (
            <Link
              to="/clubs/$slug"
              params={{ slug: club.slug }}
              className="hover-lift block border border-accent/40 bg-accent/5 p-5"
            >
              <p className="label-mono text-accent">Being discussed in</p>
              <h3 className="mt-3 font-display text-xl">{club.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{club.cadence}</p>
              <span className="label-mono mt-4 flex items-center gap-1.5 text-muted-foreground">
                <Users className="size-3" /> {club.members} members
              </span>
            </Link>
          )}
        </Reveal>
      </section>

      <section className="grain border-t border-border bg-sand">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <Reveal>
            <p className="label-mono text-accent">Keep going</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight">
              More from the {film.decade}
            </h2>
          </Reveal>
          <div className="mt-9 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((f, i) => (
              <Reveal key={f.slug} delay={i * 80}>
                <FilmCard film={f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
