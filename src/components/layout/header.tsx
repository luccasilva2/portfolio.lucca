"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.resume, href: "#resume" },
    { name: "Now", href: "#now" },
    { name: t.nav.projects, href: "#projects" },
    { name: "EstudosLSO", href: "https://estudoslso.netlify.app", external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center space-x-2 md:flex">
            {navItems.map((item) => (
              <Button key={item.name} variant="ghost" asChild>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.name}
                </Link>
              </Button>
            ))}
            <LanguageSwitcher className="ml-1" />
            <Button asChild className="ml-2">
              <Link href="#contact">{t.nav.contact}</Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">{t.nav.openMenu}</span>
            </Button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-background p-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
                <X className="h-6 w-6" />
                <span className="sr-only">{t.nav.closeMenu}</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col items-center space-y-4">
              {[...navItems, { name: t.nav.contact, href: "#contact" }].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={toggleMobileMenu}
                  className="text-2xl font-semibold text-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
              <LanguageSwitcher align="start" className="mt-4" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
