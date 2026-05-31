import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, ArrowRight, Download, Code, 
  Lightbulb, Paintbrush, Rocket, MapPin, GraduationCap, 
  Award, Calendar, CheckCircle2, Cpu
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";

// Animated Typewriter effect for Cockpit subheadings
const SubtitleTypewriter = () => {
  const words = [
    "Full Stack Developer",
    "Computer Engineering Student",
    "Problem Solver",
    "Hackathon Finalist"
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === -1 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 35 : 75);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="font-mono text-[#00D9FF] glow-text-secondary border-r-2 border-[#00D9FF] pr-1 animate-pulse">
      {words[index].substring(0, subIndex)}
    </span>
  );
};

// Dynamic Count-Up telemetry helper
const CountUp = ({ end, decimals = 0, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 1200; // ms
    const steps = 30;
    const stepTime = duration / steps;
    const increment = end / steps;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
};

export const HeroSection = () => {
  const [initProgress, setInitProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setInitProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 px-4 md:px-8 bg-[#050816] blueprint-grid flex flex-col justify-center overflow-hidden">
      
      {/* Decorative Blueprint Overlay grid */}
      <div className="absolute inset-0 bg-[#050816]/30 blueprint-grid-fine pointer-events-none" />

      {/* Futuristic soft background lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#7C5CFC]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-[#00D9FF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#7C5CFC]/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-[#00D9FF]/5 rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto z-10 flex flex-col gap-8">
        
        {/* UPPER DASHBOARD: 3-Column Workstation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* COLUMN 1: System Console Cockpit (4 spans) */}
          <div className="lg:col-span-5 flex flex-col justify-between cyber-panel tech-corners p-6 md:p-8 bg-[#050816]/85">
            <div className="space-y-6 text-left">
              
              {/* Telemetry log initialization line */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#94A3B8]">
                  <span className="tracking-widest uppercase text-[#7C5CFC] font-semibold animate-pulse">{`> INITIALIZING PORTFOLIO COCKPIT...`}</span>
                  <span>{initProgress}%</span>
                </div>
                <div className="w-full h-1 bg-black/40 rounded-full overflow-hidden border border-[#7C5CFC]/10">
                  <div className="h-full bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] rounded-full transition-all duration-300" style={{ width: `${initProgress}%` }} />
                </div>
              </div>

              {/* Bio details and text */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#94A3B8] tracking-widest">{`// USER_PROFILE`}</span>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#F8FAFC]">
                  Hi, I'm <br />
                  <span className="bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(124,92,252,0.15)]">
                    Palak Behl
                  </span>
                </h1>
              </div>

              {/* Subheading typing module */}
              <div className="py-2.5 px-4 bg-black/40 border border-[#7C5CFC]/20 rounded-md font-semibold text-sm">
                <SubtitleTypewriter />
              </div>

              {/* whoami paragraph */}
              <div className="space-y-3 font-mono text-xs text-[#94A3B8] leading-relaxed">
                <span className="text-[#7C5CFC] font-bold">{`> whoami`}</span>
                <p className="border-l border-[#7C5CFC]/30 pl-3">
                  A passionate Full Stack Developer who loves building scalable web applications, designing efficient database systems, and crafting premium, responsive user experiences.
                </p>
              </div>

              {/* CTA cockpit buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#projects" 
                  className="flex-grow flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono font-bold text-[#050816] bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] rounded-lg hover:shadow-[0_0_20px_#7C5CFC] hover:scale-[1.02] transition-all cursor-pointer"
                >
                  EXPLORE PROJECTS
                  <ArrowRight size={14} />
                </a>
                <a 
                  href="/Palak-Behl-Resume.pdf" 
                  download="Palak-Behl-Resume.pdf"
                  className="flex-grow flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono font-bold text-[#F8FAFC] bg-black/40 hover:bg-[#7C5CFC]/10 border border-[#7C5CFC]/40 hover:border-[#00D9FF]/80 rounded-lg hover:shadow-[0_0_15px_rgba(0,217,255,0.2)] hover:scale-[1.02] transition-all"
                >
                  DOWNLOAD SPECS
                  <Download size={14} className="text-[#00D9FF]" />
                </a>
              </div>

            </div>

            {/* Social connection networks */}
            <div className="mt-8 pt-6 border-t border-[#7C5CFC]/15 flex flex-col gap-3 text-left">
              <span className="font-mono text-[10px] text-[#94A3B8] tracking-widest">{`> find_me_on`}</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/palakbehl", label: "GitHub", color: "hover:text-[#F8FAFC] hover:border-[#F8FAFC]/50 hover:shadow-[0_0_10px_rgba(248,250,252,0.25)]" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/palakbehl26", label: "LinkedIn", color: "hover:text-[#00D9FF] hover:border-[#00D9FF]/50 hover:shadow-[0_0_10px_rgba(0,217,255,0.25)]" },
                  { icon: SiLeetcode, href: "https://leetcode.com/u/Palak_behl", label: "LeetCode", color: "hover:text-amber-500 hover:border-amber-500/50 hover:shadow-[0_0_10px_rgba(245,158,11,0.25)]" },
                  { icon: Mail, href: "mailto:palakbehls@gmail.com", label: "Email", color: "hover:text-[#7C5CFC] hover:border-[#7C5CFC]/50 hover:shadow-[0_0_10px_rgba(124,92,252,0.25)]" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className={`p-3 bg-black/40 border border-primary/20 rounded-md text-muted transition-all duration-300 ${item.color}`}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* COLUMN 2: Holographic Orb Core (3 spans) */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center cyber-panel bg-[#050816]/80 p-6">
            <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center animate-float-slow">
              
              {/* Outer rotating neon orbits */}
              <div className="absolute inset-0 border-2 border-dashed border-[#7C5CFC]/35 rounded-full animate-orbit-cw" />
              <div className="absolute inset-2 border border-dotted border-[#00D9FF]/30 rounded-full animate-orbit-ccw" />
              <div className="absolute inset-6 border border-[#7C5CFC]/15 rounded-full" />
              
              {/* Conic glowing radar overlay */}
              <div className="radar-sweep" />

              {/* Scanning laser visual effect */}
              <div className="absolute inset-4 rounded-full overflow-hidden border border-[#00D9FF]/20 select-none pointer-events-none z-20">
                <div className="absolute left-0 w-full h-[2px] bg-[#00D9FF] shadow-[0_0_8px_#00D9FF] animate-laser" />
              </div>

              {/* Inner core frame containing portrait */}
              <div className="absolute inset-8 rounded-full border border-primary/30 p-1.5 bg-black/60 shadow-[0_0_20px_rgba(124,92,252,0.3)] z-10 overflow-hidden">
                <img 
                  src="/palak_portrait.jpg" 
                  alt="Palak Behl Portrait" 
                  className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" 
                />
              </div>

            </div>

            {/* Glowing active text badge under portrait */}
            <div className="mt-8 flex items-center gap-2 px-4 py-1.5 bg-black/55 border border-[#7C5CFC]/30 rounded-full shadow-[0_0_15px_rgba(124,92,252,0.2)]">
              <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="font-mono text-[10px] text-[#F8FAFC] tracking-wider uppercase font-bold">{`>_ CORE ACTIVE`}</span>
            </div>
          </div>

          {/* COLUMN 3: Telemetry Stats & Status (4 spans) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* CARD 3A: Current System Status */}
            <div className="cyber-panel p-5 bg-[#050816]/80 text-left">
              <h2 className="font-mono text-xs text-[#7C5CFC] font-bold tracking-widest mb-4 uppercase">{`// CURRENT STATUS`}</h2>
              <div className="grid grid-cols-2 gap-y-3.5 gap-x-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-muted">
                  <MapPin size={12} className="text-[#00D9FF]" />
                  <span>LOCATION:</span>
                </div>
                <div className="text-[#F8FAFC] font-semibold">Anand, Gujarat, India</div>

                <div className="flex items-center gap-2 text-muted">
                  <GraduationCap size={12} className="text-[#7C5CFC]" />
                  <span>EDUCATION:</span>
                </div>
                <div className="text-[#F8FAFC] font-semibold">B.Tech CSE @ GCET</div>

                <div className="flex items-center gap-2 text-muted">
                  <Award size={12} className="text-[#00D9FF]" />
                  <span>CGPA:</span>
                </div>
                <div className="text-[#00D9FF] font-black tracking-wider">9.19 / 10.0</div>

                <div className="flex items-center gap-2 text-muted">
                  <Calendar size={12} className="text-[#7C5CFC]" />
                  <span>GRAD_YEAR:</span>
                </div>
                <div className="text-[#F8FAFC] font-semibold">2027</div>

                <div className="flex items-center gap-2 text-muted">
                  <CheckCircle2 size={12} className="text-emerald-400" />
                  <span>AVAILABILITY:</span>
                </div>
                <div className="text-emerald-400 font-extrabold animate-pulse tracking-wide">OPEN FOR OPPORTUNITIES</div>
              </div>
            </div>

            {/* CARD 3B: Core Technical Expertises */}
            <div className="cyber-panel p-5 bg-[#050816]/80 text-left flex-grow">
              <h2 className="font-mono text-xs text-[#00D9FF] font-bold tracking-widest mb-4 uppercase">{`// CORE EXPERTISE`}</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "React", "Node.js", "Java", "Spring Boot", "MySQL", 
                  "MongoDB", "Tailwind CSS", "Git", "JavaScript", "HTML/CSS"
                ].map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 text-[10px] font-mono font-semibold bg-black/40 border border-[#7C5CFC]/25 text-[#94A3B8] rounded hover:border-[#00D9FF]/70 hover:text-[#00D9FF] transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CARD 3C: Quick Metrics Telemetries */}
            <div className="cyber-panel p-5 bg-[#050816]/80">
              <h2 className="font-mono text-xs text-[#7C5CFC] font-bold tracking-widest mb-4 text-left uppercase">{`// SYSTEM MATRIX STATS`}</h2>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { end: 9.19, decimals: 2, suffix: "", desc: "CGPA" },
                  { end: 10, decimals: 0, suffix: "+", desc: "Projects" },
                  { end: 7, decimals: 0, suffix: "+", desc: "Hackathons" },
                  { end: 10, decimals: 0, suffix: "+", desc: "Tech Stack" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-black/55 border border-primary/10 rounded p-2.5 hover:border-secondary/40 transition-colors">
                    <div className="text-base font-black text-secondary tracking-tight">
                      <CountUp end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
                    </div>
                    <div className="text-[9px] font-mono text-muted tracking-wider uppercase mt-1">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM DASHBOARD PANEL: Featured Highlights Row */}
        <div className="w-full mt-2 flex flex-col gap-3.5 text-left">
          <span className="font-mono text-xs text-[#94A3B8] tracking-widest uppercase">{`// FEATURED HIGHLIGHTS`}</span>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Full Stack Developer",
                desc: "Building end-to-end web applications that scale, linking optimized databases with beautiful responsive UIs.",
                icon: Code,
                color: "hover:border-[#7C5CFC]/50 hover:shadow-[0_0_15px_rgba(124,92,252,0.15)] text-[#7C5CFC]"
              },
              {
                title: "Problem Solver",
                desc: "Turning complex algorithm problems and functional challenges into robust, clean software solutions.",
                icon: Lightbulb,
                color: "hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] text-amber-400"
              },
              {
                title: "Creative Designer",
                desc: "Designing responsive interfaces with focus on premium visuals, fluid animations, and visual harmony.",
                icon: Paintbrush,
                color: "hover:border-[#00D9FF]/50 hover:shadow-[0_0_15px_rgba(0,217,255,0.15)] text-[#00D9FF]"
              },
              {
                title: "Always Learning",
                desc: "Exploring system designs, cloud technologies, machine learning, and emerging frameworks daily.",
                icon: Rocket,
                color: "hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] text-emerald-400"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className={`cyber-panel p-5 bg-[#050816]/75 hover:bg-[#050816]/90 flex gap-4 ${item.color}`}
                >
                  <div className="p-3 bg-black/45 rounded-lg border border-primary/10 h-fit">
                    <Icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#F8FAFC]">{item.title}</h3>
                    <p className="text-[11px] font-mono text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
};