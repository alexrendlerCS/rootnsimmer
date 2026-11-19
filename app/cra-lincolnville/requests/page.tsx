import type { Metadata } from "next";
import { site } from "@/content/site";
import { craRequests, requestsPage as r } from "@/content/cra-requests";
import { CraGuide, GuideSection } from "@/components/CraGuide";
import { EmailDraftButton } from "@/components/EmailDraftButton";

export const metadata: Metadata = {
  title: `Community Requests for the CRA | ${site.fullName}`,
  description: r.lede,
  alternates: { canonical: "/cra-lincolnville/requests" },
};

export default function CraRequestsPage() {
  return (
    <CraGuide slug="requests" lede={r.lede}>
      <GuideSection id="requests" title={r.listTitle}>
        <ol className="cra-requests">
          {craRequests.map((q) => (
            <li key={q.id} id={q.id}>
              <div className="cra-request-head">
                <h3>{q.title}</h3>
                <span className="cra-request-status">{q.status}</span>
              </div>
              <p>
                <strong>The request:</strong> {q.ask}
              </p>
              <p className="muted">
                <strong>Why it matters:</strong> {q.why}
              </p>
            </li>
          ))}
        </ol>
      </GuideSection>

      <GuideSection id="send" title={r.sendTitle}>
        <p>{r.sendBody}</p>
        <div>
          <EmailDraftButton label={r.button} subject={r.subject} body={r.body} />
        </div>
        <p className="notice">{r.note}</p>
      </GuideSection>
    </CraGuide>
  );
}
