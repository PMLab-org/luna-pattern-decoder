import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroWoman from "@/assets/hero-woman.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles,
  MessageCircle,
  Network,
  Stethoscope,
  ShieldCheck,
  BookOpen,
  HeartHandshake,
  Eye,
  Lock,
  Check,
} from "lucide-react";
import founderImg from "@/assets/founder.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PricingPreview } from "@/components/pricing-preview";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Luna by PM Lab — See the pattern in your perimenopause symptoms" },
      {
        name: "description",
        content:
          "Luna is an AI perimenopause companion that connects the dots between your symptoms. After 5 check-ins, see what your body is telling you.",
      },
      { property: "og:title", content: "Luna by PM Lab" },
      {
        property: "og:description",
        content:
          "Your symptoms aren't random. They form a pattern. Luna helps you see it.",
      },
    ],
  }),
});

const faqs = [
  {
    q: "What is Luna and how is it different from other symptom trackers?",
    a: "Luna is an AI guide built for perimenopause. Instead of logging isolated symptoms into charts, you have short conversations — and Luna connects the dots between what you're feeling so it finally makes sense.",
  },
  {
    q: "Who is Luna for — perimenopause, menopause, or both?",
    a: "Luna is designed for women in perimenopause and menopause, typically from their late 30s through 50s+, whether you're just noticing changes or already in menopause.",
  },
  {
    q: "How does the 5-conversation process work?",
    a: "Five check-ins unlock your first meaningful pattern report. Ongoing entries help Luna track how your symptoms connect and change over time. Each entry can be as quick or as detailed as you need, and works on any phone or computer. Most women complete the 5 conversations, get a personalized summary of how your symptoms interact, and can download your first clinician-ready report over 1–2 weeks.",
  },
  {
    q: "Is Luna a replacement for my doctor?",
    a: "No. Luna is designed to support, not replace, your care. It helps you walk into appointments with clearer patterns, language, and questions so your time with your clinician goes further.",
  },
  {
    q: "Is Luna still in beta / in development?",
    a: "Yes. Luna and The Perimenopause Lab are in active development and already used by more than 90 women. Being in beta means we're still refining the experience — and your feedback directly shapes what we build next.",
  },
  {
    q: "How is my data protected?",
    a: "Your entries are encrypted, never sold, and never used to train external models. You can export or delete your data at any time.",
  },
  {
    q: "Is Luna evidence-based?",
    a: "Yes. Luna's framework is built with clinicians and researchers in perimenopause and women's health, grounded in peer-reviewed literature.",
  },
  {
    q: "How much does it cost?",
    a: "Early access is free while we build with our founding community. Pricing for the full version will be announced before any charges begin.",
  },
  {
    q: "Who is PM Lab?",
    a: "PM Lab is a women's health research studio building tools that take perimenopause seriously — clinically, scientifically, and humanly.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section id="start" className="px-6 py-14 md:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              <Sparkles className="h-3.5 w-3.5" /> Your body is talking. Let's listen.
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Most apps track symptoms.{" "}
              <span className="text-gradient-luna">We tell you what they mean.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
              Your symptoms are not random. They form a pattern. Luna reveals it so you know what to do.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <Button
                size="lg"
                className="h-12 min-w-[200px] bg-gradient-luna px-6 text-base text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-90"
              >
                Start Your First Entry
              </Button>
              <p className="text-sm text-muted-foreground">
                Five check-ins unlock your first meaningful pattern report. Ongoing entries help Luna track how your symptoms connect and change over time.
              </p>
            </div>
          </div>
          <img
            src={heroWoman}
            alt="Woman at home reading her Luna pattern report with a quiet aha moment"
            width={1024}
            height={1280}
            className="w-full h-auto rounded-2xl object-cover shadow-[var(--shadow-soft)] aspect-[4/5]"
          />
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Most trackers give you data. <span className="text-gradient-luna">Luna helps you see what it means.</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Other trackers
              </p>

              {/* Phone mockup */}
              <div className="mt-6 flex justify-center">
                <PhoneFrame>
                  {/* App header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Today</p>
                      <p className="text-sm font-semibold text-foreground">Symptom Tracker</p>
                    </div>
                    <span className="h-6 w-6 rounded-lg bg-muted" />
                  </div>

                  {/* Log list */}
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {[
                      "Hot flashes — 3 today",
                      "Sleep — 5h 42m",
                      "Mood — 4/10",
                      "Cycle day — 23",
                      "Energy — low",
                      "Brain fog — mid",
                      "Headache — mild",
                    ].map((l) => (
                      <li
                        key={l}
                        className="flex items-center justify-between border-b border-border/60 pb-1.5 text-[11px]"
                      >
                        <span>{l}</span>
                        <span className="text-[9px]">Logged</span>
                      </li>
                    ))}
                  </ul>

                  {/* Chart */}
                  <div className="mt-4 rounded-lg border border-border/60 bg-muted/40 p-2.5">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-medium text-foreground">Last 7 days</p>
                      <p className="text-[9px] text-muted-foreground">Mood</p>
                    </div>
                    <svg viewBox="0 0 140 50" className="mt-1.5 h-16 w-full">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-muted-foreground"
                        points="5,30 25,18 45,35 65,22 85,40 105,15 130,28"
                      />
                      {[
                        [5, 30], [25, 18], [45, 35], [65, 22], [85, 40], [105, 15], [130, 28],
                      ].map(([x, y], i) => (
                        <circle key={i} cx={x} cy={y} r="2" className="fill-foreground/70" />
                      ))}
                    </svg>
                    <div className="mt-1 flex justify-between text-[8px] text-muted-foreground">
                      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="mt-auto flex items-center justify-around border-t border-border/60 pt-2.5 text-[9px] text-muted-foreground">
                    <span className="font-medium text-foreground">Log</span>
                    <span>Trends</span>
                    <span>Cycle</span>
                    <span>Me</span>
                  </div>
                </PhoneFrame>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Numbers or charts without narrative. You are left to connect the dots alone.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Luna
              </p>

              <div className="mt-6 flex justify-center">
                  <PhoneFrame>
                    {/* App header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-luna text-primary-foreground">
                          <Sparkles className="h-3 w-3" />
                        </span>
                        <p className="text-sm font-semibold text-foreground">Luna</p>
                      </div>
                      <p className="text-[10px] text-muted-foreground">Entry 3 of 5</p>
                    </div>

                    {/* Progress dots */}
                    <div className="mt-3 flex gap-1">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <span
                          key={i}
                          className={`h-1 flex-1 rounded-full ${i < 3 ? "bg-gradient-luna" : "bg-muted"}`}
                        />
                      ))}
                    </div>

                    {/* Pattern map preview */}
                    <div className="relative mt-4 h-16 overflow-hidden rounded-xl bg-muted">
                      <div className="absolute inset-0 opacity-80">
                        <SystemsMap />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-medium backdrop-blur">
                          Unlocks at entry 5
                        </span>
                      </div>
                    </div>

                    {/* Pattern progress */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-medium text-foreground">Your pattern map</span>
                        <span className="text-muted-foreground">60%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                        <div className="h-full w-[60%] rounded-full bg-gradient-luna" />
                      </div>
                    </div>

                    {/* Summary card */}
                    {/* Summary card */}
                    <div className="mt-3 rounded-xl border border-border/60 bg-muted/40 p-3">
                      <p className="text-[11px] font-semibold text-foreground">Your summary</p>
                      <p className="mt-1 text-[10px] leading-snug text-foreground/80">
                        Your symptoms suggest an interplay between your cortisol and adrenal subsystems, pointing to adrenal fatigue.
                      </p>

                      <p className="mt-2.5 text-[11px] font-semibold text-foreground">For the next week try:</p>
                      <ul className="mt-1 space-y-1 text-[10px] leading-snug text-foreground/80">
                        <li>• Protein-rich breakfast within 30 min of waking.</li>
                        <li>• 10-min walk in natural light each afternoon.</li>
                      </ul>

                      <p className="mt-2.5 text-[11px] font-semibold text-foreground">Speak to your practitioner about:</p>
                      <ul className="mt-1 space-y-0.5 text-[10px] leading-snug text-foreground/80">
                        <li>• Cortisol testing</li>
                        <li>• Thyroid panel testing</li>
                      </ul>
                    </div>
                  </PhoneFrame>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Conversations turn symptoms into a clearer picture of what may be going on.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Top things you can do to address those symptoms effectively, plus specific questions to ask your physician — including labs to consider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">How Luna works</h2>
            <p className="mt-4 text-muted-foreground">
              Three quiet steps. Two ways to walk away with clarity.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: MessageCircle,
                title: "Tell Luna what's going on",
                body: "Short conversations, no forms. Speak or type the way you'd describe it to a friend who actually gets it.",
              },
              {
                icon: Network,
                title: "See what may be connected",
                body: "Luna helps you spot patterns across sleep, mood, energy, hormones, and more.",
              },
              {
                icon: Stethoscope,
                title: "Walk away with both",
                outcomes: [
                  {
                    label: "For you",
                    body: "What your body has been saying, in plain language. Plus what to try this week.",
                  },
                  {
                    label: "For your doctor",
                    body: "A one-page report they can read in 30 seconds.",
                  },
                ],
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-luna text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                {"outcomes" in s && s.outcomes ? (
                  <div className="mt-4 space-y-4">
                    {s.outcomes.map((o) => (
                      <div key={o.label}>
                        <p className="text-sm font-semibold text-foreground">{o.label}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{o.body}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-muted-foreground">{s.body}</p>
                )}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            Your first pattern report unlocks at check-in five. Ongoing entries help Luna track how your symptoms connect and change over time.
          </p>
        </div>
      </section>

      <PricingPreview />

      {/* TRUST */}
      <section className="px-6 py-16 md:py-24">
        <div
          className="mx-auto max-w-[1200px] rounded-3xl px-6 py-14 md:px-12 md:py-20"
          style={{ backgroundColor: "var(--luna-sage)" }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Built with the care this moment deserves
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Evidence-Based",
                body: "Frameworks grounded in functional medicine principles and established scientific and medical research.",
              },
              {
                icon: Lock,
                title: "Privacy-First",
                body: "Luna is built with the same industry-standard safeguards trusted to protect health information in clinical care, so your story stays private, secure, and fully yours.",
              },
              {
                icon: Stethoscope,
                title: "Clinical Decision Support",
                body: "Provides precise, measurable tracking of symptoms reported over time. Clinicians see baseline vs. post-treatment outcomes at a glance.",
              },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl bg-card/80 p-7 backdrop-blur">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-background text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CO-CREATION */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" /> Live beta · Co-created with you
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Help shape the future of <span className="text-gradient-luna">menopause care</span>
          </h2>
          <p className="mt-5 max-w-3xl text-muted-foreground">
            Luna and The Perimenopause Lab are in active development, already used by over 90 women in a live beta.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-start">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <img
                src={founderImg}
                alt="Portrait of Luna's founder"
                width={56}
                height={56}
                loading="lazy"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <div>
                <p className="text-sm leading-relaxed text-foreground">
                  When I began experiencing my own perimenopause symptoms, I was surprised by how scattered, shallow, and confusing the available information was. If I felt lost — even with a medical background — I knew countless women must be feeling the same.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground">
                  That's why I created The Perimenopause Lab. A space built to make this transition make sense. A space for real guidance, deeper education, and the next generation of tools — including an AI companion — to help you decode your symptoms and feel confident in your body again.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground">
                  Right now, Luna is in a live beta with women like you. Every conversation and every note you share helps us make this experience better for the next woman who comes through.
                </p>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Daniella Remy — Founder, The Perimenopause Lab
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: HeartHandshake, title: "Your Feedback is Read", body: "Every message goes to a real person on our team. We review beta feedback weekly and share what's changing because of it." },
                { icon: Eye, title: "You'll See Your Impact", body: "You'll get updates on which patterns in women's stories are shaping each new release—so you can see how your experience is moving the product forward." },
                { icon: ShieldCheck, title: "You're Protected", body: "Your story is yours. Entries are encrypted, never sold, and never used to train external models—and you can opt out or delete your data anytime." },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-card p-5">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground">
                    <c.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">{c.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-[1200px] justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 min-w-[200px] bg-gradient-luna px-6 text-base text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-90"
          >
            <a href="#start">Start Your First Entry</a>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight md:text-5xl">
            Questions, answered
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:text-primary data-[state=open]:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
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
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
            Tell Luna what's going on and Luna will connect symptom data and help you see what it means.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="h-12 min-w-[220px] bg-background px-6 text-base text-primary hover:bg-background/90"
            >
              Start Your First Entry
            </Button>
            <Link
              to="/for-clinicians"
              className="text-sm text-primary-foreground underline underline-offset-4"
            >
              Are you a clinician?
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function ChatMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-luna opacity-20 blur-3xl"
      />
      <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-luna text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold">Luna</p>
            <p className="text-xs text-muted-foreground">Entry 3 of 5</p>
          </div>
          <div className="ml-auto flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`h-1.5 w-5 rounded-full ${
                  i < 3 ? "bg-gradient-luna" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="space-y-3 py-4">
          <Bubble from="luna">
            How has your sleep felt this week — not the hours, the quality?
          </Bubble>
          <Bubble from="you">
            Falling asleep is fine. I keep waking around 3am, heart racing.
          </Bubble>
          <Bubble from="luna">
            Thank you. That 3am wake-up often shows up alongside something else for people in perimenopause. Has your energy felt steady, or more like waves?
          </Bubble>
          <Bubble from="you">Waves. Crash by mid-afternoon.</Bubble>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-muted-foreground">
          <span className="flex-1">Type your reply…</span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-luna text-primary-foreground">
            <Check className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

function Bubble({ from, children }: { from: "luna" | "you"; children: React.ReactNode }) {
  const isLuna = from === "luna";
  return (
    <div className={`flex ${isLuna ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isLuna
            ? "bg-muted text-foreground rounded-tl-sm"
            : "bg-gradient-luna text-primary-foreground rounded-tr-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function SystemsMap() {
  return (
    <svg viewBox="0 0 400 200" className="h-full w-full">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      {[
        [80, 60], [200, 40], [320, 70], [120, 140], [260, 150], [200, 100],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={22} fill="url(#g)" opacity={0.85} />
      ))}
      <g stroke="url(#g)" strokeWidth="2" opacity={0.6} fill="none">
        <line x1="80" y1="60" x2="200" y2="100" />
        <line x1="200" y1="40" x2="200" y2="100" />
        <line x1="320" y1="70" x2="200" y2="100" />
        <line x1="120" y1="140" x2="200" y2="100" />
        <line x1="260" y1="150" x2="200" y2="100" />
      </g>
    </svg>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-[260px] rounded-[2.25rem] border-[10px] border-foreground/85 bg-background shadow-[var(--shadow-soft)]">
      <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-foreground/85" />
      <div className="flex flex-col overflow-hidden rounded-[1.5rem] bg-background px-4 pb-4 pt-7">
        <div className="flex items-center justify-between text-[10px] font-medium text-muted-foreground">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/70" />
            <span className="h-1.5 w-3 rounded-sm border border-muted-foreground/70" />
          </div>
        </div>
        <div className="mt-3 flex-1">{children}</div>
      </div>
    </div>
  );
}
