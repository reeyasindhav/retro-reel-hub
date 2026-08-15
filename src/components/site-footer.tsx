import { Link } from "@tanstack/react-router";
import { Logo } from "./site-header";

const columns = [
  {
    title: "Explore",
    links: [
      ["Discover", "/"],
      ["Decades", "/decades"],
      ["Directors", "/directors"],
      ["Film clubs", "/clubs"],
    ],
  },
  {
    title: "Account",
    links: [
      ["Sign in", "/login"],
      ["Create account", "/signup"],
      ["Dashboard", "/dashboard"],
      ["My shelf", "/shelf"],
    ],
  },
  {
    title: "About",
    links: [
      ["About Retrowave", "/about"],
      ["Contact", "/contact"],
      ["FAQ", "/faq"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy", "/privacy"],
      ["Terms of use", "/terms"],
      ["Cookies", "/cookies"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="grain bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="grid gap-10 border-b border-ink-foreground/10 py-14 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div className="md:col-span-1">
            <span className="label-mono text-[13px] font-semibold tracking-[0.22em]">
              RETRO<span className="text-accent">WAVE</span>
            </span>
            <p className="mt-4 max-w-[220px] text-sm text-ink-foreground/60">
              A cinema archive for the curious. Curated decade by decade, watched together.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link to="/" className="text-ink-foreground/70 transition-colors hover:text-accent">
                <span className="label-mono text-xs">Home</span>
              </Link>
              <Link to="/about" className="text-ink-foreground/70 transition-colors hover:text-accent">
                <span className="label-mono text-xs">About</span>
              </Link>
              <Link to="/contact" className="text-ink-foreground/70 transition-colors hover:text-accent">
                <span className="label-mono text-xs">Contact</span>
              </Link>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="label-mono text-ink-foreground/40">{col.title}</h3>
              <ul className="mt-4 space-y-3">
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
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <Logo className="text-ink-foreground" />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="label-mono text-ink-foreground/40">For films that stay with you.</p>
            <span className="hidden h-3 w-px bg-ink-foreground/20 sm:block" />
            <p className="label-mono text-ink-foreground/40">Open archive · Visual demo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
