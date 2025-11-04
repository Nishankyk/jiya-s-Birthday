import { FloatingHearts } from "@/components/FloatingHearts";
import { HeroSection } from "@/components/HeroSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { MessageSection } from "@/components/MessageSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />
      <HeroSection />
      <PhotoGallery />
      <MessageSection />
      <Footer />
    </div>
  );
};

export default Index;
