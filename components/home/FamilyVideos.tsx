"use client";

const videos = [
  { src: "/assets/videos/family-home.mov", label: "Families We Protect" },
  { src: "/assets/videos/family-together.mov", label: "Building Lasting Relationships" },
  { src: "/assets/videos/family-lifestyle.mov", label: "Coverage at Your Door" },
  { src: "/assets/videos/family-moment.mov", label: "Moments That Matter" },
  { src: "/assets/videos/family-walking.mov", label: "Generations of Trust" },
  { src: "/assets/videos/family-playing.mov", label: "Protecting What Matters Most" },
];

export default function FamilyVideos() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            The Families We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For over 60 years, Delta Life has been there for Georgia families —
            providing personal, face-to-face service that builds lasting trust.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.src} className="rounded-lg overflow-hidden shadow-md group">
              <div className="relative aspect-video bg-muted">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={video.src} type="video/quicktime" />
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              <div className="p-4 bg-white">
                <p className="font-semibold text-foreground text-sm">{video.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
