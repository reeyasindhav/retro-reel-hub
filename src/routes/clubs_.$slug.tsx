import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarClock, Send, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { clubBySlug, clubs, filmBySlug } from "@/data/archive";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/clubs_/$slug")({
  loader: ({ params }) => {
    const club = clubBySlug(params.slug);
    if (!club) throw notFound();
    return { club };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Club not found — Retrowave" }, { name: "robots", content: "noindex" }] };
    }
    const { club } = loaderData;
    const title = `${club.name} — Retrowave film club`;
    return {
      meta: [
        { title },
        { name: "description", content: `${club.blurb} Meets ${club.cadence}, hosted by ${club.host}.` },
        { property: "og:title", content: title },
        { property: "og:description", content: club.blurb },
        { property: "og:image", content: club.cover },
        { name: "twitter:image", content: club.cover },
      ],
    };
  },
  component: ClubPage,
});

function ClubPage() {
  const { club } = Route.useLoaderData();
  const { joined, toggleClub, user } = useAuth();
  const film = filmBySlug(club.nowWatching);
  const isMember = joined.includes(club.slug);
  const [draft, setDraft] = useState("");
  const [thread, setThread] = useState(club.discussion);
  const otherClubs = clubs.filter((c) => c.slug !== club.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="grain relative overflow-hidden border-b border-border bg-ink">
        <img src={club.cover} alt="" className="absolute inset-0 size-full object-cover opacity-25 grayscale" />
        <div className="relative z-30 mx-auto max-w-[1180px] px-5 py-14">
          <Link to="/clubs" className="label-mono inline-flex items-center gap-2 text-ink-foreground/60 hover:text-accent">
            <ArrowLeft className="size-3.5" /> All clubs
          </Link>
          <p className="label-mono animate-fade-in mt-8 text-accent">Hosted by {club.host}</p>
          <h1 className="animate-fade-up mt-3 font-display text-5xl tracking-tight text-ink-foreground sm:text-6xl">
            {club.name}
          </h1>
          <p className="animate-fade-up mt-4 max-w-lg text-[15px] text-ink-foreground/70 [animation-delay:100ms]">
            {club.blurb}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="label-mono flex items-center gap-1.5 text-ink-foreground/70">
              <Users className="size-3.5" /> {club.members} members
            </span>
            <span className="label-mono flex items-center gap-1.5 text-ink-foreground/70">
              <CalendarClock className="size-3.5" /> {club.cadence}
            </span>
            <button
              onClick={() => {
                toggleClub(club.slug);
                toast(isMember ? `Left ${club.name}` : `Welcome to ${club.name}`);
              }}
              className={cn(
                "label-mono px-5 py-3 transition-colors",
                isMember
                  ? "border border-accent text-accent"
                  : "bg-accent text-accent-foreground hover:brightness-110",
              )}
            >
              {isMember ? "Leave club" : "Join club"}
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <Reveal>
            <p className="label-mono text-accent">Discussion</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight">This week's thread</h2>
          </Reveal>

          <Reveal delay={80} className="mt-8 border border-border bg-card p-5">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={3}
              placeholder={user ? "Add a note for the club..." : "Sign in to post in this thread..."}
              className="w-full resize-none bg-transparent text-[15px] outline-none placeholder:text-muted-foreground"
            />
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
              <span className="label-mono text-muted-foreground">
                {user ? `Posting as ${user.name}` : "Guest"}
              </span>
              {user ? (
                <button
                  onClick={() => {
                    if (!draft.trim()) return;
                    setThread((prev) => [
                      { author: user.name, initials: user.initials, time: "just now", body: draft.trim() },
                      ...prev,
                    ]);
                    setDraft("");
                    toast.success("Posted to the club");
                  }}
                  className="label-mono flex items-center gap-2 bg-ink px-4 py-2.5 text-ink-foreground transition-colors hover:bg-accent"
                >
                  <Send className="size-3" /> Post
                </button>
              ) : (
                <Link to="/login" className="label-mono bg-ink px-4 py-2.5 text-ink-foreground hover:bg-accent">
                  Sign in
                </Link>
              )}
            </div>
          </Reveal>

          <ul className="mt-8 space-y-5">
            {thread.map((m, i) => (
              <Reveal as="li" key={`${m.author}-${i}`} delay={i * 60}>
                <div className="animate-fade-in flex gap-4 border-b border-border pb-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-[11px] font-semibold">
                    {m.initials}
                  </span>
                  <div>
                    <p className="flex items-baseline gap-3">
                      <span className="text-[15px] font-medium">{m.author}</span>
                      <span className="label-mono text-muted-foreground">{m.time}</span>
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          {film && (
            <Reveal>
              <div className="border border-border bg-card">
                <Link to="/films/$slug" params={{ slug: film.slug }} className="group block">
                  <div className="grain scanlines aspect-[4/3] overflow-hidden bg-ink">
                    <img
                      src={film.still}
                      alt={film.title}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <p className="label-mono text-accent">Now watching</p>
                  <h3 className="mt-2 font-display text-2xl leading-tight">{film.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {film.year} · {film.director} · {film.runtime}
                  </p>
                </div>
              </div>
            </Reveal>
          )}

          <Reveal delay={80}>
            <p className="label-mono text-muted-foreground">Other rooms</p>
            <ul className="mt-4 space-y-3">
              {otherClubs.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/clubs/$slug"
                    params={{ slug: c.slug }}
                    className="hover-lift flex items-center gap-3 border border-border bg-card p-3"
                  >
                    <img src={c.cover} alt="" loading="lazy" className="size-11 object-cover grayscale" />
                    <div className="min-w-0">
                      <p className="truncate font-display text-lg leading-tight">{c.name}</p>
                      <p className="label-mono mt-0.5 text-muted-foreground">{c.members} members</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
