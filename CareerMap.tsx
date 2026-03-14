import { ArrowRight, Download, Check } from "lucide-react";

interface Level {
  title: string;
  focus: string;
  items: string[];
  color: string;
}

const levels: Level[] = [
  {
    title: "Junior",
    focus: "Foundations & reliable execution",
    items: ["Core metrics", "Reading reports", "RTB basics", "Launch/pause routines", "Basic optimization", "Communication", "Tracking basics", "Data hygiene"],
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    title: "Middle",
    focus: "Systematic optimization & debugging",
    items: ["Structured optimization", "Discrepancy diagnosis", "Segmentation", "Creative testing", "Transparency thinking", "Quality checks", "KPI planning", "Documenting decisions"],
    color: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    title: "Senior",
    focus: "Strategy, scale, and team enablement",
    items: ["Buying strategy", "Scaling playbooks", "Advanced troubleshooting", "Process building", "Training others", "Quality governance", "Partner management", "Analytics & insights"],
    color: "bg-accent/10 text-accent border-accent/20",
  },
  {
    title: "Lead",
    focus: "Roadmap ownership & org impact",
    items: ["Team roadmap", "Standards & playbooks", "Risk management", "Tools/integrations", "Department KPIs", "Stakeholder comms", "Product thinking", "Mentorship"],
    color: "bg-hero-purple/10 text-hero-purple border-hero-purple/20",
  },
];

export default function CareerMap() {
  return (
    <section id="career" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Career in Programmatic</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Competency map and growth roadmap from Junior to Lead.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {levels.map((l, i) => (
            <div
              key={l.title}
              className={`scroll-reveal bg-card border rounded-2xl p-6 card-hover`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className={`inline-block px-3 py-1 rounded-lg text-sm font-semibold mb-3 ${l.color}`}>
                {l.title}
              </span>
              <p className="text-sm text-muted-foreground mb-4 italic">{l.focus}</p>
              <ul className="space-y-2">
                {l.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={14} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="scroll-reveal hero-gradient rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-xl md:text-2xl font-bold text-primary-foreground text-center md:text-left">
            Want a personal 4–8 week growth plan?
          </h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="#faq"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Build my plan <ArrowRight size={16} />
            </a>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-primary-foreground font-semibold hover:bg-white/10 transition-colors">
              <Download size={16} /> Download checklist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
