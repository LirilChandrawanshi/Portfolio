import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail, MessageSquare, ExternalLink, Phone } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "myselfliril@gmail.com",
      href: "mailto:myselfliril@gmail.com",
      color: "primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "lirilchandrawanshi",
      href: "https://www.linkedin.com/in/lirilchandrawanshi",
      color: "accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "LirilChandrawanshi",
      href: "https://github.com/LirilChandrawanshi",
      color: "primary"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "+91 8800857706",
      href: "https://wa.me/918800857706",
      color: "accent"
    }
  ];

  const codingProfiles = [
    {
      name: "LeetCode",
      username: "Lirilchandrawanshi",
      href: "https://leetcode.com/u/Lirilchandrawanshi",
      stats: "400+ Problems"
    },
    {
      name: "GeeksforGeeks",
      username: "myselfvb03",
      href: "https://www.geeksforgeeks.org/user/myselfvb03",
      stats: "Active Contributor"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear from you and discuss how we can build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>Send me a message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name"
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?"
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or just say hello!"
                    className="bg-background border-border focus:border-primary transition-colors min-h-[120px]"
                  />
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary hover:shadow-glow-primary/50 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Links */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card className="bg-card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: 'slide-up 0.6s ease-out forwards'
                    }}
                  >
                    <div className={`p-2 rounded-lg ${contact.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className={`h-5 w-5 ${contact.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-card-foreground">{contact.label}</p>
                      <p className="text-sm text-muted-foreground truncate">{contact.value}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Coding Profiles */}
            <Card className="bg-card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Coding Profiles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {codingProfiles.map((profile, index) => (
                  <a
                    key={profile.name}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
                    style={{ 
                      animationDelay: `${(index + 4) * 0.1}s`,
                      animation: 'slide-up 0.6s ease-out forwards'
                    }}
                  >
                    <div>
                      <p className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                        {profile.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{profile.stats}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Quick Connect */}
            <Card className="bg-card-gradient border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <h3 className="font-semibold text-card-foreground mb-2">Quick Connect</h3>
                  <p className="text-sm text-muted-foreground">
                    Prefer a direct approach? Let's skip the form!
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  asChild
                >
                  <a href="https://wa.me/918800857706" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    WhatsApp Me
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;