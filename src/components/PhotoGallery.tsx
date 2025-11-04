import { Card } from "@/components/ui/card";

const photos = [
  {
    id: 1,
    src: "/photos/photo1.jpg",
    alt: "Beautiful memory 1",
    caption: "Our first adventure together",
  },
  {
    id: 2,
    src: "/photos/photo2.jpg",
    alt: "Beautiful memory 2",
    caption: "That unforgettable day",
  },
  {
    id: 3,
    src: "/photos/photo3.jpg",
    alt: "Beautiful memory 3",
    caption: "Pure happiness",
  },
  {
    id: 4,
    src: "/photos/photo4.jpg",
    alt: "Beautiful memory 4",
    caption: "Always making me smile",
  },
  {
    id: 5,
    src: "/photos/photo5.jpg",
    alt: "Beautiful memory 5",
    caption: "My favorite person",
  },
  {
    id: 6,
    src: "/photos/photo6.jpg",
    alt: "Beautiful memory 6",
    caption: "Forever grateful for you",
  },
];

export const PhotoGallery = () => {
  return (
    <section className="py-20 px-4 bg-gradient-soft relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-script text-5xl md:text-6xl text-center text-foreground mb-4">
          Our Precious Moments
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Every picture tells our story 💕
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <Card
              key={photo.id}
              className="group overflow-hidden shadow-soft hover:shadow-float transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-secondary/80 flex items-center justify-center relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <p className="text-white font-sans text-center font-medium">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
