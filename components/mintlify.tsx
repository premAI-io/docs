import { Callout } from 'fumadocs-ui/components/callout';
import { icons } from 'lucide-react';
import Link from 'next/link';
import {
  Children,
  isValidElement,
  type ComponentType,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/cn';

/**
 * Mintlify-compatible MDX components, so content written for Mintlify
 * (https://mintlify.com/docs/content/components) renders unchanged.
 */

function LucideIcon({ name, className }: { name: string; className?: string }) {
  const pascal = name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  const Icon = (icons as Record<string, ComponentType<{ className?: string }>>)[
    pascal
  ];
  if (!Icon) return null;
  return <Icon className={className} />;
}

// --- Callouts ---

export function Note({ children }: { children: ReactNode }) {
  return <Callout type="info">{children}</Callout>;
}

export function Warning({ children }: { children: ReactNode }) {
  return <Callout type="warn">{children}</Callout>;
}

export function Tip({ children }: { children: ReactNode }) {
  return <Callout type="success">{children}</Callout>;
}

export function Info({ children }: { children: ReactNode }) {
  return <Callout type="info">{children}</Callout>;
}

export function Check({ children }: { children: ReactNode }) {
  return <Callout type="success">{children}</Callout>;
}

// --- Cards ---

export function Card({
  title,
  icon,
  href,
  children,
}: {
  title: string;
  icon?: string;
  href?: string;
  children?: ReactNode;
}) {
  const inner = (
    <>
      {icon ? (
        <div className="mb-2 w-fit rounded-md border bg-fd-muted p-1.5 text-fd-primary [&_svg]:size-4">
          <LucideIcon name={icon} />
        </div>
      ) : null}
      <p className="mb-1 font-medium text-fd-card-foreground">{title}</p>
      {children ? (
        <div className="space-y-2.5 text-sm text-fd-muted-foreground [&_strong]:font-semibold [&_strong]:text-fd-card-foreground [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:ps-5 [&_ol]:list-decimal [&_ol]:ps-5">
          {children}
        </div>
      ) : null}
    </>
  );
  const className =
    'not-prose block rounded-lg border bg-fd-card p-4 text-fd-card-foreground no-underline shadow-sm transition-colors';

  if (href) {
    return (
      <Link href={href} className={cn(className, 'hover:bg-fd-accent/80')}>
        {inner}
      </Link>
    );
  }
  return <div className={className}>{inner}</div>;
}

export function CardGroup({
  cols = 2,
  children,
}: {
  cols?: number;
  children: ReactNode;
}) {
  return (
    <div
      className="grid grid-cols-1 gap-4 my-4"
      style={{ ['--cols' as string]: cols }}
    >
      <style>{`@media (min-width: 640px) { [style*="--cols"].grid { grid-template-columns: repeat(var(--cols), minmax(0, 1fr)); } }`}</style>
      {children}
    </div>
  );
}

// --- Accordions ---

export function Accordion({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  return (
    <details
      open={defaultOpen}
      className="group my-2 rounded-lg border bg-fd-card [[data-accordion-group]_&]:my-0 [[data-accordion-group]_&]:rounded-none [[data-accordion-group]_&]:border-0 [[data-accordion-group]_&]:border-b [[data-accordion-group]_&]:last:border-b-0"
    >
      <summary className="flex cursor-pointer list-none items-center gap-2 p-4 font-medium text-fd-card-foreground [&::-webkit-details-marker]:hidden">
        <svg
          className="size-4 shrink-0 text-fd-muted-foreground transition-transform group-open:rotate-90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
        {title}
      </summary>
      <div className="px-4 pb-4 ps-10 text-sm text-fd-muted-foreground [&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </details>
  );
}

export function AccordionGroup({ children }: { children: ReactNode }) {
  return (
    <div
      data-accordion-group
      className="my-4 overflow-hidden rounded-lg border bg-fd-card"
    >
      {children}
    </div>
  );
}

// --- Frame ---

export function Frame({
  caption,
  children,
}: {
  caption?: ReactNode;
  children: ReactNode;
}) {
  return (
    <figure className="my-6 overflow-hidden rounded-xl border bg-fd-card p-2 not-prose">
      <div className="overflow-hidden rounded-lg [&_img]:my-0 [&_img]:w-full">
        {children}
      </div>
      {caption ? (
        <figcaption className="mt-2 px-2 pb-1 text-center text-sm text-fd-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

// --- Steps ---

export function Steps({ children }: { children: ReactNode }) {
  const items = Children.toArray(children).filter(isValidElement);
  return (
    <div className="my-6">
      {items.map((child, i) => (
        <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
          <div className="flex flex-col items-center">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-fd-secondary text-sm font-medium text-fd-secondary-foreground">
              {i + 1}
            </div>
            <div className="mt-2 w-px grow bg-fd-border [div:last-child>&]:hidden" />
          </div>
          <div className="min-w-0 grow pt-0.5">{child}</div>
        </div>
      ))}
    </div>
  );
}

export function Step({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div>
      {title ? <p className="mt-0 mb-2 font-medium">{title}</p> : null}
      <div className="text-sm text-fd-muted-foreground [&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

// --- Release notes ---

export function Update({
  label,
  description,
  tags,
  children,
}: {
  label: string;
  description?: string;
  tags?: string[];
  children: ReactNode;
}) {
  return (
    <div className="my-8 flex flex-col gap-4 border-b pb-8 last:border-b-0 md:flex-row md:gap-8">
      <div className="shrink-0 md:w-40">
        <div className="flex flex-col items-start gap-2 md:sticky md:top-24">
          <span className="rounded-lg bg-fd-primary/10 px-2.5 py-1 text-sm font-medium text-fd-primary">
            {label}
          </span>
          {tags?.map((tag) => (
            <p key={tag} className="text-sm font-medium text-fd-foreground">
              {tag}
            </p>
          ))}
          {description ? (
            <p className="text-sm text-fd-muted-foreground">{description}</p>
          ) : null}
        </div>
      </div>
      <div className="min-w-0 grow">{children}</div>
    </div>
  );
}
