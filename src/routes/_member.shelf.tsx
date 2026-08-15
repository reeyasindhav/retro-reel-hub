import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { FilmCard } from "@/components/film-card";
import { Reveal } from "@/components/reveal";
import { filmBySlug } from "@/data/archive";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/_member/shelf")({
  head: () => ({
    meta: [
      { title: "My shelf — Retrowave" },
      { name: "description", content: "Every classic you've saved to your Retrowave shelf, ready to watch." },
      { property: "og:title", content: "My shelf — Retrowave" },
      { property: "og:description", content: "Your saved vintage films, in one place." },
    ],
  }),
  component: ShelfPage,
});

function ShelfPage() {
  const { shelf } = useAuth();
  const saved = shelf.map(filmBySlug).filter(Boolean);

  return (
    <div className="px-5 py-10 sm:px-10">
      <Reveal>
        <p className="label-mono text-accent">Private collection</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">My shelf</h1>
        <p className="mt-3 max-w-lg text-[15px] text-muted-foreground">
          {saved.length
            ? `${saved.length} film${saved.length > 1 ? "s" : ""} put aside for a quiet night.`
            : "Nothing here yet. Save a film anywhere in the archive and it lands on this shelf."}
        </p>
      </Reveal>

      {saved.length ? (
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {saved.map((f, i) => (
            <Reveal key={f!.slug} delay={i * 60}>
              <FilmCard film={f!} compact />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal delay={80} className="mt-10 grid place-items-center border border-dashed border-border py-20">
          <Bookmark className="size-8 text-muted-foreground" />
          <p className="mt-4 text-sm text-muted-foreground">An empty shelf is just a plan.</p>
          <Link
            to="/decades"
            className="label-mono mt-6 bg-ink px-5 py-4 text-ink-foreground transition-colors hover:bg-accent"
          >
            Browse the archive
          </Link>
        </Reveal>
      )}
    </div>
  );
}
