import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Zap, Trophy, Target, Lightbulb, Rocket } from 'lucide-react';

const AboutSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.animate-on-scroll');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const skills = [
    // Languages
    "Java", "JavaScript", "TypeScript", "SQL", "Python",
    // Frontend
    "React.js", "Next.js", "HTML", "CSS", "Tailwind CSS",
    // Backend
    "Spring Boot", "REST APIs", "WebSocket", "Microservices",
    // Databases
    "MongoDB", "MySQL", "PostgreSQL",
    // Tools
    "Git", "GitHub", "Docker", "Swagger", "IntelliJ", "VS Code", "Maven"
  ];

  const highlights = [
    {
      icon: Code,
      title: "Backend Expertise",
      description: "Specialized in Java, Spring Boot, REST APIs, and building scalable microservices",
      color: "primary"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Experience with MongoDB, MySQL, and PostgreSQL for optimal data solutions",
      color: "accent"
    },
    {
      icon: Globe,
      title: "Full Stack Vision",
      description: "Growing expertise in React.js and Next.js for end-to-end development",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Improved API efficiency by 40%, optimized systems serving 100K+ daily users",
      color: "accent"
    }
  ];

  const stats = [
    { icon: Trophy, number: "400+", label: "DSA Problems Solved", color: "primary" },
    { icon: Target, number: "5⭐", label: "Java & Problem Solving", color: "accent" },
    { icon: Lightbulb, number: "AIR 124", label: "VITMEE 2023", color: "primary" },
    { icon: Rocket, number: "AIR 48", label: "MAHACET 2023", color: "accent" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-text-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8 rounded-full animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* About Text and Image */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
              <div className="relative group flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
                <img
                  src="/assets/images/profile.png"
                  alt="Liril Chandrawanshi - Professional Photo"
                  className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl object-cover border-2 border-primary/20 shadow-glow-primary/30 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="space-y-6 flex-1">
                <div className="prose prose-lg text-muted-foreground max-w-none">
                  <p className="text-lg leading-relaxed">
                    I'm Liril, a tech enthusiast currently working as a <span className="text-primary font-semibold">Software Developer  at Univest</span>.
                    With a foundation in Java and Spring Boot, and a growing command over React.js and Next.js,
                    I enjoy building things end-to-end.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I've previously interned at <span className="text-accent font-semibold">Monkhub Innovations</span> where I worked on
                    scalable microservices and real-world product features. Whether it's crafting REST APIs or
                    building beautiful UIs, I thrive on learning and building impactful projects.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I'm currently exploring <span className="text-primary font-semibold">cloud integrations</span> and
                    <span className="text-accent font-semibold"> advanced architecture patterns</span>,
                    always seeking to push the boundaries of what's possible in software development.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  id={`highlight-${index}`}
                  className={`animate-on-scroll bg-card-gradient border-border hover:border-${highlight.color}/50 transition-all duration-500 group hover:shadow-glow-${highlight.color}/20 hover:-translate-y-1 ${visibleCards.has(`highlight-${index}`) ? 'animate-scale-in' : 'opacity-0'
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-${highlight.color}/10 group-hover:bg-${highlight.color}/20 transition-colors group-hover:scale-110 duration-300`}>
                        <highlight.icon className={`h-6 w-6 text-${highlight.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills and Stats Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6 flex items-center">
                <Code className="mr-3 h-6 w-6 text-primary" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105 animate-slide-up"
                    style={{
                      animationDelay: `${index * 0.05}s`,
                      opacity: 0,
                      animation: `slide-up 0.6s ease-out ${index * 0.05}s forwards`
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6 flex items-center">
                <Trophy className="mr-3 h-6 w-6 text-accent" />
                Achievements
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    id={`stat-${index}`}
                    className={`animate-on-scroll bg-card-gradient border-border text-center p-4 hover:shadow-glow-${stat.color}/20 transition-all duration-500 hover:scale-105 group ${visibleCards.has(`stat-${index}`) ? 'animate-scale-in' : 'opacity-0'
                      }`}
                    style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                  >
                    <div className={`inline-flex p-2 rounded-lg bg-${stat.color}/10 mb-3 group-hover:bg-${stat.color}/20 transition-colors`}>
                      <stat.icon className={`h-5 w-5 text-${stat.color}`} />
                    </div>
                    <div className={`text-2xl font-bold text-${stat.color} mb-1 group-hover:scale-110 transition-transform`}>
                      {stat.number}
                    </div>
                    <div className="text-xs text-muted-foreground leading-tight">
                      {stat.label}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <Card className="bg-card-gradient border-border p-6 hover:shadow-glow-primary/20 transition-all duration-500">
              <div className="text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-semibold text-card-foreground mb-2">Fun Fact</h4>
                <p className="text-sm text-muted-foreground">
                  I've solved more coding problems than there are days in a year!
                  Currently working towards my 500th problem milestone.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;