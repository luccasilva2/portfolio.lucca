import { Logo } from "./logo";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/luccasilva2" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/luccaa_so?igsh=MWR3M2hzNzRrZ29pYw%3D%3D" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/lucca-silva-oliveira/" },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Lucca Silva Oliveira. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <Link href={link.url} aria-label={link.name}>
                  <link.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
