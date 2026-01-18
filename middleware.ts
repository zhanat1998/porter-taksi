import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['kg', 'ru'],
  defaultLocale: 'kg',
  localePrefix: 'as-needed'
})

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|studio|favicon.ico|.*\\..*).*)'
  ]
}