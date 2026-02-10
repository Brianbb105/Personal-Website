import Image from "next/image";
import AppShell from "@/components/AppShell";

const photos = [
  {
    src: "/photos/DSC00730.jpg",
    caption:
      "Part of the Tengri Tagh (Tian Shan Mountains), captured from my home with a telephoto lens.",
    place: "Xinjiang",
    detail: "Sony 24-240mm",
  },
  {
    src: "/photos/DSC01084.jpg",
    caption:
      "The Kumtag Desert in Piqan, where soft dunes and open skies create a calm, cinematic texture.",
    place: "Kumtag Desert",
    detail: "Golden hour",
  },
  {
    src: "/photos/DSC01838.jpg",
    caption: "A Yosemite frame that felt timeless, with clean lines and quiet depth in the landscape.",
    place: "Yosemite",
    detail: "Travel series",
  },
];

export default function PhotosPage() {
  return (
    <AppShell activePath="/photos">
      <section className="hero-panel compact reveal delay-2">
        <p className="eyebrow">Photography</p>
        <h1 className="section-title">Featured Frames</h1>
        <p className="lead-copy">
          A small set of photos I keep revisiting. Each one marks a place, a mood, and a memory.
        </p>
      </section>

      <section className="photo-grid">
        {photos.map((photo, index) => {
          const delayClass = `delay-${Math.min(index + 3, 6)}`;

          return (
            <figure key={photo.src} className={`photo-card reveal ${delayClass}`}>
              <div className="photo-media">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  width={1600}
                  height={1067}
                  sizes="(max-width: 700px) 100vw, (max-width: 980px) 50vw, 33vw"
                />
              </div>

              <figcaption className="photo-caption">
                <p>{photo.caption}</p>
                <div className="photo-meta">
                  <span>{photo.place}</span>
                  <span>{photo.detail}</span>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </section>
    </AppShell>
  );
}
