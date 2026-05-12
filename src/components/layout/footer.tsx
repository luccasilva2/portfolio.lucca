"use client";

import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { useLanguage } from "@/components/language-provider";

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/luccasilva2" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/lucca-silva-oliveira/" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/luccaa_so" },
  { name: "Email", icon: Mail, href: "#contact" },
];

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative mt-20 border-t border-foreground/10">
      <div className="container-edge py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">Lucca Silva Oliveira</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Vamos construir algo
              <span className="text-aurora italic"> memorável</span>.
            </h2>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-foreground/15 px-5 py-2.5 text-sm transition-all hover:border-foreground/30 hover:bg-foreground/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t.nav.contact}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-6 flex flex-col gap-2 text-sm">
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground">{t.nav.about}</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-foreground">{t.nav.projects}</Link></li>
              <li><Link href="#now" className="text-muted-foreground hover:text-foreground">{t.nav.now}</Link></li>
              <li><Link href="#resume" className="text-muted-foreground hover:text-foreground">{t.nav.resume}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Social</p>
            <ul className="mt-6 flex flex-col gap-2 text-sm">
              {socials.map(({ name, icon: Icon, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-foreground/10 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <Logo />
          <p className="mono uppercase tracking-widest">
            © {new Date().getFullYear()} — {t.footer.rights}
          </p>
        </div>
      </div>

      {/* Oversized signature */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="display-serif italic leading-none -mb-6 md:-mb-12 px-6 text-center text-[18vw] font-medium text-foreground/[0.035]">
          Lucca.
        </p>
      </div>
    </footer>
  );
}
