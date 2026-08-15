import { createFileRoute } from "@tanstack/react-router";
import { Info, Film, Users, Clapperboard, BookOpen } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Retrowave" },
      { name: "description", content: "Learn about Retrowave, a curated archive for classic and vintage cinema." },
      { property: "og:title", content: "About — Retrowave" },
      { property: "og:description", content: "A curated archive for classic and vintage cinema." },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Film,
    title: "Curated, not algorithmic",
    body: "Every selection is chosen for craft, history, and lasting power. No popularity contests, no engagement hacks.",
  },
  {
    icon: Users,
    title: "Community-led discovery",
    body: "Film clubs and shared shelves turn solitary viewing into something communal. Great films are better together.",
  },
  {
    icon: Clapperboard,
    title: "Respect for the medium",
    body: "We honor original formats, aspect ratios, and restoration efforts. Context matters as much as the image.",
  },
  {
    icon: BookOpen,
    title: "Open archive, no paywall",
    body: "Retrowave is a visual and functional demo. Explore freely, learn freely, and share the experience.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="grain border-b border-border bg-sand">
          <div className="mx-auto max-w-[1180px] px-5 py-20">
            <span className="label-mono flex items-center gap-2 text-accent">
              <Info className="size-3.5" />
              About the archive
            </span>
            <h1 className="mt-5 font-display text-5xl tracking-tight sm:text-6xl">
              Built for films that stay with you.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Retrowave is a curated archive and demo platform dedicated to classic, cult, and vintage
              cinema. We built it because modern streaming forgot how to browse. Here, discovery feels
              like walking through a well-kept shelf, not scrolling an endless feed.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-5 py-16">
          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-card p-6">
                <item.icon className="size-5 text-accent" />
                <h3 className="mt-4 font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-[1180px] px-5 py-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl tracking-tight">What you’ll find here</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-display text-lg">Decade browsing</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    From silent-era foundations to 1990s underground. Each decade page surfaces
                    essential titles, movements, and overlooked gems.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg">Director deep-dives</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Explore filmographies, recurring themes, and the collaborators who shaped a
                    director’s signature style.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg">Film clubs</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Join or start a club, schedule watch parties, and discuss titles with people who
                    care about craft as much as you do.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg">Personal shelf</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Save titles to revisit later, track what you have watched, and build a personal
                    archive of favorites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-[1180px] px-5 py-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl tracking-tight">Design philosophy</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                The interface is inspired by retro media: film grain, warm typography, and tactile
                interactions. It’s meant to feel familiar, unhurried, and focused on the films rather
                than metrics or notifications.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                We avoid dark patterns, autoplay, and attention-hacking features. If a design choice
                doesn’t serve the film, we leave it out.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-[1180px] px-5 py-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl tracking-tight">Credits</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Retrowave is a demo project. Content, metadata, and images are used for demonstration
                and design purposes. If you own rights to any material and would like it removed,
                contact us and we will address it promptly.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-[1180px] px-5 py-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl tracking-tight">Get in touch</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Have feedback, ideas, or want to contribute? Reach us at{" "}
                <a href="mailto:hello@retrowave.archive" className="text-accent underline-offset-4 hover:underline">
                  hello@retrowave.archive
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
