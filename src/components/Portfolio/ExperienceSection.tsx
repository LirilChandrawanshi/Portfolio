import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, GraduationCap, Award, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const education = [
    {
      school: "Birla Institute of Technology, Mesra",
      degree: "Master Of Computer Applications",
      date: "2023 – 2025",
      type: "Masters"
    },
    {
      school: "Govt. Motilal Vigyan Mahavidyalaya, Bhopal",
      degree: "Bachelor of  Computer Science",
      date: "2019 – 2022",
      type: "Bachelors"
    }
  ];

  const achievements = [
    "Solved 400+ DSA problems on LeetCode and GFG",
    "HackerRank: 5⭐ in Java and Problem Solving",
    "VITMEE AIR 124, MAHACET AIR 48",
    "Certified in Java, REST APIs, Python from HackerRank"
  ];

  const experience = [
    {
      company: "Univest",
      role: "Software Engineer",
      period: "Jul 2025 - Present",
      location: "Gurgaon, India",
      description: "Investment & Finance Platform (univest.in)",
      highlights: [
        "Built end-to-end subscription-based brokerage plans system using Next.js (SSR) for a fintech platform with 100K+ daily active users",
        "Implemented bundled trade pricing, coupons, auto-pay discounts, and GST calculations",
        "Redesigned frontend UI for core product modules (Stocks, Screeners, IPOs, Calculators, Indices, Sectors)",
        "Developed Re-KYC and broker support ticket workflows by building frontend interfaces and integrating REST APIs",
        "Resolved critical UI/UX and performance issues, improving stability, load times, and user experience",
        "Collaborated with Backend and QA teams to deliver MF-Screeners feature including UI development, API integration, and testing"
      ],
      technologies: ["Java", "Spring Boot", "Next.js", "TypeScript", "REST APIs", "Tailwind CSS"],
      type: "current"
    },
    {
      company: "Monkhub Innovations",
      role: "Java Developer Intern",
      period: "Apr 2025 - Jul 2025",
      location: "Gurgaon, India",
      description: "Changemakers' Ecosystem Project",
      highlights: [
        "Developed scalable RESTful APIs using Java and Spring Boot for enterprise-grade backend systems",
        "Resolved API performance bottlenecks by refactoring GET to POST endpoints, improving efficiency by 40%",
        "Collaborated with a team of 3 developers on backend architecture design, ensuring seamless integration with frontend"
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "Microservices"],
      type: "previous"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Building className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-card-foreground">Professional Experience</h3>
            </div>

            {experience.map((exp, index) => (
              <Card
                key={exp.company}
                className="bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'slide-up 0.6s ease-out forwards'
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-accent">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={exp.type === 'current' ? 'default' : 'secondary'}
                      className={exp.type === 'current' ? 'bg-primary text-primary-foreground' : ''}
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed italic">{exp.description}</p>

                  {/* Highlights */}
                  {exp.highlights && (
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education & Achievements Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold text-card-foreground">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card
                    key={edu.school}
                    className="bg-card-gradient border-border p-4 hover:border-accent/50 transition-all duration-300"
                    style={{
                      animationDelay: `${(index + 2) * 0.1}s`,
                      animation: 'scale-in 0.6s ease-out forwards'
                    }}
                  >
                    <div className="space-y-2">
                      <Badge variant="outline" className="border-accent text-accent">
                        {edu.type}
                      </Badge>
                      <h4 className="font-semibold text-card-foreground text-sm">{edu.degree}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{edu.school}</p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{edu.date}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-card-foreground">Achievements</h3>
              </div>

              <Card className="bg-card-gradient border-border p-4">
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                      style={{
                        animationDelay: `${(index + 4) * 0.1}s`,
                        animation: 'slide-up 0.6s ease-out forwards'
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;