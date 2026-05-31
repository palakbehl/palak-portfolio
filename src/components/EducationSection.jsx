import { GraduationCap, Book, Calendar, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const COURSEWORK = [
  "Data Structures & Algorithms", 
  "Database Management Systems", 
  "Object Oriented Programming", 
  "Operating Systems", 
  "Computer Networks",
  "System Design",
  "Full Stack Web Development",
  "AI & Machine Learning"
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-8 relative bg-[#050816] border-t border-primary/10">
      <div className="absolute inset-0 bg-[#050816]/10 blueprint-grid-fine pointer-events-none opacity-30" />

      <div className="container max-w-4xl mx-auto z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="font-mono text-xs text-[#7C5CFC] tracking-widest uppercase">{`// INSTITUTIONAL MATRIX`}</span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#F8FAFC]">
            ACADEMIC <span className="text-[#00D9FF]">SPECIFICATIONS</span>
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent mx-auto" />
        </div>

        {/* Blueprint credentials panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cyber-panel tech-corners p-6 md:p-8 bg-[#050816]/95 border border-[#7C5CFC]/30 shadow-[0_0_25px_rgba(124,92,252,0.1)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Degree Specifications (Left column, 7 spans) */}
            <div className="md:col-span-7 text-left space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black/45 border border-[#00D9FF]/20 text-[#00D9FF] rounded-xl shrink-0 shadow-[0_0_15px_rgba(0,217,255,0.15)]">
                  <GraduationCap size={28} />
                </div>
                <div className="space-y-1.5">
                  <span className="font-mono text-[9px] text-[#7C5CFC] tracking-widest uppercase font-bold">{`// APPROVED CREDENTIAL`}</span>
                  <h3 className="text-xl md:text-2xl font-black text-[#F8FAFC]">Bachelor of Technology</h3>
                  <p className="text-sm font-semibold font-mono text-[#00D9FF]">Computer Engineering</p>
                  <p className="text-xs text-muted">G H Patel College of Engineering & Technology</p>
                  <p className="text-[10px] text-muted-foreground font-mono">Anand, Gujarat</p>
                </div>
              </div>

              {/* Date stamp */}
              <div className="flex gap-4 items-center text-xs font-mono text-[#94A3B8] ml-16">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 border border-primary/20 rounded-full">
                  <Calendar size={12} className="text-[#7C5CFC]" />
                  <span>2023 - 2027</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 border border-secondary/20 rounded-full">
                  <ShieldCheck size={12} className="text-[#00D9FF]" />
                  <span>REGULAR STATE</span>
                </div>
              </div>
            </div>

            {/* Matrix details & grades (Right column, 5 spans) */}
            <div className="md:col-span-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-primary/10 pt-6 md:pt-0 md:pl-8 space-y-6">
              
              {/* Grading gauges */}
              <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-primary/10 hover:border-secondary/30 transition-colors">
                <div className="text-left">
                  <span className="font-mono text-[9px] text-muted tracking-widest uppercase font-semibold">{`SYSTEM GPA`}</span>
                  <p className="text-3xl font-black text-[#F8FAFC] tracking-tight mt-1">9.19 <span className="text-[11px] text-muted">/10</span></p>
                </div>
                <div className="h-10 w-10 bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF] rounded-full flex items-center justify-center shadow-[0_0_12px_#7C5CFC]">
                  <Cpu size={18} className="text-[#050816]" />
                </div>
              </div>

              {/* Key Coursework pills */}
              <div className="text-left space-y-3">
                <span className="font-mono text-[9px] text-muted tracking-widest uppercase font-semibold">{`KEY COURSEWORK MATRIX`}</span>
                <div className="flex flex-wrap gap-1.5">
                  {COURSEWORK.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 text-[9px] font-mono font-medium bg-[#7C5CFC]/5 border border-[#7C5CFC]/20 text-[#94A3B8] rounded hover:border-[#00D9FF]/40 hover:text-[#00D9FF] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
