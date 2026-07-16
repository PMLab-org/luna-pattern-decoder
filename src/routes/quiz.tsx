import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Sparkles, CheckCircle2, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/quiz")({
  component: QuizPage,
  head: () => ({
    meta: [
      { title: "Perimenopause Quiz — Am I in Perimenopause? | Luna" },
      {
        name: "description",
        content:
          "Take the free perimenopause quiz from Luna. Answer 12 questions to see which perimenopause symptoms you have and how Luna can help you decode the pattern.",
      },
      { property: "og:title", content: "Perimenopause Quiz — Am I in Perimenopause?" },
      {
        property: "og:description",
        content:
          "A free 12-question perimenopause symptom assessment. See your likely pattern and what to do next.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Category = "cycle" | "vasomotor" | "sleep" | "mood" | "cognitive" | "energy";

const questions: { id: string; text: string; category: Category }[] = [
  { id: "q1", text: "Have your periods become irregular, heavier, lighter, or noticeably different from your usual pattern?", category: "cycle" },
  { id: "q2", text: "Is your cycle length changing (shorter, longer, or skipped months)?", category: "cycle" },
  { id: "q3", text: "Do you get hot flashes or sudden waves of heat during the day?", category: "vasomotor" },
  { id: "q4", text: "Do you wake up sweating at night or throw off the covers?", category: "vasomotor" },
  { id: "q5", text: "Are you having trouble falling asleep or staying asleep?", category: "sleep" },
  { id: "q6", text: "Do you wake up feeling unrested, even after a full night in bed?", category: "sleep" },
  { id: "q7", text: "Do you feel more anxious, irritable, or tearful than you used to — often for no clear reason?", category: "mood" },
  { id: "q8", text: "Have you noticed low mood, flatness, or a loss of interest in things you normally enjoy?", category: "mood" },
  { id: "q9", text: "Do you have brain fog, trouble concentrating, or moments of forgetting familiar words?", category: "cognitive" },
  { id: "q10", text: "Do you feel mentally slower or less sharp at work than a year or two ago?", category: "cognitive" },
  { id: "q11", text: "Is your energy noticeably lower, or do you crash in the afternoon?", category: "energy" },
  { id: "q12", text: "Are you experiencing new joint aches, headaches, or changes in libido?", category: "energy" },
];

const categoryLabels: Record<Category, string> = {
  cycle: "Cycle changes",
  vasomotor: "Hot flashes & night sweats",
  sleep: "Sleep disruption",
  mood: "Mood shifts",
  cognitive: "Brain fog",
  energy: "Energy & body changes",
};

function QuizPage() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const yesCount = Object.values(answers).filter(Boolean).length;

  const categories = useMemo(() => {
    const totals: Record<Category, { yes: number; total: number }> = {
      cycle: { yes: 0, total: 0 },
      vasomotor: { yes: 0, total: 0 },
      sleep: { yes: 0, total: 0 },
      mood: { yes: 0, total: 0 },
      cognitive: { yes: 0, total: 0 },
      energy: { yes: 0, total: 0 },
    };
    for (const q of questions) {
      totals[q.category].total += 1;
      if (answers[q.id]) totals[q.category].yes += 1;
    }
    return totals;
  }, [answers]);

  const activeAreas = (Object.keys(categories) as Category[]).filter(
    (c) => categories[c].yes > 0,
  );

  const likelihood =
    yesCount >= 8
      ? { label: "Strong pattern", body: "Your answers show many hallmark perimenopause symptoms clustering together." }
      : yesCount >= 4
        ? { label: "Emerging pattern", body: "You have several symptoms that are commonly seen in early perimenopause." }
        : yesCount >= 1
          ? { label: "Early signals", body: "A few of your answers overlap with early perimenopause, but the picture isn't clear yet." }
          : { label: "No strong signals today", body: "You didn't flag classic perimenopause symptoms in this snapshot." };

  function setAnswer(id: string, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-[820px]">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" /> Free perimenopause quiz
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Am I in perimenopause?{" "}
            <span className="text-gradient-luna">Take the quiz.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Answer 12 quick yes/no questions about your cycle, sleep, mood, and body. You'll see which symptom areas are active — and how Luna helps you decode the pattern behind them.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            This is an educational self-assessment, not a diagnostic tool. Only your clinician can diagnose perimenopause.
          </p>
        </div>
      </section>

      {!submitted ? (
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-[820px] rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-10">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                Answered {answeredCount} of {questions.length}
              </p>
              <div className="h-1.5 w-40 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-luna transition-all"
                  style={{ width: `${(answeredCount / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <ol className="space-y-6">
              {questions.map((q, i) => (
                <li key={q.id} className="border-b border-border/60 pb-6 last:border-none last:pb-0">
                  <p className="font-medium">
                    <span className="mr-2 text-muted-foreground">{i + 1}.</span>
                    {q.text}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setAnswer(q.id, true)}
                      aria-pressed={answers[q.id] === true}
                      className={`rounded-full border px-4 py-1.5 text-sm transition ${
                        answers[q.id] === true
                          ? "border-transparent bg-gradient-luna text-primary-foreground"
                          : "border-border bg-background hover:bg-muted"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setAnswer(q.id, false)}
                      aria-pressed={answers[q.id] === false}
                      className={`rounded-full border px-4 py-1.5 text-sm transition ${
                        answers[q.id] === false
                          ? "border-foreground bg-foreground text-background"
                          : "border-border bg-background hover:bg-muted"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Your answers stay in your browser. We don't store them.
              </p>
              <Button
                size="lg"
                disabled={answeredCount < questions.length}
                onClick={() => setSubmitted(true)}
                className="h-12 min-w-[200px] bg-gradient-luna px-6 text-base text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-90 disabled:opacity-50"
              >
                See my results
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-[820px] space-y-6">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">Your result</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                {likelihood.label}
              </h2>
              <p className="mt-3 text-muted-foreground">{likelihood.body}</p>
              <p className="mt-4 text-sm text-muted-foreground">
                You answered <strong className="text-foreground">yes</strong> to {yesCount} of {questions.length} questions.
              </p>
            </div>

            {activeAreas.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-semibold tracking-tight">Symptom areas showing up for you</h3>
                <ul className="mt-5 space-y-3">
                  {activeAreas.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p className="font-medium">{categoryLabels[c]}</p>
                        <p className="text-sm text-muted-foreground">
                          {categories[c].yes} of {categories[c].total} questions in this area.
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div
              className="rounded-2xl px-6 py-10 md:px-10 md:py-12"
              style={{ backgroundColor: "var(--luna-sage)" }}
            >
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                A checklist doesn't tell you why.{" "}
                <span className="text-gradient-luna">Luna does.</span>
              </h3>
              <p className="mt-3 text-muted-foreground">
                Luna is an AI perimenopause companion that connects the dots between the symptoms you just flagged — cycle, sleep, mood, brain fog, energy — so you can see the pattern instead of the list. After five short check-ins, you get a personalized report you can act on and share with your practitioner.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 min-w-[220px] bg-gradient-luna px-6 text-base text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-90"
                >
                  <a href="https://luna.perimenopauselab.com/" target="_blank" rel="noopener noreferrer">
                    Start tracking with Luna
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg" className="h-12 px-6 text-base">
                  <Link to="/pricing">See pricing</Link>
                </Button>
              </div>
            </div>

            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="h-4 w-4" /> Retake the quiz
            </button>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}