import BackButton from "@/app/components/BackButton";

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="mt-4 font-['Inter'] text-sm text-neutral-500">
              Last updated: January 30, 2026
            </p>
          </header>

          {/* Sections */}
          <div className="space-y-12 font-['Inter'] text-neutral-400 leading-relaxed">

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Agreement to Terms
              </h2>
              <p>
                By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws.
              </p>
              <p>
                Continued use of our services constitutes acceptance of any updates to these terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Description of Services
              </h2>
              <p>
                We provide a software platform offered on an “as is” basis and may modify or discontinue features at any time.
              </p>
              <p>
                Availability, security, and error-free operation are not guaranteed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Account Registration
              </h2>
              <p>
                You must provide accurate information and keep your account credentials secure.
              </p>
              <p>
                Accounts involved in abuse or fraud may be suspended or terminated.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Violate laws or regulations</li>
                <li>Infringe intellectual property rights</li>
                <li>Distribute malware or harmful code</li>
                <li>Gain unauthorized system access</li>
                <li>Disrupt service operations</li>
                <li>Use automation without permission</li>
                <li>Impersonate individuals or entities</li>
                <li>Harvest user data</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Intellectual Property
              </h2>
              <p>
                All platform content is owned by us or our licensors and protected by applicable laws.
              </p>
              <p>
                You are granted a limited license for personal, intended use only.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                User Content
              </h2>
              <p>
                You retain ownership of submitted content but grant us rights necessary to operate the service.
              </p>
              <p>
                Content violating these terms may be removed without notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Payment and Billing
              </h2>
              <p>
                Paid features are billed as described at purchase and are non-refundable except where stated.
              </p>
              <p>
                Subscription pricing may change with reasonable notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Termination
              </h2>
              <p>
                You may cancel at any time. We may suspend or terminate access for violations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Disclaimers
              </h2>
              <p>
                Services are provided “as is” without warranties of any kind.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Limitation of Liability
              </h2>
              <p>
                Liability is limited to the maximum extent permitted by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Governing Law
              </h2>
              <p>
                These terms are governed by the laws of the company’s jurisdiction.
              </p>
            </section>

            {/* Contact */}
            <div className="mt-12 rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <p className="text-sm text-neutral-400">
                Questions? Contact{" "}
                <a
                  href="mailto:legal@example.com"
                  className="text-[#d36efa] underline underline-offset-2"
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