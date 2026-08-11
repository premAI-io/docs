import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.fluso.ai'),
  title: {
    template: '%s - Fluso',
    default: 'Fluso docs',
  },
  description:
    'Fluso is an AI executive assistant that works inside your tools — email, calendar, Slack, GitHub, and 100+ more. Read the docs to get set up, connect your apps, and put Fluso to work.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
