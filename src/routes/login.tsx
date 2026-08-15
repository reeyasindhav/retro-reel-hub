import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthLayout, Field } from "@/components/auth-layout";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Retrowave" },
      { name: "description", content: "Sign in to your Retrowave shelf, film clubs and watch history." },
      { property: "og:title", content: "Sign in — Retrowave" },
      { property: "og:description", content: "Return to your shelf, clubs and watch history." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="The projector's still warm."
      quote="We didn't need dialogue. We had faces."
      footer={
        <>
          New to the archive?{" "}
          <Link to="/signup" className="text-accent underline-offset-4 hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          if (!email.includes("@") || password.length < 4) {
            setError("Enter a valid email and a password of at least 4 characters.");
            return;
          }
          setError("");
          signIn(email);
          toast.success("Signed in", { description: "Demo session stored on this device." });
          navigate({ to: "/dashboard" });
        }}
      >
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
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
        <button
          type="submit"
          className="label-mono w-full bg-ink px-5 py-4 text-ink-foreground transition-colors hover:bg-accent"
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={() => {
            signIn("jb@archive.film", "Jules Brenner");
            toast.success("Signed in as the demo member");
            navigate({ to: "/dashboard" });
          }}
          className="label-mono w-full border border-border px-5 py-4 transition-colors hover:bg-secondary"
        >
          Use the demo account
        </button>
      </form>
    </AuthLayout>
  );
}
