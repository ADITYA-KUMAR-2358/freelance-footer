export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black to-black" />

        <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-28 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            The unfair advantage.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We build stealth technology for high-stakes interviews.
            Stop memorizing. Start dominating.
          </p>
        </div>
      </section>

      {/* ================= PLATFORMS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Compatible Platforms
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Zoom",
            "Microsoft Teams",
            "Google Meet",
            "Cisco Webex",
            "Zoho Meet",
            "HackerRank",
            "LeetCode",
            "Codeforces",
          ].map((platform) => (
            <div
              key={platform}
              className="group relative rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 hover:border-purple-500/60 transition"
            >
              <h3 className="text-lg font-medium">{platform}</h3>
              <p className="mt-2 text-sm text-gray-400">
                Undetectable
              </p>

              <span className="absolute right-4 top-4 text-gray-500 group-hover:text-purple-400 transition">
                →
              </span>
            </div>
          ))}
        </div>
      </section>
{/* ================= FOOTER ================= */}
<footer className="relative mt-32 bg-black overflow-hidden">

  {/* Background diagonal gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-black" />

  {/* Top neon divider */}
  <div className="absolute top-0 left-0 w-full h-[1.5px] 
                  bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

  <div className="relative max-w-7xl mx-auto px-10 py-28 grid grid-cols-1 md:grid-cols-4 gap-16 text-sm">

    {/* Brand */}
    <div>
      <h3 className="text-3xl font-semibold tracking-tight">
        INVISIA<span className="text-purple-500">.</span>
      </h3>

      <p className="mt-6 text-purple-400 font-medium">
        The unfair advantage.
      </p>

      <p className="mt-6 text-gray-400 leading-relaxed max-w-xs">
        We build stealth technology for high-stakes interviews.
        Stop memorizing. Start dominating.
      </p>
    </div>

    {/* Product */}
    <div>
      <h4 className="text-white text-xs font-semibold mb-6 uppercase tracking-widest">
        PRODUCT
      </h4>
      <ul className="space-y-4 text-gray-400">
        <li className="hover:text-white transition cursor-pointer">
          Download for Windows
        </li>
        <li className="hover:text-white transition cursor-pointer">
          Pricing Plans
        </li>
        <li className="hover:text-white transition cursor-pointer">
          Changelog
        </li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h4 className="text-white text-xs font-semibold mb-6 uppercase tracking-widest">
        SUPPORT
      </h4>
      <ul className="space-y-4 text-gray-400">
        <li className="hover:text-white transition cursor-pointer">
          Setup Guide
        </li>
        <li className="hover:text-white transition cursor-pointer">
          Troubleshooting
        </li>
         <a href="/legal/refund-policy" className="block hover:text-white transition">
          Refund Policy
          </a>
        <a href="/legal/contact-us" className="block hover:text-white transition">
          Contact Support
        </a>
      </ul>
    </div>

    {/* Secure Access */}
    <div>
      <h4 className="text-white text-xs font-semibold mb-6 uppercase tracking-widest">
        SECURE ACCESS
      </h4>

      <p className="text-gray-400 mb-6">
        Ready to secure the offer?
      </p>

      <button className="w-full rounded-xl bg-purple-600 py-4 font-semibold 
                         hover:bg-purple-700 transition shadow-lg shadow-purple-600/30">
        GET INVISIA NOW
      </button>

      <p className="mt-4 text-xs text-gray-500 text-center">
        Undetected universally
      </p>

      <div className="mt-10 space-y-4 text-gray-400">
        <a href="/legal/privacy-policy" className="block hover:text-white transition">
          Privacy Policy
        </a>
        <a href="/legal/terms-of-service" className="block hover:text-white transition">
          Terms of Service
        </a>
        <a href="/legal/legal-terms" className="block hover:text-white transition">
          Legal Terms
        </a>
        <a href="/legal/acceptable-use-policy" className="block hover:text-white transition">
          Acceptable Use Policy
        </a>
      </div>
    </div>
  </div>

  {/* Bottom divider */}
  <div className="border-t border-white/10" />

  {/* Bottom bar */}
  <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-500">

    <div>
      © {new Date().getFullYear()} Invisia Inc. All systems nominal.
    </div>

    <div className="md:text-center">
      <span className="text-gray-400">Disclaimer:</span> Invisia is an AI assistance tool.
      We provide real-time intelligence; how you use it is your responsibility.
      We are not liable for employment decisions.
    </div>

    <div className="md:text-right">
      {/* social icons placeholder */}
    </div>

  </div>
</footer>
    </main>
  );
}