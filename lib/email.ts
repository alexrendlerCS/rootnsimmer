import { contactEmail } from "@/content/site";

/** Opens the visitor's email app with a pre-written draft. Nothing is sent automatically. */
export function openEmailDraft(subject: string, body: string) {
  const href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}
