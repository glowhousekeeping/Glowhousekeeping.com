// i18n.js
const i18n = require('i18next');
const { initReactI18next } = require('react-i18next');
const Backend = require('i18next-fs-backend');
const path = require('path');
const nextI18NextConfig = require('./next-i18next.config.js');

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    ...nextI18NextConfig.i18n,
    backend: {
      loadPath: path.join(__dirname, nextI18NextConfig.i18n.localePath, '/{{lng}}/{{ns}}.json'),
    },
    react: {
      useSuspense: false, // you can set true if you want Suspense for loading translations
    },
    fallbackLng: nextI18NextConfig.i18n.defaultLocale,
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

module.exports = i18n;
