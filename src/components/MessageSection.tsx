import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Star } from "lucide-react";

export const MessageSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative z-10">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 shadow-float bg-card/80 backdrop-blur-sm border-2 border-primary/30 relative overflow-hidden">
          {/* Decorative Elements */}
          <Heart className="absolute top-4 right-4 w-8 h-8 text-primary/20 animate-heart-beat" />
          <Sparkles className="absolute bottom-4 left-4 w-6 h-6 text-accent/30 animate-sparkle" />
          <Star
            className="absolute top-8 left-8 w-6 h-6 text-primary/20 animate-sparkle"
            style={{ animationDelay: "1s" }}
          />

          <h2 className="font-script text-4xl md:text-5xl text-center text-primary mb-8">
            A Special Message For You
          </h2>

          <div className="space-y-6 text-foreground/90 font-sans text-lg leading-relaxed">
            <p>My Cutiepie,</p>

            <p>
              Every once in a while, life surprises you with someone who changes
              everything — and for me, that someone is you. You’ve filled my
              world with laughter, warmth, and the kind of love I never knew I
              needed until you came along.
            </p>

            <p>
              Your smile has this magic — it can turn my worst day into my
              favorite one. Your kindness makes me want to be better every
              single day. You aren’t just my girlfriend, you’re my peace, my
              home, and the reason even simple moments feel special.
            </p>

            <p>
              Today is all about celebrating you — your heart, your beauty, and
              the way you make the world brighter just by being in it. I hope
              this year brings you endless happiness, beautiful memories, and
              all the love your heart can hold.
            </p>

            <p className="text-center font-script text-2xl text-primary mt-8">
              I love you endlessly, more than words will ever be able to say 💕
            </p>

            <p className="text-center text-muted-foreground italic">
              Here’s to us — to more laughter, late-night talks, and a lifetime
              of moments worth remembering.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
