import Navigation from '@/components/Portfolio/Navigation';
import HeroSection from '@/components/Portfolio/HeroSection';
import AboutSection from '@/components/Portfolio/AboutSection';
import ProjectsSection from '@/components/Portfolio/ProjectsSection';
import ExperienceSection from '@/components/Portfolio/ExperienceSection';
import ContactSection from '@/components/Portfolio/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Liril Chandrawanshi. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;