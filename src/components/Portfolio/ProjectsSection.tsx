import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, MessageCircle, FileText } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: "ChatterBox — Real-Time Chat App",
      description: "Developed a full-stack real-time chat application using Java Spring Boot for the backend and Next.js for the frontend. The system enables instant messaging through WebSocket connections, supporting scalable, secure communication for users.",
      features: [
        "1:1 & Group chats with real-time messaging",
        "24-hour disappearing statuses",
        "Community posts with likes & comments",
        "Typing indicators & read receipts",
        "File sharing capabilities"
      ],
      techStack: ["Java", "Spring Boot", "WebSocket", "STOMP", "MongoDB", "Next.js", "TypeScript", "Tailwind CSS", "Docker"],
      role: "Full Stack App",
      link: "https://chatter-box-myselfliril-gmailcoms-projects.vercel.app/",
      github: "https://github.com/LirilChandrawanshi/ChatterBox",
      icon: MessageCircle,
      color: "primary"
    },
    {
      name: "Smart Resume Genie",
      description: "Built a full-stack AI-powered resume builder using React, TypeScript, Spring Boot, and MongoDB. Integrated OpenAI APIs for resume suggestions and ATS optimization. Implemented user authentication, PDF export, and dynamic templates.",
      features: [
        "Live preview with multiple professional templates",
        "LaTeX template support with server-side compilation",
        "OpenAI-driven content suggestions",
        "ATS optimization features",
        "High-quality PDF export",
        "Admin dashboard for template management"
      ],
      techStack: ["React", "TypeScript", "Spring Boot", "MongoDB", "OpenAI API", "Tailwind CSS", "LaTeX", "JWT"],
      role: "Full Stack App",
      link: "https://smart-resume-genie-app-main-seven.vercel.app/",
      github: "https://github.com/LirilChandrawanshi/SmartResumeGenie",
      icon: FileText,
      color: "accent"
    },

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
            <a
              key={project.name}
              href={project.link || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={project.link ? 'cursor-pointer' : 'cursor-default'}
            >
              <Card
                className="bg-card-gradient border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-glow-primary/20 hover:-translate-y-2 h-full"
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
                    {project.link && (
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-muted-foreground" />
                    )}
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

                  {/* Features List */}
                  {project.features && (
                    <ul className="space-y-1">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <p className="text-xs text-muted-foreground">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  )}

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

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    {project.link && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={(e) => e.stopPropagation()}
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        onClick={(e) => e.stopPropagation()}
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-3 w-3" />
                          Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
            asChild
          >
            <a href="https://github.com/LirilChandrawanshi" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;