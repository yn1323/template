import { isCSR } from '@constant'
import en from '@locales/en'
import { useRouter } from 'next/router'

export const useLocale = () => {
  const locale = isCSR ? 'ja' : useRouter().locale

  const t = (text: any) => (locale === 'ja' ? text : (en as any)[text] || '')

  return { locale, t }
}
