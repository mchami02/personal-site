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

## Cloudflare Pages

Connect this repository to Cloudflare Pages with:

- Framework preset: **Create React App**
- Build command: `npm run build`
- Build output directory: `build`
- Node.js version: `20` or newer

No environment variables or server runtime are required. The site is fully static.
