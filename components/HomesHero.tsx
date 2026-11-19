import Image from "next/image";
import { hero } from "@/content/site";
import homePhoto from "@/public/lincolnville-home.jpeg";
import homeThenPhoto from "@/public/photos/home-story-then.jpg";

/** "Homes, Not Hotels." hero: the house framed as a doorway (formerly the top of the home page). */
export function HomesHero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-lede">{hero.lede}</p>
          <div className="hero-actions">
            <a className="button" href={hero.primary.href}>
              {hero.primary.label}
            </a>
            <a className="text-link" href={hero.secondary.href}>
              {hero.secondary.label}
            </a>
          </div>
        </div>
        <Doorway />
      </div>
    </section>
  );
}

/** The Lincolnville house in its porch doorway, with the same home about 1979. Used on / and /homes-not-hotels. */
export function Doorway() {
  return (
    <figure className="doorway">
      <div className="doorway-frame">
        <Image
          src={homePhoto}
          alt={hero.photoAlt}
          priority
          placeholder="blur"
          sizes="(max-width: 760px) 90vw, 44vw"
          className="doorway-photo"
        />
      </div>
      <figure className="then-print">
        <Image
          src={homeThenPhoto}
          alt={hero.then.alt}
          sizes="(max-width: 640px) 150px, 220px"
          className="then-print-photo"
        />
        <figcaption>
          {hero.then.label}
          <span>{hero.then.credit}</span>
        </figcaption>
      </figure>
      <figcaption>{hero.caption}</figcaption>
    </figure>
  );
}
