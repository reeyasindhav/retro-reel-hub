import { createFileRoute } from "@tanstack/react-router";
import { Cookie } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookies — Retrowave" },
      { name: "description", content: "How Retrowave uses cookies and similar technologies." },
      { property: "og:title", content: "Cookies — Retrowave" },
      { property: "og:description", content: "How Retrowave uses cookies and similar technologies." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="grain border-b border-border bg-sand">
          <div className="mx-auto max-w-[1180px] px-5 py-20">
            <span className="label-mono flex items-center gap-2 text-accent">
              <Cookie className="size-3.5" />
              Legal
            </span>
            <h1 className="mt-5 font-display text-5xl tracking-tight sm:text-6xl">Cookie policy</h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              This policy explains what cookies are, which ones Retrowave uses, and how you can control
              them.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-5 py-16">
          <div className="mx-auto max-w-3xl space-y-8 text-sm text-muted-foreground">
            <section>
              <h2 className="font-display text-xl text-foreground">What cookies are</h2>
              <p className="mt-3">
                Cookies are small text files stored on your device. They help sites remember preferences,
                keep you signed in, and understand usage patterns.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground">How we use cookies</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Essential cookies for authentication and session state.</li>
                <li>Functional cookies for preferences and UI behavior.</li>
                <li>Analytics cookies to understand how the archive is used.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground">Third-party cookies</h2>
              <p className="mt-3">
                Some embedded content or fonts may set third-party cookies. Those are governed by the
                respective provider’s policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground">Your choices</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>You can disable or clear cookies in your browser settings.</li>
                <li>Some features may not work properly if essential cookies are blocked.</li>
                <li>You can also clear local storage from your browser dev tools.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground">Updates</h2>
              <p className="mt-3">
                We may update this policy as cookie usage changes. Continued use means you accept the
                current version.
              </p>
            </section>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
