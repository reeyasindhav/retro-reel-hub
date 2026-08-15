import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type RetroUser = {
  name: string;
  email: string;
  initials: string;
  memberSince: string;
  favouriteDecade: string;
};

type AuthState = {
  user: RetroUser | null;
  ready: boolean;
  signIn: (email: string, name?: string) => void;
  signOut: () => void;
  shelf: string[];
  toggleShelf: (slug: string) => void;
  joined: string[];
  toggleClub: (slug: string) => void;
};

const KEY = "retrowave.session";
const SHELF_KEY = "retrowave.shelf";
const CLUB_KEY = "retrowave.clubs";

const AuthContext = createContext<AuthState | null>(null);

const initials = (value: string) =>
  value
    .replace(/@.*/, "")
    .split(/[\s._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("") || "RW";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<RetroUser | null>(null);
  const [ready, setReady] = useState(false);
  const [shelf, setShelf] = useState<string[]>([]);
  const [joined, setJoined] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUser(JSON.parse(raw) as RetroUser);
      setShelf(JSON.parse(localStorage.getItem(SHELF_KEY) ?? "[]"));
      setJoined(JSON.parse(localStorage.getItem(CLUB_KEY) ?? "[]"));
    } catch {
      /* ignore corrupted local state */
    }
    setReady(true);
  }, []);

  const signIn = useCallback((email: string, name?: string) => {
    const next: RetroUser = {
      name: name?.trim() || email.replace(/@.*/, "").replace(/[._-]/g, " "),
      email,
      initials: initials(name?.trim() || email),
      memberSince: "Vol. 07",
      favouriteDecade: "1950s",
    };
    localStorage.setItem(KEY, JSON.stringify(next));
    setUser(next);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(KEY);
    setUser(null);
  }, []);

  const toggleShelf = useCallback((slug: string) => {
    setShelf((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      localStorage.setItem(SHELF_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const toggleClub = useCallback((slug: string) => {
    setJoined((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      localStorage.setItem(CLUB_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ user, ready, signIn, signOut, shelf, toggleShelf, joined, toggleClub }),
    [user, ready, signIn, signOut, shelf, toggleShelf, joined, toggleClub],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
