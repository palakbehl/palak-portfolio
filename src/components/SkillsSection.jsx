import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaNodeJs, FaPython, 
  FaGit, FaFigma, FaDocker, FaServer, FaDatabase
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiAdobephotoshop, 
  SiCplusplus, SiC, SiTypescript, SiGraphql, SiSocketdotio, SiPostman,
  SiCloudinary
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "Java", icon: FaJava, color: "#007396", level: "90%", desc: "Core & Advanced" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: "92%", desc: "ES6+, Async" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "85%", desc: "Strict Typing" },
      { name: "Python", icon: FaPython, color: "#3776AB", level: "80%", desc: "Scripting & Prophet" },
      { name: "C++", icon: SiCplusplus, color: "#00599C", level: "88%", desc: "DSA, OOP" },
      { name: "C", icon: SiC, color: "#A8B9CC", level: "85%", desc: "Systems Basics" },
      { name: "SQL", icon: FaDatabase, color: "#003B57", level: "90%", desc: "Queries, Tuning" }
    ]
  },
  {
    title: "FRONTEND FRAMEWORKS",
    skills: [
      { name: "React.js", icon: FaReact, color: "#61DAFB", level: "92%", desc: "Hooks, Context" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: "95%", desc: "Semantic DOM" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: "90%", desc: "Flex, Grid" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: "94%", desc: "Utility-first v4" }
    ]
  },
  {
    title: "BACKEND ARCHITECTURES",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933", level: "88%", desc: "Server execution" },
      { name: "Express.js", icon: SiExpress, color: "#F8FAFC", level: "90%", desc: "Routing, Middlewares" },
      { name: "REST APIs", icon: FaServer, color: "#7C5CFC", level: "92%", desc: "Standards & Design" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098", level: "80%", desc: "Queries, Schemas" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101", level: "85%", desc: "Real-time sockets" },
      { name: "JWT", icon: FaServer, color: "#00D9FF", level: "90%", desc: "Auth, Secure Tokens" }
    ]
  },
  {
    title: "DATABASES",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "90%", desc: "Mongoose, Aggregations" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: "92%", desc: "Schemas, Indexing" }
    ]
  },
  {
    title: "TOOLS & DEPLOYMENTS",
    skills: [
      { name: "Git", icon: FaGit, color: "#F05032", level: "90%", desc: "Version control" },
      { name: "GitHub", icon: Github, color: "#F8FAFC", level: "92%", desc: "Actions, Collaboration" },
      { name: "Docker", icon: FaDocker, color: "#2496ED", level: "80%", desc: "Containerization" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", level: "90%", desc: "API testing" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC", level: "95%", desc: "Primary IDE" },
      { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5", level: "85%", desc: "Media hosting" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E", level: "82%", desc: "Mock-ups & UI UX" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF", level: "88%", desc: "Visual branding" }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 relative bg-[#050816] border-t border-primary/10">
      <div className="absolute inset-0 bg-[#050816]/20 blueprint-grid pointer-events-none opacity-40" />

      <div className="container max-w-6xl mx-auto z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs text-[#00D9FF] tracking-widest uppercase">{`// CAPABILITY MATRIX`}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
            TECH STACK <span className="bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] bg-clip-text text-transparent">MATRIX</span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#7C5CFC] to-transparent mx-auto" />
        </div>

        {/* Categories Loop */}
        <div className="space-y-16">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6 text-left">
              
              {/* Category Subtitle */}
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D9FF]" />
                <h3 className="font-mono font-black text-sm tracking-wider text-[#F8FAFC] uppercase">
                  {category.title}
                </h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00D9FF]/20 to-transparent" />
              </div>

              {/* Skills Grid */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05 }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        show: { opacity: 1, y: 0 }
                      }}
                      className="cyber-panel p-4.5 bg-[#050816]/75 border border-[#7C5CFC]/20 hover:border-[#00D9FF]/55 hover:shadow-[0_0_15px_rgba(0,217,255,0.15)] group relative"
                    >
                      {/* Blueprint grid line overlay inside card */}
                      <div className="absolute inset-0 bg-[#050816]/5 blueprint-grid-fine rounded-xl pointer-events-none opacity-20" />
                      
                      <div className="relative flex items-start gap-3.5 z-10">
                        {/* Glowing Brand Icon */}
                        <div 
                          className="p-2.5 bg-black/60 border border-primary/20 rounded-lg group-hover:scale-105 transition-transform duration-300"
                          style={{ boxShadow: `0 0 10px ${skill.color}15` }}
                        >
                          <Icon size={20} style={{ color: skill.color }} />
                        </div>

                        {/* Text and stats */}
                        <div className="flex-grow space-y-1.5 text-left">
                          <div className="flex justify-between items-center gap-2">
                            <h4 className="font-bold text-xs text-[#F8FAFC] group-hover:text-[#00D9FF] transition-colors">{skill.name}</h4>
                            <span className="font-mono text-[9px] font-bold text-[#00D9FF]">{skill.level}</span>
                          </div>
                          <p className="text-[9px] font-mono text-muted line-clamp-1">{skill.desc}</p>
                          
                          {/* Blueprint progress gauge */}
                          <div className="w-full h-1 bg-black/40 border border-primary/10 rounded-full overflow-hidden p-0.5">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] rounded-full shadow-[0_0_5px_#7C5CFC]"
                              initial={{ width: 0 }}
                              whileInView={{ width: skill.level }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
