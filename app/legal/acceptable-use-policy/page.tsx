import BackButton from "@/app/components/BackButton";

export default function AcceptableUsePolicyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#07080b] overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 top-2/3 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      {/* Back button */}
      <div className="z-10 px-6 pt-8">
        <BackButton fallbackHref="/" />
      </div>

      {/* Content */}
      <div className="z-10 flex flex-1 justify-center px-6 py-16 sm:py-24">
        <div className="w-full max-w-7xl rounded-2xl border border-white/5 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12 lg:p-16">
          
          {/* Header */}
          <header className="mb-12 border-b border-white/5 pb-8">
            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Acceptable Use Policy
            </h1>
            <p className="mt-4 font-['Inter'] text-sm text-neutral-500">
              Last updated: January 30, 2026
            </p>
          </header>

          {/* Sections */}
          <div className="space-y-12 font-['Inter'] text-neutral-400 leading-relaxed">

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Purpose
              </h2>
              <p>
                This Acceptable Use Policy defines permitted and prohibited uses of our platform to ensure security, integrity, and availability for all users.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Permitted Use
              </h2>
              <p>
                You may use our services only for lawful purposes and in compliance with this policy and our Terms of Service.
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Use features as intended</li>
                <li>Maintain accurate account information</li>
                <li>Comply with applicable laws</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Prohibited Activities
              </h2>
              <p>You agree not to engage in the following:</p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Violating laws or regulations</li>
                <li>Unauthorized access attempts</li>
                <li>Disrupting system security or integrity</li>
                <li>Uploading malware or malicious code</li>
                <li>Reverse engineering or scraping</li>
                <li>Impersonation</li>
                <li>Unauthorized automated usage</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Content Standards
              </h2>
              <p>
                Submitted content must not be unlawful, abusive, defamatory, or harmful. We may remove content that violates these standards.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Enforcement
              </h2>
              <p>
                We may suspend or terminate access without notice if this policy is violated.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Reporting Violations
              </h2>
              <p>
                Please report suspected violations so we can investigate and take appropriate action.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Changes to This Policy
              </h2>
              <p>
                Updates may be made periodically. Continued use signifies acceptance of the revised policy.
              </p>
            </section>

            {/* Contact */}
            <div className="mt-12 rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <p className="text-sm text-neutral-400">
                For questions, contact us at{" "}
                <a
                  href="mailto:legal@example.com"
                  className="text-[#d36efa] underline underline-offset-2 hover:text-[#d36efa]"
                >
                  legal@example.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#07080b] to-transparent" />
    </main>
  );
}