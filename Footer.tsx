import { Edit } from "lucide-react";

const quickLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Beginner", href: "#beginner" },
  { label: "Middle", href: "#middle" },
  { label: "Materials", href: "#materials" },
  { label: "Glossary", href: "#glossary" },
  { label: "FAQ", href: "#faq" },
  { label: "Career Map", href: "#career" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-footer-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h4 className="text-lg font-bold mb-2">Programmatic Onboarding Hub</h4>
            <p className="text-footer-muted text-sm">Internal knowledge base and learning paths.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-footer-muted">Quick links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-footer-foreground hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-footer-muted">Contacts & updates</h4>
            <ul className="space-y-2 text-sm">
              <li>Owner: Programmatic Team</li>
              <li>Last updated: February 2026</li>
            </ul>
            <button className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-footer-muted/30 text-sm hover:bg-white/5 transition-colors">
              <Edit size={14} /> Suggest an edit
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-footer-muted">
          © {year} • Internal use only
        </div>
      </div>
    </footer>
  );
}
