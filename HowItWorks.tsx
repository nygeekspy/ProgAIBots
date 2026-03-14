import { Layers, BookOpen, CheckSquare } from "lucide-react";

const steps = [
  {
    icon: Layers,
    title: "1) Choose your level",
    text: "Beginner covers fundamentals. Middle focuses on optimization, quality, and troubleshooting.",
  },
  {
    icon: BookOpen,
    title: "2) Follow the modules",
    text: "Read notes, open links, capture questions — everything in a clear order.",
  },
  {
    icon: CheckSquare,
    title: "3) Check yourself",
    text: "Use mini checklists and control questions to lock in the essentials.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">How it works</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three steps to avoid confusion and close knowledge gaps quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="scroll-reveal bg-card border border-border rounded-2xl p-8 card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
                <s.icon size={24} />
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <p className="scroll-reveal text-center text-sm text-muted-foreground italic">
          This hub will later power an AI mentor Telegram bot.
        </p>
      </div>
    </section>
  );
}
