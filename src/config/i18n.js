import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptJson from './translations/pt.json';
import enJson from './translations/en.json';
import esJson from './translations/es.json';
import deJson from './translations/de.json';
import frJson from './translations/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: deJson },
      en: { translation: enJson },
      es: { translation: esJson },
      fr: { translation: frJson },
      pt: { translation: ptJson },
    },
    lng: localStorage.getItem('language') || 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;