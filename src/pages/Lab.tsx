import { Link } from "react-router-dom";
import { FileText, Code, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";
const Lab = () => {
  return <div className="min-h-screen bg-background">
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
              <Link to="/lab" className="text-foreground font-medium">
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
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Sabily Lab</h1>
          <p className="text-xl text-muted-foreground">
            Where Research Meets Responsibility
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Developing frameworks for ethical AI and cybersecurity.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Active Research Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6 hover:border-accent transition-all">
              <h3 className="text-2xl font-bold mb-3">AI & Misinformation</h3>
              <p className="text-muted-foreground">
                Studying the impact and detection of AI-generated content and developing ethical frameworks.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:border-accent transition-all">
              <h3 className="text-2xl font-bold mb-3">Cybersecurity & Digital Defense</h3>
              <p className="text-muted-foreground">
                Red and Blue team operations focused on protecting critical infrastructure.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:border-accent transition-all">
              <h3 className="text-2xl font-bold mb-3">Faith & Technology Ethics</h3>
              <p className="text-muted-foreground">
                Exploring the intersection of Islamic values and modern technology development.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:border-accent transition-all">
              <h3 className="text-2xl font-bold mb-3">Secure Infrastructure Design</h3>
              <p className="text-muted-foreground">
                Building privacy-first, secure systems for sensitive applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Papers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Papers & Reports</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all group">
              <FileText className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                The Ethical and Security Implications of AI-Generated Media
              </h3>
              <p className="text-muted-foreground mb-4">
                M. Musa, Team Sabily Research Division
              </p>
              <div className="text-sm text-accent font-medium">2025</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all group">
              <FileText className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                Red Team Framework for Faith-Based Organizations
              </h3>
              <p className="text-muted-foreground mb-4">
                Team Sabily CST
              </p>
              <div className="text-sm text-accent font-medium">2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Tools & Open Projects</h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-8 hover:border-accent transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Code className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-bold">Aorta 🩸</h3>
                </div>
                <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full">
                  Prototype
                </span>
              </div>
              <p className="text-muted-foreground">
                Flask-based authentication prototype with raw Postgres for educational purposes.
              </p>
            </div>
            <div className="border border-border rounded-lg p-8 hover:border-accent transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Beaker className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-bold">Blood Bank App</h3>
                </div>
                <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full">
                  Beta
                </span>
              </div>
              <p className="text-muted-foreground">
                Flutter + Supabase system for ethical donor management and coordination.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Join the Research</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We invite researchers, developers, and thinkers to collaborate with Team Sabily.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8">
              Contact Sabily Lab
            </Button>
          </Link>
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
    </div>;
};
export default Lab;