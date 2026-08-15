import { Link } from "@tanstack/react-router";
import { Logo } from "./site-header";
import { heroStill } from "@/data/archive";

export function AuthLayout({
  eyebrow,
  title,
  children,
  footer,
  quote,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  footer: React.ReactNode;
  quote: string;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[1fr_1.05fr]">
      <div className="flex flex-col px-6 py-8 sm:px-12">
        <Logo />
        <div className="animate-fade-up mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12">
          <p className="label-mono text-accent">{eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight">{title}</h1>
          <div className="mt-9">{children}</div>
          <div className="mt-8 text-sm text-muted-foreground">{footer}</div>
        </div>
        <Link to="/" className="label-mono text-muted-foreground hover:text-accent">
          ← Back to the archive
        </Link>
      </div>

      <div className="grain scanlines relative hidden overflow-hidden bg-ink lg:block">
        <img
          src={heroStill}
          alt="Dim cinema auditorium"
          className="absolute inset-0 size-full object-cover opacity-40 grayscale"
        />
        <div className="relative z-30 flex h-full flex-col justify-end p-12">
          <p className="max-w-md font-display text-3xl italic leading-snug text-ink-foreground">
            “{quote}”
          </p>
          <p className="label-mono mt-6 text-accent">Retrowave · Vol. 07 / Side A</p>
        </div>
      </div>
    </div>
  );
}

export function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="label-mono text-muted-foreground">{label}</span>
      <input
        {...props}
        className="mt-2 w-full border-b border-input bg-transparent pb-2.5 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
      />
    </label>
  );
}
