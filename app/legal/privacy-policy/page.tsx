import BackButton from "@/app/components/BackButton";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 font-['Inter'] text-sm text-neutral-500">
              Last updated: January 30, 2026
            </p>
          </header>

          {/* Sections */}
          <div className="space-y-12 font-['Inter'] text-neutral-400 leading-relaxed">
            
            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Introduction
              </h2>
              <p>
                We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
              </p>
              <p>
                By using our platform, you agree to the practices described in this document.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Information We Collect
              </h2>

              <div className="space-y-2">
                <h3 className="font-medium text-white">Information You Provide</h3>
                <p>
                  We collect personal details such as name, email, and billing information when you create an account or subscribe.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-white">Automatically Collected Information</h3>
                <p>
                  Device data like IP address, browser type, and usage behavior is collected for security and improvement purposes.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-white">Cookies and Tracking</h3>
                <p>
                  Cookies help us remember preferences and analyze platform usage. You can disable them in your browser.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                How We Use Your Information
              </h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>Provide and improve services</li>
                <li>Process payments</li>
                <li>Send alerts and updates</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Data Security
              </h2>
              <p>
                We use industry-standard security measures, but no system is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Children’s Privacy
              </h2>
              <p>
                Our services are not intended for children under 13, and we do not knowingly collect their data.
              </p>
            </section>

            {/* Contact */}
            <div className="mt-12 rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <p className="text-sm text-neutral-400">
                If you have any questions, contact us at{" "}
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