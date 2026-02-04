"use client";

import BackButton from "@/app/components/BackButton";
import CustomSelect from "./CustomSelect";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#050509] text-white overflow-hidden">
      {/* Orbital Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-purple-500/20 rounded-full blur-[120px]" />
        
        {/* Orbital rings - randomized */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d36efa" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#f472b6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#d36efa" stopOpacity="0.8" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Random orbit 1 */}
          <ellipse
            cx="50%"
            cy="50%"
            rx="42%"
            ry="28%"
            fill="none"
            stroke="url(#purpleGradient)"
            strokeWidth="2"
            opacity="0.25"
            filter="url(#glow)"
            transform="rotate(15 960 540)"
          />
          
          {/* Random orbit 2 */}
          <ellipse
            cx="50%"
            cy="50%"
            rx="38%"
            ry="32%"
            fill="none"
            stroke="url(#purpleGradient)"
            strokeWidth="2"
            opacity="0.35"
            filter="url(#glow)"
            transform="rotate(-25 960 540)"
          />
          
          {/* Random orbit 3 */}
          <ellipse
            cx="50%"
            cy="50%"
            rx="30%"
            ry="20%"
            fill="none"
            stroke="url(#purpleGradient)"
            strokeWidth="2"
            opacity="0.4"
            filter="url(#glow)"
            transform="rotate(40 960 540)"
          />
          
          {/* Random orbit 4 */}
          <ellipse
            cx="50%"
            cy="50%"
            rx="25%"
            ry="15%"
            fill="none"
            stroke="url(#purpleGradient)"
            strokeWidth="2"
            opacity="0.5"
            filter="url(#glow)"
            transform="rotate(-10 960 540)"
          />
        </svg>
        
        {/* Additional ambient glows */}
        <div className="absolute top-0 right-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] bg-purple-600/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Back button */}
      <div className="relative z-10 px-4 sm:px-6 pt-4 sm:pt-6">
        <BackButton fallbackHref="/" /> 
      </div>

      {/* Page heading */}
      <div className="relative z-10 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-10 md:pb-12 lg:pb-16 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-300">
          CONTACT <span className="text-[#d36efa]">US</span>
        </h1>
        <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-white/60 max-w-2xl mx-auto px-4">
          Have a question or need assistance? Our team is here to help you succeed.
        </p>
      </div>

      {/* Content */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 md:pb-16 lg:pb-20">
        <div className="grid w-full gap-6 sm:gap-8 lg:gap-10 xl:gap-12 lg:grid-cols-2 items-start">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-8">
            <div>
              <h2 className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                We're here to
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#770ca1] to-[#8904a0]">
                  Support You
                </span>
              </h2>

              <p className="max-w-md text-xs sm:text-sm md:text-base lg:text-lg text-white/70 leading-relaxed">
                Whether you have a technical question, need product support, or want to explore partnership opportunities, our dedicated team is ready to assist.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-3.5 lg:space-y-4">
              <div className="flex items-center gap-3 sm:gap-3.5 lg:gap-4 rounded-lg sm:rounded-xl lg:rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-3 sm:p-4 lg:p-5 backdrop-blur-xl transition-all hover:border-[#d36efa]/50 hover:shadow-lg hover:shadow-[#d36efa]/20">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-lg lg:rounded-xl bg-gradient-to-br from-[#aa1aba] to-[#8909bc] shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-white/90">Email Support</p>
                  <p className="text-xs sm:text-sm md:text-base text-[#d36efa] font-medium truncate">support@invisia.io</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-3.5 lg:gap-4 rounded-lg sm:rounded-xl lg:rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-3 sm:p-4 lg:p-5 backdrop-blur-xl transition-all hover:border-[#d36efa]/50 hover:shadow-lg hover:shadow-[#d36efa]/20">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-lg lg:rounded-xl bg-gradient-to-br from-[#aa1aba] to-[#8909bc] shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-white/90">Response Time</p>
                  <p className="text-xs sm:text-sm md:text-base text-white/70">Within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-3.5 lg:gap-4 rounded-lg sm:rounded-xl lg:rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-3 sm:p-4 lg:p-5 backdrop-blur-xl transition-all hover:border-[#d36efa]/50 hover:shadow-lg hover:shadow-[#d36efa]/20">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-lg lg:rounded-xl bg-gradient-to-br from-[#aa1aba] to-[#8909bc] shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-white/90">Live Chat</p>
                  <p className="text-xs sm:text-sm md:text-base text-white/70">Monday - Friday, 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 backdrop-blur-2xl shadow-[0_0_80px_rgba(211,110,250,0.15)] hover:shadow-[0_0_100px_rgba(211,110,250,0.25)] transition-all duration-500">
            <form className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="grid gap-4 sm:gap-5 lg:gap-6 sm:grid-cols-2">
                <Input label="First Name" placeholder="John" />
                <Input label="Last Name" placeholder="Doe" />
              </div>
              
              <Input label="Email Address" placeholder="john.doe@example.com" type="email" />
              <CustomSelect 
                label="Subject" 
                options={[
                  "General Inquiry",
                  "Technical Support",
                  "Partnership Opportunities",
                  "Billing & Payments",
                  "Feature Request",
                  "Other"
                ]}
              />
              <Textarea label="Message" placeholder="Tell us more about your inquiry or issue..." />

              <button 
                type="submit"
                className="w-full rounded-lg sm:rounded-xl bg-gradient-to-r from-[#8b17b8] via-[#8b0ba1] to-[#7d07ab] py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base font-semibold transition-all duration-300 hover:opacity-90 active:scale-[0.98] shadow-lg shadow-purple-500/25"
              >
                Send Message
              </button>

              <p className="text-center text-xs sm:text-sm text-white/40 mt-3 sm:mt-4">
                We'll get back to you as soon as possible
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div className="relative z-10 text-center pb-6 sm:pb-10 md:pb-12 px-4">
        <p className="text-xs sm:text-sm text-white/30">
          All communications are encrypted and secure
        </p>
      </div>
    </main>
  );
}

/* ===== FORM ELEMENTS ===== */

function Input({ 
  label, 
  placeholder, 
  type = "text" 
}: { 
  label: string; 
  placeholder: string; 
  type?: string;
}) {
  return (
    <div className="space-y-1.5 sm:space-y-2">
      <label className="block text-xs sm:text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg sm:rounded-xl border border-white/10 bg-black/40 px-3 sm:px-4 py-2.5 sm:py-3 lg:py-3.5 text-sm sm:text-base
        outline-none placeholder-white/30 transition-all duration-300
        focus:border-[#d36efa] focus:bg-black/60 focus:ring-2 focus:ring-[#d36efa]/20
        hover:border-white/20"
      />
    </div>
  );
}

function Textarea({ 
  label, 
  placeholder 
}: { 
  label: string; 
  placeholder: string;
}) {
  return (
    <div className="space-y-1.5 sm:space-y-2">
      <label className="block text-xs sm:text-sm font-medium text-white/80">
        {label}
      </label>
      <textarea
        rows={4}
        placeholder={placeholder}
        className="w-full rounded-lg sm:rounded-xl border border-white/10 bg-black/40 px-3 sm:px-4 py-2.5 sm:py-3 lg:py-3.5 text-sm sm:text-base
        outline-none placeholder-white/30 transition-all duration-300 resize-none
        focus:border-[#d36efa] focus:bg-black/60 focus:ring-2 focus:ring-[#d36efa]/20
        hover:border-white/20"
      />
    </div>
  );
}