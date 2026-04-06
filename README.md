# Superclear — Next.js Site

## Setup

```bash
npm install
npm run dev
```

## Customization Checklist

### 1. Logo
Copy `Superclear-Logo.png` into the `/public` folder.

### 2. Background Video
- Add a looping video file to `/public/bg-video.mp4`
- Recommended: dark, abstract, slow-moving footage (smoke, water, particles)
- Keep it short (5–15s) and compressed for fast loading
- Free options: Pexels, Coverr, Mixkit

### 3. PDF URL
In `app/page.tsx`, replace the iframe `src` with your hosted PDF URL:

```tsx
<iframe
  src="https://your-hosted-pdf-url.com/menu-pricing.pdf"
  ...
/>
```

Options for hosting PDFs:
- **Vercel Blob** — upload via dashboard, paste the URL
- **Google Drive** — share link → change `/view` to `/preview`
- **Dropbox** — share link → change `?dl=0` to `?raw=1`
- **AWS S3 / Cloudflare R2** — public bucket URL

### 4. Contact Email
Update the `href` on the Contact button in `app/page.tsx`:

```tsx
<a href="mailto:your@email.com">Contact</a>
```

### 5. Hero Copy
Edit the tagline and description text in `app/page.tsx` as needed.

## Project Structure

```
superclear/
├── app/
│   ├── layout.tsx       ← Root layout + metadata
│   ├── page.tsx         ← Main page (nav, hero, PDF modal)
│   └── globals.css      ← Noise overlay, typography, animations
├── public/
│   ├── Superclear-Logo.png
│   └── bg-video.mp4
├── next.config.js
├── tailwind.config.js
└── package.json
```
# Superclear-V1
