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
- **Features** — the five primitives: `/features/{chat, connectors, skills, tasks, memory}`. Everything Fluso does is some combination of these five.
- **Connector setup** — `/integrations/{gmail, google-calendar, slack, github}`. Per-app permissions and prompts, not feature pages.
- **Reference** — `/resources/{pricing, security, privacy, faq}`. Security covers infrastructure; Privacy covers data handling; they're distinct pages.

The home page (`/`) is a router into the journey, with three sections: just landed, already set up, daily user.

`/going-deeper` is the page that turns daily users into pros: projects, custom skills, prompt patterns, knowledge graph maintenance, cross-app combinations, approval discipline.

## The five-primitive model

This is the mental model the docs use. Every page should reinforce it, not contradict it:

- **Chat** is the interface.
- **Connectors** are the plugs into external apps.
- **Skills** are the capabilities Fluso reaches for when a request matches one (built-in or custom via `SKILL.md`).
- **Tasks** is the unified to-do system, populated mostly automatically.
- **Memory** is the knowledge graph that builds in the background.

Email, calendar, code, content, research are skills, not separate features. The skills page (`/features/skills`) is the catalog. Per-app integration pages (`/integrations/*`) cover setup and permissions.

## Terminology

- **Fluso** — the product.
- **Connectors** / **integrations** — the connections to third-party apps. Use interchangeably. "Connector" is what users see in **Settings → Connectors**.
- **Knowledge graph** — Fluso's persistent memory. Lowercase.
- **Skills** — specialised capabilities that activate automatically. Built-in or custom (`SKILL.md`).
- **Projects** — workspaces that scope context, files, and tasks.

## Visual design

- Theme: `mint` (Mintlify's cleanest variant).
- Palette: deep purple primary (`#5B21B6`), `#7C3AED` light, `#3B0764` dark.
- Logo: minimal text wordmark in `logo/{light,dark}.svg`. Favicon: `favicon.svg`.
- `style.css` is intentionally near-empty. Resist the urge to add decorative CSS. If a page needs visual structure, reach for Mintlify components first.
- No hero images, gradient backgrounds, or template artifacts. Minimal is the brand.

## Voice and writing rules

The docs follow Wikipedia's "Signs of AI writing" guide. The bans below aren't stylistic preferences — they're tells that make text sound AI-generated.

**Banned vocabulary.** leverage, utilize, robust, seamless, comprehensive, holistic, ultimately, moreover, furthermore, additionally, in essence, notably, "it's important to note", compound effect, shines, magic, unlock, drowning, elevate, empower, transform, vibrant, crucial, pivotal, intricate, tapestry, foster, garner.

**Banned patterns.** Negative parallelisms ("not just X, it's Y"). Rule-of-three padding. -ing analysis modifiers ("ensuring smooth onboarding"). Vague attributions ("most users find"). Throat-clearing transitions. Title-case headings (sentence case only). Curly quotes (straight only). Adjective stacks ("modern, clean, professional").

**Em dashes.** Sparingly, for genuine asides. Never as a generic punchy substitute for a comma or period. If a period would work, use the period.

**Specifics over abstractions.** Numbers, file paths, commands, real prompts. Cut "very", "really", "simply".

**Have opinions, vary rhythm.** Mix short and long sentences. Don't just describe; the writer's actual take should come through.

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
- For product actions, refer users to the App (`https://app.fluso.ai`) and support (`support@premai.io`).
- Don't write new feature pages for things that fit inside skills (a new skill goes into `/features/skills`, not its own page).
