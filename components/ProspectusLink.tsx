/** Download link for the public prospectus and interest form (Kimberly, Nov 19, 2026). */
export const prospectus = {
  href: "/documents/root-simmer-public-prospectus-and-interest-form.pdf",
  label: "Download the Public Prospectus and Interest Form",
  size: "PDF, 2 pages",
};

export function ProspectusLink() {
  return (
    <p className="prospectus-link">
      <a className="doc-link" href={prospectus.href} target="_blank" rel="noopener">
        {prospectus.label}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>{" "}
      <span className="muted">{prospectus.size}. Print it, fill in the interest form and return it to rootnsimmer@gmail.com.</span>
    </p>
  );
}
