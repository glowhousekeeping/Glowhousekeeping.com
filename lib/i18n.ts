export const defaultLocale = "en"
export const locales = ["en", "nl", "fy"] as const
export type Locale = (typeof locales)[number]

export const languages = {
  en: "English",
  nl: "Nederlands",
  fy: "Frysk",
}

export const languageFlags = {
  en: "🇺🇸",
  nl: "🇳🇱",
  fy: "🏴",
}
