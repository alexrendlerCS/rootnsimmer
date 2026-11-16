# Root & Simmer Hospitality Co.

Website for Root & Simmer: home and family history research, preservation, and respectful hospitality in Lincolnville, St. Augustine, Florida.

Built with [Next.js](https://nextjs.org) and deployed on [Vercel](https://vercel.com).

## Editing the words on the site

Almost every word on the site lives in **`content/site.ts`**. Open it, change the text between the quotes, and save. That includes the offerings (titles, descriptions, what's included), Kimberly's letter, the values, and the form choices.

- Keep the quotes `"..."` and the commas at the end of lines.
- To use an apostrophe inside text, use the curly one: `’`.
- The contact email is set once at the top: `contactEmail`.

Images are in **`public/`**:

| File | Used for |
| --- | --- |
| `lincolnville-home.jpeg` | Hero photo in the arched doorway |
| `logo.jpeg` | Full logo in Kimberly's section |
| `oak-mark.jpg` | Round tree mark in the header |

To swap a photo, replace the file and keep the same name. The browser-tab icons are `app/icon.png` and `app/apple-icon.png`.

Colors and fonts are defined at the top of **`app/globals.css`** under "design tokens".

## Running it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Changes show up as soon as you save.

To check that a production build works before pushing:

```bash
npm run build
```

## Deploying

1. In Vercel, choose **Add New → Project** and import this GitHub repository.
2. Leave every setting at its default. Vercel detects Next.js automatically.
3. Click **Deploy**.

Every push to `main` deploys automatically after that. Pull requests get their own preview link.

Optional: once you have a custom domain, add an environment variable `NEXT_PUBLIC_SITE_URL` (for example `https://rootandsimmer.com`) so link previews on social media and texts use the right address.

## How the forms work

There's no server or database. Each form (inquiry, Lincolnville Connection, records request) opens a pre-written email draft in the visitor's own email app, addressed to `rootnsimmer@gmail.com`. Nothing is sent until the visitor presses send there. Selections in "Your inquiry" are remembered in the visitor's browser.

## Project layout

```
app/
  layout.tsx        fonts, page title, link-preview info
  page.tsx          the page, section by section
  globals.css       all styling
components/         interactive parts (header menu, offerings, dialogs, forms)
content/site.ts     all the words
lib/email.ts        builds the email drafts
public/             images
```
