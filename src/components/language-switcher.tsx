"use client";

import { Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
  align?: "start" | "end";
};

export function LanguageSwitcher({ className, align = "end" }: LanguageSwitcherProps) {
  const { language, setLanguage, languageOptions, t } = useLanguage();
  const active = languageOptions.find((option) => option.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn("gap-2", className)}>
          <span className="text-xs font-semibold tracking-wide">{active?.label ?? language.toUpperCase()}</span>
          <ChevronDown className="h-4 w-4" />
          <span className="sr-only">{t.language.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.code}
            onClick={() => setLanguage(option.code)}
            className="flex items-center justify-between"
          >
            <span>{option.name}</span>
            {option.code === language ? <Check className="h-4 w-4" /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
