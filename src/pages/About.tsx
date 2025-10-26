import { Link } from "react-router-dom";
import { Shield, Users, BookOpen, Target } from "lucide-react";

const About = () => {
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
              <Link to="/about" className="text-foreground font-medium">
                About
              </Link>
              <Link to="/lab" className="text-muted-foreground hover:text-accent transition-colors">
                Lab
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">The Ethos of Sabily</h1>
          <p className="text-xl text-muted-foreground">
            A journey of purpose-driven innovation.
          </p>
        </div>
      </section>

      {/* Origins */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold">Origins</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Born from a vision to unite ethical consciousness with technical excellence, Team Sabily 
            began as a small circle of researchers, engineers, and thinkers seeking to redefine how 
            technology serves humanity.
          </p>
        </div>
      </section>

      {/* Meaning */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold">The Meaning of 'Sabily'</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Derived from the Arabic word 'Sabeel' meaning 'path' or 'way' — symbolizing our journey 
            toward purposeful, ethical innovation.
          </p>
        </div>
      </section>

      {/* Core Tenets */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">Core Tenets</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tawheedic Worldview</h3>
                <p className="text-muted-foreground">Integrating ethics and science in harmony</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-muted-foreground">Openness in research and operations</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Security</h3>
                <p className="text-muted-foreground">Defending truth and integrity</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">Working across disciplines and borders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">Structure & Units</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-2xl font-bold mb-2">Cyber Security Team (CST)</h3>
              <p className="text-muted-foreground">Red Team, Blue Team, and Unit Al-Furqan operations</p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-2xl font-bold mb-2">InsanLab</h3>
              <p className="text-muted-foreground">Research & Development division</p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-2xl font-bold mb-2">Outreach & Publications</h3>
              <p className="text-muted-foreground">Education & Awareness initiatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">Milestones</h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-24 text-2xl font-bold text-accent">2024</div>
              <div className="flex-grow pt-1">
                <p className="text-lg text-muted-foreground">Formation of CST and InsanLab</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-24 text-2xl font-bold text-accent">2025</div>
              <div className="flex-grow pt-1">
                <p className="text-lg text-muted-foreground">Publication of AI Misinformation Whitepaper</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl font-serif italic text-muted-foreground">
            "We are not here to compete for attention. We are here to build systems worthy of trust."
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-card">
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

export default About;
