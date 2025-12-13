import * as englishContent from "@/content/en.json";
import * as spanishContent from "@/content/es.json";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en: englishContent,
  es: spanishContent,
} as const;
