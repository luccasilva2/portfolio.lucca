"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/section";
import { Badge } from "../ui/badge";

export function CertificatesSection() {
  const certificates = [
    {
      title: "Ensino Médio Profissionalizante – Análise e Desenvolvimento de Dados",
      meta: "SENAI/SC",
    },
    { title: "Programação Web", meta: "IFRS — 200h" },
    { title: "Raspberry PI e Aplicações", meta: "IFRS — 20h" },
    { title: "Segurança da Informação", meta: "IFRS — 40h" },
    { title: "IoT com Raspberry PI", meta: "IFRS — 30h" },
    { title: "Marketing e Conceitos", meta: "IFRS — 20h" },
  ];

  return (
    <Section
      id="certificates"
      index="05"
      title="Certificados"
      eyebrow="Certificates"
      subtitle="Cursos e certificações recentes"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="glass relative overflow-hidden rounded-3xl p-8 md:p-12"
      >
        <div className="flex flex-wrap gap-3">
          {certificates.map((c) => (
            <div key={c.title} className="flex flex-col items-start gap-2">
              <Badge className="px-3 py-1" variant="default">
                {c.title}
              </Badge>
              <span className="text-xs text-muted-foreground">{c.meta}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
