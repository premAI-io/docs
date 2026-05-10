# Fluso documentation — agent instructions

## About this project

- This is the Fluso product documentation site, built on [Mintlify](https://mintlify.com).
- Pages are MDX files with YAML frontmatter.
- Configuration lives in `docs.json`.
- Run `mint dev` to preview locally.
- Run `mint broken-links` to check links.

## Information architecture

- `/` — home (custom landing layout in `index.mdx`).
- `/introduction` — what Fluso is and who it's for.
- `/quickstart` — 5-minute setup.
- `/connect-apps` — detailed connector walkthroughs.
- `/first-week` — day-by-day onboarding plan.
- `/features/*` — capability deep dives (chat, email, calendar, tasks, memory, content, research, code).
- `/integrations/*` — overview, per-app deep dives (Gmail, Calendar, Slack, GitHub), and the full catalog (`all-apps`).
- `/use-cases/*` — end-to-end workflows (morning brief, email triage, meetings, research → deck, content launch, dev bug fix, knowledge recall).
- `/resources/*` — pricing, security, FAQ.

## Terminology

- **Fluso** — the product.
- **Connectors** / **integrations** — the connections to third-party apps. Use them interchangeably; "connector" is what users see in **Settings → Connectors**.
- **Knowledge graph** — Fluso's persistent memory of people, projects, decisions, and conversations. Capitalise as "knowledge graph" (lowercase).
- **Skills** — specialised capabilities that activate automatically (PDF generation, deep research, etc.).
- **Projects** — workspaces that scope context, files, and tasks.

## Style preferences

- Active voice and second person ("you").
- Sentence case for headings.
- Bold for UI elements: Click **Settings → Connectors**.
- Code formatting for file names, commands, paths, and code references.
- Use `>` blockquotes for sample user prompts to Fluso, in italics: `> *"Summarise my unread emails."*`.
- Use Mintlify components (`<Card>`, `<CardGroup>`, `<Steps>`, `<AccordionGroup>`, `<Note>`, `<Tip>`, `<Info>`, `<Warning>`) instead of raw HTML where possible.
- Tables for comparison-style content. Lists for sequences.
- Avoid emojis in body text; reserved for emphasis in highlight callouts (✅, ❌, 🚨) where it adds clarity.

## Content boundaries

- Never invent feature behaviour. If a capability isn't documented in source materials, leave it out.
- Always pair "Fluso can send X" with the approval safety note: drafts are shown for review.
- Refer users to the App (`https://app.fluso.ai`) and support (`support@premai.io`) for product actions.
