import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";
import { LayoutGroup } from "framer-motion";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucca Silva Oliveira — Developer & Digital Creator",
  description:
    "Portfolio editorial de Lucca Silva Oliveira — desenvolvedor full stack construindo experiências digitais com tipografia, movimento e propósito.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" className={`dark ${inter.variable} ${fraunces.variable} ${mono.variable}`}>
      <body className="font-body antialiased selection:bg-primary/30">
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
