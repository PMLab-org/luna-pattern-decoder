import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ClipboardList, FileText, TrendingUp } from "lucide-react";
import reportPage1 from "@/assets/clinician-report-1.png";
import reportPage2 from "@/assets/clinician-report-2.png";
import reportPage3 from "@/assets/clinician-report-3.png";
import avatarMonique from "@/assets/clinician-monique.png";
import avatarNegin from "@/assets/clinician-negin.png";
import avatarZeynep from "@/assets/clinician-zeynep.png";

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
        <div className="mx-auto grid max-w-[1100px] items-center gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              Built by clinicians, for clinicians
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Better symptom tracking for better menopause care
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Luna helps patients track symptoms over time, then turns those
              entries into clear clinical summaries you can use in practice.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <a href={mailto}>Book a demo</a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px]">
              {[
                { src: reportPage3, rotate: "-7deg", tx: "-18%", ty: "-6%", z: 10 },
                { src: reportPage2, rotate: "4deg", tx: "0%", ty: "0%", z: 20 },
                { src: reportPage1, rotate: "-2deg", tx: "16%", ty: "8%", z: 30 },
              ].map((p, i) => (
                <img
                  key={i}
                  src={p.src}
                  alt="Sample Luna clinical report page"
                  className="absolute left-0 top-0 h-full w-full rounded-xl border border-border bg-card object-cover object-top shadow-lg"
                  style={{
                    transform: `translate(${p.tx}, ${p.ty}) rotate(${p.rotate})`,
                    zIndex: p.z,
                  }}
                />
              ))}
            </div>
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

      {/* TESTIMONIALS */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            What clinicians are saying
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                avatar: avatarMonique,
                name: "Dr. Monique Mitchell",
                credentials: "PhD, Portland, USA",
                quote:
                  "What you are building will be revolutionary for women's health! I know so many women who need this!",
              },
              {
                avatar: avatarNegin,
                name: "Dr. Negin Sayar",
                credentials: "ND, Toronto, Canada",
                quote:
                  "This is awesome! Women truly NEED to have access to evidence-based info for their health and especially transitions!",
              },
              {
                avatar: avatarZeynep,
                name: "Dr. Zeynep Uraz",
                credentials: "ND, Toronto, Canada",
                quote:
                  "This is such a thoughtful and important initiative — women in perimenopause deserve exactly this kind of resource and supportive community.",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <blockquote className="mt-4 text-sm italic leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {t.credentials}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
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