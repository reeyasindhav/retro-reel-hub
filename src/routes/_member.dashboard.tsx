import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { FilmCard } from "@/components/film-card";
import { clubs, continueWatching, filmBySlug, films } from "@/data/archive";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/_member/dashboard")({
  head: () => ({
    meta: [
      { title: "Your dashboard — Retrowave" },
      {
        name: "description",
        content: "Pick up where you left off, check your clubs and see this week's curated picks.",
      },
      { property: "og:title", content: "Your dashboard — Retrowave" },
      { property: "og:description", content: "Continue watching, clubs and weekly picks." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { user, shelf, joined } = useAuth();
  const picks = films.filter((f) => f.staffPick);

  return (
    <div className="px-5 py-10 sm:px-10">
      <Reveal>
        <p className="label-mono text-accent">{user?.memberSince} · Member desk</p>
        <h1 className="mt-3 font-display text-4xl capitalize tracking-tight sm:text-5xl">
          Evening, {user?.name.split(" ")[0]}.
        </h1>
        <p className="mt-3 max-w-lg text-[15px] text-muted-foreground">
          Three unfinished films are waiting, and your clubs have been talking.
        </p>
      </Reveal>

      <Reveal delay={70} className="mt-9 grid gap-4 sm:grid-cols-3">
        {[
          ["On your shelf", String(shelf.length), "films saved"],
          ["Clubs joined", String(joined.length), "rooms active"],
          ["Favourite era", user?.favouriteDecade ?? "1950s", "most watched"],
        ].map(([label, value, sub]) => (
          <div key={label} className="border border-border bg-card p-5">
            <p className="label-mono text-muted-foreground">{label}</p>
            <p className="mt-2 font-display text-4xl">{value}</p>
            <p className="label-mono mt-1 text-muted-foreground">{sub}</p>
          </div>
        ))}
      </Reveal>

      <section className="mt-14">
        <Reveal>
          <h2 className="font-display text-2xl tracking-tight">Continue watching</h2>
        </Reveal>
        <div className="mt-5 space-y-3">
          {continueWatching.map((c, i) => {
            const film = filmBySlug(c.slug);
            if (!film) return null;
            return (
              <Reveal key={c.slug} delay={i * 70}>
                <Link
                  to="/films/$slug"
                  params={{ slug: film.slug }}
                  className="group flex items-center gap-5 border border-border bg-card p-4"
                >
                  <div className="grain relative size-20 shrink-0 overflow-hidden">
                    <img src={film.still} alt="" className="size-full object-cover" />
                    <span className="absolute inset-0 grid place-items-center bg-ink/40 opacity-0 transition-opacity group-hover:opacity-100">
                      <Play className="size-5 fill-accent text-accent" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-xl leading-tight group-hover:text-accent">
                      {film.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {film.year} · {film.director}
                    </p>
                    <div className="mt-3 h-1 w-full bg-secondary">
                      <div className="h-full bg-accent transition-all duration-700" style={{ width: `${c.progress}%` }} />
                    </div>
                  </div>
                  <span className="label-mono hidden shrink-0 text-muted-foreground sm:block">
                    {c.progress}%
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <Reveal>
            <h2 className="font-display text-2xl tracking-tight">Curated for you this week</h2>
          </Reveal>
          <div className="mt-6 grid gap-x-6 gap-y-9 sm:grid-cols-3">
            {picks.map((f, i) => (
              <Reveal key={f.slug} delay={i * 70}>
                <FilmCard film={f} compact />
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <Reveal>
            <h2 className="font-display text-2xl tracking-tight">Club activity</h2>
          </Reveal>
          <ul className="mt-6 space-y-3">
            {clubs.slice(0, 3).map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 70}>
                <Link
                  to="/clubs/$slug"
                  params={{ slug: c.slug }}
                  className="hover-lift block border border-border bg-card p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-display text-lg">{c.name}</p>
                    <span className="label-mono flex items-center gap-1 text-accent">
                      <Star className="size-3 fill-current" /> {c.members}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {c.discussion[0]?.body}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
