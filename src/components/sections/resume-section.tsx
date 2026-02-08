"use client";

import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import { Section } from "../ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function ResumeSection() {
  const { t } = useLanguage();

  return (
    <Section
      id="resume"
      title={t.resume.sectionTitle}
      subtitle={t.resume.sectionSubtitle}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="overflow-hidden border-primary/20 shadow-2xl shadow-primary/5">
          <CardContent className="p-6 md:p-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-md bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold font-headline">
                  {t.resume.heading}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {t.resume.description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="/curriculo.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  {t.resume.download}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-5 w-5" />
                  {t.resume.view}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}
