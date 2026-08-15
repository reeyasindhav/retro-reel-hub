import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of use — Retrowave" },
      { name: "description", content: "Terms and conditions for using the Retrowave archive and demo." },
      { property: "og:title", content: "Terms of use — Retrowave" },
      { property: "og:description", content: "Terms and conditions for using the Retrowave archive and demo." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="grain bg-paper">
      <div className="mx-auto max-w-[1180px] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <span className="label-mono flex items-center gap-2 text-accent">
            <FileText className="size-3.5" />
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl tracking-tight">Terms of use</h1>
          <p className="mt-3 text-muted-foreground">
            These terms apply to the Retrowave demo archive. By using the site, you agree to the following.
          </p>

          <div className="mt-10 space-y-8 text-sm text-muted-foreground">
            <section>
              <h2 className="font-display text-xl text-foreground">Acceptable use</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Use the site for personal, noncommercial exploration of vintage and classic film content.</li>
                <li>Do not attempt to scrape, redistribute, or misuse the demo data or interface.</li>
                <li>Respect other members in film clubs and discussion spaces.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground">Content and accuracy</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Retrowave is a demo project; film metadata, posters, and availability are illustrative.</li>
                <li>We do not guarantee streaming access, licensing, or external link accuracy.</li>
                <li>External sites linked from Retrowave are governed by their own terms.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground">Accounts</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Keep your credentials secure and do not share your demo session.</li>
                <li>We may remove accounts used for abuse or unauthorized automation.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground">Limitation of liability</h2>
              <p className="mt-3">
                Retrowave is provided as a visual and functional demo. We are not liable for lost data, interruptions, or third-party content accessed through the interface.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground">Changes</h2>
              <p className="mt-3">
                We may update these terms as the demo evolves. Continued use means you accept the current version.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground">Contact</h2>
              <p className="mt-3">For terms questions, reach us at legal@retrowave.archive.</p>
            </section>
          </div>

          <p className="label-mono mt-10 text-ink-foreground/40">Last updated: August 2026</p>
        </div>
      </div>
    </div>
  );
}
