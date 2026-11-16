"use client";

import { useState } from "react";
import { categories, offerings, type Category, type Offering } from "@/content/site";
import { useInquiry } from "./InquiryProvider";
import { Modal } from "./Modal";
import { OfferingArt } from "./OfferingArt";

export function Offerings() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [detail, setDetail] = useState<Offering | null>(null);
  const { add, selections } = useInquiry();
  const shown = offerings.filter((o) => filter === "all" || o.category === filter);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter offerings">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            className="filter"
            aria-pressed={filter === c.id}
            onClick={() => setFilter(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className="offerings" aria-live="polite">
        {shown.map((o) => {
          const selected = Boolean(selections[o.id]);
          return (
            <li key={o.id} className="offering">
              <OfferingArt offering={o} />
              <div className="offering-body">
                <p className="offering-tagline">{o.tagline}</p>
                <h3>{o.title}</h3>
                <p>{o.short}</p>
                <div className="offering-actions">
                  <button type="button" className="link-button" onClick={() => setDetail(o)}>
                    What’s included<span className="sr-only"> in {o.title}</span>
                  </button>
                  <button type="button" className="add-button" data-selected={selected} onClick={() => add(o.id)}>
                    {selected ? "Added" : "Add to inquiry"}
                    <span className="sr-only"> {o.title}</span>
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <Modal open={detail !== null} onClose={() => setDetail(null)} labelledBy="offering-title">
        {detail && (
          <>
            <p className="modal-kicker">{detail.tagline}</p>
            <h2 id="offering-title">{detail.title}</h2>
            <p>{detail.description}</p>
            <h3 className="modal-subhead">What’s included</h3>
            <ul className="check-list">
              {detail.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="fine">Scope and fee are agreed before work begins.</p>
            <button
              type="button"
              className="button"
              onClick={() => {
                add(detail.id);
                setDetail(null);
              }}
            >
              Add to inquiry
            </button>
          </>
        )}
      </Modal>
    </>
  );
}
