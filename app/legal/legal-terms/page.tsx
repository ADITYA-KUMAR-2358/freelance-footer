"use client";

import BackButton from "@/app/components/BackButton";
import Link from "next/link";

export default function LegalPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#07080b] overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#d36efa]/20 via-[#d36efa]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-[#d36efa]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 top-2/3 h-96 w-96 rounded-full bg-[#d36efa]/10 blur-3xl" />

      {/* Back button */}
      <div className="z-10 px-6 pt-8">
        <BackButton fallbackHref="/" />
      </div>

      {/* Content */}
      <div className="z-10 flex flex-1 justify-center px-6 py-16 sm:py-24">
        <div className="w-full max-w-7xl rounded-2xl border border-white/5 bg-black/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12 lg:p-16">
          
          {/* Header */}
          <header className="mb-12 border-b border-white/5 pb-8">
            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              Legal
            </h1>
            <p className="mt-4 text-neutral-400">
              Our legal documentation, policies, and terms.
            </p>
          </header>

          {/* Legal grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <LegalCard
              href="/legal/privacy-policy"
              title="Privacy Policy"
              desc="Learn how we collect, use, and protect your personal information."
            />
            <LegalCard
              href="/legal/terms-of-service"
              title="Terms of Service"
              desc="The rules and conditions governing use of our services."
            />
            <LegalCard
              href="/legal/refund-policy"
              title="Refund Policy"
              desc="Details about refunds and eligibility."
            />
            <LegalCard
              href="/legal/acceptable-use-policy"
              title="Acceptable Use Policy"
              desc="Rules for acceptable and prohibited usage."
            />
          </div>

          {/* Contact */}
          <div className="mt-12 rounded-xl border border-white/5 bg-white/[0.02] p-6">
            <p className="text-sm text-neutral-400">
              Questions? Contact us at{" "}
              <a
                href="mailto:legal@example.com"
                className="text-[#d36efa] underline underline-offset-2"
              >
                legal@example.com
              </a>
            </p>
          </div>

          <p className="mt-8 text-center text-xs text-neutral-600">
            Last updated: January 30, 2026
          </p>
        </div>
      </div>

      {/* Bottom vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#07080b] to-transparent" />
    </main>
  );
}

/* ---------- Card ---------- */

function LegalCard({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm
                 transition-all duration-300 ease-out
                 hover:border-[#d36efa]/40 hover:bg-white/[0.04]"
    >
      <h2 className="text-xl font-medium text-white">{title}</h2>
      <p className="mt-3 text-sm text-neutral-400">{desc}</p>
      <div className="mt-4 flex items-center text-sm text-[#d36efa]">
        Read
        <span className="ml-2 transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}