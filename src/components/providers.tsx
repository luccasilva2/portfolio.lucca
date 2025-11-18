"use client";

import { GlobalBackground } from '@/components/three/global-background';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <GlobalBackground />
    </>
  );
}
