import { cornerMarketUrl } from "@/content/site";

/** Turns the first "The Corner Market" in a sentence into a link to its website (opens in a new tab). */
export function CornerMarketLinked({ text, name = "The Corner Market" }: { text: string; name?: string }) {
  const at = text.indexOf(name);
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <a href={cornerMarketUrl} target="_blank" rel="noopener noreferrer">
        {name}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      {text.slice(at + name.length)}
    </>
  );
}
