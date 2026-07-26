"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Section } from "../ui/section";
import { useLanguage } from "@/components/language-provider";

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, { message: t.contact.validation.nameMin }),
    email: z.string().email({ message: t.contact.validation.email }),
    message: z.string().min(10, { message: t.contact.validation.messageMin }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({ title: t.contact.toast.title, description: t.contact.toast.description });
    form.reset();
  }

  return (
    <Section
      id="contact"
      index="07"
      title={t.contact.sectionTitle}
      eyebrow="Contact"
      subtitle={t.contact.sectionSubtitle}
    >
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Info column */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass aurora-border grain relative overflow-hidden rounded-3xl p-8 md:p-10 lg:col-span-5"
        >
          <p className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Open for collaboration
          </p>
          <h3 className="mt-6 font-display text-3xl tracking-tight md:text-4xl">
            Mande uma <span className="italic text-aurora">ideia</span>, um briefing
            ou só um olá.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Resposta em até 24h em dias úteis. Projetos remotos são bem-vindos.
          </p>

          <ul className="mt-10 space-y-4">
            <li className="flex items-center gap-3 text-sm">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.05] text-primary">
                <Mail className="h-4 w-4" />
              </span>
              <span className="text-foreground/90">silvaoliveiralucca@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.05] text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="text-foreground/90">Brasil — Remoto Global</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.05] text-primary">
                <Clock className="h-4 w-4" />
              </span>
              <span className="text-foreground/90">GMT-3 · ~24h response</span>
            </li>
          </ul>
        </motion.aside>

        {/* Form column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass relative overflow-hidden rounded-3xl p-8 md:p-10 lg:col-span-7"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                        {t.contact.form.nameLabel}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t.contact.form.namePlaceholder}
                          className="h-12 rounded-xl border-foreground/10 bg-foreground/[0.03] focus-visible:ring-primary/60"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                        {t.contact.form.emailLabel}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t.contact.form.emailPlaceholder}
                          className="h-12 rounded-xl border-foreground/10 bg-foreground/[0.03] focus-visible:ring-primary/60"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      {t.contact.form.messageLabel}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t.contact.form.messagePlaceholder}
                        rows={6}
                        className="rounded-xl border-foreground/10 bg-foreground/[0.03] focus-visible:ring-primary/60"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90"
              >
                {t.contact.form.submit}
                <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>
          </Form>
        </motion.div>
      </div>
    </Section>
  );
}
