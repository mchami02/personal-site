# Mamoun Chami — Personal site

A single-page portfolio for Mamoun Chami, built as a static React application.

## Local development

```bash
npm ci
npm start
```

## Production build

```bash
npm run build
```

The generated site is written to `build/`.

For Cloudflare Workers Builds, use `npx wrangler deploy`. The Wrangler configuration
deploys the generated `build/` directory as a single-page application.

## Cloudflare Pages

Connect this repository to Cloudflare Pages with:

- Framework preset: **Create React App**
- Build command: `npm run build`
- Build output directory: `build`
- Node.js version: `22.16.0` or newer

No environment variables or server runtime are required. The site is fully static.
