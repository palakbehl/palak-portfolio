import { ArrowUp, Terminal } from "lucide-react";

export const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-4 md:px-8 bg-[#050816] border-t border-primary/10 relative">
      <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Left trademark details */}
        <div className="flex items-center gap-2 font-mono text-[10px] text-muted">
          <Terminal size={12} className="text-[#00D9FF]" />
          <span>PB.OS v3.0 // &copy; {new Date().getFullYear()} PALAK BEHL. ALL SYSTEMS OPERATIONAL.</span>
        </div>

        {/* Scroll back to top cockpit */}
        <a 
          href="#hero" 
          onClick={scrollToTop}
          className="p-2.5 bg-black/45 border border-primary/20 hover:border-secondary hover:shadow-[0_0_10px_rgba(0,217,255,0.25)] rounded-full text-secondary transition-all hover:scale-105"
          aria-label="Scroll to top core"
        >
          <ArrowUp size={16} />
        </a>

      </div>
    </footer>
  );
};