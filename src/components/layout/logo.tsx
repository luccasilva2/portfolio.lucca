import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Lucca Silva Oliveira"
      className={cn(
        "group inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary",
        className
      )}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 font-display text-base italic">
        L
        <span className="absolute -inset-px rounded-full bg-gradient-to-tr from-primary/0 via-primary/40 to-accent/0 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-tight">Lucca</span>
        <span className="mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          Silva Oliveira
        </span>
      </span>
    </Link>
  );
}
