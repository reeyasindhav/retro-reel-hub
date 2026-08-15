import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { Film, LayoutDashboard, LogOut, Bookmark, Users } from "lucide-react";
import { useEffect } from "react";
import { Logo } from "@/components/site-header";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/_member")({
  component: MemberLayout,
});

const links = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/shelf", label: "My shelf", icon: Bookmark },
  { to: "/clubs", label: "Film clubs", icon: Users },
  { to: "/decades", label: "Archive", icon: Film },
] as const;

function MemberLayout() {
  const { user, ready, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (ready && !user) navigate({ to: "/login" });
  }, [ready, user, navigate]);

  if (!ready || !user) {
    return (
      <div className="grid min-h-screen place-items-center bg-background">
        <p className="label-mono animate-pulse text-muted-foreground">Threading the reel…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[248px_1fr]">
      <aside className="grain flex flex-col border-r border-border bg-ink px-5 py-6 text-ink-foreground lg:sticky lg:top-0 lg:h-screen">
        <Logo className="text-ink-foreground" />

        <nav className="mt-10 flex gap-1 lg:flex-col">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="label-mono flex items-center gap-3 px-3 py-3 text-ink-foreground/60 transition-colors hover:bg-ink-foreground/10 hover:text-ink-foreground data-[status=active]:bg-accent data-[status=active]:text-accent-foreground"
            >
              <l.icon className="size-3.5" />
              <span className="hidden sm:inline">{l.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto hidden border-t border-ink-foreground/10 pt-5 lg:block">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-accent text-[11px] font-semibold text-accent-foreground">
              {user.initials}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm capitalize">{user.name}</p>
              <p className="label-mono truncate text-ink-foreground/40">{user.memberSince}</p>
            </div>
          </div>
          <button
            onClick={() => {
              signOut();
              navigate({ to: "/" });
            }}
            className="label-mono mt-5 flex w-full items-center gap-2 text-ink-foreground/50 transition-colors hover:text-accent"
          >
            <LogOut className="size-3.5" /> Sign out
          </button>
        </div>
      </aside>

      <main className="min-w-0">
        <Outlet />
      </main>
    </div>
  );
}
