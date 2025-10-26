import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    category: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", organization: "", category: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold hover:text-accent transition-colors">
              Team Sabily
            </Link>
            <nav className="flex gap-6">
              <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/lab" className="text-muted-foreground hover:text-accent transition-colors">
                Lab
              </Link>
              <Link to="/contact" className="text-foreground font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Let's Build With Integrity</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaboration Starts with a Conversation
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a researcher, developer, or curious thinker — reach out. 
            Let's build something ethical and enduring.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-8">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Organization / Role</Label>
              <Input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Your organization or role"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              >
                <option value="">Select a category</option>
                <option value="research">Research</option>
                <option value="partnership">Partnership</option>
                <option value="press">Press</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your inquiry..."
                rows={6}
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Securely
            </Button>
          </form>
        </div>
      </section>

      {/* Alternate Channels */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Other Ways to Connect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:admin@mail.teamsabily.online"
              className="flex items-center gap-4 p-6 border border-border rounded-lg hover:border-accent transition-all group"
            >
              <Mail className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">Secure Email</h3>
                <p className="text-muted-foreground">admin@mail.teamsabily.online</p>
              </div>
            </a>

            <a
              href="https://github.com/teamsabily"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-border rounded-lg hover:border-accent transition-all group"
            >
              <Github className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">GitHub</h3>
                <p className="text-muted-foreground">Follow our open source work</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 border border-border rounded-lg">
              <MessageSquare className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-xl font-bold">Telegram / Matrix</h3>
                <p className="text-muted-foreground">Coming soon</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 border border-border rounded-lg">
              <MessageSquare className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-xl font-bold">LinkedIn</h3>
                <p className="text-muted-foreground">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2">Team Sabily</div>
              <div className="text-muted-foreground">Truth. Ethics. Security.</div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/lab" className="text-muted-foreground hover:text-accent transition-colors">
                Lab
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <a href="https://github.com/teamsabily" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
