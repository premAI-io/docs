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

## Keeping the Agents guides current

The October 8, 2026 refresh was checked against backend `dev` at [54df16716](https://github.com/premAI-io/premapp-backend/commit/54df16716fd37ddb1d48faff1b6f14bc05a8a6df) and frontend `dev` at [529cd9f6b](https://github.com/premAI-io/fluso-frontend/commit/529cd9f6b3b06d9cbb7c57acd6e52eb1da0e62df). These are development behavior, not a claim about production rollout.

Check both sides when updating the guides:

| Behavior | Backend source | Frontend source (under `apps/frontend/src/`) |
| --- | --- | --- |
| Setup, edits, capabilities, context | `agents/src/agent-library/{service,chat-binding}.ts`, `agents/src/context/assembler.ts`, `agents/prompts/agent-manager.md` | `features/agents/components/{agent-manager,agent-form,agent-capability-select}.tsx` |
| Sessions and queued work | `agents/src/hosted/{flusoctl,session-controller}.ts` | `features/agents/components/agent-sessions.tsx`, `features/chats/components/ChatMessagesPanel.tsx` |
| Routines and Inbox | `backend/aci/server/services/agent_schedules.py`, `backend/aci/server/routes/agent_runs.py` | `features/agents/components/agent-routines-page.tsx`, `app/(dashboard)/agents/inbox/page.tsx`, `stores/inbox-seen-store.ts` |
| Sharing and starting points | `backend/aci/server/{routes/agent_shares,services/agent_templates}.py`, `agents/src/agent-library/share-resources.ts` | `features/agents/components/{agent-share-dialog,agent-import-page}.tsx` |
| Availability and approvals | `backend/aci/common/db/crud/mcp_permission_modes.py`, `backend/aci/server/routes/mcp/permissions.py` | `lib/config.ts`, `features/mcp/lib/permission-mode.ts` |
| API contracts | `backend/aci/server/routes/`, `backend/aci/common/schemas/` | `features/agents/api/`, `lib/api/`, `app/auth/client/page.tsx` |

The examples use generalized patterns from a read-only review of development conversations, tool results, and saved files. They contain no account transcripts, customer data, or credentials. Custom service examples describe prerequisites rather than built-in capabilities.

The reading path starts with one meeting-preparation task, then refinement and scheduling. Examples, detailed behavior, and developer reference are separate, collapsed sidebar groups. Introduce a feature when it helps the reader do something. Use natural requests and explain necessary terms where they first appear.

Five product screenshots come from these `dev` revisions running locally with a Clerk test account and real model calls. The first walkthrough uses clearly identified sample workshop notes, including a correction to the Agent's cost assumptions. The longer launch-review example used this documentation draft and its validation report. It covered file uploads, separate working sessions, Manager refinement, a one-time routine, and Inbox. The cookie-consent dependency was built from its genuine `v1.0.0` source because private-registry access was unavailable. No responses or product states were mocked.

Use source behavior over old release notes. Remove retired pages from navigation and add their replacements to `public/_redirects`, including markdown export URLs. Cloudflare Pages serves these redirects; Next's local dev server does not.

## Deployment

Pushes to `main` build and deploy via `.github/workflows/deploy.yml` (Cloudflare Pages, project `fluso-docs`). Requires the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repo secrets.
