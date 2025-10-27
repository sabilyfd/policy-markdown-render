import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Compass, Lock, Lightbulb, ArrowRight } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--border)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Building Ethics into Code
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Where ethics meet engineering, and purpose drives technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/lab">
              <Button size="lg" className="text-lg px-8">
                Explore Our Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Meet the Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Snapshot */}
      <section className="py-24 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-foreground">Mission Snapshot</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Team Sabily is a research-driven initiative exploring the intersection of technology, 
            ethics, and digital security — committed to building responsible systems for a more 
            trustworthy digital world.
          </p>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Research & Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/lab" className="group">
              <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 h-full">
                <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-4">
                  Ethical AI
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  AI & Misinformation
                </h3>
                <p className="text-muted-foreground">
                  Exploring the ethical implications of AI-generated media and developing frameworks for responsible AI.
                </p>
              </div>
            </Link>
            <Link to="/lab" className="group">
              <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 h-full">
                <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-4">
                  CST
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  Cybersecurity Operations
                </h3>
                <p className="text-muted-foreground">
                  Red and Blue team operations protecting digital infrastructure with ethical principles.
                </p>
              </div>
            </Link>
            <Link to="/lab" className="group">
              <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 h-full">
                <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-4">
                  Innovation
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">Aorta | Realtime Blood Bank</h3>
                <p className="text-muted-foreground">Developing a realtime blood bank to fix blood smuggling issue in Bangladesh.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-24 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent text-3xl mb-4">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Integrity in Design</h3>
              <p className="text-muted-foreground">
                We build with intention, not impulse.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent text-3xl mb-4">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Security for Humanity</h3>
              <p className="text-muted-foreground">
                Protecting truth and trust through technology.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent text-3xl mb-4">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Knowledge in Action</h3>
              <p className="text-muted-foreground">
                Research that turns into responsible systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Highlights */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">News & Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/lab" className="group">
              <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300">
                <div className="text-sm text-accent mb-2">2025</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  Whitepaper: AI-Generated Media Threats
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive analysis of the security implications of AI-generated content.
                </p>
              </div>
            </Link>
            <Link to="/lab" className="group">
              <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300">
                <div className="text-sm text-accent mb-2">2025</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  CTF Participation — Blue Team Ops
                </h3>
                <p className="text-muted-foreground">
                  Team Sabily's blue team operational excellence in competitive environments.
                </p>
              </div>
            </Link>
          </div>
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
export default Index;