import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { abandoned } from "@/content/protect";
import { GuideSection } from "@/components/CraGuide";
import { PacketCards, PreserveGuide } from "@/components/PreserveGuide";

export const metadata: Metadata = {
  title: `Abandoned Homes | Preserve Historic Homes | ${site.fullName}`,
  description: abandoned.body,
  alternates: { canonical: "/preserve-historic-homes/abandoned-homes" },
};

export default function AbandonedHomesPage() {
  return (
    <PreserveGuide slug="abandoned-homes" title="Abandoned Homes" lede={abandoned.body}>
      <GuideSection id={abandoned.id} title="What the City’s plan calls for">
        <figure className="minutes-quote">
          <blockquote>“{abandoned.quote}”</blockquote>
          <figcaption>{abandoned.source}</figcaption>
        </figure>
        <p>
          <Link className="button" href={abandoned.mapLink.href}>
            {abandoned.mapLink.label}
          </Link>
        </p>
      </GuideSection>

      <GuideSection id="packets" title="The member packet">
        <PacketCards ids={["packet-3"]} />
      </GuideSection>
    </PreserveGuide>
  );
}
