# Root & Simmer Hospitality Co.

Static HTML, CSS, and JavaScript website. No dependencies or build step.

## Edit with Codex
Open this folder in the Codex app or terminal. Main files:
- `dist/index.html`: page content
- `dist/style.css`: styling
- `dist/app.js`: services, selections, and email forms
- `dist/*.jpeg`: images

Preview locally: `python3 -m http.server 3000 --directory dist`, then open http://localhost:3000.

## GitHub and Vercel
Create a GitHub repository and push this folder. In Vercel, import the repository.
Use framework preset **Other**, no build command, and output directory **dist**.
The included vercel.json sets the output directory. No environment variables are needed.
Future pushes to the production branch will deploy through Vercel's GitHub integration.

Forms open the visitor's email app; there is no backend or payment processing.
This export preserves the live website assets and excludes internal reference PDFs and Sites metadata.
