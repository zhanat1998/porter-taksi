export const locales = ['kg', 'ru'] as const
export const defaultLocale = 'kg' as const

export type Locale = (typeof locales)[number]