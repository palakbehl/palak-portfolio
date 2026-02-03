import { Code, User, Briefcase, Sparkles } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer & Computer Engineering Student
            </h3>

            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
              <p>
                I'm a third-year Computer Engineering student at <strong>G H Patel College of Engineering & Technology</strong> (graduating 2026), passionate about building scalable, user-centric applications.
              </p>
              
              <p>
                 My expertise spans <strong>Java, C++, and the MERN Stack</strong>. I love solving complex problems—whether it’s optimizing algorithms for a patient transfer system or designing intuitive UIs for an HR platform.
              </p>

              <p>
                Beyond code, I contribute to open-source communities and blend creativity with logic as a design lead.
              </p>
            </div>
            
            {/* Current Focus Highlihgt */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
               <div className="flex items-center gap-2 mb-2 text-primary font-semibold">
                  <Sparkles size={18} /> <span>Currently Focusing On</span>
               </div>
               <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Learning Artificial Intelligence and Machine Learning Concepts.</li>
                  <li>Competitive Programming.</li>
               </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="btn">
                Get In Touch
              </a>

              <a
                href="/Palak_Behl_Resume.pdf"
                download="Palak_Behl_Resume.pdf"
                className="btn"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover flex gap-4">
              <div className="p-3 rounded-full bg-primary/10 h-fit">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Web & Full-Stack Development
                </h4>
                <p className="text-muted-foreground text-sm">
                  Responsive web apps using React, Node.js, and Spring Boot. Focus on REST APIs and secure databases.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover flex gap-4">
              <div className="p-3 rounded-full bg-primary/10 h-fit">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Problem Solving & Core CS
                </h4>
                <p className="text-muted-foreground text-sm">
                  Strong Dsa foundation (C++, Java). Experienced in system optimization and debugging.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover flex gap-4">
              <div className="p-3 rounded-full bg-primary/10 h-fit">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Community & Design
                </h4>
                <p className="text-muted-foreground text-sm">
                  GSSOC Contributor & Design Lead. I bridge the gap between technical logic and visual creativity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
