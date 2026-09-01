import {
  Bot,
  Clock3,
  Database,
  FileText,
  FolderClosed,
  MessageSquareText,
  Network,
  PlugZap,
  Server,
  ShieldCheck,
  Users,
} from 'lucide-react';

function Layer({
  label,
  detail,
  icon: Icon,
  emphasis = false,
}: {
  label: string;
  detail: string;
  icon: typeof FolderClosed;
  emphasis?: boolean;
}) {
  return (
    <div
      className={
        emphasis
          ? 'rounded-lg border border-fd-primary/30 bg-fd-primary/10 p-3'
          : 'rounded-lg border bg-fd-background p-3'
      }
    >
      <div className="flex items-center gap-2">
        <Icon aria-hidden="true" className="size-4 shrink-0 text-fd-primary" />
        <span className="font-medium text-fd-foreground">{label}</span>
      </div>
      <p className="mt-1 text-xs leading-relaxed text-fd-muted-foreground">
        {detail}
      </p>
    </div>
  );
}

function ProjectMemory({ name }: { name: string }) {
  return (
    <div className="rounded-xl border bg-fd-card p-3">
      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-fd-foreground">
        <FolderClosed aria-hidden="true" className="size-4 text-fd-primary" />
        {name}
        <span className="ms-auto rounded-full bg-fd-muted px-2 py-0.5 text-[11px] font-normal text-fd-muted-foreground">
          private scope
        </span>
      </div>
      <div className="space-y-2">
        <Layer
          label="Project context"
          detail="Durable facts, decisions, and conventions"
          icon={FileText}
        />
        <Layer
          label="Working memory"
          detail="Recent activity, open items, and files touched"
          icon={Clock3}
        />
      </div>
    </div>
  );
}

export function MemoryScopeDiagram() {
  return (
    <figure
      aria-labelledby="memory-scope-caption"
      className="not-prose my-6 rounded-xl border bg-fd-muted/30 p-4 sm:p-5"
    >
      <Layer
        label="Global preferences"
        detail="Your timezone, response style, and standing instructions apply in every project"
        icon={Users}
        emphasis
      />

      <div aria-hidden="true" className="mx-auto h-5 w-px bg-fd-border" />
      <div className="grid gap-3 sm:grid-cols-2">
        <ProjectMemory name="Project A" />
        <ProjectMemory name="Project B" />
      </div>

      <figcaption
        id="memory-scope-caption"
        className="mt-4 text-center text-xs leading-relaxed text-fd-muted-foreground"
      >
        Global preferences apply everywhere. Project context and working memory
        stay inside their project.
      </figcaption>
    </figure>
  );
}

const graphNodes = [
  { label: 'People', x: 104, y: 86, icon: Users },
  { label: 'Meetings', x: 318, y: 62, icon: MessageSquareText },
  { label: 'Decisions', x: 532, y: 130, icon: FileText },
  { label: 'Files', x: 340, y: 230, icon: FileText },
  { label: 'Projects', x: 118, y: 226, icon: FolderClosed },
] as const;

const graphEdges = [
  [0, 1],
  [0, 4],
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [3, 4],
] as const;

export function KnowledgeGraphDiagram() {
  return (
    <figure
      aria-labelledby="knowledge-graph-caption"
      className="not-prose my-6 overflow-hidden rounded-xl border bg-fd-muted/30 p-3 sm:p-5"
    >
      <svg
        role="img"
        aria-labelledby="knowledge-graph-title knowledge-graph-description"
        className="h-auto w-full"
        viewBox="0 0 640 340"
      >
        <title id="knowledge-graph-title">How the knowledge graph grows</title>
        <desc id="knowledge-graph-description">
          People, meetings, decisions, files, and projects form connected nodes.
          The connections accumulate over time.
        </desc>

        <g className="stroke-fd-border" strokeWidth="2">
          {graphEdges.map(([from, to]) => (
            <line
              key={`${from}-${to}`}
              x1={graphNodes[from].x}
              y1={graphNodes[from].y}
              x2={graphNodes[to].x}
              y2={graphNodes[to].y}
            />
          ))}
        </g>

        {graphNodes.map(({ label, x, y, icon: Icon }) => (
          <g key={label} transform={`translate(${x} ${y})`}>
            <circle
              className="fill-fd-card stroke-fd-primary/40"
              r="42"
              strokeWidth="2"
            />
            <Icon
              aria-hidden="true"
              className="text-fd-primary"
              x="-10"
              y="-19"
              width="20"
              height="20"
            />
            <text
              className="fill-fd-foreground text-[13px] font-medium"
              textAnchor="middle"
              y="17"
            >
              {label}
            </text>
          </g>
        ))}

        <g transform="translate(62 302)">
          <line
            className="stroke-fd-muted-foreground/40"
            x1="0"
            y1="0"
            x2="516"
            y2="0"
            strokeWidth="2"
          />
          <path
            className="fill-fd-muted-foreground/40"
            d="M516 0 505 -6 505 6Z"
          />
          <text className="fill-fd-muted-foreground text-[12px]" x="0" y="22">
            First conversations
          </text>
          <text
            className="fill-fd-muted-foreground text-[12px]"
            x="516"
            y="22"
            textAnchor="end"
          >
            More connected context
          </text>
        </g>
      </svg>

      <figcaption
        id="knowledge-graph-caption"
        className="mt-1 text-center text-xs leading-relaxed text-fd-muted-foreground"
      >
        Fluso connects people, meetings, decisions, files, and projects as it
        works with them.
      </figcaption>
    </figure>
  );
}

const architectureServices = [
  {
    label: 'Fluso client',
    detail: 'Desktop or remote',
    x: 10,
    icon: MessageSquareText,
  },
  {
    label: 'Edge',
    detail: 'TLS + routing',
    x: 162,
    icon: ShieldCheck,
  },
  {
    label: 'REST API',
    detail: 'Identity + records',
    x: 314,
    icon: Server,
  },
  {
    label: 'Agent gateway',
    detail: 'Admission + routing',
    x: 466,
    icon: Network,
    emphasis: true,
  },
  {
    label: 'User runtime',
    detail: 'Thread worker + tools',
    x: 618,
    icon: Bot,
  },
] as const;

const architectureData = [
  {
    label: 'PostgreSQL',
    detail: 'Platform records',
    owner: 'REST API',
    x: 380,
    icon: Database,
  },
  {
    label: 'Isolated user storage',
    detail: 'Projects, sessions, Agents',
    owner: 'Gateway + runtime',
    x: 532,
    icon: FolderClosed,
  },
] as const;

const ARCHITECTURE_NODE_WIDTH = 132;

function ArchitectureNode({
  label,
  detail,
  x,
  icon: Icon,
  emphasis = false,
}: {
  label: string;
  detail: string;
  x: number;
  icon: typeof FolderClosed;
  emphasis?: boolean;
}) {
  return (
    <g transform={`translate(${x} 54)`}>
      <rect
        className={
          emphasis
            ? 'fill-fd-primary/10 stroke-fd-primary/50'
            : 'fill-fd-card stroke-fd-border'
        }
        width={ARCHITECTURE_NODE_WIDTH}
        height="76"
        rx="10"
        strokeWidth="1.5"
      />
      <Icon
        aria-hidden="true"
        className={
          emphasis ? 'text-fd-primary' : 'text-fd-muted-foreground'
        }
        x={ARCHITECTURE_NODE_WIDTH / 2 - 8}
        y="11"
        width="16"
        height="16"
      />
      <text
        className="fill-fd-foreground text-[14px] font-semibold"
        x={ARCHITECTURE_NODE_WIDTH / 2}
        y="45"
        textAnchor="middle"
      >
        {label}
      </text>
      <text
        className="fill-fd-muted-foreground text-[11px]"
        x={ARCHITECTURE_NODE_WIDTH / 2}
        y="63"
        textAnchor="middle"
      >
        {detail}
      </text>
    </g>
  );
}

export function ArchitectureDiagram() {
  return (
    <figure
      aria-labelledby="architecture-caption"
      className="not-prose my-6 overflow-hidden rounded-xl border bg-fd-muted/30 p-3 sm:p-5"
    >
      <p className="mb-2 text-xs text-fd-muted-foreground sm:hidden">
        Scroll horizontally to view the full diagram.
      </p>
      <div
        aria-label="Scrollable architecture diagram"
        className="overflow-x-auto"
        tabIndex={0}
      >
        <svg
          role="img"
          aria-labelledby="architecture-title architecture-description"
          className="h-auto w-full min-w-[760px]"
          viewBox="0 0 760 386"
        >
          <title id="architecture-title">
            Fluso request and data boundaries
          </title>
          <desc id="architecture-description">
            A Fluso client sends an authenticated request through the edge, REST
            API, Agent gateway, and a user runtime. The API owns platform
            records. The gateway and runtime use durable workspace storage. The
            runtime queries knowledge and calls governed MCP servers.
          </desc>

          <defs>
            <marker
              id="architecture-arrow"
              markerHeight="8"
              markerWidth="8"
              orient="auto"
              refX="7"
              refY="4"
              viewBox="0 0 8 8"
            >
              <path className="fill-fd-muted-foreground" d="M0 0 8 4 0 8Z" />
            </marker>
          </defs>

          <text
            className="fill-fd-muted-foreground text-[11px] font-medium"
            x="20"
            y="24"
          >
            Request path
          </text>

          <g
            className="stroke-fd-muted-foreground/70"
            fill="none"
            markerEnd="url(#architecture-arrow)"
            strokeWidth="1.5"
          >
            <path d="M142 92H156" />
            <path d="M294 92H308" />
            <path d="M446 92H460" />
            <path d="M598 92H612" />
            <path d="M380 130V204" />
            <path d="M532 130V204" />
            <path d="M684 130V204" />
          </g>

          {architectureServices.map((node) => (
            <ArchitectureNode key={node.label} {...node} />
          ))}

          <rect
            className="fill-fd-card stroke-fd-border"
            x="302"
            y="210"
            width="448"
            height="156"
            rx="12"
            strokeWidth="1.5"
          />
          <text
            className="fill-fd-muted-foreground text-[11px] font-medium"
            x="318"
            y="235"
          >
            Data and context
          </text>
          <line
            className="stroke-fd-border"
            x1="318"
            x2="734"
            y1="250"
            y2="250"
          />
          <line
            className="stroke-fd-border"
            x1="452"
            x2="452"
            y1="264"
            y2="350"
          />
          <line
            className="stroke-fd-border"
            x1="602"
            x2="602"
            y1="264"
            y2="350"
          />

          {architectureData.map(({ label, detail, owner, x, icon: Icon }) => (
            <g key={label} transform={`translate(${x} 0)`}>
              <Icon
                aria-hidden="true"
                className="text-fd-muted-foreground"
                x="-8"
                y="270"
                width="16"
                height="16"
              />
              <text
                className="fill-fd-foreground text-[13px] font-semibold"
                textAnchor="middle"
                y="307"
              >
                {label}
              </text>
              <text
                className="fill-fd-muted-foreground text-[10px]"
                textAnchor="middle"
                y="327"
              >
                {detail}
              </text>
              <text
                className="fill-fd-muted-foreground text-[10px] font-medium"
                textAnchor="middle"
                y="349"
              >
                {owner}
              </text>
            </g>
          ))}

          <g transform="translate(684 0)">
            <Bot
              aria-hidden="true"
              className="text-fd-muted-foreground"
              x="-8"
              y="267"
              width="16"
              height="16"
            />
            <text
              className="fill-fd-foreground text-[13px] font-semibold"
              textAnchor="middle"
              y="301"
            >
              Runtime context
            </text>
            <g transform="translate(-68 314)">
              <FileText
                aria-hidden="true"
                className="text-fd-muted-foreground"
                width="13"
                height="13"
              />
              <text
                className="fill-fd-muted-foreground text-[10px]"
                x="18"
                y="11"
              >
                Knowledge service
              </text>
            </g>
            <g transform="translate(-68 338)">
              <PlugZap
                aria-hidden="true"
                className="text-fd-muted-foreground"
                width="13"
                height="13"
              />
              <text
                className="fill-fd-muted-foreground text-[10px]"
                x="18"
                y="11"
              >
                MCP servers
              </text>
            </g>
          </g>
        </svg>
      </div>

      <figcaption
        id="architecture-caption"
        className="mt-1 text-center text-xs leading-relaxed text-fd-muted-foreground"
      >
        Compute, platform state, workspace data, knowledge, and external sources
        meet through explicit service boundaries.
      </figcaption>
    </figure>
  );
}
