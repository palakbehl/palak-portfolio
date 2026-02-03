import { Github, CheckCircle2 } from "lucide-react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaNodeJs, FaPython, 
  FaGit, FaFigma, FaDocker, FaAws, FaChartBar 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiSpringboot, SiExpress, SiMysql, SiMongodb, 
  SiCoreldraw, SiAdobephotoshop, SiCplusplus, SiPostgresql, 
  SiJira, SiHibernate, SiSpring, SiC 
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#007396", level: "Advanced" },
      { name: "C++", icon: SiCplusplus, color: "#00599C", level: "Advanced" },
      { name: "C", icon: SiC, color: "#A8B9CC", level: "Advanced" },
      { name: "Python", icon: FaPython, color: "#3776AB", level: "Intermediate" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: "Advanced" },
      { name: "SQL", icon: DiSqllite, color: "#003B57", level: "Advanced" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: "Advanced" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: "Advanced" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB", level: "Advanced" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", level: "Advanced" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933", level: "Intermediate" },
      { name: "Express.js", icon: SiExpress, color: "#000000", level: "Intermediate" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", level: "Beginner" },
      { name: "Spring MVC", icon: SiSpring, color: "#6DB33F", level: "Beginner" },
      { name: "Hibernate", icon: SiHibernate, color: "#59666C", level: "Beginner" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: "Advanced" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Intermediate" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: "Beginner" },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGit, color: "#F05032", level: "Advanced" },
      { name: "GitHub", icon: Github, color: "#ffffff", level: "Advanced" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC", level: "Advanced" },
      { name: "Power BI", icon: FaChartBar, color: "#F2C811", level: "Intermediate" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF", level: "Advanced" },
      { name: "CorelDRAW", icon: SiCoreldraw, color: "#00A45E", level: "Advanced" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E", level: "Intermediate" },
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-bold mb-8 text-center md:text-left border-l-4 border-primary pl-4">
                {category.title}
              </h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
                    className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border flex flex-col items-center justify-center gap-2 transition-all hover:bg-card hover:border-primary/50 hover:shadow-[0_0_15px_rgba(124,58,237,0.1)] group h-36"
                  >
                    <div className="p-2 rounded-full bg-background/50 group-hover:bg-background transition-colors">
                      <skill.icon size={28} style={{ color: skill.color }} />
                    </div>
                    <span className="font-semibold text-sm text-center text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-secondary/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {skill.level}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
