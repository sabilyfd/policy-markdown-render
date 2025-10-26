import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="flex justify-center mb-8">
          <Shield className="h-20 w-20 text-primary" />
        </div>
        <h1 className="text-5xl font-bold text-primary mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your privacy and security matter to us. Read our privacy policy to learn how we protect your information.
        </p>
        <Link to="/privacy-policy">
          <Button size="lg" className="text-lg px-8">
            View Privacy Policy
          </Button>
        </Link>
      </div>
      
      <footer className="absolute bottom-8 text-center text-sm text-muted-foreground">
        <Link to="/privacy-policy" className="hover:text-primary transition-colors">
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
};

export default Index;
