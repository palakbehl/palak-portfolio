import { useState, useEffect } from "react";
import { 
  Home, User, Cpu, FolderGit2, Briefcase, Trophy, GraduationCap, Mail, Sun, Moon 
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "HOME", href: "#hero", icon: Home },
  { name: "ABOUT", href: "#about", icon: User },
  { name: "SKILLS", href: "#skills", icon: Cpu },
  { name: "PROJECTS", href: "#projects", icon: FolderGit2 },
  { name: "EXPERIENCE", href: "#experience", icon: Briefcase },
  { name: "ACHIEVEMENTS", href: "#achievements", icon: Trophy },
  { name: "EDUCATION", href: "#education", icon: GraduationCap },
  { name: "CONTACT", href: "#contact", icon: Mail },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check local storage or system preferences for theme
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }

    // Set up IntersectionObserver to highlight active item
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Detect sections when they occupy center viewport
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            // Check if it matches any nav item href (removing '#')
            const isValid = NAV_ITEMS.some(item => item.href === `#${id}`);
            if (isValid) {
              setActiveSection(id);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Select sections to track
    const targets = NAV_ITEMS.map((item) => document.getElementById(item.href.substring(1)));
    
    targets.forEach((target) => {
      if (target) observer.observe(target);
    });

    return () => {
      targets.forEach((target) => {
        if (target) observer.unobserve(target);
      });
    };
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      // Set active section directly on click
      setActiveSection(href.substring(1));
    }
  };

  return (
    <>
      {/* ========================================== */}
      {/* 1. FIXED LEFT SIDEBAR (Desktop: lg screens) */}
      {/* ========================================== */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-[#7C5CFC]/15 bg-[#050816]/95 backdrop-blur-xl z-40 hidden lg:flex flex-col justify-between p-6 select-none">
        
        {/* TOP BRAND SECTION */}
        <div className="space-y-6 text-left">
          <a href="#hero" onClick={(e) => handleClick(e, "#hero")} className="block space-y-1">
            <h2 className="text-3xl font-black tracking-widest text-[#F8FAFC] glow-text-primary">
              PB.OS
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono font-black text-[#7C5CFC] tracking-widest uppercase bg-[#7C5CFC]/10 border border-[#7C5CFC]/30 px-2 py-0.5 rounded shadow-[0_0_8px_rgba(124,92,252,0.15)]">
                v3.0
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </a>

          {/* VERTICAL MENU LINKS */}
          <nav className="flex flex-col gap-1.5 pt-4">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={cn(
                    "group flex items-center gap-3.5 px-4 py-3 rounded-lg font-mono text-xs transition-all duration-300 relative",
                    isActive
                      ? "bg-[#7C5CFC]/15 border border-[#7C5CFC]/35 text-[#F8FAFC] font-semibold shadow-[0_0_15px_rgba(124,92,252,0.15)]"
                      : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 border border-transparent"
                  )}
                >
                  {/* Left neon indicator stripe on active */}
                  {isActive && (
                    <span className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#7C5CFC] rounded-r shadow-[0_0_8px_#7C5CFC]" />
                  )}

                  <Icon size={14} className={isActive ? "text-[#00D9FF] glow-text-secondary" : "text-[#94A3B8] group-hover:text-[#F8FAFC]"} />
                  <span className="tracking-widest">{item.name}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM THEME & DECORATIVE BULLETS */}
        <div className="space-y-4 pt-6 border-t border-[#7C5CFC]/10 text-left">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase font-bold">{`> THEME`}</span>
            {/* Minimal theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded border border-primary/10 hover:border-primary/40 bg-black/30 hover:bg-[#7C5CFC]/10 transition-all text-secondary"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={12} /> : <Moon size={12} />}
            </button>
          </div>
          
          {/* Futuristic color preset orbs as shown in screenshot */}
          <div className="flex gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#7C5CFC] shadow-[0_0_8px_#7C5CFC] cursor-pointer hover:scale-110 transition-transform" title="Violet Theme Active" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF] cursor-pointer opacity-40 hover:opacity-100 hover:scale-110 transition-all" title="Cyan Blueprint Preset" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] cursor-pointer opacity-40 hover:opacity-100 hover:scale-110 transition-all" title="Matrix Emerald Preset" />
          </div>
        </div>

      </aside>

      {/* ========================================== */}
      {/* 2. FLOATING HUD DOCK (Mobile & Tablet)      */}
      {/* ========================================== */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95%] lg:hidden">
        <div className="cyber-panel cyber-panel-glow border border-primary/30 flex items-center justify-between gap-1.5 p-1.5 bg-[#050816]/80 backdrop-blur-xl rounded-full shadow-[0_8px_32px_0_rgba(124,92,252,0.25)]">
          
          {/* Navigation Links Group */}
          <div className="flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={cn(
                    "relative flex items-center justify-center p-2.5 rounded-full text-xs transition-all duration-300",
                    isActive
                      ? "text-[#F8FAFC] bg-gradient-to-r from-primary/30 to-secondary/20 border border-primary/30 shadow-[0_0_10px_rgba(124,92,252,0.25)]"
                      : "text-[#94A3B8] hover:text-foreground hover:bg-white/5 border border-transparent"
                  )}
                  title={item.name}
                >
                  <Icon size={14} className={isActive ? "text-[#00D9FF]" : "text-[#94A3B8]"} />
                  {/* Subtle active laser indicator block */}
                  {isActive && (
                    <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-3.5 h-1 bg-secondary rounded-full shadow-[0_0_8px_#00D9FF]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-primary/10 hover:border-primary/40 bg-black/30 hover:bg-[#7C5CFC]/10 transition-all text-secondary"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={12} /> : <Moon size={12} />}
          </button>

        </div>
      </div>

      {/* Mini top status bar (Always shows that the system is online) */}
      <div className="fixed top-4 right-4 z-40">
        <div className="cyber-panel cyber-panel-cyan flex items-center gap-2 px-3.5 py-1.5 text-[10px] font-mono font-bold bg-[#050816]/80 text-[#00D9FF] rounded-md border border-[#00D9FF]/20 select-none">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
          SYSTEM STATUS: ONLINE
        </div>
      </div>
    </>
  );
};