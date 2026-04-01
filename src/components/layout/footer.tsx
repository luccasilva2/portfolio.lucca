"use client";

import { Logo } from "./logo";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/luccasilva2", color: "hover:text-[#6e5494]" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/luccaa_so?igsh=MWR3M2hzNzRrZ29pYw%3D%3D", color: "hover:text-[#E4405F]" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/lucca-silva-oliveira/", color: "hover:text-[#0A66C2]" },
];

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.2, 
    rotate: [0, -10, 10, 0],
    transition: { 
      rotate: { duration: 0.4, ease: "easeInOut" },
      scale: { duration: 0.2 }
    }
  },
};

const buttonVariants = {
  initial: { y: 0 },
  hover: { 
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" }
  },
};

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Lucca Silva Oliveira. {t.footer.rights}
            </p>
          </div>
          <div className="flex items-center space-x-1">
            {socialLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  asChild 
                  className={`group relative overflow-hidden transition-colors duration-300 ${link.color}`}
                >
                  <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <link.icon className="h-5 w-5 transition-all duration-300" />
                    </motion.div>
                    <span className="absolute inset-0 -z-10 rounded-md bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
