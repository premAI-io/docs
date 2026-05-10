# Fluso documentation — agent instructions

## About this project

- This is the Fluso product documentation site, built on [Mintlify](https://mintlify.com).
- Pages are MDX files with YAML frontmatter.
- Configuration lives in `docs.json`.
- Run `mint dev` to preview locally.
- Run `mint broken-links` to check links.

## Information architecture

The IA tracks the user's journey from "just landed" to "pro user". Five sidebar groups:

- **Get started** — `/introduction`, `/quickstart`, `/going-deeper`. The path from "is this for me?" through "I have it set up" to "I've made it part of my work".
- **Workflows** — `/workflows/*`. Six concrete stories: morning brief, meetings, research-to-deck, content launch, bug-to-PR, knowledge recall.
- **Features** — `/features/*`. Capability reference: chat, email, calendar, tasks, memory, content, research, code.
- **Integrations** — `/integrations/*`. Per-app setup pages plus the catalog overview: overview, gmail, google-calendar, slack, github.
- **Reference** — `/resources/*`. Pricing, security, FAQ.

The home page (`/`) is a router into the journey, with three sections: just landed, already set up, daily user.

`/going-deeper` is the page that turns daily users into pros: projects, custom skills, prompt patterns, knowledge graph maintenance, cross-app combinations, approval discipline.

## Terminology

- **Fluso** — the product.
- **Connectors** / **integrations** — the connections to third-party apps. Use interchangeably. "Connector" is what users see in **Settings → Connectors**.
- **Knowledge graph** — Fluso's persistent memory of people, projects, decisions, and conversations. Lowercase.
- **Skills** — specialised capabilities that activate automatically (PDF generation, deep research, etc.).
- **Projects** — workspaces that scope context, files, and tasks.

## Visual design

- Theme: `mint` (Mintlify's cleanest variant).
- Palette: deep purple primary (`#5B21B6`), `#7C3AED` light, `#3B0764` dark.
- Logo: minimal text wordmark in `logo/{light,dark}.svg`. Favicon: `favicon.svg` (simple "F" on brand purple).
- `style.css` is intentionally near-empty. Resist the urge to add decorative CSS. If a page needs visual structure, reach for Mintlify components first.
- No hero images, gradient backgrounds, or template artifacts. Minimal is the brand.

## Voice and writing rules

The docs follow Wikipedia's "Signs of AI writing" guide. The bans below are not stylistic preferences; they are tells that make text sound AI-generated.

**Banned vocabulary.** leverage, utilize, robust, seamless, comprehensive, holistic, ultimately, moreover, furthermore, additionally, in essence, notably, "it's important to note", compound effect, shines, magic, unlock, drowning, elevate, empower, transform, vibrant, crucial, pivotal, intricate, tapestry, foster, garner.

**Banned patterns.** Negative parallelisms ("not just X, it's Y"). Rule-of-three padding. -ing analysis modifiers ("ensuring smooth onboarding", "fostering growth"). Vague attributions ("most users find", "experts agree"). Throat-clearing transitions ("Here's what happens", "What this means is"). Title-case headings (sentence case only). Curly quotes (straight only). Adjective stacks ("modern, clean, professional").

**Em dashes.** Used sparingly, for genuine asides. Never as a generic punchy substitute for a comma or period. Cut on sight if a period would work.

**Specifics over abstractions.** Numbers, file paths, commands, real prompts. Cut "very", "really", "simply".

**Have opinions, vary rhythm.** Mix short and long sentences. Don't just describe; the writer's actual take should come through. "This is the connection that pays back fastest" is better than "Setup time: 30 seconds."

## Style preferences

- Active voice, second person ("you").
- Sentence case for headings.
- Bold for UI elements: **Settings → Connectors**.
- Code formatting for file names, commands, paths, code references.
- Sample user prompts in italicised blockquotes: `> *"Summarise my unread emails."*`.
- Mintlify components (`<Card>`, `<CardGroup>`, `<Steps>`, `<AccordionGroup>`, `<Note>`, `<Tip>`, `<Warning>`) over raw HTML.
- Tables for comparison. Lists for sequences. Prose for stories.
- No emojis in body text. Acceptable in tables (✅, —) where they reduce visual clutter.

## Content boundaries

- Never invent feature behaviour. If a capability isn't documented in source materials, leave it out.
- Always pair "Fluso can send X" with the approval safety note: drafts are shown for review.
- For product actions, refer users to download the desktop app from `https://fluso.ai/download` (Mac or Windows) and to support at `support@premai.io`. Don't link to `app.fluso.ai` — Fluso is a desktop app.
