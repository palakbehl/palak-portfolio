import { SEO } from "../components/SEO";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { EducationSection } from "../components/EducationSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { AchievementsSection } from "../components/AchievementsSection";
import { GitHubStats } from "../components/GitHubStats";
import { ExperienceSection } from "../components/ExperienceSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] overflow-x-hidden relative">
      <SEO />
      
      {/* Operating System HUD Dock Navigation */}
      <Navbar />

      {/* Main Workstation Pages Cockpit */}
      <main className="relative z-10 lg:pl-64">
        
        {/* HERO SECTION - Cockpit Control Core */}
        <HeroSection />

        {/* PROFILE SECTION - Operator specs & dossier */}
        <AboutSection />

        {/* EDUCATION SECTION - Academic specifications */}
        <EducationSection />

        {/* SKILLS SECTION - Tech stack matrix */}
        <SkillsSection />

        {/* PROJECTS SECTION - Deployed systems container */}
        <ProjectsSection />

        {/* ACHIEVEMENTS SECTION - Milestones unlocked */}
        <AchievementsSection />

        {/* CODE ACTIVITY - GitHub contributions dashboard widget */}
        <GitHubStats />

        {/* EXPERIENCE SECTION - Active workstation deployments */}
        <ExperienceSection />

        {/* CONTACT SECTION - Establish connection console */}
        <ContactSection />
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
