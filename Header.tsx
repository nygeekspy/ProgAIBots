import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Beginner", href: "#beginner" },
  { label: "Middle", href: "#middle" },
  { label: "Materials", href: "#materials" },
  { label: "Glossary", href: "#glossary" },
  { label: "FAQ", href: "#faq" },
  { label: "Career Map", href: "#career" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-lg shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className={`font-bold text-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          Programmatic Onboarding Hub
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#faq"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Ask a question <ArrowRight size={14} />
          </a>
          <a
            href="#faq"
            className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              scrolled
                ? "border-border text-foreground hover:bg-muted"
                : "border-white/30 text-primary-foreground hover:bg-white/10"
            }`}
          >
            Suggest material
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile panel */}
      {menuOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-lg animate-fade-up">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-md text-foreground hover:bg-muted font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 p-4 pt-0 border-t border-border mt-2">
            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium"
            >
              Ask a question <ArrowRight size={14} />
            </a>
            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center px-4 py-3 rounded-lg border border-border text-foreground font-medium"
            >
              Suggest material
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
