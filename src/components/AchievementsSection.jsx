import { motion } from "framer-motion";
import { Trophy, Award, Medal, ShieldAlert, BadgeCheck, FileCheck } from "lucide-react";
import { SiSap } from "react-icons/si";

const ACHIEVEMENTS_DATA = [
  {
    title: "Amazon Future Engineer Scholar",
    type: "Scholarship & Bootcamp",
    date: "2023",
    desc: "Selected for the prestigious national scholarship and intensive 10-month engineering bootcamp spanning Java, DSA, and complex problem-solving.",
    icon: Award,
    color: "#7C5CFC",
    badge: "SCHOLAR"
  },
  {
    title: "4x Odoo Hackathon Finalist",
    type: "Hackathon Championship",
    date: "2025",
    desc: "Qualified in the top 20 teams internationally across multiple Odoo hiring hackathons, designing high-performance ERP and HR tools.",
    icon: Trophy,
    color: "#00D9FF",
    badge: "4X FINALIST"
  },
  {
    title: "4th Place CVMU Hackathon",
    type: "Regional Hackathon",
    date: "2026",
    desc: "Placed 4th in the competitive university hackathon, delivering rapid prototype models in full-stack engineering.",
    icon: Medal,
    color: "#7C5CFC",
    badge: "RANK #4"
  },
  {
    title: "SAP Certified Back-End Developer",
    type: "ABAP Cloud Certificate",
    date: "2026",
    desc: "Official SAP backend credentials in ABAP Cloud development, demonstrating high-capacity data integrations and pipelines.",
    score: "Score: 88.8%",
    icon: SiSap,
    color: "#00D9FF",
    badge: "88.8% SCORE"
  },
  {
    title: "SAP Technology Consultant Track",
    type: "Professional Certification",
    date: "2025",
    desc: "Completed the enterprise-grade SAP technology consulting track, studying enterprise system architectures and deployment structures.",
    icon: BadgeCheck,
    color: "#7C5CFC",
    badge: "CONSULTANT"
  },
  {
    title: "Accenture UK Simulation",
    type: "Developer Simulation",
    date: "2024",
    desc: "Completed high-fidelity developer simulation with Accenture UK, implementing modern architecture guidelines and enterprise specs.",
    icon: FileCheck,
    color: "#00D9FF",
    badge: "SIMULATION"
  }
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 md:px-8 relative bg-[#050816] border-t border-primary/10">
      <div className="absolute inset-0 bg-[#050816]/10 blueprint-grid-fine pointer-events-none opacity-30" />

      <div className="container max-w-6xl mx-auto z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs text-[#00D9FF] tracking-widest uppercase">{`// UNLOCKED CREDENTIALS`}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
            MILESTONES <span className="bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] bg-clip-text text-transparent">UNLOCKED</span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#7C5CFC] to-transparent mx-auto" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((item, idx) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="cyber-panel p-5 bg-[#050816]/85 border border-[#7C5CFC]/20 hover:border-[#00D9FF]/55 hover:shadow-[0_0_15px_rgba(0,217,255,0.15)] flex flex-col justify-between text-left group"
              >
                {/* Tech blueprint corner indicators inside card */}
                <div className="absolute top-2 right-2 flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/20 group-hover:bg-[#00D9FF] transition-colors" />
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/20" />
                </div>

                <div className="space-y-4">
                  {/* Icon + Title section */}
                  <div className="flex gap-4 items-start">
                    <div 
                      className="p-3 bg-black/60 border border-primary/20 rounded-xl group-hover:scale-105 transition-transform"
                      style={{ boxShadow: `0 0 10px ${item.color}15` }}
                    >
                      <Icon size={22} style={{ color: item.color }} />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] text-[#94A3B8] uppercase tracking-wider">{item.type}</span>
                      <h3 className="font-bold text-sm text-[#F8FAFC] leading-snug group-hover:text-secondary transition-colors">{item.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] font-mono text-muted leading-relaxed line-clamp-3 md:line-clamp-4">
                    {item.desc}
                  </p>
                </div>

                {/* Card Footer badges */}
                <div className="mt-6 pt-3.5 border-t border-[#7C5CFC]/10 flex justify-between items-center text-[10px] font-mono">
                  {item.score ? (
                    <span className="text-[#00D9FF] font-black">{item.score}</span>
                  ) : (
                    <span className="text-muted">{item.date}</span>
                  )}
                  <span 
                    className="font-bold px-2 py-0.5 rounded select-none text-[8px]"
                    style={{ color: item.color, borderColor: `${item.color}35`, backgroundColor: `${item.color}10` }}
                  >
                    {item.badge}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
