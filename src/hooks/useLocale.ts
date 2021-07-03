import en from '@locales/en'
import { useRouter } from 'next/router'

export const useLocale = () => {
  const { locale } = useRouter()
  const t = (text: any) => (locale === 'ja' ? text : (en as any)[text] || '')

  return { locale, t }
}
