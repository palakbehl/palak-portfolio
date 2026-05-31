import { motion } from "framer-motion";
import { 
  User, BookOpen, MapPin, Target, Sparkles, Calendar, Briefcase, Award 
} from "lucide-react";

const TIMELINE_DATA = [
  {
    year: "2023",
    title: "Started B.Tech",
    desc: "Enrolled in Computer Engineering at G H Patel College of Engineering & Technology.",
    icon: BookOpen,
    color: "#7C5CFC"
  },
  {
    year: "2024",
    title: "Amazon Scholar",
    desc: "Selected as an Amazon Future Engineer Scholar. Immersed in comprehensive DSA & problem-solving bootcamps.",
    icon: Award,
    color: "#00D9FF"
  },
  {
    year: "2025",
    title: "Odoo Hackathon Finalist",
    desc: "Created highly functional management apps. Competed in national hiring hackathon, qualifying in the top 20 teams.",
    icon: Target,
    color: "#7C5CFC"
  },
  {
    year: "2026",
    title: "Full Stack & Internship",
    desc: "Working on scalable enterprise architectures, REST APIs, and active internships at Global Epitychia.",
    icon: Briefcase,
    color: "#00D9FF"
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 relative bg-[#050816] border-t border-primary/10">
      <div className="absolute inset-0 bg-[#050816]/20 blueprint-grid pointer-events-none opacity-40" />

      <div className="container max-w-6xl mx-auto z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs text-[#00D9FF] tracking-widest uppercase">{`// CLASSIFIED REPORT`}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
            SYSTEM <span className="bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] bg-clip-text text-transparent">PROFILE</span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#7C5CFC] to-transparent mx-auto" />
        </div>

        {/* Profile Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Dossier Card (Left 5 Columns) */}
          <div className="lg:col-span-5 cyber-panel p-6 md:p-8 bg-[#050816]/90 space-y-6 text-left">
            <div className="flex items-center gap-3 border-b border-[#7C5CFC]/20 pb-4">
              <div className="p-2.5 bg-black/45 rounded-lg border border-[#7C5CFC]/30 text-[#7C5CFC]">
                <User size={18} />
              </div>
              <div>
                <h3 className="font-mono font-bold text-sm text-[#F8FAFC]">OPERATOR SPECS</h3>
                <p className="text-[10px] font-mono text-muted">STABLE_STATE // ID_02626</p>
              </div>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {[
                { label: "NAME", value: "Palak Behl", color: "text-[#F8FAFC]" },
                { label: "ROLE", value: "Full Stack Developer", color: "text-[#00D9FF] font-semibold" },
                { label: "EDUCATION", value: "B.Tech Computer Engineering", color: "text-[#F8FAFC]" },
                { label: "INSTITUTE", value: "G H Patel College of Engineering & Technology", color: "text-muted" },
                { label: "GRADUATION", value: "2027", color: "text-[#7C5CFC]" },
                { label: "LOCATION", value: "Anand, Gujarat", valueColor: "text-muted" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4 border-b border-primary/5 pb-2">
                  <span className="text-muted tracking-wider">{item.label}:</span>
                  <span className={item.color || item.valueColor || "text-right"}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Current Focus section */}
            <div className="bg-[#7C5CFC]/5 border border-[#7C5CFC]/20 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2 text-[#7C5CFC] font-mono font-bold text-xs">
                <Sparkles size={14} className="animate-spin-slow" />
                <span>CURRENT CORE FOCUS</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  "Full Stack Development",
                  "System Design",
                  "Competitive Programming"
                ].map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-black/55 border border-[#00D9FF]/20 text-[#00D9FF] text-[10px] font-mono rounded"
                  >
                    # {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Animated Chronology Timeline (Right 7 Columns) */}
          <div className="lg:col-span-7 cyber-panel p-6 md:p-8 bg-[#050816]/90 text-left">
            <h3 className="font-mono font-bold text-sm text-[#F8FAFC] border-b border-[#00D9FF]/20 pb-4 mb-8 uppercase tracking-wider">
              {`// PIPELINE CHRONOLOGY`}
            </h3>

            <div className="relative pl-8 border-l border-primary/20 space-y-8">
              
              {/* Glowing vertical connector line */}
              <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-[#7C5CFC] via-[#00D9FF] to-[#7C5CFC] shadow-[0_0_8px_rgba(124,92,252,0.4)]" />

              {TIMELINE_DATA.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Glowing connector bullet */}
                    <div 
                      className="absolute -left-[41px] top-1.5 h-6 w-6 rounded-full bg-black border-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10"
                      style={{ borderColor: item.color }}
                    >
                      <Icon size={10} style={{ color: item.color }} />
                    </div>

                    {/* Timeline card bubble */}
                    <div className="bg-black/45 border border-primary/10 group-hover:border-[#00D9FF]/30 p-4 rounded-xl transition-all duration-300">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="font-mono font-black text-sm text-[#F8FAFC]">{item.title}</h4>
                        <span 
                          className="font-mono text-[10px] font-bold px-2 py-0.5 rounded border select-none"
                          style={{ color: item.color, borderColor: `${item.color}35`, backgroundColor: `${item.color}10` }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-muted leading-relaxed">{item.desc}</p>
                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
