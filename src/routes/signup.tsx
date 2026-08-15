import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthLayout, Field } from "@/components/auth-layout";
import { decades } from "@/data/archive";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your account — Retrowave" },
      {
        name: "description",
        content:
          "Join Retrowave free: build a shelf of restored classics, follow directors and join weekly film clubs.",
      },
      { property: "og:title", content: "Create your account — Retrowave" },
      {
        property: "og:description",
        content: "Build a shelf, follow directors, join weekly classic film clubs.",
      },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [era, setEra] = useState("1950s");
  const [error, setError] = useState("");

  return (
    <AuthLayout
      eyebrow="Membership · free"
      title="Build a shelf worth keeping."
      quote="Nothing is more surprising than an old film seen new."
      footer={
        <>
          Already a member?{" "}
          <Link to="/login" className="text-accent underline-offset-4 hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          if (!name.trim() || !email.includes("@") || password.length < 6) {
            setError("Add your name, a valid email and a password of at least 6 characters.");
            return;
          }
          setError("");
          signIn(email, name);
          toast.success(`Welcome to the archive, ${name.split(" ")[0]}`);
          navigate({ to: "/dashboard" });
        }}
      >
        <Field
          label="Name"
          placeholder="Jules Brenner"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Field
          label="Email"
          type="email"
          placeholder="you@archive.film"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Field
          label="Password"
          type="password"
          placeholder="At least 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div>
          <span className="label-mono text-muted-foreground">Favourite era</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {decades.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setEra(d.id)}
                className={cn(
                  "label-mono px-3 py-2 transition-colors",
                  era === d.id
                    ? "bg-ink text-ink-foreground"
                    : "border border-border text-muted-foreground hover:bg-secondary",
                )}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <button
          type="submit"
          className="label-mono w-full bg-accent px-5 py-4 text-accent-foreground transition-transform hover:scale-[1.01]"
        >
          Create account
        </button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Visual demo — your session is stored locally on this device only.
        </p>
      </form>
    </AuthLayout>
  );
}
