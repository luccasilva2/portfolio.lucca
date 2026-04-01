"use client";

import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { TechStackSection } from '@/components/sections/tech-stack-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ResumeSection } from '@/components/sections/resume-section';
import { NowSection } from '@/components/sections/now-section';
import { Footer } from '@/components/layout/footer';
import { useLanguage } from '@/components/language-provider';

export default function Home() {
  const { t } = useLanguage();
  const aiBlurb = t.about.blurb;

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection personalizedContent={aiBlurb} />
        <TechStackSection />
        <SkillsSection />
        <ResumeSection />
        <NowSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
