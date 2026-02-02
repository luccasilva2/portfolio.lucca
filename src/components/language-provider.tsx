"use client";

import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { languages, translations, isLanguageCode, type LanguageCode, type Translations } from "@/lib/i18n";

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: Translations;
  languageOptions: typeof languages;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio.language";

const detectLanguage = (): LanguageCode => {
  if (typeof navigator === "undefined") return "pt";
  const preferred = navigator.language.split("-")[0];
  return isLanguageCode(preferred) ? preferred : "pt";
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("pt");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (isLanguageCode(stored)) {
      setLanguage(stored);
      return;
    }
    setLanguage(detectLanguage());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
      languageOptions: languages,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
