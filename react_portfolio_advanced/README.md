# React Portfolio (Advanced)

## Run locally
1) npm install
2) npm run dev

## Build
npm run build

## Dark mode
Uses a ThemeProvider with localStorage; toggle in navbar.

## Contact backend
Two options included:
- **Vercel**: /api/contact.js (uses Node serverless). Set env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL, FROM_EMAIL.
- **Netlify**: netlify/functions/contact.js with same env vars. Endpoint becomes `/.netlify/functions/contact` (you can update fetch URL if deploying to Netlify).

## Deploy (Vercel)
- Push to GitHub, import to Vercel.
- Add env vars in Project Settings → Environment Variables.
- Deploy.

## Deploy (Netlify)
- Link repo, ensure `netlify.toml` present.
- Add env vars in Site settings → Environment variables.
- Deploy.
