import { GraduationCap, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          My <span className="text-primary">Education</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Decorative Blur */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative bg-card/50 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl overflow-hidden">
             <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
                
                {/* Left Column: Degree & Institute */}
                <div className="space-y-4">
                   <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/20 rounded-xl text-primary shrink-0">
                         <GraduationCap size={32} />
                      </div>
                      <div>
                         <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Technology</h3>
                         <p className="text-primary font-medium mb-1">Computer Engineering</p>
                         <p className="text-muted-foreground text-sm">G H Patel College of Engineering & Technology</p>
                         <p className="text-muted-foreground text-xs mt-1">Anand, Gujarat</p>
                      </div>
                   </div>

                   <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4 ml-16">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                         <Calendar size={14} className="text-primary" />
                         <span>2023 - 2027</span>
                      </div>
                   </div>
                </div>

                {/* Right Column: Stats & Coursework */}
                <div className="flex flex-col h-full justify-center md:border-l md:border-white/10 md:pl-8">
                   {/* CGPA Stat */}
                   <div className="mb-6 flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/5">
                      <div>
                         <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Current CGPA</p>
                         <p className="text-3xl font-bold text-white mt-1">9.24</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/20">
                         <Award size={20} className="text-white" />
                      </div>
                   </div>

                   {/* Coursework Tags */}
                   <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-3">Key Coursework</p>
                      <div className="flex flex-wrap gap-2">
                        {["DSA", "DBMS", "OOP", "Web Dev", "OS", "AI/ML", "CN"].map((tag) => (
                           <span key={tag} className="px-2.5 py-1 text-[11px] font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                              {tag}
                           </span>
                        ))}
                      </div>
                   </div>
                </div>

             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
