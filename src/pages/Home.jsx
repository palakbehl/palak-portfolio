import { SEO } from "@/components/SEO";
import {Navbar} from "@/components/Navbar";
import {HeroSection} from "../components/HeroSection";
import {AboutSection} from "../components/AboutSection";
import {EducationSection} from "../components/EducationSection";
import {AchievementsSection} from "../components/AchievementsSection";
import {SkillsSection} from "../components/SkillsSection";
import {ProjectsSection} from "../components/ProjectsSection";
import {ContactSection} from "../components/ContactSection";
import {GitHubStats} from "../components/GitHubStats";
import {Footer} from "../components/Footer";
export function Home() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      <SEO />
      {/* Background Effects */}

      
      
      {/* Background Effects */}

      {/* Navbar */}
     <Navbar className="relative z-40" />

     {/* Main Content */}
     <main className="relative z-10 bg-gradient-to-b from-background/95 to-background">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <AchievementsSection />
      <SkillsSection />
      <GitHubStats />
      <ProjectsSection />
      <ContactSection />
     </main>

     {/* Footer */}
     <Footer />
    </div>
  );
}
