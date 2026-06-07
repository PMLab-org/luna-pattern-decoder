import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/legal")({
  component: LegalPage,
  head: () => ({
    meta: [
      { title: "Privacy, Security & Terms — PM Lab" },
      {
        name: "description",
        content:
          "How PM Lab handles your information, security practices, and the terms for using Luna.",
      },
      { property: "og:title", content: "Privacy, Security & Terms — PM Lab" },
      {
        property: "og:description",
        content:
          "Privacy, security, and terms for PM Lab and the Luna perimenopause symptom tracking service.",
      },
    ],
  }),
});

type Section = {
  heading: string;
  blocks: Array<
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "h3"; text: string }
  >;
};

const sections: Section[] = [
  {
    heading: "1. What PM Lab Does",
    blocks: [
      {
        type: "p",
        text: "PM Lab is an AI-supported perimenopause symptom tracking service. You can use it to record or type information about symptoms, patterns, and health experiences. PM Lab may turn your voice recordings into text, organize your symptom information, and generate summaries or insights.",
      },
      {
        type: "p",
        text: "PM Lab is for personal tracking and general information only. It is not medical advice, diagnosis, treatment, or a replacement for a licensed healthcare professional.",
      },
      {
        type: "p",
        text: "Do not use PM Lab for emergencies. If you may be having a medical emergency, call local emergency services or seek urgent medical care.",
      },
    ],
  },
  {
    heading: "2. Who Can Use PM Lab",
    blocks: [
      { type: "p", text: "You must be at least 21 years old to use PM Lab." },
      {
        type: "p",
        text: "PM Lab is not intended for anyone under 21. We do not knowingly collect personal information from anyone under 21. If we learn that we have collected information from someone under 21, we will delete it as soon as reasonably possible.",
      },
    ],
  },
  {
    heading: "3. The Information We Collect",
    blocks: [
      {
        type: "p",
        text: "We collect only the information we need to provide, protect, improve, and operate PM Lab.",
      },
      { type: "h3", text: "Account information" },
      { type: "p", text: "This may include:" },
      {
        type: "ul",
        items: ["Name", "Email address", "Year of birth", "Login and account settings"],
      },
      { type: "h3", text: "Health and symptom information" },
      { type: "p", text: "This may include:" },
      {
        type: "ul",
        items: [
          "Voice recordings you create",
          "Written messages you enter",
          "Transcripts of voice recordings",
          "AI-generated summaries",
          "Symptoms, cycle information, lifestyle notes, medications, treatments, or other health details you choose to share",
        ],
      },
      {
        type: "p",
        text: "Health and symptom information is sensitive. We treat it with extra care.",
      },
      { type: "h3", text: "Technical information" },
      { type: "p", text: "This may include:" },
      {
        type: "ul",
        items: [
          "IP address",
          "Device type",
          "Browser type",
          "Approximate location based on IP address, such as country, region, or city",
          "App usage, errors, logs, and security events",
        ],
      },
      {
        type: "p",
        text: "We do not use precise GPS location unless we clearly ask for it and you agree.",
      },
      { type: "h3", text: "Cookies and session data" },
      {
        type: "p",
        text: "We may use cookies or similar tools to keep you logged in, operate the service, remember preferences, understand basic usage, and protect the service.",
      },
      {
        type: "p",
        text: "Where cookie consent is required, we will ask for it. You can usually control cookies through your browser settings, but some service features may not work without essential cookies.",
      },
    ],
  },
  {
    heading: "4. Why We Use Your Information",
    blocks: [
      { type: "p", text: "We use your information to:" },
      {
        type: "ul",
        items: [
          "Create and manage your account",
          "Provide voice transcription, symptom tracking, summaries, and insights",
          "Store your symptom history in your account",
          "Send service messages, such as verification codes, account notices, security notices, or important product updates",
          "Respond to support requests",
          "Troubleshoot bugs and technical problems",
          "Protect PM Lab from fraud, abuse, security threats, and unauthorized access",
          "Meet legal, regulatory, accounting, or compliance obligations",
          "Improve PM Lab's product, safety, accuracy, usability, and reliability",
          "Conduct internal research to understand user needs and improve PM Lab",
        ],
      },
    ],
  },
  {
    heading: "5. Internal Research and Product Improvement",
    blocks: [
      {
        type: "p",
        text: "We do not sell your personal information, health information, recordings, transcripts, or symptom data to third parties or to anyone.",
      },
      {
        type: "p",
        text: "We may use information from PM Lab for internal research and product improvement. This helps us improve the product, identify common user needs, improve symptom categories, test product quality, improve AI prompts and outputs, and make PM Lab more useful.",
      },
      {
        type: "p",
        text: "When possible, we use de-identified, aggregated, or pseudonymized information for internal research. This means we try to remove or reduce details that directly identify you.",
      },
      {
        type: "p",
        text: "Internal research does not mean we can publish your personal story, sell your data, give your health information to advertisers, or let outside companies use your identifiable information for their own marketing.",
      },
      {
        type: "p",
        text: "We do not use your personal health information for targeted advertising.",
      },
    ],
  },
  {
    heading: "6. Consent",
    blocks: [
      {
        type: "p",
        text: "By creating an account and using PM Lab, you consent to the collection, use, and sharing of your information as described in this document.",
      },
      {
        type: "p",
        text: "You choose what health information you share. Some features will not work if you do not provide certain information. For example, voice-based symptom tracking cannot work without recording and processing your voice.",
      },
      {
        type: "p",
        text: "You can withdraw consent by deleting your account or contacting us at support@perimenopauselab.com. If you withdraw consent, some or all features may stop working. Withdrawal does not undo processing that already happened while your consent was active.",
      },
    ],
  },
  {
    heading: "7. When We Share Information",
    blocks: [
      { type: "p", text: "We do not sell your information." },
      {
        type: "p",
        text: "We share information only when needed to operate PM Lab, protect users, meet legal obligations, or complete a business transaction as described below.",
      },
      { type: "h3", text: "Service providers" },
      {
        type: "p",
        text: "We use service providers to help run PM Lab. They may process information only for the services they provide to us, and we require appropriate privacy and security protections.",
      },
      { type: "p", text: "Current service provider categories include:" },
      {
        type: "ul",
        items: [
          "AI and voice processing providers, such as OpenAI and Google, for transcription, conversation analysis, symptom extraction, and health insight generation",
          "Database and hosting providers, such as Neon, to store account data, health records, transcripts, and related service data",
          "Email providers to send verification codes, reminders, account notices, and support messages",
          "Location lookup providers, such as ip-api.com, to estimate city-level location from IP address for analytics, security, or product improvement",
        ],
      },
      {
        type: "p",
        text: "When we send content to AI providers, we send the content needed to provide the feature. We do not intentionally send your account name or email address to AI providers unless it is needed for a specific feature. However, if you say or type identifying details in a recording or message, those details may be included in the content processed by the AI provider.",
      },
      { type: "h3", text: "Legal or safety reasons" },
      {
        type: "p",
        text: "We may share information if required by law, court order, regulator, or government authority. We may also share information when we believe it is reasonably necessary to protect PM Lab, our users, or others from fraud, abuse, security threats, or harm.",
      },
      { type: "h3", text: "Business transfers" },
      {
        type: "p",
        text: "If PM Lab is involved in a merger, acquisition, financing, reorganization, or sale of assets, information may be transferred as part of that transaction. If this happens, we will take reasonable steps to protect your information and notify you if your information becomes subject to a materially different privacy policy.",
      },
    ],
  },
  {
    heading: "8. AI-Generated Content",
    blocks: [
      {
        type: "p",
        text: "PM Lab uses artificial intelligence. AI-generated summaries and insights may be incomplete, inaccurate, outdated, or not right for your situation.",
      },
      {
        type: "p",
        text: "Do not rely only on PM Lab for health decisions. Talk to a qualified healthcare professional before making medical, treatment, medication, or lifestyle decisions based on information from PM Lab.",
      },
      {
        type: "p",
        text: "PM Lab does not make medical decisions for you. PM Lab does not decide whether you receive healthcare, insurance, employment, credit, or any other important service.",
      },
    ],
  },
  {
    heading: "9. Your Content",
    blocks: [
      {
        type: "p",
        text: "You own the content you provide to PM Lab, including your voice recordings, typed entries, and health notes.",
      },
      {
        type: "p",
        text: "You give PM Lab permission to process your content so we can provide, protect, maintain, and improve the service, including internal research and product improvement described in this document.",
      },
      {
        type: "p",
        text: "You are responsible for the information you choose to enter into PM Lab. Do not submit information about another person unless you have the right to do so.",
      },
    ],
  },
  {
    heading: "10. Data Retention",
    blocks: [
      {
        type: "p",
        text: "We keep information only as long as reasonably needed for the purposes described in this document, unless a longer period is required or allowed by law.",
      },
      { type: "p", text: "In general:" },
      {
        type: "ul",
        items: [
          "Account information is kept while your account is active",
          "Voice recordings, transcripts, symptom records, and summaries are kept until you delete them, delete your account, or ask us to delete them, unless we need to retain limited information for legal, security, or dispute reasons",
          "Technical logs are usually kept for up to 90 days, unless needed longer for security, troubleshooting, legal, or compliance reasons",
          "De-identified or aggregated information may be kept longer because it is no longer intended to identify you",
        ],
      },
      {
        type: "p",
        text: "When information is no longer needed, we delete it, de-identify it, or securely dispose of it.",
      },
    ],
  },
  {
    heading: "11. Security",
    blocks: [
      {
        type: "p",
        text: "We use reasonable safeguards based on the sensitivity of the information we handle. These may include:",
      },
      {
        type: "ul",
        items: [
          "Encryption in transit using HTTPS/TLS",
          "Encryption at rest where supported by our systems and service providers",
          "Access controls so only authorized people can access personal information",
          "Limiting access to sensitive information based on job need",
          "Security monitoring, logging, and review",
          "Contractual privacy and security requirements for service providers",
        ],
      },
      {
        type: "p",
        text: "No internet service is 100% secure. We cannot guarantee that information will never be accessed, disclosed, changed, or lost.",
      },
      {
        type: "p",
        text: "If there is a privacy breach that creates a real risk of significant harm, we will notify affected users and the Office of the Privacy Commissioner of Canada when required by law.",
      },
    ],
  },
  {
    heading: "12. Your Privacy Rights",
    blocks: [
      {
        type: "p",
        text: "Depending on where you live, you may have the right to:",
      },
      {
        type: "ul",
        items: [
          "Access the personal information we hold about you",
          "Correct inaccurate information",
          "Delete certain information",
          "Withdraw consent",
          "Ask how your information has been used and shared",
          "Request a copy of your information",
          "Object to or restrict certain processing, where applicable",
          "File a privacy complaint",
        ],
      },
      {
        type: "p",
        text: "You can use in-app tools where available, or contact us at support@perimenopauselab.com.",
      },
      {
        type: "p",
        text: "We may need to verify your identity before completing a request. We will respond within 30 days unless the law allows or requires more time.",
      },
      {
        type: "p",
        text: "In some cases, we may not be able to fulfill a request fully. For example, we may need to keep certain information for legal, security, fraud prevention, or accounting reasons. If that happens, we will explain why.",
      },
    ],
  },
  {
    heading: "13. Canadian Privacy Rights",
    blocks: [
      {
        type: "p",
        text: "PM Lab is designed to follow Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and its 10 fair information principles: accountability, identifying purposes, consent, limiting collection, limiting use/disclosure/retention, accuracy, safeguards, openness, individual access, and challenging compliance.",
      },
      {
        type: "p",
        text: "PM Lab Inc. is responsible for personal information under its control.",
      },
      { type: "p", text: "Privacy contact: support@perimenopauselab.com" },
      {
        type: "p",
        text: "If you have a privacy concern, contact us first so we can investigate and respond.",
      },
      {
        type: "p",
        text: "You may also contact the Office of the Privacy Commissioner of Canada:",
      },
      {
        type: "ul",
        items: [
          "Website: https://www.priv.gc.ca/en/report-a-concern/",
          "Toll-free: 1-800-282-1376",
          "Mail: 30 Victoria Street, Gatineau, Quebec K1A 1H3",
        ],
      },
    ],
  },
  {
    heading: "14. EEA and UK Users",
    blocks: [
      {
        type: "p",
        text: "If you are located in the European Economic Area or the United Kingdom, you may have additional rights under GDPR-style privacy laws.",
      },
      { type: "h3", text: "Legal bases" },
      { type: "p", text: "We may process your information based on:" },
      {
        type: "ul",
        items: [
          "Consent, especially for health and symptom information",
          "Contract, when processing is needed to provide PM Lab to you",
          "Legitimate interests, such as service security, fraud prevention, troubleshooting, basic analytics, and product improvement, where those interests are not overridden by your rights",
          "Legal obligations, when we must process information to comply with the law",
        ],
      },
      {
        type: "p",
        text: "Health information may be treated as special-category data. Where required, we rely on your explicit consent to process it.",
      },
      { type: "h3", text: "Additional rights" },
      { type: "p", text: "You may have the right to:" },
      {
        type: "ul",
        items: [
          "Access your personal data",
          "Correct your personal data",
          "Delete your personal data",
          "Restrict processing",
          "Object to processing based on legitimate interests",
          "Receive a portable copy of your data",
          "Withdraw consent",
          "Complain to your local data protection authority",
        ],
      },
      { type: "h3", text: "International transfers" },
      {
        type: "p",
        text: "PM Lab is operated from Canada. Some service providers may process information in other countries, including the United States. When required, we use appropriate safeguards, such as contractual protections, to protect international transfers.",
      },
    ],
  },
  {
    heading: "15. Email and Communications",
    blocks: [
      {
        type: "p",
        text: "We may send you service-related emails, such as login codes, security notices, account notices, support messages, and important updates. These are part of providing PM Lab.",
      },
      {
        type: "p",
        text: "If we send marketing emails, we will follow applicable consent and unsubscribe rules. You can unsubscribe from marketing emails, but you may still receive service-related messages.",
      },
    ],
  },
  {
    heading: "16. Acceptable Use",
    blocks: [
      { type: "p", text: "You agree not to:" },
      {
        type: "ul",
        items: [
          "Use PM Lab for unlawful purposes",
          "Try to access another person's account",
          "Submit information you do not have the right to submit",
          "Interfere with PM Lab's security or operation",
          "Reverse engineer, scrape, overload, or attack the service",
          "Use PM Lab to create, send, or store harmful, abusive, fraudulent, or misleading content",
          "Misrepresent PM Lab outputs as medical advice, diagnosis, or treatment",
        ],
      },
      {
        type: "p",
        text: "We may suspend or terminate access if we believe you have violated these terms, created risk for PM Lab or other users, or used the service unlawfully.",
      },
    ],
  },
  {
    heading: "17. Account Responsibility",
    blocks: [
      {
        type: "p",
        text: "You are responsible for your account and for keeping your login information secure.",
      },
      {
        type: "p",
        text: "Tell us right away at support@perimenopauselab.com if you believe your account has been accessed without permission.",
      },
    ],
  },
  {
    heading: "18. Service Changes",
    blocks: [
      {
        type: "p",
        text: "PM Lab may change, suspend, or discontinue features at any time. We will try to give reasonable notice for major changes when practical.",
      },
      {
        type: "p",
        text: "We may also update this document. If changes are material, we will take reasonable steps to notify you, such as by email or in-app notice. Continued use of PM Lab after an update means you accept the updated document.",
      },
    ],
  },
  {
    heading: "19. No Warranties",
    blocks: [
      { type: "p", text: 'PM Lab is provided "as is" and "as available."' },
      {
        type: "p",
        text: "We do not guarantee that PM Lab will be uninterrupted, error-free, perfectly accurate, or suitable for your specific health needs. We do not guarantee the accuracy of transcriptions, summaries, AI-generated content, insights, or symptom analyses.",
      },
    ],
  },
  {
    heading: "20. Limitation of Liability",
    blocks: [
      {
        type: "p",
        text: "To the maximum extent allowed by law, PM Lab Inc. will not be liable for indirect, incidental, special, consequential, punitive, or similar damages arising from your use of PM Lab or reliance on PM Lab content.",
      },
      {
        type: "p",
        text: "Nothing in this document limits rights that cannot legally be limited.",
      },
    ],
  },
  {
    heading: "21. Governing Law",
    blocks: [
      {
        type: "p",
        text: "This document is governed by the laws of the Province of Ontario and the federal laws of Canada that apply there.",
      },
      {
        type: "p",
        text: "The courts of Ontario will have exclusive jurisdiction over disputes, unless applicable consumer or privacy law gives you the right to bring a claim somewhere else.",
      },
    ],
  },
  {
    heading: "22. Contact",
    blocks: [
      {
        type: "p",
        text: "For privacy questions, support requests, account deletion requests, data requests, or questions about these terms, contact:",
      },
      { type: "p", text: "PM Lab Inc." },
      { type: "p", text: "Email: support@perimenopauselab.com" },
    ],
  },
];

function LegalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <header className="mb-10 border-b border-border pb-8">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              PM Lab Privacy, Security, and Terms
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: May 23, 2026
            </p>
          </header>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              This document explains how PM Lab Inc. ("PM Lab", "we", "us", or
              "our") handles your information and the rules for using PM Lab.
            </p>
            <p>
              By creating an account or using PM Lab, you agree to this document.
              If you do not agree, do not use PM Lab.
            </p>
            <p>
              Contact:{" "}
              <a
                href="mailto:support@perimenopauselab.com"
                className="text-foreground underline underline-offset-4"
              >
                support@perimenopauselab.com
              </a>
            </p>
            <p>
              Legal mailing address: [Add PM Lab Inc. mailing address before
              publishing]
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                  {section.blocks.map((block, idx) => {
                    if (block.type === "p") {
                      return <p key={idx}>{block.text}</p>;
                    }
                    if (block.type === "h3") {
                      return (
                        <h3
                          key={idx}
                          className="pt-2 text-lg font-semibold text-foreground"
                        >
                          {block.text}
                        </h3>
                      );
                    }
                    return (
                      <ul key={idx} className="space-y-2 pl-1">
                        {block.items.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <span
                              aria-hidden
                              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}