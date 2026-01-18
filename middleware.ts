import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/', '/(kg|ru)/:path*', '/((?!_next|_vercel|api|.*\\..*|studio).*)']
}