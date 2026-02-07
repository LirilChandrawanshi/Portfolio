import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail, MessageSquare, ExternalLink, Phone, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const waPhone = '918800857706';
  const waMessageDefault = encodeURIComponent("Hi Liril, I found your portfolio and would like to connect.");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create a mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact Form');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:myselfliril@gmail.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      setIsSubmitted(true);
      toast({
        title: "Email client opened!",
        description: "Your default email client should open with the message pre-filled.",
      });

      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 3000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try contacting directly at myselfliril@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      href: `https://api.whatsapp.com/send?phone=${waPhone}&text=${waMessageDefault}`,
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
    <section className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-text-gradient bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Ready to collaborate on your next project? I'd love to hear from you and discuss how we can build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card-gradient border-border hover:shadow-glow-primary/20 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>Send me a message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="bg-background border-border focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-background border-border focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      className="bg-background border-border focus:border-primary transition-colors min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary hover:shadow-glow-primary/50 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Message Prepared!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Links */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card className="bg-card-gradient border-border hover:shadow-glow-accent/20 transition-all duration-500">
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
            <Card className="bg-card-gradient border-border hover:shadow-glow-primary/20 transition-all duration-500">
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
            <Card className="bg-card-gradient border-border hover:shadow-glow-accent/20 transition-all duration-500">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <h3 className="font-semibold text-card-foreground mb-2">Quick Connect</h3>
                  <p className="text-sm text-muted-foreground">
                    Prefer a direct approach? Let's skip the form!
                  </p>
                </div>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={`https://api.whatsapp.com/send?phone=${waPhone}&text=${waMessageDefault}`} target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      WhatsApp Me
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:myselfliril@gmail.com" target="_blank" rel="noopener noreferrer">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Directly
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;