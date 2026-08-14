# Fluso documentation — agent instructions

## About this project

- This is the Fluso product documentation site, built on [Fumadocs](https://fumadocs.dev) (Next.js, static export).
- Pages are MDX files with YAML frontmatter, in `content/docs/`.
- Sidebar navigation lives in `content/docs/meta.json` (plus per-folder `meta.json` files for ordering).
- Mintlify-compatible MDX components (`<Card>`, `<Accordion>`, `<Note>`, `<Update>`, …) are provided by `components/mintlify.tsx`, so pages keep the Mintlify component vocabulary.
- Run `npm run dev` to preview locally; `npm run build` builds the static site into `out/`.

## Information architecture

The IA tracks the user's journey from "just landed" to "pro user". Five sidebar groups:

- **Get started** — `/introduction`, `/quickstart`, `/going-deeper`. The path from "is this for me?" through "I have it set up" to "I've made it part of my work".
- **Workflows** — `/workflows/*`. Six concrete stories: morning brief, meetings, research-to-deck, content launch, bug-to-PR, knowledge recall.
- **Features** — the five primitives: `/features/{chat, mcp, skills, tasks, memory}`. Everything Fluso does is some combination of these five.
- **App setup** — `/integrations/{gmail, google-calendar, slack, github}`. Per-app permissions and prompts, not feature pages. All of them connect through the Apps tab of the Add MCP dialog.
- **Reference** — `/resources/{pricing, security, privacy, faq}`. Security covers infrastructure; Privacy covers data handling; they're distinct pages.

The home page (`/`) is a router into the journey, with three sections: just landed, already set up, daily user.

`/going-deeper` is the page that turns daily users into pros: projects, custom skills, prompt patterns, knowledge graph maintenance, cross-app combinations, approval discipline.

## The five-primitive model

This is the mental model the docs use. Every page should reinforce it, not contradict it:

- **Chat** is the interface.
- **Apps & MCP** are the plugs into external apps. Every connection is an MCP connection: managed apps from the catalog, or custom servers by URL.
- **Skills** are the capabilities Fluso reaches for when a request matches one (built-in or custom via `SKILL.md`).
- **Tasks** is the unified to-do system, populated mostly automatically.
- **Memory** is the knowledge graph that builds in the background.

Email, calendar, code, content, research are skills, not separate features. The skills page (`/features/skills`) is the catalog. Per-app integration pages (`/integrations/*`) cover setup and permissions.

## Terminology

- **Fluso** — the product.
- **Apps** / **MCP connections** — the connections to third-party apps. There is no separate connector system; "Plugins" is the sidebar item, and connections live under **Plugins → MCP**. Don't introduce "connector" in new copy except where the app itself still says "connector tools" (the approvals settings).
- **Knowledge graph** — Fluso's persistent memory. Lowercase.
- **Skills** — specialised capabilities that activate automatically. Built-in or custom (`SKILL.md`).
- **Projects** — workspaces that scope context, files, and tasks.

## Visual design

- Theme: Fumadocs neutral preset with the brand primary overridden in `app/global.css`.
- Palette: deep purple primary (`#5B21B6`), `#7C3AED` light, `#3B0764` dark.
- Logo: minimal text wordmark in `public/logo/{light,dark}.svg`. Favicon: `public/favicon.svg`.
- Custom CSS stays minimal. Resist the urge to add decorative CSS. If a page needs visual structure, reach for the components in `components/mintlify.tsx` first.
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
- Bold for UI elements: **Plugins → MCP**.
- Code formatting for file names, commands, paths, code references.
- Sample user prompts in italicised blockquotes: `> *"Summarise my unread emails."*`.
- Mintlify-style components (`<Card>`, `<CardGroup>`, `<Steps>`, `<Accordion>`, `<Note>`, `<Tip>`, `<Warning>`, from `components/mintlify.tsx`) over raw HTML.
- Tables for comparison. Lists for sequences. Prose for stories.
- No emojis in body text. Acceptable in tables (✅, —) where they reduce visual clutter.

## Content boundaries

- Never invent feature behaviour. If a capability isn't documented in source materials, leave it out.
- Always pair "Fluso can send X" with the approval safety note: drafts are shown for review.
- For product actions, point users to the macOS download at `https://fluso.ai/` and to support at `support@premai.io`. Don't link to `app.fluso.ai`. Fluso is a desktop app.

## Publishing release notes

Customer release notes live on `/release-notes` (`content/docs/release-notes.mdx`) as a stack of `<Update>` blocks, newest first. They are published through a workflow, not edited by hand.

The flow:

1. **Actions → Publish release notes → Run workflow.** Paste one or more GitHub release URLs. List a desktop release and the backend cycle behind it together to publish them as one note.
2. The workflow fetches each release body, loads the `release-notes` skill from [`fluso-development-skills`](https://github.com/premAI-io/fluso-development-skills), and has Claude rewrite them into one `<Update>` entry: frontend-led and version-labelled, backend folded into themes, deduped, customer voice, engineering detail removed. It follows this file's voice rules.
3. The workflow opens a PR with that diff and sends a Slack DM with the link.
4. **Review and merge the PR to publish.** `main` requires an approving review from someone other than the last pusher, so your review is the gate. Merging deploys to docs.fluso.ai.
5. The companion workflow `release-notes-published.yml` then DMs you the published notes, formatted to forward to the prem-app channel if you choose.

Claude writes the entry and opens the PR; it never merges. Your review and merge is the gate, enforced by the branch ruleset. The skill (`SKILL.md` and `references/release-notes-playbook.md`) is the source of truth for how releases map to customer voice and when to combine frontend and backend.
