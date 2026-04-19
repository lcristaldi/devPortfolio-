# Danny Montoya — Portfolio

A painterly bookshelf of projects, plus a small magazine of writing. Built as a single-page React app styled to feel more like a room than a resume.

Live: _coming soon_

## Stack

- **Vite** + **React 18** (JSX, no TypeScript by choice)
- **Tailwind CSS** for layout and type
- **Framer Motion** for motion
- **react-pageflip** for the magazine section
- Hash-based routing (no router dependency) for the long-form blog posts

## Local development

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:5180`.

### Optional: local project launcher

`npm start` brings up the Vite dev server alongside a small heartbeat daemon that the launcher grid uses to show live project status on my personal machine. The heartbeat is gated to `DEV` mode only — production builds never attempt to contact it.

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Deploy

This repo ships a `vercel.json` with sane security headers, asset caching, and an SPA fallback. The project is ready to deploy to Vercel with zero config — just point it at the repo.

For other hosts (Netlify, Cloudflare Pages, static S3), the build output in `dist/` is a plain SPA. The only host-level requirement is an SPA catch-all rewrite to `/index.html`.

## Structure

```
src/
  Launcher.jsx          — the main room (bookshelf, hero, contact, magazine)
  main.jsx              — app entry + hash router for blog posts
  blogs.js              — blog registry
  registry.js           — project registry
  blog-posts/           — one JSX file per long-form post
  components/           — shared UI (contact icons, magazine, etc.)
  assets/               — local images / illustrations
public/
  assets/               — static media (project scenes, blog photos)
  favicon.svg           — site icon
  robots.txt            — crawler rules
  sitemap.xml           — crawler index
```

## License

All content (writing, artwork, photos) is © Danny Montoya and is not licensed for redistribution. The code is intentionally unlicensed — feel free to read it, borrow ideas, but please don't ship a copy of this site.
