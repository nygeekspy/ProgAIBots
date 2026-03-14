import { ArrowRight, BookOpen, List, HelpCircle, Map } from "lucide-react";

const highlights = [
{ icon: BookOpen, text: "Level-based learning paths" },
{ icon: List, text: "5–10 starter notes" },
{ icon: BookOpen, text: "Programmatic glossary" },
{ icon: HelpCircle, text: "FAQ + question form" }];


export default function Hero() {
  return (
    <section className="relative hero-gradient pt-28 pb-32 md:pt-36 md:pb-40 overflow-hidden bg-black text-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="text-primary-foreground">
            <span className="inline-block text-sm font-medium tracking-wide uppercase opacity-80 mb-4">
              Internal Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight mb-6">
              Programmatic Onboarding Hub
            </h1>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8 max-w-lg">
              A single onboarding center for the programmatic team: learning paths, notes, links, glossary,
              and FAQ — so you can ramp up faster and speak the same language.
            </p>

            {/* Quick start */}
            <div className="mb-6">
              <p className="text-sm font-medium opacity-70 mb-3 uppercase tracking-wide">Quick start</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#beginner"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-base">

                  I'm a beginner <ArrowRight size={16} />
                </a>
                <a
                  href="#middle"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-primary-foreground font-semibold hover:bg-white/10 transition-colors text-base">

                  I'm middle-level
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm opacity-80">
              <a href="#glossary" className="hover:opacity-100 underline underline-offset-2 transition-opacity">Open Glossary</a>
              <a href="#faq" className="hover:opacity-100 underline underline-offset-2 transition-opacity">Go to FAQ</a>
              <a href="#career" className="hover:opacity-100 underline underline-offset-2 transition-opacity flex items-center gap-1">
                <Map size={14} /> View Career Map
              </a>
            </div>
          </div>

          {/* Right — highlight card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-primary-foreground font-semibold text-lg mb-6">What's inside</h3>
            <ul className="space-y-4">
              {highlights.map((h) =>
              <li key={h.text} className="flex items-center gap-4 text-primary-foreground">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15">
                    <h.icon size={20} />
                  </span>
                  <span className="text-base">{h.text}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="hsl(180, 33%, 99%)" />

        </svg>
      </div>
    </section>);

}