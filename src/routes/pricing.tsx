import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Minus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import subscribeQr from "@/assets/subscribe-qr.asset.json";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/3cI3cxgJn8b0gAEf0x4F200";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Luna by PM Lab" },
      {
        name: "description",
        content:
          "Simple pricing for deeper symptom clarity. Start free or lock in founding member pricing and help shape the future of menopause care.",
      },
      { property: "og:title", content: "Pricing — Luna by PM Lab" },
      {
        property: "og:description",
        content:
          "Free, Premium Monthly, and Founding Member plans. Calm, transparent pricing.",
      },
    ],
  }),
});

type Plan = {
  name: string;
  tagline: string;
  price: string;
  suffix?: string;
  features: string[];
  cta: string;
  featured?: boolean;
  ctaVariant?: "primary" | "outline";
};

const plans: Plan[] = [
  {
    name: "Free",
    tagline: "Start listening to your body.",
    price: "US$0",
    features: [
      "Limited symptom tracking",
      "Daily check-ins",
      "Limited weekly summaries",
      "Basic pattern view",
      "Real, useful tool — not a teaser",
    ],
    cta: "Start Your First Entry",
    ctaVariant: "outline",
  },
  {
    name: "Founding Member Annual",
    tagline: "Your price stays US$75/year after launch (regular price will be US$200/year).",
    price: "US$75",
    suffix: "/year",
    features: [
      "Everything in Free",
      "Weekly summaries",
      "Full symptom reports",
      "Locked-in founding member pricing",
      "Priority access to new features",
    ],
    cta: "Join as founding member",
    featured: true,
    ctaVariant: "primary",
  },
];

const comparison: { feature: string; values: (boolean | string)[] }[] = [
  { feature: "Symptom tracking", values: ["Limited", true] },
  { feature: "Voice logging", values: [true, true] },
  { feature: "AI chat", values: ["Limited", true] },
  { feature: "Weekly summaries", values: ["Limited", true] },
  { feature: "Full reports", values: [false, true] },
  { feature: "Clinician-ready summary", values: [false, true] },
  { feature: "Priority feature access", values: [false, true] },
];

const planLabels = ["Free", "Founding"];

const faqs = [
  {
    q: "What's included in the free plan?",
    a: "Limited symptom tracking, daily check-ins, and your basic pattern view. It's still a real, useful tool — not a teaser.",
  },
  {
    q: "When does Premium make sense?",
    a: "When you want weekly summaries, full symptom reports, and a clinician-ready view to bring to your appointments.",
  },
  {
    q: "What does founding member pricing mean?",
    a: "Founding members lock in US$75/year forever. As Luna grows and prices change, your rate doesn't — and your feedback shapes what we build.",
  },
  {
    q: "Will my price stay the same?",
    a: "Yes. Founding member pricing is locked in for as long as your subscription stays active.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, anytime, from your account. No phone calls, no friction. Your data stays yours to export or delete.",
  },
  {
    q: "Is Luna a replacement for medical care?",
    a: "No. Luna supports the conversation with your clinician with clearer patterns and language — it doesn't replace medical advice or diagnosis.",
  },
];

function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" /> Founding member pricing
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Simple pricing for{" "}
            <span className="text-gradient-luna">deeper symptom clarity</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground md:text-xl">
            Luna is actively used by women globally. Lock in founding member pricing and help
            shape the future of menopause care.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Built for women in perimenopause who want to connect the dots and feel more prepared.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="px-6 pb-8">
        <div className="mx-auto grid max-w-[900px] gap-6 md:grid-cols-2 md:items-stretch">
          {plans.map((plan) => (
            <PriceCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Compare what's included
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything we offer, side by side. No surprises.
            </p>
          </div>

          {/* Desktop table */}
          <div className="mt-12 hidden overflow-hidden rounded-2xl border border-border bg-card md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="w-1/3 px-6 py-5 text-left font-medium text-muted-foreground">
                    Feature
                  </th>
                  {planLabels.map((label, i) => (
                    <th
                      key={label}
                      className={`px-6 py-5 text-center text-sm font-semibold ${
                        i === 1 ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border/60 last:border-0">
                    <td className="px-6 py-4 text-foreground">{row.feature}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-6 py-4 text-center">
                        <Cell value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked */}
          <div className="mt-10 grid gap-5 md:hidden">
            {planLabels.map((label, planIdx) => (
              <div
                key={label}
                className={
                  planIdx === 1
                    ? "rounded-2xl bg-gradient-luna p-[1.5px]"
                    : "rounded-2xl border border-border bg-card"
                }
              >
                <div
                  className={
                    planIdx === 1
                      ? "rounded-[calc(1rem-1px)] bg-card p-5"
                      : "p-5"
                  }
                >
                  <p
                    className={`text-sm font-semibold ${
                      planIdx === 1 ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {label}
                  </p>
                  <ul className="mt-3 divide-y divide-border/60">
                    {comparison.map((row) => (
                      <li
                        key={row.feature}
                        className="flex items-center justify-between gap-4 py-2.5 text-sm"
                      >
                        <span className="text-muted-foreground">{row.feature}</span>
                        <Cell value={row.values[planIdx]} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
            Pricing questions
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-base font-medium hover:text-primary data-[state=open]:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-gradient-luna px-6 py-16 text-center text-primary-foreground md:px-12 md:py-24">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Your body is talking. Let's listen.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/90 md:text-lg">
            Start tracking for free or unlock Premium for deeper insights and clearer next steps.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 min-w-[200px] bg-background px-6 text-base text-primary hover:bg-background/90"
            >
              <a href="/#start">Start free</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 min-w-[200px] border-primary-foreground/40 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Join as a founding member
              </a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function PriceCard({ plan }: { plan: Plan }) {
  const inner = (
    <div className="flex h-full flex-col p-8">
      <div className="flex items-center justify-between">
        <p
          className={`text-sm font-semibold uppercase tracking-wider ${
            plan.featured ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {plan.name}
        </p>
        {plan.featured && (
          <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
            Best value
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-5xl font-semibold tracking-tight">{plan.price}</span>
        {plan.suffix && (
          <span className="text-base text-muted-foreground">{plan.suffix}</span>
        )}
      </div>
      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
              <Check className="h-3 w-3" />
            </span>
            <span className="text-foreground/90">{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button
          asChild
          size="lg"
          className={
            plan.ctaVariant === "primary"
              ? "h-12 w-full bg-gradient-luna text-base text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-90"
              : "h-12 w-full text-base"
          }
          variant={plan.ctaVariant === "primary" ? "default" : "outline"}
        >
          {plan.featured ? (
            <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              {plan.cta}
            </a>
          ) : (
            <a href="/#start">{plan.cta}</a>
          )}
        </Button>
      </div>
      {plan.featured && (
        <div className="mt-6 hidden flex-col items-center gap-2 border-t border-border/60 pt-6 md:flex">
          <img
            src={subscribeQr.url}
            alt="Scan to subscribe to Luna founding member plan"
            className="h-28 w-28 rounded-lg"
            loading="lazy"
          />
          <p className="text-xs text-muted-foreground">Or scan to subscribe on mobile</p>
        </div>
      )}
    </div>
  );

  if (plan.featured) {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-luna p-[1.5px] shadow-[var(--shadow-soft)] md:-my-2">
        <div className="h-full rounded-[calc(1rem-1px)] bg-card">{inner}</div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
      {inner}
    </div>
  );
}

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-foreground">
        <Check className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-grid h-6 w-6 place-items-center text-muted-foreground/60">
        <Minus className="h-3.5 w-3.5" />
      </span>
    );
  }
  return <span className="text-xs text-muted-foreground">{value}</span>;
}