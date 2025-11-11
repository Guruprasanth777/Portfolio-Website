# React Portfolio v2
Modern, animated, dark-mode portfolio built with React + Vite + Tailwind + Framer Motion.

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Contact backend
- **Vercel** function at `/api/contact` (uses Nodemailer). Set env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL, FROM_EMAIL.
- **Netlify** function at `/.netlify/functions/contact` (same env). If using Netlify, change fetch URL in `Contact.jsx` accordingly.

## Deploy to Vercel
1. Push this folder to GitHub.
2. Import the repo in Vercel. Framework preset: **Vite**.
3. Build command: `npm run build` • Output: `dist`
4. Add environment variables (Project Settings → Environment Variables).
5. Deploy.
