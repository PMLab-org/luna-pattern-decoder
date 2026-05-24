import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            For Clinicians
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            Built to make your appointments go further.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Luna turns weeks of subjective symptom reporting into a clear,
            structured pattern summary your patient can hand you in seconds.
            A dedicated clinician program is coming soon.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Want to be part of the early clinician cohort?{" "}
            <a href="mailto:hello@pmlab.health" className="text-primary underline underline-offset-4">
              Get in touch
            </a>
            .
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}