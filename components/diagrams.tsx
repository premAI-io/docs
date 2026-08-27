import {
  Clock3,
  FileText,
  FolderClosed,
  MessageSquareText,
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
