# pasich-site

Personal website of **Andrii Pasichnyk** ([pasichDev](https://github.com/pasichDev)) — Software Architect, systems & security engineer.
Live at **[pasichdev.xyz](https://pasichdev.xyz/)**.

Built with [Astro](https://astro.build) — static, zero client-side framework, shipped as plain HTML/CSS with a few small islands.

## What's inside

- **Home** — intro, GitHub activity heatmap, contact section.
- **CV** (`/cv`) — experience and skills.
- **Links** (`/links`) — link-in-bio hub (data-driven from `src/data/links.json`).
- **Apps** (`/apps/*`) — landing + privacy policy pages for **Felisca** and **MyNotes**.
- **Tools** (`/tools/*`) — in-browser utilities: **QR generator** and **icon generator** (run fully client-side).

## Tech stack

- **Astro 5** — static site generation.
- **astro-icon** with Iconify sets (`@iconify-json/mdi`, `@iconify-json/solar`).
- **@astrojs/sitemap** — auto-generated `sitemap-index.xml`.
- Custom CSS in `src/styles/global.css` (no CSS framework).

## SEO / GEO

- Per-page Open Graph & Twitter cards; site-wide `1200×630` OG default.
- `Person` JSON-LD structured data (`schema.org`) on every page for search & generative-engine optimization.
- Sitemap + canonical URLs.

## Security

- [`public/.well-known/security.txt`](public/.well-known/security.txt) — RFC 9116 security policy.
- [`public/_headers`](public/_headers) — CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, COOP/CORP.
  Netlify / Cloudflare Pages format; replicate at the server/CDN layer if hosted elsewhere.

## Project structure

```
src/
├── components/ui/   FeatureCard, ToolCard, GitHubHeatmap
├── data/            links.json
├── layouts/         BaseLayout.astro  (head, meta, JSON-LD, nav, footer)
├── pages/           routes (see "What's inside")
└── styles/          global.css
public/
├── .well-known/     security.txt
└── _headers         security & cache headers
```

## Development

```bash
npm install        # install dependencies
npm run dev        # local dev server (http://localhost:4321)
npm run build      # production build → ./dist
npm run preview    # preview the production build locally
```

## License

Personal project — all rights reserved unless stated otherwise.
