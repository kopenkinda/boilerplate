import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { api } from './api';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Boilerplate',
  description: 'Author: @kopenkinda',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const data = await api.appControllerComplexTypeExample({
    exampleDto: {
      message: 'Hello world with a generated client lib (from a RSC)',
    },
  });
  return (
    <html lang="en">
      <body className={inter.className}>
        <p className="text-center">{data.data.message}</p>
        {children}
      </body>
    </html>
  );
}
