import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-birthday.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-soft opacity-95" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="inline-block mb-6">
          <Heart className="w-16 h-16 text-primary animate-heart-beat" fill="currentColor" />
        </div>
        
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-foreground mb-4 drop-shadow-lg">
          Happy Birthday
        </h1>
        
        <p className="font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-8 drop-shadow-md">
          My Love
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
          Today is all about celebrating you and the beautiful person you are ✨
        </p>
      </div>
    </section>
  );
};
