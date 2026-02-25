import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Providers } from '@/components/providers';
import { LayoutGroup } from 'framer-motion';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { ScrollProgress } from '@/components/ui/scroll-progress';

export const metadata: Metadata = {
  title: 'Lucca Silva Oliveira - Premium Digital Portfolio',
  description: 'Um portfólio ultramoderno, premium, visualmente impressionante e altamente interativo para Lucca Silva Oliveira.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Providers>
          <LayoutGroup>
            <div className="relative z-10">
              <CustomCursor />
              <ScrollProgress />
              {children}
            </div>
          </LayoutGroup>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
