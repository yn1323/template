import en from '@locales/en'
import ja from '@locales/ja'
import { useRouter } from 'next/router'

export const useLocale = () => {
  const { locale } = useRouter()

  const localFile = locale === 'en' ? en : ja
  const t = locale === 'en' ? en : ja

  return { locale, t }
}
