import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Server, Globe } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 relative bg-[#050816] border-t border-primary/10">
      <div className="absolute inset-0 bg-[#050816]/10 blueprint-grid-fine pointer-events-none opacity-30" />

      <div className="container max-w-4xl mx-auto z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs text-[#7C5CFC] tracking-widest uppercase">{`// WORKSTATION PIPELINES`}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
            ACTIVE <span className="text-[#00D9FF]">DEPLOYMENTS</span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent mx-auto" />
        </div>

        {/* Experience Timeline Card */}
        <div className="relative pl-8 border-l border-primary/20 text-left">
          
          {/* Glowing vertical connector line */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-[#00D9FF] to-[#7C5CFC] shadow-[0_0_8px_rgba(0,217,255,0.4)]" />

          {/* Node 1 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glowing active deployment bullet */}
            <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-black border-2 border-[#00D9FF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10 shadow-[0_0_8px_rgba(0,217,255,0.4)]">
              <Briefcase size={10} className="text-[#00D9FF]" />
            </div>

            {/* Panel */}
            <div className="cyber-panel tech-corners p-6 bg-[#050816]/95 border border-[#7C5CFC]/30 hover:border-[#00D9FF]/60 hover:shadow-[0_0_20px_rgba(0,217,255,0.15)] transition-all duration-300 space-y-6">
              
              {/* Header stats */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-primary/10 pb-4">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-[#7C5CFC] tracking-widest uppercase font-bold">{`// GLOBAL_EPITYCHIA`}</span>
                  <h3 className="text-xl font-black text-[#F8FAFC] tracking-tight">Web Developer Trainee</h3>
                  <p className="text-xs font-semibold font-mono text-[#00D9FF]">Global Epitychia</p>
                </div>
                
                {/* Date and Status indicators */}
                <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-black/45 border border-primary/20 rounded-full text-muted">
                    <Calendar size={12} className="text-[#7C5CFC]" />
                    <span>May 2026 – June 2026</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-black/45 border border-emerald-500/20 rounded-full text-emerald-400 font-extrabold animate-pulse">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>SUCCESS STATE</span>
                  </div>
                </div>
              </div>

              {/* Descriptions & Tasks */}
              <div className="space-y-4 font-mono text-xs text-muted leading-relaxed">
                <div className="flex items-center gap-2 text-[#F8FAFC]">
                  <Globe size={14} className="text-[#00D9FF]" />
                  <span className="font-bold text-sm">Deployed System: Ajaysinh Foundation</span>
                </div>
                
                <p className="border-l border-[#00D9FF]/30 pl-3">
                  Worked on the development of the <strong>Ajaysinh Foundation NGO Management & Fundraising Platform</strong>. Successfully constructed features to streamline non-profit campaign listings, handle secure backend administration dashboard capabilities, and integrate automated payment gateways to power charity fundraising.
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[#7C5CFC] font-extrabold">{`> key_contributions`}</span>
                  <ul className="list-disc list-inside pl-3 space-y-1.5 text-[11px] text-muted-foreground">
                    <li>Developed responsive React frontend wrappers and routing containers.</li>
                    <li>Designed core API systems for managing NGO campaign events and donations.</li>
                    <li>Integrated Razorpay payment channels to process secure online donor funds.</li>
                    <li>Implemented JSON Web Tokens (JWT) to establish strict RBAC admin protections.</li>
                  </ul>
                </div>
              </div>

              {/* Technologies integrated */}
              <div className="space-y-2.5 pt-4 border-t border-[#7C5CFC]/10">
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#94A3B8]">
                  <Server size={10} className="text-[#7C5CFC]" />
                  <span className="tracking-wider uppercase">INTEGRATED TECHNOLOGY PIPELINE:</span>
                </div>
                <div className="flex flex-wrap gap-2 text-left">
                  {["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay"].map((item) => (
                    <span 
                      key={item} 
                      className="px-2.5 py-1 text-[10px] font-mono font-bold bg-[#7C5CFC]/5 border border-[#7C5CFC]/20 text-[#94A3B8] rounded hover:border-[#00D9FF]/60 hover:text-[#00D9FF] transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
