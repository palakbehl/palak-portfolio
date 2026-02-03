import { Trophy, Award, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    id: 1,
    title: "Amazon Future Engineer Scholar '23",
    description: "Selected for prestigious Amazon Future Engineer Scholar program. It is a 10 Month Bootcamp focusing on DSA , Java , Aptitude and Problem Solving.",
    icon: Award,
    date: "2023",
    type: "Bootcamp",
    highlights: ["DSA", "Aptitude", "Java Programming","Problem Solving"],
    featured: true
  },
  {
    id: 2,
    title: " 3x Odoo Hackathon Finalist",
    description: "Participated in globally hiring Odoo hackathons and our team got selected in top 20 teams.",
    icon: Trophy,
    date: "2025",
    type: "Hackathon",
    highlights: ["Full-Stack Development", "Team Collaboration", "System Design", "Leadership"],
    featured: true
  },
  
  {
    id: 4,
    title: "Graphic Designer - College Social Media",
    description: "Official graphic designer for college's social media team, creating visual content",
    icon: Target,
    date: "2024-Present",
    type: "Design",
    highlights: ["Adobe Photoshop", "Figma", "CorelDRAW"],
    featured: false
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Achievements & <span className="text-primary">Participations</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Highlights of my hackathon participations, projects, and technical achievements that showcase my growth as a developer.
        </p>

        {/* Timeline-style achievements */}
        <div className="relative pl-8 border-l-2 border-primary/20 space-y-12">
            <motion.div 
              className="space-y-12"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {achievements.map((achievement) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={achievement.id}
                    variants={item}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[41px] top-6 h-5 w-5 rounded-full border-4 border-background ${achievement.featured ? "bg-primary" : "bg-muted-foreground/30"}`} />

                    <div 
                        className={`bg-card p-6 rounded-xl border transition-all duration-300 ${
                            achievement.featured 
                            ? "border-primary/30 shadow-[0_0_20px_rgba(124,58,237,0.1)] hover:border-primary/60 hover:shadow-primary/20" 
                            : "border-border/50 hover:border-border"
                        }`}
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Icon */}
                        <div className="flex-shrink-0 hidden md:block">
                          <div className={`flex items-center justify-center h-14 w-14 rounded-full ${achievement.featured ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`}>
                            <IconComponent className="h-7 w-7" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                            <div>
                               <div className="flex items-center gap-3 mb-1">
                                    <IconComponent className="h-5 w-5 md:hidden text-primary" />
                                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                               </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                            </div>
                            <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-1 mt-3 sm:mt-0">
                              <span className={`px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide rounded-full ${
                                  achievement.featured ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"
                              }`}>
                                {achievement.type}
                              </span>
                              <span className="text-xs font-mono text-muted-foreground">{achievement.date}</span>
                            </div>
                          </div>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-dashed border-border/50">
                            {achievement.highlights.map((highlight, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 text-[11px] font-medium bg-secondary/50 text-secondary-foreground rounded hover:bg-secondary transition-colors"
                              >
                                # {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          <div className="bg-card p-6 rounded-lg shadow-sm text-center border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <p className="text-sm text-muted-foreground">Major Hackathons</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm text-center border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <p className="text-sm text-muted-foreground">Projects Completed</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm text-center border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">9.32</div>
            <p className="text-sm text-muted-foreground">CGPA</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm text-center border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">30+</div>
            <p className="text-sm text-muted-foreground">Technical Skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};
