import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

function GitHubIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor">
      <title>GitHub</title>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor">
      <title>X</title>
      <path d="M18.9 2H22l-6.8 7.8L23.2 22H17l-4.9-6.4L6.5 22H3.3l7.3-8.3L3 2h6.3l4.4 5.8L18.9 2Zm-1.1 17.8h1.7L8.4 4.1H6.6l11.2 15.7Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor">
      <title>LinkedIn</title>
      <path d="M20.5 3H3.5A2.5 2.5 0 0 0 1 5.5v13A2.5 2.5 0 0 0 3.5 21h17a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 20.5 3ZM8 18H5V9h3v9ZM6.5 7.8A1.8 1.8 0 1 1 6.5 4a1.8 1.8 0 0 1 0 3.8ZM19 18h-3v-4.4c0-1.1 0-2.4-1.5-2.4S13 12.3 13 13.5V18h-3V9h2.9v1.2h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7V18H19Z" />
    </svg>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/logo/light.svg"
            alt="Fluso"
            width={92}
            height={24}
            className="size-6 object-cover object-center dark:hidden"
          />
          <Image
            src="/logo/dark.svg"
            alt="Fluso"
            width={92}
            height={24}
            className="hidden size-6 object-cover object-center dark:block"
          />
          <span className="font-semibold">Fluso</span>
        </>
      ),
    },
    links: [
      {
        type: 'button',
        text: 'Download',
        url: 'https://fluso.ai/',
      },
      {
        type: 'icon',
        text: 'X',
        label: 'Fluso on X',
        url: 'https://twitter.com/premai_io',
        icon: <XIcon />,
        external: true,
      },
      {
        type: 'icon',
        text: 'GitHub',
        label: 'Fluso on GitHub',
        url: 'https://github.com/premAI-io',
        icon: <GitHubIcon />,
        external: true,
      },
      {
        type: 'icon',
        text: 'LinkedIn',
        label: 'Fluso on LinkedIn',
        url: 'https://linkedin.com/company/premai',
        icon: <LinkedInIcon />,
        external: true,
      },
    ],
  };
}
