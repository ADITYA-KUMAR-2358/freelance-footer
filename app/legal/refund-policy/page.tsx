import BackButton from "@/app/components/BackButton";

export default function RefundPolicyPage() {
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
              Refund Policy
            </h1>
            <p className="mt-4 font-['Inter'] text-sm text-neutral-500">
              Last updated: January 30, 2026
            </p>
          </header>

          {/* Sections */}
          <div className="space-y-12 font-['Inter'] text-neutral-400 leading-relaxed">

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Our Commitment
              </h2>
              <p>
                We stand behind the quality of our services and want you to be completely satisfied with your purchase.
              </p>
              <p>
                We encourage exploring our free tier before committing to a paid subscription.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Subscription Refunds
              </h2>

              <div className="space-y-2">
                <h3 className="font-medium text-white">Monthly Subscriptions</h3>
                <p>
                  Eligible for a full refund within 14 days of the initial charge. After this period, you may cancel to avoid future charges.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-white">Annual Subscriptions</h3>
                <p>
                  Eligible for a full refund within 30 days. Afterward, prorated refunds may be issued at our discretion.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-white">Renewals</h3>
                <p>
                  Renewals follow the same refund timelines as initial subscriptions.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                One-Time Purchases
              </h2>
              <p>
                One-time purchases are refundable within 7 days if not substantially used.
              </p>
              <p>
                Once usage exceeds a minimal trial amount, refunds are no longer available.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Exceptional Circumstances
              </h2>
              <p>Refunds may be issued for:</p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Technical issues preventing access</li>
                <li>Billing errors or duplicate charges</li>
                <li>Major service outages</li>
                <li>Unauthorized transactions</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Non-Refundable Items
              </h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>Setup or onboarding fees</li>
                <li>Custom development or consulting</li>
                <li>Third-party services</li>
                <li>Data export or migration</li>
                <li>Violations of Terms of Service</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                How to Request a Refund
              </h2>
              <p>
                Contact us at{" "}
                <a
                  href="mailto:support@example.com"
                  className="text-[#d36efa] underline underline-offset-2 hover:text-[#d36efa]"
                >
                  support@example.com
                </a>{" "}
                with your account email, transaction ID, purchase date, and reason.
              </p>
              <p>
                Refunds are processed within 5–7 business days and issued to the original payment method.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Cancellations
              </h2>
              <p>
                Subscriptions can be canceled anytime and remain active until the end of the billing period.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Chargebacks
              </h2>
              <p>
                Initiating a chargeback may result in immediate account suspension and possible termination.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-lg lg:text-2xl font-medium text-white">
                Changes to This Policy
              </h2>
              <p>
                We may update this policy at any time. Continued use constitutes acceptance.
              </p>
            </section>

            {/* Contact */}
            <div className="mt-12 rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <p className="text-sm text-neutral-400">
                Questions? Contact{" "}
                <a
                  href="mailto:support@example.com"
                  className="text-[#d36efa] underline underline-offset-2"
                >
                  support@example.com
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