# Fluso documentation — agent instructions

## About this project

- This is the Fluso product documentation site, built on [Fumadocs](https://fumadocs.dev) (Next.js, static export).
- Pages are MDX files with YAML frontmatter, in `content/docs/`.
- Sidebar navigation lives in `content/docs/meta.json` (plus per-folder `meta.json` files for ordering).
- Mintlify-compatible MDX components (`<Card>`, `<Accordion>`, `<Note>`, `<Update>`, …) are provided by `components/mintlify.tsx`, so pages keep the Mintlify component vocabulary.
- Run `npm run dev` to preview locally; `npm run build` builds the static site into `out/`.

## Information architecture

The navigation keeps Home first and sorts the top-level sections alphabetically. Agents follows the user journey. Other sections keep their existing order:

- **Agents (Beta)** - `/developers/*`. Start with a familiar task, then improvement and scheduling. Keep Examples and More about Agents (`/developers/guides/*`) collapsed by default. Introduce features when they help the reader's current task. Keep prompts natural and explain terms before using them.
- **App setup** - `/integrations/{github, gmail, google-calendar, slack, zoom}`. Per-app permissions and prompts, not feature pages. Use the current Apps catalog under Plugins → MCP → Add MCP. Google services connect separately; native Fluso connectors have the Fluso mark.
- **Deployment models** - `/deployment-models`. Released Fluso Cloud and custom Enterprise deployments requiring confirmed scope.
- **Features** - `/features/*`. Approvals and permissions, Apps and MCP servers, Chat, Confidential mode, Imports, Memory, Projects, Skills, and Tasks.
- **Fluso API** - `/api/*`. Start with access and a first request. Document the released Cloud API; do not publish daemon setup or pairing instructions. Document shared workflows once under Use the API. Lead with a useful task, runnable requests, and the expected result. Reuse the deployment's example helpers. Put protocol details and recovery rules beside the step that needs them. Each deployment's `/docs` and `/v1/openapi.json` own exact request and response schemas. Keep endpoint tables collapsed after the workflow. Preserve old API URLs with redirects.
- **Get started** - `/going-deeper`, `/introduction`, `/quickstart`. These pages explain the path from first setup to daily use.
- **Reference** - `/resources/{availability, faq, legal, pricing}`. Legal links to the terms of service at `https://fluso.ai/terms` and privacy policy at `https://fluso.ai/privacy`; do not duplicate the policies in the docs.
- **Release notes** - `/release-notes`. Customer-facing changes, newest first.
- **Workflows** - `/workflows/*`. Six concrete stories: bug-to-PR, content launch, knowledge recall, meetings, morning brief, and research-to-deck.

The home page (`/`) is a router into the journey, with three sections: just landed, already set up, daily user.

`/going-deeper` is the page that turns daily users into pros: projects, custom skills, prompt patterns, knowledge graph maintenance, cross-app combinations, approval discipline.

## The five-primitive model

This is the mental model the docs use. Every page should reinforce it, not contradict it:

- **Chat** is the interface.
- **Apps & MCP** are the plugs into external apps. Every connection is an MCP connection: managed apps from the catalog, or custom servers by URL.
- **Skills** are the capabilities Fluso reaches for when a request matches one (built-in or custom via `SKILL.md`).
- **Tasks** is the unified to-do system, populated mostly automatically.
- **Memory** includes saved preferences, project context, and working-memory summaries. Do not promise complete automatic indexing of every connected app.

Email, calendar, code, content, research are skills, not separate features. The skills page (`/features/skills`) is the catalog. Per-app integration pages (`/integrations/*`) cover setup and permissions.

## Terminology

- **Fluso** — the product.
- **Apps** / **MCP connections** — the connections to third-party apps. Native Fluso and provider-managed connections live under **Plugins → MCP**. Use **Connectors** when referring to the Agent editor's capability picker.
- **Agent** — saved setup and a continuing main conversation. **Manager** refines that one Agent; **sessions** are delegated conversations; **routines** are scheduled messages. Main conversations take saved setup changes on their next turn; existing delegated sessions retain their setup.
- **Memory** — saved context with the boundaries described on the Memory page.
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

**Em dashes.** Do not use them. Use a hyphen, a comma, or a period instead. If a period would work, use the period. This applies to release notes and every other page.

**Specifics over abstractions.** Numbers, file paths, commands, real prompts. Cut "very", "really", "simply".

**Have opinions, vary rhythm.** Mix short and long sentences. Don't just describe; the writer's actual take should come through.

Use the [ASD-STE100 writing skill](https://github.com/danyuchn/asd-ste100-skill/blob/master/SKILL.md) for Agents guides. Keep procedures to one action per sentence. Use short sentences, active voice, consistent terms, and explicit conditions. Preserve uncertainty and UI labels. These guidelines do not certify compliance with the official dictionary.

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

- Compare current production release evidence and feature configuration with source before describing a feature as available. A dev merge is not a public release.
- Fluso Local is not enabled in production; the Telegram bot is retired. Keep their setup guides out of navigation, search, and generated Markdown. Redirect old routes to Availability. Preserve historical release notes.
- All standard plans have weekly allowances: Plus is 10 times Free, Pro is 10 times Plus. Do not publish pending accounting changes or internal budget values.
- Native connectors do not imply every catalog entry is native. Encrypted inference does not imply enclave-hosted workspace storage, tools, or connected apps.
- Do not publish an unconfirmed release date, bug-fix version, or measured performance claim.

- Fluso Admin is internal. Do not publish its operator guide, navigation, links, or panel instructions in this public documentation site.
- Never invent feature behaviour. If a capability isn't documented in source materials, leave it out.
- When describing external sends, explain how to request and review a draft and choose **Ask me first**. Do not claim every write requires approval: saved tool rules, connection settings, and the chat's mode determine that behavior.
- Verify Agent behavior against both current frontend and backend code. Do not restore removed Studio graphs, evaluations, version rollback, YAML transfer, webhook triggers, or thread-management toggles from historical release notes.
- For product actions, point users to the desktop downloads at `https://fluso.ai/` and to support at `support@premai.io`. Don't link to `app.fluso.ai`. Fluso has macOS, Windows, and iOS apps. Desktop guides do not establish mobile feature parity.

## Publishing release notes

Customer release notes live on `/release-notes` (`content/docs/release-notes.mdx`) as a stack of `<Update>` blocks, newest first. They are published through a workflow, not edited by hand.

The flow:

1. **Actions → Publish release notes → Run workflow.** Paste one or more GitHub release URLs. List a desktop release and the backend cycle behind it together to publish them as one note.
2. The workflow fetches each release body, loads the `release-notes` skill from [`fluso-development-skills`](https://github.com/premAI-io/fluso-development-skills), and has Claude rewrite them into one `<Update>` entry: frontend-led and version-labelled, backend folded into themes, deduped, customer voice, engineering detail removed. It follows this file's voice rules.
3. The workflow opens a PR with that diff and sends a Slack DM with the link.
4. **Review and merge the PR to publish.** `main` requires an approving review from someone other than the last pusher, so your review is the gate. Merging deploys to docs.fluso.ai.
5. The companion workflow `release-notes-published.yml` then DMs you the published notes, formatted to forward to the prem-app channel if you choose.

Claude writes the entry and opens the PR; it never merges. Your review and merge is the gate, enforced by the branch ruleset. The skill (`SKILL.md` and `references/release-notes-playbook.md`) is the source of truth for how releases map to customer voice and when to combine frontend and backend.
