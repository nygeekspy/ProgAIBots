import { useState } from "react";
import { ChevronDown, Send, Plus } from "lucide-react";

const faqItems = [
  "Why is there no traffic after launch?",
  "What does a high discrepancy mean and where to look first?",
  "Why do I see clicks but no conversions?",
  "Which report cuts should I check first?",
  "How do I tell a bad source/placement?",
  "How do I pick the right KPI?",
  "When should I raise or lower bids?",
  "What to do if CR suddenly drops?",
  "How should I use inclusion lists (whitelists)?",
  "What information helps others troubleshoot faster?",
];

const faqAnswers: Record<string, string> = {
  [faqItems[0]]: "Check targeting, bid levels, budget, and whether the campaign is actually live in the DSP. Also verify that the deal/placement is active on the supply side.",
  [faqItems[1]]: "Compare reports between DSP and SSP. Look at time zones, attribution windows, and filtering differences. Start with impression-level discrepancy.",
  [faqItems[2]]: "Verify postback setup, attribution windows, and whether the conversion event is actually firing. Check for broken tracking pixels.",
  [faqItems[3]]: "Start with GEO, source/placement, device, and creative. These four cuts reveal most issues.",
  [faqItems[4]]: "Look at CR, CTR, and post-click engagement. A source with high impressions but zero conversions over several days is a red flag.",
  [faqItems[5]]: "Align with the campaign goal: awareness → CPM, engagement → CPC, performance → CPA/ROAS.",
  [faqItems[6]]: "Raise bids when win rate is too low and inventory is quality. Lower when you're overspending on abundant supply.",
  [faqItems[7]]: "Check for creative fatigue, new competition, tracking issues, or upstream changes in the funnel.",
  [faqItems[8]]: "Use inclusion lists for proven sources. Build them from historical data, review regularly, and keep a separate test budget for new sources.",
  [faqItems[9]]: "Share: campaign ID, date range, GEO, device, traffic source, screenshots of the issue, and what you've already tried.",
};

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="mb-14 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">FAQ & questions</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Common blockers + a fast channel to ask for help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* FAQ accordion */}
          <div className="scroll-reveal space-y-3">
            {faqItems.map((q, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-foreground pr-4">{q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="border-t border-border p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faqAnswers[q]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Ask + Suggest */}
          <div className="space-y-6">
            <div className="scroll-reveal bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-5">Ask a question</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Topic</label>
                  <input
                    type="text"
                    placeholder="e.g., Discrepancy, Optimization"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Your question</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your question in detail…"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Level</label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition">
                      <option>Beginner</option>
                      <option>Middle</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Urgency</label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition">
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  <Send size={16} /> Send
                </button>
                <p className="text-xs text-muted-foreground">
                  You can paste report links or screenshots in the text.
                </p>
              </form>
            </div>

            <div className="scroll-reveal bg-card border border-border rounded-2xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-2">Suggest material</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Have a note or a link worth adding? Help us grow the hub.
              </p>
              <button className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors">
                <Plus size={16} /> Suggest material
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
