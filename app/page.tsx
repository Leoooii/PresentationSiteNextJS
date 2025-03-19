
import {  ProjectsSection, SkillsSection, CertificationsSection, CoursesSection, ContactSection } from './DynamicComponents';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';

export default function Page() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* <AnimatedBackground /> */}
      <div className="relative z-10">
        <Header />
        <main className="container px-4 md:px-6">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <CoursesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}