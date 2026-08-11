# Fluso docs

The Fluso product documentation site, published at [docs.fluso.ai](https://docs.fluso.ai). Built with [Fumadocs](https://fumadocs.dev) (Next.js, static export) and deployed to Cloudflare Pages.

## Development

```bash
npm install
npm run dev     # preview at http://localhost:3000
npm run build   # static export into out/
npm run start   # serve the built out/ directory
```

## Structure

- `content/docs/` — the pages, as MDX with YAML frontmatter. Folder structure maps to URLs (`content/docs/features/chat.mdx` → `/features/chat`).
- `content/docs/meta.json` — sidebar order and group labels; per-folder `meta.json` files order pages within a group.
- `components/mintlify.tsx` — Mintlify-compatible MDX components (`<Card>`, `<CardGroup>`, `<Accordion>`, `<AccordionGroup>`, `<Note>`, `<Warning>`, `<Tip>`, `<Frame>`, `<Steps>`, `<Update>`), so content written for Mintlify renders unchanged.
- `public/` — images, logos, favicon.
- `app/` — the Next.js app: docs routes at the site root, static search index (`/api/search`), `llms.txt`, per-page markdown (`/<page>/content.md` under `/llms.mdx`), and OG images.

Writing rules and voice live in [AGENTS.md](AGENTS.md).

## Deployment

Pushes to `main` build and deploy via `.github/workflows/deploy.yml` (Cloudflare Pages, project `fluso-docs`). Requires the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repo secrets.
