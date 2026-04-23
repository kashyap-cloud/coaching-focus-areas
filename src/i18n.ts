import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Create a mapping of languages to their names for the UI
export const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" }, // Spanish
  { code: "fr", name: "Français" }, // French
  { code: "pt", name: "Português" }, // Portuguese
  { code: "de", name: "Deutsch" }, // German
  { code: "ar", name: "العربية" }, // Arabic
  { code: "hi", name: "हिन्दी" }, // Hindi
  { code: "bn", name: "বাংলা" }, // Bengali
  { code: "zh-CN", name: "简体中文" }, // Chinese
  { code: "ja", name: "日本語" }, // Japanese
  { code: "id", name: "Bahasa Indonesia" }, // Indonesian
  { code: "tr", name: "Türkçe" }, // Turkish
  { code: "vi", name: "Tiếng Việt" }, // Vietnamese
  { code: "ko", name: "한국어" }, // Korean
  { code: "ru", name: "Русский" }, // Russian
  { code: "it", name: "Italiano" }, // Italian
  { code: "pl", name: "Polski" }, // Polish
  { code: "th", name: "ไทย" }, // Thai
  { code: "tl", name: "Tagalog" }, // Filipino
  { code: "ur", name: "اردو" }, // Urdu
];

// Initially, we only import English. The other languages will be loaded dynamically or added once generated.
// To keep the bundle manageable, we'll try to load these as needed, but for now we'll import English as fallback.
import enTranslation from "./i18n/locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
    },
    fallbackLng: "en",
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Add a resource bundle and switch to it
export const addResourceBundle = (lng: string, resources: any) => {
  if (!i18n.hasResourceBundle(lng, "translation")) {
    i18n.addResourceBundle(lng, "translation", resources, true, true);
  }
};

// Initial load for detected language
const getShortLng = (lng: string) => lng.split('-')[0];
const initialLng = getShortLng(i18n.language);

if (initialLng && initialLng !== 'en') {
  import(`./i18n/locales/${initialLng}.json`)
    .then(translation => {
      addResourceBundle(initialLng, translation.default);
      i18n.changeLanguage(initialLng);
    })
    .catch(err => console.error("Initial lang load failed", err));
}

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = i18n.dir(lng);
});

export default i18n;
