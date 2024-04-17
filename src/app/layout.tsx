import type { Metadata } from 'next';
import { Tenor_Sans, Commissioner } from 'next/font/google';
import './styles/index.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

const tenor = Tenor_Sans({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-tenor',
  display: 'swap',
});
const commissioner = Commissioner({
  weight: ['400', '600'],
  variable: '--font-commissioner',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EVDEV',
  description: 'EVDEV test task made by A. Fenin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames('app', {}, [
          commissioner.variable,
          tenor.variable,
        ])}
      >
        {children}
      </body>
    </html>
  );
}
