import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from "./translactions/en.json";
import common_it from "./translactions/it.json";
import common_de from "./translactions/de.json";
import common_fr from "./translactions/fr.json";
import common_es from "./translactions/es.json";

const resources = {
  en: {
    translation: common_en
  },
  it: {
    translation: common_it
  },
  de: {
    translation: common_de
  },
  fr: {
    translation: common_fr
  },
  es: {
    translation: common_es
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
