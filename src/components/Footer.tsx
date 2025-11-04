import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-romantic relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Heart className="w-6 h-6 animate-heart-beat text-foreground" fill="currentColor" />
          <p className="font-script text-2xl text-foreground">
            Forever & Always
          </p>
          <Heart className="w-6 h-6 animate-heart-beat text-foreground" fill="currentColor" />
        </div>
        
        <p className="text-foreground/80 font-sans">
          Made with endless love for the most amazing person in my life
        </p>
        
        <p className="text-muted-foreground text-sm font-sans">
          {new Date().getFullYear()} • A celebration of you 🎂
        </p>
      </div>
    </footer>
  );
};
