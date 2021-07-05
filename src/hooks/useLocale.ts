import { csrLang, isCSR } from '@constant'
import en from '@locales/en'
import { useRouter } from 'next/router'

export const useLocale = () => {
  const router = useRouter()
  const locale = isCSR ? csrLang : router.locale

  const t = (text: any) => (locale === 'ja' ? text : (en as any)[text] || '')

  return { locale, t }
}
