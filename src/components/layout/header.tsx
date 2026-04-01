"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

const mobileMenuVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const mobileNavItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.3,
    },
  }),
};

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.resume, href: "#resume" },
    { name: t.nav.now, href: "#now" },
    { name: t.nav.projects, href: "#projects" },
    { name: "EstudosLSO", href: "https://estudoslso.netlify.app", external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["home", "about", "skills", "resume", "now", "projects", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/70 shadow-lg shadow-black/5 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Logo />
          </motion.div>

          <nav className="hidden items-center space-x-1 md:flex">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.div
                  key={item.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  <Button
                    variant="ghost"
                    asChild
                    className={cn(
                      "relative transition-all duration-300",
                      isActive && "text-primary"
                    )}
                  >
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </Button>
                </motion.div>
              );
            })}

            <motion.div
              custom={navItems.length}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <LanguageSwitcher className="ml-1" />
            </motion.div>

            <motion.div
              custom={navItems.length + 1}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Button asChild className="ml-2 group hero-glow">
                <Link href="#contact" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  {t.nav.contact}
                </Link>
              </Button>
            </motion.div>
          </nav>

          <div className="md:hidden">
            <Button onClick={toggleMobileMenu} variant="ghost" size="icon" className="relative">
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="sr-only">{mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}</span>
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl p-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
                <X className="h-6 w-6" />
                <span className="sr-only">{t.nav.closeMenu}</span>
              </Button>
            </div>

            <nav className="mt-12 flex flex-col items-center space-y-6">
              {[...navItems, { name: t.nav.contact, href: "#contact", external: false }].map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={mobileNavItemVariants}
                >
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={toggleMobileMenu}
                    className="text-2xl font-semibold text-foreground transition-all duration-300 hover:text-primary hover:scale-105"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={navItems.length + 1}
                initial="hidden"
                animate="visible"
                variants={mobileNavItemVariants}
                className="pt-6"
              >
                <LanguageSwitcher align="start" />
              </motion.div>
            </nav>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-32 h-32 rounded-full bg-primary/20 blur-3xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
