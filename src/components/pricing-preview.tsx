import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    blurb: "Track symptoms and see your basic pattern view.",
  },
  {
    name: "Premium Monthly",
    price: "$10",
    suffix: "/month",
    blurb: "Weekly summaries, full reports, and priority access.",
  },
  {
    name: "Founding Member",
    price: "$75",
    suffix: "/year",
    blurb: "Lock in founding pricing. Best value, forever.",
    featured: true,
  },
];

export function PricingPreview() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Simple pricing</h2>
          <p className="mt-4 text-muted-foreground">
            Start free. Go deeper when you're ready.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((p) =>
            p.featured ? (
              <div
                key={p.name}
                className="relative overflow-hidden rounded-2xl bg-gradient-luna p-[1.5px] shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-full flex-col rounded-[calc(1rem-1px)] bg-card p-7">
                  <PlanInner {...p} />
                </div>
              </div>
            ) : (
              <div
                key={p.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
              >
                <PlanInner {...p} />
              </div>
            ),
          )}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="ghost" className="text-primary hover:text-primary">
            <Link to="/pricing">
              Compare all features <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function PlanInner({
  name,
  price,
  suffix,
  blurb,
  featured,
}: {
  name: string;
  price: string;
  suffix?: string;
  blurb: string;
  featured?: boolean;
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {name}
        </p>
        {featured && (
          <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent-foreground">
            Best value
          </span>
        )}
      </div>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight">{price}</span>
        {suffix && <span className="text-sm text-muted-foreground">{suffix}</span>}
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{blurb}</p>
      <div className="mt-6">
        <Button
          asChild
          className={
            featured
              ? "w-full bg-gradient-luna text-primary-foreground hover:opacity-90"
              : "w-full"
          }
          variant={featured ? "default" : "outline"}
        >
          <Link to="/pricing">See plan</Link>
        </Button>
      </div>
    </>
  );
}