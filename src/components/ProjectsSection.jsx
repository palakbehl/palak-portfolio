import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Face Recognition Attendance System",
    description: "Automated attendance tracking system with GUI and CSV logging.",
    image: "/projects/face-recognition.jpg",
    tags: ["Python", "OpenCV", "SQLite", "Tkinter"],
    category: "Data Science",
    githubUrl: "https://github.com/palakbehl/face_recognition_attendance_system.git",
    demoUrl: "#",
    status: "Academic",
    highlights: ["Computer Vision", "GUI", "Automation"]
  },
  {
    id: 2,
    title: "Trash2Trade (Nexothon)",
    description: "Digital recycling platform with GreenCoins rewards & route optimization.",
    image: "/projects/trash2trade.jpg",
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    category: "Full-Stack",
    githubUrl: "https://github.com/palakbehl/NexaNinjas-Trash2Trade.git",
    demoUrl: "#",
    status: "Hackathon Project",
    highlights: ["GreenTech", "Gamification", "Optimization"]
  },
  {
    id: 3,
    title: "Online Notes & Material Sharing Platform",
    description: "Academic file-sharing platform with secure admin moderation.",
    image: "/projects/notes-sharing.jpg",
    tags: ["Java", "Spring MVC", "Hibernate", "MySQL"],
    category: "Backend",
    githubUrl: "https://github.com/palakbehl/Online-Notes-and-Material-Sharing-Platform.git",
    demoUrl: "#",
    status: "Academic",
    highlights: ["RBAC", "File Mgmt", "Security"]
  },
  {
    id: 4,
    title: "Idea Box",
    description: "Full-stack idea management app with custom REST API.",
    image: "/projects/idea-box.jpg",
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    category: "Full-Stack",
    githubUrl: "https://github.com/palakbehl/Idea-Box.git",
    demoUrl: "#",
    status: "Academic",
    highlights: ["REST API", "CRUD", "Backend"]
  },
  {
    id: 5,
    title: "Dayflow HRMS",
    description: "Full-stack HR management system for employee tracking.",
    image: "/projects/dayflow-hrms.jpg", // Using a placeholder for consistency
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    category: "Full-Stack",
    githubUrl: "https://github.com/palakbehl/odooxgcet-Team-Dev-Dynamites.git",
    demoUrl: "#",
    status: "Hackathon Project",
    highlights: ["HR Tech", "MERN", "Dashboard"]
  },
  {
    id: 6,
    title: "SmartExpense",
    description: "AI-powered expense & reimbursement platform.",
    image: "/projects/smart-expense.jpg",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    category: "Full-Stack",
    githubUrl: "https://github.com/palakbehl/DevDynamites-Odoo-Hackathon.git",
    demoUrl: "#",
    status: "Hackathon Project",
    highlights: ["FinTech", "AI Integration", "TypeScript"]
  },
  {
    id: 7,
    title: "Hospital Patient Transfer System",
    description: "Algorithm-based system using Dijkstra & Greedy approaches.",
    image: "/projects/hospital-transfer.jpg",
    tags: ["C++", "HTML", "CSS", "JS"],
    category: "Algorithms",
    githubUrl: "https://github.com/palakbehl/Hospital_Patient_Transfer_System_For_DAA.git",
    demoUrl: "#",
    status: "Academic",
    highlights: ["Dijkstra", "Greedy Algo", "Optimization"]
  },
  {
    id: 8,
    title: "Real-Time Messaging Platform",
    description: "WebSocket-based chat application for instant communication.",
    image: "/projects/real-time-chat.jpg",
    tags: ["React", "Node.js", "Socket.IO"],
    category: "Backend",
    githubUrl: "https://github.com/palakbehl/Real_time_Chat_Application.git",
    demoUrl: "#",
    status: "Internship Project",
    highlights: ["WebSockets", "Real-time", "Chat"]
  },
  {
    id: 9,
    title: "Weather App",
    description: "Real-time weather app with animated UI.",
    image: "/projects/weather-app.jpg",
    tags: ["HTML", "CSS", "JS", "Weather API"],
    category: "Frontend",
    githubUrl: "https://github.com/palakbehl/Weather_App.git",
    demoUrl: "#",
    status: "Personal Project",
    highlights: ["API Integration", "UI/UX", "Animation"]
  },
  {
    id: 10,
    title: "Feedback Management System",
    description: "Secure feedback collection & analytics system.",
    image: "/projects/feedback-system.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Full-Stack",
    githubUrl: "https://github.com/palakbehl/Feedback_collection_system.git",
    demoUrl: "#",
    status: "Internship Project",
    highlights: ["Analytics", "Feedback", "Security"]
  }
];

const categories = ["All", "Full-Stack", "Backend", "Algorithms", "Frontend"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory || (activeCategory === "Backend" && project.category === "Full-Stack")); 
    // Including Full-Stack in Backend filter as they often overlap, or strict filtering:
    // : projects.filter(project => project.category === activeCategory);
    // Let's stick to strict filtering to match user request categories precisely, or maybe allow overlap.
    // User asked for "Backend" as a filter. Pure Backend projects are few. Let's keep strict for now to be distinct.
    
  const displayProjects = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Explore my latest work across full-stack development, algorithms, and system design.
        </motion.p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 pb-12"
        >
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="book group cursor-pointer" // Book container
              >
                {/* --- INSIDE CONTENT (BACK PAGE) --- */}
                {/* Visible when cover opens */}
                <div className="book-page">
                   <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {project.status}
                      </span>
                   </div>

                   {/* Description & Details */}
                   <div className="flex-grow">
                      <h4 className="font-bold text-foreground mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-xs mb-4 leading-relaxed line-clamp-4">
                        {project.description}
                      </p>

                      <div className="space-y-3">
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5">
                           {project.tags.map((tag, i) => (
                             <span key={i} className="text-[10px] px-2 py-1 bg-secondary text-secondary-foreground rounded border border-border font-medium">
                               {tag}
                             </span>
                           ))}
                        </div>
                        
                        {/* Highlights */}
                        <div className="pt-2 border-t border-border grid grid-cols-1 gap-1">
                             {project.highlights?.slice(0, 3).map((h, i) => (
                                <div key={i} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                                    <div className="w-1 h-1 rounded-full bg-primary" /> {h}
                                </div>
                             ))}
                        </div>
                      </div>
                   </div>
                   
                   {/* Duplicate links on inside for accessibility if cover is open */}
                   <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <span className="text-[10px] text-muted-foreground">View Project:</span>
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors">
                           <Github size={14} />
                        </a>
                   </div>
                </div>

                {/* --- COVER (FRONT PAGE) --- */}
                <div className="cover">
                    <div className="absolute inset-0 bg-background/10 z-0" />
                    
                    {/* Background Image */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50" 
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />

                    {/* Front Content */}
                    <div className="relative z-20 h-full flex flex-col justify-end p-6 w-full">
                       <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{project.title}</h3>
                       <p className="text-white/60 text-xs mb-4 line-clamp-1">{project.category}</p>
                       
                       {/* Links on Front */}
                       <div className="flex items-center gap-4">
                          <a 
                             href={project.githubUrl} 
                             target="_blank" 
                             rel="noreferrer" 
                             className="p-2.5 bg-white/10 hover:bg-primary border border-white/10 rounded-full text-white transition-all hover:scale-110 hover:shadow-[0_0_15px_hsl(var(--primary))]"
                             aria-label="GitHub Repo"
                          >
                              <Github size={18} />
                          </a>
                          
                          {project.demoUrl !== "#" && (
                              <a 
                                 href={project.demoUrl} 
                                 target="_blank" 
                                 rel="noreferrer"
                                 className="p-2.5 bg-white/10 hover:bg-white hover:text-background border border-white/10 rounded-full text-white transition-all hover:scale-110"
                                 aria-label="Live Demo"
                              >
                                  <ExternalLink size={18} />
                              </a>
                          )}
                       </div>
                    </div>
                    
                    {/* Hover Hint */}
                    <div className="absolute top-4 right-4 z-20 opacity-50 group-hover:opacity-0 transition-opacity">
                         <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 border border-white/20 px-2 py-1 rounded">Info</span>
                    </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/palakbehl"
            target="_blank"
            className="btn w-fit mx-auto gap-2 group text-sm"
          >
            View More on GitHub <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
