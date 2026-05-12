"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const items = [
    { label: t.nav.about, href: "#about", index: "01" },
    { label: t.nav.skills, href: "#skills", index: "02" },
    { label: t.nav.resume, href: "#resume", index: "03" },
    { label: t.nav.now, href: "#now", index: "04" },
    { label: t.nav.projects, href: "#projects", index: "05" },
    { label: "EstudosLSO", href: "https://estudoslso.netlify.app", index: "06", external: true },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = ["home", "about", "skills", "resume", "now", "projects", "contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="container-edge">
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
              scrolled
                ? "glass"
                : "border border-transparent"
            )}
          >
            <Logo />

            <nav className="hidden items-center gap-1 lg:flex">
              {items.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = active === id;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "group relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className="mono text-[10px] tracking-widest text-muted-foreground/70">
                      {item.index}
                    </span>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="header-active"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 -z-10 rounded-full bg-foreground/5 ring-1 ring-inset ring-foreground/10"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
              <Link
                href="#contact"
                className="group hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:bg-foreground/90 md:inline-flex"
              >
                {t.nav.contact}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <button
                onClick={() => setOpen(!open)}
                aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10 lg:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/85 backdrop-blur-2xl" />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative flex h-full flex-col justify-between px-8 pb-12 pt-28"
            >
              <ul className="flex flex-col gap-1">
                {items.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between border-b border-foreground/10 py-4"
                    >
                      <span className="font-display text-3xl tracking-tight">{item.label}</span>
                      <span className="mono text-xs text-muted-foreground">{item.index}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
                >
                  {t.nav.contact} <ArrowUpRight className="h-4 w-4" />
                </Link>
                <LanguageSwitcher align="end" />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
