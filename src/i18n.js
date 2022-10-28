import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationENG from "./locales/en.json";
import translationTR from "./locales/tr.json";

const resources = {
  en: {
    translation: translationENG,
  },
  tr: {
    translation: translationTR,
  },
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en-US", // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
