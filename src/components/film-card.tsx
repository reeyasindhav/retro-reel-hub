import { Link } from "@tanstack/react-router";
import { Bookmark, Star } from "lucide-react";
import type { Film } from "@/data/archive";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

export function FilmCard({ film, compact = false }: { film: Film; compact?: boolean }) {
  const { shelf, toggleShelf } = useAuth();
  const saved = shelf.includes(film.slug);

  return (
    <article className="group">
      <div className="relative overflow-hidden vhs-frame">
        <Link to="/films/$slug" params={{ slug: film.slug }} className="block">
          <div className="grain aspect-[4/3] overflow-hidden bg-secondary">
            <img
              src={film.still}
              alt={`Still from ${film.title}`}
              loading="lazy"
              className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
          </div>
          <span className="label-mono absolute left-3 top-3 bg-paper/90 px-2 py-1 text-foreground">
            {film.decade}
          </span>
          <span className="label-mono absolute bottom-3 left-3 flex items-center gap-1.5 text-ink-foreground drop-shadow">
            <Star className="size-3 fill-accent text-accent" />
            {film.rating.toFixed(1)} / 10
          </span>
          {film.staffPick && (
            <span className="label-mono absolute bottom-3 right-3 bg-accent px-2 py-1 text-accent-foreground">
              Staff pick
            </span>
          )}
        </Link>
        <button
          onClick={() => toggleShelf(film.slug)}
          aria-label={saved ? "Remove from shelf" : "Save to shelf"}
          className={cn(
            "absolute right-3 top-3 z-30 grid size-8 place-items-center border border-border transition-colors",
            saved ? "bg-accent text-accent-foreground" : "bg-paper/90 text-foreground hover:bg-accent hover:text-accent-foreground",
          )}
        >
          <Bookmark className={cn("size-3.5", saved && "fill-current")} />
        </button>
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-3">
        <Link to="/films/$slug" params={{ slug: film.slug }}>
          <h3 className="font-display text-xl leading-tight transition-colors group-hover:text-accent">
            {film.title}
          </h3>
        </Link>
        {!compact && <span className="label-mono text-muted-foreground">{film.tag}</span>}
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        {film.year} · {film.director}
      </p>
    </article>
  );
}
