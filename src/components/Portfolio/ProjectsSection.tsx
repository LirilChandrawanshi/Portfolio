import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Database, Globe, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: "Quick Commerce Backend System",
      description: "Designed a backend-only quick delivery system using Spring Boot, Google Maps API, and PostgreSQL spatial queries for real-time location tracking.",
      techStack: ["Spring Boot", "MongoDB", "PostgreSQL", "Google Maps API"],
      role: "Backend Developer",
      link: "",
      icon: Database,
      color: "primary"
    },
    {
      name: "Password Generator (Full Stack)",
      description: "Built a secure password generator with customizable options, including length, symbols, and numbers. Used React.js for UI and MongoDB for storing user preferences.",
      techStack: ["React.js", "Spring Boot", "MongoDB"],
      role: "Full Stack Developer",
      link: "",
      icon: Globe,
      color: "accent"
    },
    {
      name: "Expense Tracker API",
      description: "REST API system to track user income/expenses with JWT authentication and categorization logic. Built for easy integration with a frontend.",
      techStack: ["Java", "Spring Boot", "MySQL", "JWT"],
      role: "Backend Developer",
      link: "",
      icon: Code,
      color: "primary"
    },
    {
      name: "Changemakers' Ecosystem (Internship)",
      description: "Part of backend development using microservices for a scalable platform. Integrated tagging and notification systems and contributed to inter-service logic using Feign clients.",
      techStack: ["Java", "Spring Boot", "Swagger", "MapStruct"],
      role: "Backend Developer Intern",
      link: "",
      icon: Zap,
      color: "accent"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my journey through backend development, full-stack solutions, and real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.name} 
              className="bg-card-gradient border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-glow-primary/20 hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'scale-in 0.6s ease-out forwards'
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl ${project.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className={`h-6 w-6 ${project.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <div className="flex space-x-2">
                    {project.link && (
                      <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </CardTitle>
                <Badge variant="outline" className={`w-fit ${project.color === 'primary' ? 'border-primary text-primary' : 'border-accent text-accent'}`}>
                  {project.role}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button 
            size="lg" 
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
          >
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;