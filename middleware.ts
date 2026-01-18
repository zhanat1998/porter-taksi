import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['kg', 'ru'],
  defaultLocale: 'kg',
  localePrefix: 'as-needed'
})

export const config = {
  matcher: ['/', '/(kg|ru)/:path*', '/((?!_next|_vercel|api|.*\\..*|studio).*)']
}