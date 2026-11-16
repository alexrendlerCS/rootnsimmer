import Image, { type StaticImageData } from "next/image";

export type PhotoCredit = {
  /** Photographer or source, e.g. "w_lemay" or "Library of Congress". */
  by: string;
  /** Link to the original file. */
  source: string;
  /** e.g. "CC BY-SA 2.0" or "Public domain". */
  license: string;
  licenseUrl?: string;
};

/** A photo with a caption and the credit its license asks for. */
export function Photo({
  src,
  alt,
  caption,
  credit,
  sizes,
  className = "",
  priority = false,
}: {
  src: StaticImageData;
  alt: string;
  caption: string;
  credit: PhotoCredit;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`photo ${className}`}>
      <Image src={src} alt={alt} sizes={sizes} placeholder="blur" priority={priority} className="photo-img" />
      <figcaption>
        {caption}{" "}
        <span className="photo-credit">
          Photo:{" "}
          <a href={credit.source} target="_blank" rel="noopener">
            {credit.by}
          </a>
          ,{" "}
          {credit.licenseUrl ? (
            <a href={credit.licenseUrl} target="_blank" rel="noopener">
              {credit.license}
            </a>
          ) : (
            credit.license
          )}
          .
        </span>
      </figcaption>
    </figure>
  );
}
