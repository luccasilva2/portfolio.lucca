"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
import { Send } from "lucide-react";
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
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: t.contact.toast.title,
      description: t.contact.toast.description,
    });
    form.reset();
  }

  return (
    <Section id="contact" title={t.contact.sectionTitle} subtitle={t.contact.sectionSubtitle}>
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.contact.form.nameLabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.contact.form.namePlaceholder} {...field} className="bg-card"/>
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
                    <FormLabel>{t.contact.form.emailLabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.contact.form.emailPlaceholder} {...field} className="bg-card"/>
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
                  <FormLabel>{t.contact.form.messageLabel}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t.contact.form.messagePlaceholder} {...field} rows={6} className="bg-card"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center">
              <Button type="submit" size="lg">
                <Send className="mr-2 h-4 w-4" />
                {t.contact.form.submit}
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>
    </Section>
  );
}
