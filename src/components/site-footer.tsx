import { Link } from "@tanstack/react-router";
import { Logo } from "./site-header";

export function SiteFooter() {
  return (
    <footer className="grain bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1180px] px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="label-mono text-[13px] font-semibold tracking-[0.22em]">
              RETRO<span className="text-accent">WAVE</span>
            </span>
            <p className="mt-4 max-w-xs text-sm text-ink-foreground/60">
              A cinema archive for the curious. Curated decade by decade, watched together.
            </p>
          </div>
          {[
            { title: "Browse", links: [["Decades", "/decades"], ["Directors", "/directors"], ["Film clubs", "/clubs"]] },
            { title: "Account", links: [["Sign in", "/login"], ["Create account", "/signup"], ["Dashboard", "/dashboard"]] },
            { title: "Archive", links: [["My shelf", "/shelf"], ["Discover", "/"]] },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="label-mono text-ink-foreground/40">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map(([label, to]) => (
                  <li key={label}>
                    <Link
                      to={to as string}
                      className="text-sm text-ink-foreground/70 transition-colors hover:text-accent"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <Logo className="text-ink-foreground" />
          <p className="label-mono text-ink-foreground/40">For films that stay with you.</p>
          <p className="label-mono text-ink-foreground/40">Open archive · Visual demo</p>
        </div>
      </div>
    </footer>
  );
}
