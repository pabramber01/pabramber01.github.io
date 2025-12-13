import { ui, languages, defaultLang } from "@/i18n/ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return undefined;
}

export function getRouteFromUrl(url: URL) {
  return url.pathname.split("/").slice(2).join("/");
}

export function getPreferredLocale(locales: string[]) {
  return locales
    .map((locale) => locale.split("-")[0])
    .find((locale) => Object.keys(languages).includes(locale));
}

export function getStaticPaths() {
  return Object.keys(languages).map((locale) => ({ params: { locale } }));
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  };
}
