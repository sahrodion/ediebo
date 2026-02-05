## EDIEBO LTD Website

Premium, Apple-inspired marketing site built with Next.js App Router, Tailwind CSS, TypeScript, and Framer Motion.

### Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Editing Content

- Projects: `src/content/projects.ts`
- Services: `src/content/services.ts`
- Testimonials: `src/content/testimonials.ts`
- FAQs: `src/content/faqs.ts`

### Add a Case Study

1. Add a new project object in `src/content/projects.ts`.
2. Include a unique `slug` and image paths in `gallery`.
3. Add placeholder images in `public/images/projects/`.
4. The case study page at `/work/[slug]` renders automatically.

### Update Colors or Fonts

- Theme tokens: `tailwind.config.ts`
- Base styles: `src/app/globals.css`
- Fonts: `src/app/layout.tsx` (next/font setup)

### Contact Form

- Client form: `src/app/contact/ContactClient.tsx`
- API route: `src/app/api/contact/route.ts`

### Deployment (Vercel)

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Build command: `npm run build`
4. Output: Next.js default

### Sitemap & Robots

Generated via `next-sitemap` during `postbuild`. Config: `next-sitemap.config.js`.
