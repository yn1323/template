import { isProduction, lang } from 'src/constant'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from 'src/locales/en'
import ja from 'src/locales/ja'

console.log(process.env)

i18n.use(initReactI18next).init({
  debug: !isProduction,
  resources: {
    en,
    ja,
  },
  defaultNS: 'common',
  lng: lang,
  fallbackLng: false,
  returnEmptyString: false,
  react: {
    wait: true,
  },
})

export default i18n
