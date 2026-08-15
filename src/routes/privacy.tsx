import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Retrowave" },
      { name: "description", content: "How Retrowave handles your data, cookies, and privacy choices." },
      { property: "og:title", content: "Privacy — Retrowave" },
      { property: "og:description", content: "How we handle your data, cookies, and privacy choices." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="grain bg-paper">
      <div className="mx-auto max-w-[1180px] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <span className="label-mono flex items-center gap-2 text-accent">
            <Shield className="size-3.5" />
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl tracking-tight">Privacy policy</h1>
          <p className="mt-3 text-muted-foreground">
            We built Retrowave as a demo archive. This policy explains what we collect, why, and how you can control it.
          </p>

          <div className="mt-10 space-y-8 text-sm text-muted-foreground">
            <section>
              <h2 className="font-display text-xl text-foreground">What we collect</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Account details such as name and email when you sign up.</li>
                <li>Watch history and shelf contents to power your personal archive.</li>
                <li>Anonymous usage data to improve discovery and performance.</li>
                <li>Cookies and local storage for sessions and preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground">How we use it</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>To personalize recommendations, decades, and director collections.</li>
                <li>To maintain your film club memberships and shelf.</li>
                <li>To secure your account and prevent abuse.</li>
                <li>We do not sell your personal data.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground">Your choices</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Update your name and email from your dashboard.</li>
                <li>Clear local storage or request account deletion at any time.</li>
                <li>Disable nonessential cookies in your browser settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground">Contact</h2>
              <p className="mt-3">For privacy questions, reach us at privacy@retrowave.archive.</p>
            </section>
          </div>

          <p className="label-mono mt-10 text-ink-foreground/40">Last updated: August 2026</p>
        </div>
      </div>
    </div>
  );
}
