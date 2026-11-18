# Chetan Kadadi — Portfolio

A React + TypeScript + Vite portfolio inspired by the supplied reference recording.

## Run locally
1. Install Node.js LTS.
2. Extract this folder.
3. Open the folder in VS Code.
4. Open Terminal and run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL printed by Vite (usually http://localhost:5173).

## Build for deployment
```bash
npm run build
npm run preview
```
Deploy the project to Vercel by importing the GitHub repository. Framework preset: Vite; build command: `npm run build`; output directory: `dist`.

## Personalize before publishing
- `src/data.ts`: update project details, skills and personal profile links.
- `src/App.tsx`: replace the initials-based portrait placeholder with your own photo and add verified LinkedIn/GitHub URLs.
- Put your resume PDF in `public/` as `Chetan-Kadadi-Resume.pdf`, then add a download button/link in the hero.
- Add real GitHub/live-demo links for projects only after publishing them.
- The contact form uses `mailto:` and opens the visitor's email app; connect Formspree, EmailJS or a backend if you want server-side submissions.

## Accuracy notes
This first version uses the resume supplied in the chat. It lists B.E. CGPA as 9.00, Codec Technologies internship dates as Oct–Nov 2025, 250+ DSA problems and a contest rating of 1610. Update anything that has changed before publishing.
