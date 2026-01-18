import createMiddleware from 'next-intl/middleware'
import { defineRouting } from 'next-intl/routing'

const routing = defineRouting({
  locales: ['kg', 'ru'],
  defaultLocale: 'kg',
  localePrefix: 'as-needed'
})

export default createMiddleware(routing)

export const config = {
  matcher: ['/', '/(kg|ru)/:path*', '/((?!_next|_vercel|api|.*\\..*|studio).*)']
}