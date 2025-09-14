import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Import translation files
import enCommon from "../public/locales/en/common.json"
import nlCommon from "../public/locales/nl/common.json"
import fyCommon from "../public/locales/fy/common.json"

const resources = {
  en: {
    common: enCommon,
  },
  nl: {
    common: nlCommon,
  },
  fy: {
    common: fyCommon,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    defaultNS: "common",

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  })

export default i18n
