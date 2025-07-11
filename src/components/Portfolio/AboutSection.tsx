import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Zap } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    "Java", "Spring Boot", "REST API", "MongoDB", "MySQL", "React.js", 
    "Next.js", "Node.js", "PostgreSQL", "HTML", "CSS", "Tailwind CSS", 
    "JavaScript", "Git", "Swagger", "MapStruct", "Agile"
  ];

  const highlights = [
    {
      icon: Code,
      title: "Backend Expertise",
      description: "Specialized in Java, Spring Boot, and building scalable REST APIs"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Experience with MongoDB, MySQL, and PostgreSQL for optimal data solutions"
    },
    {
      icon: Globe,
      title: "Full Stack Vision",
      description: "Growing expertise in React.js and Next.js for end-to-end development"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Passionate about building efficient, scalable microservices architecture"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <p className="text-lg leading-relaxed">
                I'm Liril, a tech enthusiast currently working as a <span className="text-primary font-semibold">Tech Intern at Univest</span>. 
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

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <highlight.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-1">{highlight.title}</h4>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105"
                    style={{ 
                      animationDelay: `${index * 0.05}s`,
                      animation: 'slide-up 0.6s ease-out forwards'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card-gradient border-border text-center p-6 hover:shadow-glow-primary/20 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">400+</div>
                <div className="text-sm text-muted-foreground">DSA Problems Solved</div>
              </Card>
              <Card className="bg-card-gradient border-border text-center p-6 hover:shadow-glow-accent/20 transition-all duration-300">
                <div className="text-3xl font-bold text-accent mb-2">5⭐</div>
                <div className="text-sm text-muted-foreground">HackerRank Java</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;