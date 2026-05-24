import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ClipboardList, FileText, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/for-clinicians")({
  component: ForCliniciansPage,
  head: () => ({
    meta: [
      { title: "For Clinicians — Luna by PM Lab" },
      {
        name: "description",
        content:
          "Luna helps your patients walk in with clear, structured pattern summaries so your time together goes further.",
      },
      { property: "og:title", content: "For Clinicians — Luna by PM Lab" },
      {
        property: "og:description",
        content:
          "Clinical decision support for perimenopause care, built with clinicians and researchers.",
      },
    ],
  }),
});

function ForCliniciansPage() {
  const mailto =
    "mailto:drremynd@gmail.com?subject=Luna%20clinician%20demo%20request";
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Built by clinicians, for clinicians
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Better symptom tracking for better menopause care
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Luna helps patients track symptoms over time, then turns those
            entries into clear clinical summaries you can use in practice.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <a href={mailto}>Book a demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-3">
          {[
            {
              icon: ClipboardList,
              title: "Patients track symptoms",
              body: "Patients log symptoms consistently through simple daily check-ins by voice or text, creating a clearer picture over time.",
            },
            {
              icon: FileText,
              title: "Receive detailed clinical reports",
              body: "Luna turns symptom history into structured summaries that highlight patterns, changes, and the most relevant follow-up points.",
            },
            {
              icon: TrendingUp,
              title: "More effective treatment outcomes",
              body: "With better tracking and clearer reports, clinicians can make more informed decisions and monitor progress with greater confidence.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-muted text-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            How Luna supports care
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Patients check in regularly",
              "Luna creates a concise clinical summary",
              "You use that summary to guide care",
            ].map((step, i) => (
              <li
                key={step}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-base font-medium text-foreground">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 pt-8">
        <div className="mx-auto max-w-[1100px] rounded-2xl border border-border bg-card px-6 py-12 text-center md:px-12 md:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            See how Luna can support your practice
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Book a demo to preview the clinician experience and learn how Luna
            can help your patients arrive better prepared.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <a href={mailto}>Book a demo</a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}