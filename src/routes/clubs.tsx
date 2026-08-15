import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarClock, Users } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { clubs, filmBySlug } from "@/data/archive";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/clubs")({
  head: () => ({
    meta: [
      { title: "Film clubs — watch classics together on Retrowave" },
      {
        name: "description",
        content:
          "Join a Retrowave film club: weekly screenings of noir, new wave, Technicolor and silent cinema with a live discussion thread.",
      },
      { property: "og:title", content: "Film clubs — watch classics together" },
      {
        property: "og:description",
        content: "Weekly screenings and discussion threads for vintage cinema obsessives.",
      },
      { property: "og:image", content: clubs[0]!.cover },
      { name: "twitter:image", content: clubs[0]!.cover },
    ],
  }),
  component: ClubsPage,
});

function ClubsPage() {
  const { joined, toggleClub } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="grain border-b border-border bg-sand">
        <div className="mx-auto max-w-[1180px] px-5 py-14">
          <p className="label-mono animate-fade-in text-accent">The screening room</p>
          <h1 className="animate-fade-up mt-4 max-w-2xl font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl">
            Nobody watches alone.
          </h1>
          <p className="animate-fade-up mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground [animation-delay:120ms]">
            Clubs meet weekly, watch the same print, and argue about it afterwards. Pick a room and
            bring an opinion.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {clubs.map((club, i) => {
            const film = filmBySlug(club.nowWatching);
            const isMember = joined.includes(club.slug);
            return (
              <Reveal key={club.slug} delay={i * 80}>
                <div className="hover-lift flex h-full flex-col border border-border bg-card">
                  <Link to="/clubs/$slug" params={{ slug: club.slug }} className="group block">
                    <div className="grain scanlines aspect-[16/7] overflow-hidden bg-ink">
                      <img
                        src={club.cover}
                        alt={club.name}
                        loading="lazy"
                        className="size-full object-cover opacity-75 grayscale transition-all duration-[900ms] group-hover:scale-105 group-hover:opacity-95"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link to="/clubs/$slug" params={{ slug: club.slug }}>
                          <h2 className="font-display text-2xl leading-tight hover:text-accent">
                            {club.name}
                          </h2>
                        </Link>
                        <p className="mt-2 text-sm text-muted-foreground">{club.blurb}</p>
                      </div>
                      <span className="label-mono flex shrink-0 items-center gap-1.5 text-muted-foreground">
                        <Users className="size-3" /> {club.members}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4">
                      <span className="label-mono flex items-center gap-1.5 text-muted-foreground">
                        <CalendarClock className="size-3" /> {club.cadence}
                      </span>
                      {film && (
                        <span className="label-mono text-muted-foreground">
                          Now: <span className="text-foreground">{film.title}</span>
                        </span>
                      )}
                    </div>

                    <div className="mt-6 flex gap-3">
                      <button
                        onClick={() => {
                          toggleClub(club.slug);
                          toast(isMember ? `Left ${club.name}` : `Joined ${club.name}`);
                        }}
                        className={cn(
                          "label-mono flex-1 px-4 py-3 transition-colors",
                          isMember
                            ? "border border-accent text-accent"
                            : "bg-ink text-ink-foreground hover:bg-accent",
                        )}
                      >
                        {isMember ? "Member" : "Join club"}
                      </button>
                      <Link
                        to="/clubs/$slug"
                        params={{ slug: club.slug }}
                        className="label-mono border border-border px-4 py-3 transition-colors hover:bg-secondary"
                      >
                        Open room
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
