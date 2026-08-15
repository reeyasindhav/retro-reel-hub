import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Discover" },
  { to: "/decades", label: "Decades" },
  { to: "/clubs", label: "Film clubs" },
  { to: "/directors", label: "Directors" },
] as const;

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-2.5", className)}>
      <span className="grid size-8 place-items-center border border-foreground/70 bg-ink text-ink-foreground transition-transform duration-500 group-hover:rotate-[-6deg]">
        <span className="label-mono text-[9px] leading-none">RW</span>
      </span>
      <span className="label-mono text-[13px] font-semibold tracking-[0.22em]">
        RETRO<span className="text-accent">WAVE</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const { user, shelf } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center gap-8 px-5">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative py-1 text-sm text-muted-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100 data-[status=active]:font-medium data-[status=active]:text-foreground data-[status=active]:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/decades" });
            }}
            className="hidden items-center gap-2 border-b border-border pb-1 lg:flex"
          >
            <Search className="size-3.5 text-muted-foreground" />
            <input
              placeholder="Search films..."
              className="w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </form>

          {user ? (
            <>
              <Link to="/shelf" className="label-mono hidden text-muted-foreground sm:block">
                My shelf <span className="text-accent">({shelf.length})</span>
              </Link>
              <Link
                to="/dashboard"
                className="grid size-8 place-items-center rounded-full bg-ink text-[11px] font-semibold text-ink-foreground transition-transform hover:scale-105"
              >
                {user.initials}
              </Link>
            </>
          ) : (
            <div className="hidden items-center gap-3 sm:flex">
              <Link to="/login" className="label-mono text-muted-foreground hover:text-foreground">
                Sign in
              </Link>
              <Link
                to="/signup"
                className="label-mono bg-ink px-3 py-2 text-ink-foreground transition-colors hover:bg-accent"
              >
                Join free
              </Link>
            </div>
          )}

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border bg-paper px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {[...nav, { to: "/login", label: "Sign in" }, { to: "/signup", label: "Join free" }].map(
              (item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
