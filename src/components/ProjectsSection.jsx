import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, ExternalLink, Terminal, Cpu, Database, ChevronDown, ChevronUp, Play 
} from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECTS_DATA = [
  // ====================
  // NEW PREMIUM PROJECTS
  // ====================
  {
    id: "cognitrace",
    title: "CogniTrace",
    subtitle: "AI-Powered Adaptive Learning Platform",
    desc: "A premium educational command center that tracks real-time learner attention, delivers personalized course recommendations, and auto-generates customized quizzes using client-side machine learning.",
    image: "/projects/project1.png",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "TensorFlow.js", "JWT"],
    features: [
      "Personalized recommendations",
      "Behavioral analytics",
      "Attention analysis",
      "AI-generated quizzes",
      "Analytics dashboard"
    ],
    category: "Full-Stack",
    status: "STABLE ACTIVE",
    cpu: "3.2% CPU",
    ram: "128MB RAM",
    github: "https://github.com/palakbehl/CogniTrace",
    demo: "#",
    logs: [
      "> INITIALIZING COGNITRACE SUITE...",
      "> PRE-COMPILING TensorFlow.js MODEL CONTROLS... OK",
      "> CONFIGURING BEHAVIORAL ATTENTION DECTECTORS... LOADED",
      "> CONNECTING TO MONGODB REPLICA CONTAINER... CONNECTED",
      "> INGESTING HYBRID COGNITIVE DATASETS... SUCCESS",
      "> COGNITRACE INSTANCE STATE: ONLINE & PROTECTED"
    ]
  },
  {
    id: "smartfood",
    title: "SmartFood",
    subtitle: "Food Waste Reduction Platform",
    desc: "A specialized sustainability pipeline integrating inventory optimizations with predictive modeling to forecast food surplus demand and coordinate donations with regional NGOs.",
    image: "/projects/project2.png",
    tech: ["MERN", "Python", "Facebook Prophet", "Random Forest"],
    features: [
      "Inventory optimization",
      "Demand forecasting",
      "Donation management",
      "NGO integration"
    ],
    category: "Full-Stack",
    status: "PIPELINE ACTIVE",
    cpu: "1.8% CPU",
    ram: "256MB RAM",
    github: "https://github.com/palakbehl/cvmu_hack.git",
    demo: "#",
    logs: [
      "> CONNECTING SMARTFOOD DATA SOURCES...",
      "> SPAWNING PYTHON FORECAST SUBPROCESS...",
      "> IMPORTING Facebook Prophet REGRESSORS... OK",
      "> CALCULATING NGO LOGISTIC ROUTE COST MATRIX... ACTIVE",
      "> FITTING Random Forest SURPLUS CLASSIFIERS... DONE (MSE: 0.038)",
      "> SMARTFOOD DISPATCH CHANNELS SECURED: PIPELINE IDLE"
    ]
  },
  {
    id: "orbitone",
    title: "OrbitOne",
    subtitle: "Project Management ERP",
    desc: "A robust enterprise resource planning platform that structures corporate billing workflows, invoices pipelines, utilization analytics, and employee allocation metrics.",
    image: "/projects/project3.png",
    tech: ["MERN", "Tailwind CSS", "JWT", "Express", "Node.js", "MongoDB"],
    features: [
      "Task management",
      "Billing & invoicing",
      "Profitability analytics",
      "Resource utilization"
    ],
    category: "Full-Stack",
    status: "STABLE PRODUCTION",
    cpu: "0.9% CPU",
    ram: "96MB RAM",
    github: "https://github.com/swym2005/Odoo-iitgn-backend-frontend-temp-repo.git",
    demo: "#",
    logs: [
      "> LOADING ORBITONE SYSTEM METADATA...",
      "> SYNCING FINANCIAL LEDGER SCHEMAS... OK",
      "> COMPUTING EMPLOYEE CAPACITY DENSITY GRAPHS... DONE",
      "> SYNCING MONGODB SESSION CLUSTERS... 3 ACTIVE SESSIONS",
      "> RECALCULATING PROJECT PROFITABILITY CHARTS... STABLE",
      "> ORBITONE ERP SERVICE RUNNING: PRODUCTION ENTRANCE ACTIVE"
    ]
  },
  {
    id: "travelloop",
    title: "TravelLoop",
    subtitle: "Travel Planning Platform",
    desc: "An interactive travel cockpit helping tourists plan itineraries, calculate budget metrics, explore destinations, and inspect travel expense allocations.",
    image: "/projects/smart-expense.jpg",
    tech: ["MERN", "Socket.IO", "REST APIs", "MongoDB"],
    features: [
      "Itinerary planning",
      "Budget estimation",
      "Trip analytics",
      "Destination discovery"
    ],
    category: "Full-Stack",
    status: "DEPLOYED CONTAINER",
    cpu: "1.2% CPU",
    ram: "64MB RAM",
    github: "https://github.com/palakbehl/odooxparul-virtual.git",
    demo: "#",
    logs: [
      "> MOUNTING TRAVEL_LOOP WEB CONTAINER...",
      "> INGESTING MAPBOX COORDINATE ROUTERS... OK",
      "> INITIATING TRIP BUDGET ESTIMATOR RULES... COMPILED",
      "> ESTABLISHING GEOGRAPHIC DISCOVERY BUFFERS... LOADED",
      "> TRAVEL_LOOP COCKPIT DEPLOYED: STANDBY STATE"
    ]
  },
  // ====================
  // ORIGINAL PROJECTS
  // ====================
  {
    id: "face-recognition",
    title: "Face Recognition Attendance",
    subtitle: "Automated Attendance Tracking System",
    desc: "Automated attendance tracking system with computer vision, offering an interactive GUI and local CSV/database logging.",
    image: "/projects/face-recognition.jpg",
    tech: ["Python", "OpenCV", "SQLite", "Tkinter"],
    features: [
      "Computer Vision face tracking",
      "GUI interface window",
      "CSV attendance automation logging"
    ],
    category: "Data Science",
    status: "STABLE COMPLETED",
    cpu: "2.1% CPU",
    ram: "180MB RAM",
    github: "https://github.com/palakbehl/face_recognition_attendance_system.git",
    demo: "#",
    logs: [
      "> INGESTING OpenCV HAAR CLASSIFIERS...",
      "> SPAWNING CAMERA VIDEO FEED CHANNEL... ON",
      "> INGESTING FACE TELEMETRY GRAPH SCHEMAS... OK",
      "> OPENING SQLite TRANSACTION PORT... ACTIVE",
      "> SYSTEM DETECTS: Attendance CSV Logging Enabled"
    ]
  },
  {
    id: "trash2trade",
    title: "Trash2Trade (Nexothon)",
    subtitle: "Digital Recycling Platform",
    desc: "A gamified digital recycling platform incentivizing environmental responsibility with GreenCoins rewards & smart dispatch route optimizations.",
    image: "/projects/trash2trade.jpg",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    features: [
      "GreenTech reward points",
      "Gamified environmental dashboard",
      "Smart route dispatch optimizations"
    ],
    category: "Full-Stack",
    status: "STABLE ACTIVE",
    cpu: "1.5% CPU",
    ram: "112MB RAM",
    github: "https://github.com/palakbehl/NexaNinjas-Trash2Trade.git",
    demo: "#",
    logs: [
      "> MOUNTING TRASH2TRADE BACKEND HOST...",
      "> CONNECTING TO MAPBOX DISPATCH ROUTERS... OK",
      "> SPINNING UP GREENCOIN WALLET SUITE... RUNNING",
      "> MONGODB CLUSTER SYNCED... SUCCESS",
      "> RECYCLING PIPELINE IN STANDBY STATE"
    ]
  },
  {
    id: "notes-sharing",
    title: "Notes & Material Sharing",
    subtitle: "Academic File-Sharing Platform",
    desc: "Secure file-sharing platform tailored for academic communities, supporting secure admin moderators and role-based permissions.",
    image: "/projects/notes-sharing.jpg",
    tech: ["Java", "Spring MVC", "Hibernate", "MySQL"],
    features: [
      "RBAC secure file control",
      "Academic material search",
      "Admin curation moderation"
    ],
    category: "Backend",
    status: "STABLE PRODUCTION",
    cpu: "0.8% CPU",
    ram: "140MB RAM",
    github: "https://github.com/palakbehl/Online-Notes-and-Material-Sharing-Platform.git",
    demo: "#",
    logs: [
      "> LOADING JAVA SERVLET WRAPPER ENGINE...",
      "> INITIATING HIBERNATE SESSION FACTORY... OK",
      "> MOUNTING LOCAL MYSQL STORAGE CHANNELS... SYNCED",
      "> INITIATING RBAC SECURITY FILTERS... SECURED",
      "> NOTES DIRECTORY: MOUNTED & STANDBY"
    ]
  },
  {
    id: "idea-box",
    title: "Idea Box",
    subtitle: "Idea Management Application",
    desc: "Full-stack idea listing repository equipped with custom REST APIs and clean CRUD capabilities.",
    image: "/projects/idea-box.jpg",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    features: [
      "REST API operations",
      "Idea listings CRUD workflows",
      "Secure user sessions"
    ],
    category: "Full-Stack",
    status: "STABLE ARCHIVED",
    cpu: "0.4% CPU",
    ram: "48MB RAM",
    github: "https://github.com/palakbehl/Idea-Box.git",
    demo: "#",
    logs: [
      "> PARSING PHP APACHE CONTAINER ENVIRONMENT...",
      "> HANDSHAKING WITH MySQL DATABASE SYSTEM... ACTIVE",
      "> REST API HANDLERS MOUNTED... OK",
      "> IDEA LISTINGS INGESTED... 100% SECURE"
    ]
  },
  {
    id: "dayflow-hrms",
    title: "Dayflow HRMS",
    subtitle: "Enterprise HR Management System",
    desc: "Full-stack HR and employee management dashboard for corporate shifts and attendance telemetries.",
    image: "/projects/dayflow-hrms.jpg",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    features: [
      "HR shift analytics",
      "MERN administrative widgets",
      "Secure payroll management"
    ],
    category: "Full-Stack",
    status: "STABLE PRODUCTION",
    cpu: "1.1% CPU",
    ram: "88MB RAM",
    github: "https://github.com/palakbehl/odooxgcet-Team-Dev-Dynamites.git",
    demo: "#",
    logs: [
      "> DEPLOYING DAYFLOW HRMS CLOUD NODE...",
      "> SYNCING CORPORATE SHIFT ROSTERS... OK",
      "> MONGODB DATA REPOSITORIES BOUND... CONNECTED",
      "> HR CONTROL Telemetries: ONLINE"
    ]
  },
  {
    id: "smart-expense",
    title: "SmartExpense",
    subtitle: "AI Expense Reimbursement Suite",
    desc: "AI-powered expense reconciliation and reimbursement pipeline for corporate invoices.",
    image: "/projects/smart-expense.jpg",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    features: [
      "Invoice scan OCR integrations",
      "AI expense compliance checks",
      "PostgreSQL financial schemas"
    ],
    category: "Full-Stack",
    status: "STABLE DEPLOYED",
    cpu: "2.3% CPU",
    ram: "196MB RAM",
    github: "https://github.com/palakbehl/DevDynamites-Odoo-Hackathon.git",
    demo: "#",
    logs: [
      "> INITIALIZING FINANCIAL CONSOLE PIPELINE...",
      "> CONNECTING TO PostgreSQL DATABASE INSTANCE... OK",
      "> COMPILING AI OCR TEXT REGRESSORS... COMPLETED",
      "> SECURING TRANSACTION INGESTION NODES... STABLE"
    ]
  },
  {
    id: "hospital-transfer",
    title: "Patient Transfer Solver",
    subtitle: "Algorithmic Routing System",
    desc: "A custom graph-solving optimization model using Dijkstra and Greedy logic to route patient transfer pipelines between clinics.",
    image: "/projects/hospital-transfer.jpg",
    tech: ["C++", "HTML", "CSS", "JS"],
    features: [
      "Dijkstra shortest-path nodes",
      "Greedy clinic allocation solvers",
      "Interactive pathway visualization mapping"
    ],
    category: "Algorithms",
    status: "STABLE COMPLETED",
    cpu: "0.5% CPU",
    ram: "32MB RAM",
    github: "https://github.com/palakbehl/Hospital_Patient_Transfer_System_For_DAA.git",
    demo: "#",
    logs: [
      "> SPINNING DAA GRAPH SOLVERS...",
      "> MAPPING CLINIC NODES AND ROUTE WEIGHINGS... SUCCESS",
      "> EXECUTING DIJKSTRA SOLVER FOR TRANSFER PATHWAYS... OK",
      "> SYSTEM DETECTS: Optimal path resolved in 0.04ms"
    ]
  },
  {
    id: "real-time-chat",
    title: "Real-Time Message Core",
    subtitle: "WebSocket Chat Application",
    desc: "A low-latency WebSocket communication platform supporting active multiple chat channels.",
    image: "/projects/real-time-chat.jpg",
    tech: ["React", "Node.js", "Socket.IO"],
    features: [
      "WebSocket direct pipelines",
      "Low-latency chat channels",
      "Active participant heartbeats"
    ],
    category: "Backend",
    status: "STABLE OPERATIONAL",
    cpu: "1.4% CPU",
    ram: "80MB RAM",
    github: "https://github.com/palakbehl/Real_time_Chat_Application.git",
    demo: "#",
    logs: [
      "> INSTANTIATING WEBSOCKETS PIPELINE...",
      "> SPINNING NODE.JS SERVER ON PORT 8080... ON",
      "> HEARTBEAT THREAD ACTIVE... 0 DEAD SESSIONS",
      "> COMMUNICATION GATEWAYS SECURED"
    ]
  },
  {
    id: "weather-app",
    title: "Animated Weather Console",
    subtitle: "Real-Time Weather Widget",
    desc: "A real-time weather stats dashboard retrieving regional atmospheric parameters with interactive visuals.",
    image: "/projects/weather-app.jpg",
    tech: ["HTML", "CSS", "JS", "Weather API"],
    features: [
      "Atmospheric API connections",
      "Dynamic weather graphics",
      "Geolocation coordinate resolvers"
    ],
    category: "Frontend",
    status: "STABLE COMPLETED",
    cpu: "0.3% CPU",
    ram: "16MB RAM",
    github: "https://github.com/palakbehl/Weather_App.git",
    demo: "#",
    logs: [
      "> CONNECTING ATMO API CLUSTERS...",
      "> GEOLOCATING CLIENT IP ADDRESS COORDINATES... SUCCESS",
      "> RETRIEVING METEOROLOGICAL VECTORS... DONE",
      "> SYSTEM DETECTS: Atmosphere assets initialized"
    ]
  },
  {
    id: "feedback-system",
    title: "Feedback Curation Core",
    subtitle: "Administrative Analytics Platform",
    desc: "A secure feedback and survey compilation hub displaying corporate satisfaction graphs.",
    image: "/projects/feedback-system.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    features: [
      "Sentiment template engines",
      "Corporate feedback reports",
      "Administrative security filters"
    ],
    category: "Full-Stack",
    status: "STABLE PRODUCTION",
    cpu: "0.9% CPU",
    ram: "64MB RAM",
    github: "https://github.com/palakbehl/Feedback_collection_system.git",
    demo: "#",
    logs: [
      "> MOUNTING SURVEY DATA CONSOLE...",
      "> BINDING MONGODB SCHEMA COLLECTIONS... OK",
      "> COMPUTING AVERAGE USER SENTIMENT PLOTS... COMPLETED",
      "> FEEDBACK COLLECTOR NODE: STABLE ON STANDBY"
    ]
  }
];

const CATEGORIES = ["All", "Full-Stack", "Backend", "Algorithms", "Frontend", "Data Science"];

const TerminalLogs = ({ logsList }) => {
  const [lines, setLines] = useState([]);
  
  useEffect(() => {
    setLines([]);
    logsList.forEach((log, idx) => {
      setTimeout(() => {
        setLines((prev) => [...prev, log]);
      }, idx * 250);
    });
  }, [logsList]);

  return (
    <div className="font-mono text-[9px] text-[#00D9FF] bg-black/80 border border-[#00D9FF]/20 rounded-md p-3.5 mt-4 space-y-1.5 h-36 overflow-y-auto text-left shadow-inner">
      <div className="flex items-center gap-1.5 border-b border-[#00D9FF]/10 pb-1.5 mb-2">
        <Terminal size={10} />
        <span className="text-[#94A3B8] uppercase text-[8px] font-bold">PB.OS // LIVE SHELL INTERFACE</span>
      </div>
      {lines.map((line, idx) => (
        <div key={idx} className="leading-normal">
          {line}
        </div>
      ))}
      {lines.length < logsList.length && (
        <div className="h-3 border-l-2 border-[#00D9FF] animate-blink w-1 ml-1 inline-block" />
      )}
    </div>
  );
};

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative bg-[#050816] border-t border-primary/10">
      <div className="absolute inset-0 bg-[#050816]/20 blueprint-grid pointer-events-none opacity-40" />

      <div className="container max-w-7xl mx-auto z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs text-[#7C5CFC] tracking-widest uppercase">{`// CONTAINERS INDEX`}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
            DEPLOYED <span className="bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] bg-clip-text text-transparent">SYSTEMS</span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#7C5CFC] to-transparent mx-auto" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setExpandedId(null); // Reset open consoles on category swap
              }}
              className={cn(
                "px-4.5 py-2 font-mono text-xs font-bold rounded-full transition-all duration-300 cursor-pointer",
                activeCategory === category
                  ? "bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] text-[#050816] shadow-[0_0_15px_#7C5CFC] scale-105"
                  : "bg-black/40 text-muted border border-primary/15 hover:border-secondary hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            
            return (
              <motion.div
                key={project.id}
                layout
                className="cyber-panel tech-corners flex flex-col justify-between bg-[#050816]/90 p-5 md:p-6 hover:shadow-[0_0_20px_rgba(124,92,252,0.15)] group transition-all duration-300"
              >
                <div className="space-y-4">
                  
                  {/* Card Header stats */}
                  <div className="flex justify-between items-center text-[9px] font-mono border-b border-primary/10 pb-3">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold animate-pulse">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                      {project.status}
                    </div>
                    <div className="flex gap-3 text-muted">
                      <span className="flex items-center gap-1"><Cpu size={10} className="text-[#7C5CFC]" /> {project.cpu}</span>
                      <span className="flex items-center gap-1"><Database size={10} className="text-[#00D9FF]" /> {project.ram}</span>
                    </div>
                  </div>

                  {/* Info Row: Image + Main descriptions */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
                    
                    {/* Media Thumbnail */}
                    <div className="sm:col-span-5 rounded-lg overflow-hidden border border-primary/20 bg-black aspect-video sm:aspect-square relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover filter brightness-75 hover:brightness-100 group-hover:scale-105 transition-all duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Meta descriptions */}
                    <div className="sm:col-span-7 text-left space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[9px] text-[#7C5CFC] font-bold tracking-widest">{`PROJECT_ID: ${project.id.toUpperCase()}`}</span>
                        <span className="font-mono text-[8px] uppercase px-1.5 py-0.5 bg-black/45 border border-primary/10 rounded text-muted">{project.category}</span>
                      </div>
                      <h3 className="text-xl font-black text-[#F8FAFC] tracking-tight group-hover:text-[#00D9FF] transition-colors">{project.title}</h3>
                      <p className="text-[10px] font-mono text-[#00D9FF] font-bold">{project.subtitle}</p>
                      <p className="text-[11px] font-mono text-muted leading-relaxed line-clamp-3 md:line-clamp-4">{project.desc}</p>
                    </div>

                  </div>

                  {/* Technical Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 text-left">
                    {project.tech.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-0.5 text-[9px] font-mono font-medium bg-[#7C5CFC]/5 border border-[#7C5CFC]/15 text-[#94A3B8] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Bottom CTA Actions */}
                <div className="mt-6 pt-4 border-t border-[#7C5CFC]/10 flex flex-col gap-4">
                  
                  <div className="flex items-center justify-between gap-4">
                    {/* Expand shell button */}
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-black/45 hover:bg-[#7C5CFC]/10 border border-primary/25 hover:border-[#00D9FF]/80 rounded text-[10px] font-mono font-bold text-secondary transition-all cursor-pointer"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={12} />
                          CLOSE CONSOLE
                        </>
                      ) : (
                        <>
                          <Terminal size={12} className="text-[#00D9FF]" />
                          INSPECT ENVIRONMENT
                        </>
                      )}
                    </button>

                    {/* Repository connections */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-black/40 border border-primary/20 rounded-md text-muted hover:text-[#F8FAFC] hover:border-secondary hover:shadow-[0_0_10px_rgba(0,217,255,0.15)] transition-all"
                        aria-label="GitHub Repo"
                      >
                        <Github size={14} />
                      </a>
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-black/40 border border-primary/20 rounded-md text-muted hover:text-[#00D9FF] hover:border-secondary hover:shadow-[0_0_10px_rgba(0,217,255,0.15)] transition-all"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Console Logs expansion */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <TerminalLogs logsList={project.logs} />
                        
                        {/* Features listing in console details */}
                        <div className="text-left font-mono text-[10px] text-muted-foreground p-3.5 bg-black/30 border border-[#7C5CFC]/10 rounded-md mt-2 space-y-1">
                          <span className="text-[#7C5CFC] font-bold block mb-1">SYSTEM FEATURES LOG:</span>
                          {project.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-1.5">
                              <span className="text-[#00D9FF]">✔</span> {feature}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
