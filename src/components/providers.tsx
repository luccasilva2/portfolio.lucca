"use client";

import { GlobalBackground } from "@/components/three/global-background";
import { LanguageProvider } from "@/components/language-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <GlobalBackground />
    </LanguageProvider>
  );
}
