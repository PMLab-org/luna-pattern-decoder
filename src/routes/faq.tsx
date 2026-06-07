import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ — PM Lab" },
      {
        name: "description",
        content:
          "Answers to common questions about PM Lab, Luna, symptom tracking, insights, privacy, and technical support.",
      },
      { property: "og:title", content: "FAQ — PM Lab" },
      {
        property: "og:description",
        content:
          "Frequently asked questions about PM Lab and Luna — the AI-supported perimenopause symptom tracker.",
      },
    ],
  }),
});

type QA = { q: string; a: string };
type Section = { heading: string; items: QA[] };

const sections: Section[] = [
  {
    heading: "About PM Lab",
    items: [
      {
        q: "What is PM Lab?",
        a: "PM Lab is the creator of Luna, an AI-supported perimenopause symptom tracking app. You can speak or type what you are feeling, and Luna helps organize those details into symptom trends, patterns, and summaries.",
      },
      {
        q: "Who is PM Lab for?",
        a: "Whether you are in early perimenopause, post-menopause, or unsure of your hormonal stage, Luna can help anyone who wants a clearer way to track those random symptoms, cycle changes, sleep issues, mood changes, energy shifts, and other health experiences. You must be at least 21 years old to use PM Lab.",
      },
      {
        q: "Is PM Lab medical advice?",
        a: "No. PM Lab is for personal tracking and general information only. It is not medical advice, diagnosis, treatment, or a replacement for a licensed healthcare professional.",
      },
      {
        q: "Can PM Lab diagnose perimenopause?",
        a: "No. PM Lab can help you organize symptoms and notice patterns, but it does not diagnose perimenopause or any medical condition. A qualified healthcare professional should make medical assessments and treatment decisions.",
      },
      {
        q: "What makes this different from a regular symptom tracker?",
        a: "PM Lab created Luna, an AI-companion that lets you describe your experience in plain language instead of forcing everything into rigid checkboxes. This helps you connect what happened, when it happened, and what kept repeating, so your symptoms are easier to understand and discuss with your healthcare team.",
      },
    ],
  },
  {
    heading: "Using the App",
    items: [
      {
        q: "How do I track symptoms?",
        a: "You can record an update by chatting with Luna, a friend who just gets it. You can speak or type as you wish, and Luna organizes the information for you. You'll see your tracked symptoms, a summary of what they all mean, and even be able to download a technical report your doctor will find useful.",
      },
      {
        q: "Can I choose to speak or type?",
        a: "Yes. You can speak when that feels easier, or type when you prefer more control or privacy in the moment. Voice-based tracking requires a stable internet connection with no background noises and a good quality mic, so sometimes typing can become a helpful alternative.",
      },
      {
        q: "What kinds of symptoms can I record?",
        a: "You can record symptoms and health experiences such as hot flashes, sleep changes, mood shifts, brain fog, pain, cycle changes, energy changes, lifestyle notes, medications, treatments, or anything else you think may matter.",
      },
      {
        q: "Do I need to track every day?",
        a: "No. You do not need a perfect daily record for PM Lab to be useful. More consistent tracking may make patterns easier to see, but you can still add updates when something noticeable happens.",
      },
      {
        q: "Can I edit or add details later?",
        a: "Use the available in-app tools to add or correct information where the app allows it. If you need help with something you cannot change yourself, contact support at support@perimenopauselab.com.",
      },
    ],
  },
  {
    heading: "Insights and Summaries",
    items: [
      {
        q: "What does PM Lab do with my entries?",
        a: "PM Lab is designed to offer frictionless symptom tracking so you just speak freely about what's going on and the AI will organize your symptoms into charts that track changes over time, generate summaries to clarify what those symptoms mean and what patterns can be revealed, and provides a summary report in medical terminology for your physician. The goal is to help you see patterns more clearly and prepare for better conversations with your practitioner.",
      },
      {
        q: "What are symptom trends?",
        a: "Symptom trends are patterns in what you report over time. For example, PM Lab may help show whether certain symptoms keep appearing around sleep changes, cycle changes, stress, energy dips, or other repeated experiences.",
      },
      {
        q: "What is a clinical summary?",
        a: "A clinical summary is a concise overview of your symptoms and patterns in medical language so that your healthcare practitioner has a clear summary of your lived experience. This makes your next appointment more efficient and effective, leaving you feeling heard and understood. It is meant to support a healthcare conversation, not replace one.",
      },
      {
        q: "Can I bring my PM Lab summary to a practitioner?",
        a: "Yes, it's designed for them! PM Lab helps you walk into an appointment with clearer context instead of scattered notes. Your practitioner will still use their own clinical judgment, but the clinical summary helps them get to effective care faster, with less guessing.",
      },
      {
        q: "What if the AI summary gets something wrong?",
        a: "AI-generated summaries can be incomplete or inaccurate and are highly dependent on the quality of the data provided by you. Review your summaries before relying on them, and correct important details where the app allows it or raise them directly with your practitioner. Do not rely only on PM Lab for health decisions, especially decisions about medication, treatment, or urgent symptoms.",
      },
    ],
  },
  {
    heading: "Privacy and Data",
    items: [
      {
        q: "Are my voice recordings stored?",
        a: "Voice recordings are not kept, but transcripts and the extracted data from those transcripts are used to create the symptom summaries, insights and reports you're getting in the app.",
      },
      {
        q: "Does PM Lab sell my data?",
        a: "Never. PM Lab does not sell your personal information, health information, recordings, transcripts, or symptom data to third parties or to anyone.",
      },
      {
        q: "Is my data private?",
        a: "Absolutely. Not only is it encrypted, but we follow all protocols (HIPAA, PIPEDA, GDPR) for health data and use top cybersecurity protocols to prevent data leaks. We take data privacy and security seriously.",
      },
    ],
  },
  {
    heading: "Technical Problems",
    items: [
      {
        q: "What if voice recording does not work?",
        a: "Check that your browser or device has permission to use your microphone. In some browsers, denying access once means having to go into the settings to find the right permissions. If recording still does not work, try refreshing the app, switching browsers, or typing your entry instead.",
      },
      {
        q: "What if the app is slow or not loading?",
        a: "Try refreshing the page, checking your internet connection, or closing and reopening the app. If the problem continues, contact support with what happened, what device or browser you used, and when the issue occurred. Getting feedback helps us improve the app's function and make it easier for you to use.",
      },
      {
        q: "Which devices or browsers work best?",
        a: "For Apple devices, Safari and Chrome work best. For Android devices, we recommend Chrome.",
      },
      {
        q: "Who can I contact for technical support?",
        a: "Email support@perimenopauselab.com for technical support. Include a short description of the issue, the device or browser you were using, and any error message you saw.",
      },
    ],
  },
];

function FaqPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            PM Lab
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Last updated: May 23, 2026
          </p>

          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {section.heading}
                </h2>
                <Accordion type="single" collapsible className="mt-4">
                  {section.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${section.heading}-${i}`}
                      className="border-b border-border"
                    >
                      <AccordionTrigger className="text-left text-base font-medium hover:text-primary data-[state=open]:text-primary">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <p className="mt-16 text-sm text-muted-foreground">
            Still have questions? Email{" "}
            <a
              href="mailto:support@perimenopauselab.com"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              support@perimenopauselab.com
            </a>
            .
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}