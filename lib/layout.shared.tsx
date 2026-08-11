import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { gitConfig } from './shared';

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
        text: 'Download for Mac',
        url: 'https://fluso.ai/',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
