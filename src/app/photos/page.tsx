import Image from "next/image";
import AppShell from "@/components/AppShell";
import { photos } from "@/content/siteContent";

export default function PhotosPage() {
  const [featuredPhoto, ...photoCards] = photos;

  return (
    <AppShell activePath="/photos">
      <section className="photos-heading-block reveal delay-2">
        <h1 className="panel-heading">Photos</h1>
        <p className="panel-description">Featured photos</p>
      </section>

      <section className="photos-feature reveal delay-3">
        <div className="liquid-media photo-media">
          <Image
            src={featuredPhoto.src}
            alt={`${featuredPhoto.title} in ${featuredPhoto.location}`}
            width={featuredPhoto.width}
            height={featuredPhoto.height}
            priority
            sizes="(max-width: 860px) 100vw, 900px"
            className="media-image photo-media-image"
          />
          <div className="media-scrim" />
          <div className="spotlight-shell">
            <div className="spotlight-card spotlight-card--soft photo-description-tab">
              <p className="spotlight-label">{featuredPhoto.location}</p>
              <h3 className="spotlight-title">{featuredPhoto.title}</h3>
              <p className="spotlight-copy">{featuredPhoto.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="photos-gallery photo-grid photo-grid--feature reveal delay-3">
        {photoCards.map((photo) => (
          <article key={photo.src}>
            <div className="liquid-media photo-media">
              <Image
                src={photo.src}
                alt={`${photo.title} in ${photo.location}`}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 860px) 100vw, 900px"
                className="media-image photo-media-image"
              />
              <div className="media-scrim" />
              <div className="spotlight-shell">
                <div className="spotlight-card spotlight-card--soft photo-description-tab">
                  <p className="spotlight-label">{photo.location}</p>
                  <h3 className="spotlight-title">{photo.title}</h3>
                  <p className="spotlight-copy">{photo.note}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
