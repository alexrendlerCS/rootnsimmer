import type { Offering } from "@/content/site";

const bars = [18, 34, 52, 28, 62, 44, 26, 48, 60, 32, 18, 40, 24];

/** Small illustrated stand-ins for each offering until real product photos exist. */
export function OfferingArt({ offering }: { offering: Pick<Offering, "art" | "artTitle"> }) {
  if (offering.art === "voice") {
    return (
      <div className="art art-voice" aria-hidden="true">
        <div className="waveform">
          {bars.map((h, i) => (
            <i key={i} style={{ height: h }} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={`art art-${offering.art}`} aria-hidden="true">
      <div className="sheet">
        <b>{offering.artTitle}</b>
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
