import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-6 py-12 max-w-md rounded-3xl bg-card/95 border border-border/40 shadow-xl shadow-accent/20 backdrop-blur-sm">
        <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
        <p className="text-xl text-primary/90 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="flex items-center justify-center">
          <Button className="hidden md:flex bg-cta-gradient hover:cursor-pointer hover:opacity-90 shadow-button-custom">  
            Return to Home
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
