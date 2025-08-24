import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = [
    "Backend Developer",
    "Full Stack Engineer", 
    "Tech Enthusiast",
    "Problem Solver"
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/LirilChandrawanshi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/lirilchandrawanshi", label: "LinkedIn" },
    { icon: Mail, href: "mailto:myselfliril@gmail.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Profile Image Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
              <div className="relative">
                <img 
                  src="/assets/images/profile.png"
                  alt="Liril Chandrawanshi - Backend Developer"
                  className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-primary/30 shadow-glow-primary group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500"></div>
              </div>
            </div>

            <div className="text-center lg:text-left flex-1 max-w-2xl">
              {/* Greeting */}
              <div className="mb-6">
                <span className="text-accent text-lg font-medium">Hello, I'm</span>
              </div>
              
              {/* Name with gradient text */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                Liril Chandrawanshi
              </h1>
              
              {/* Animated role */}
              <div className="h-16 mb-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
                  <span className="text-primary">Tech Intern @Univest</span> | 
                  <span className="ml-2 inline-block min-w-[200px] text-accent transition-all duration-500">
                    {roles[currentRole]}
                  </span>
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                Passionate about building scalable backend systems and beautiful user interfaces. 
                Currently exploring cloud integrations and advanced architecture patterns while crafting 
                impactful solutions from concept to deployment.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary hover:shadow-glow-primary/50 transition-all duration-300 group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/13nYFQ5PVuZchJMYaHN3M7ocS5ooWDVUf/view?usp=drivesdk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </a>
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-glow-primary/30 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;