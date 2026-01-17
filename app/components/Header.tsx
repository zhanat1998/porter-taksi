'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations('nav')
  const locale = useLocale()

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('services'), href: '/services' },
    { name: t('pricing'), href: '/pricing' },
    { name: t('vehicles'), href: '/vehicles' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ]

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/'
    router.push(`/${newLocale}${currentPath}`)
  }

  const isActive = (href: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/'
    return currentPath === href
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🏠</span>
            <div>
              <span className="text-xl font-bold text-green-600">Жардамчы</span>
              <span className="hidden sm:inline text-sm text-gray-500 ml-2">Бишкек</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition ${
                  isActive(item.href)
                    ? 'text-green-600 border-b-2 border-green-600 pb-1'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Phone & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => switchLocale('kg')}
                className={`px-3 py-1.5 text-sm font-medium transition ${
                  locale === 'kg'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                KG
              </button>
              <button
                onClick={() => switchLocale('ru')}
                className={`px-3 py-1.5 text-sm font-medium transition ${
                  locale === 'ru'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                RU
              </button>
            </div>

            <a
              href="tel:+996555123456"
              className="text-green-600 font-bold hover:text-green-700 transition"
            >
              📞 +996 555 123 456
            </a>
            <a
              href="https://wa.me/996555123456"
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Language Switcher & Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Language Switcher */}
            <div className="flex items-center border rounded-lg overflow-hidden md:hidden">
              <button
                onClick={() => switchLocale('kg')}
                className={`px-2 py-1 text-xs font-medium transition ${
                  locale === 'kg'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600'
                }`}
              >
                KG
              </button>
              <button
                onClick={() => switchLocale('ru')}
                className={`px-2 py-1 text-xs font-medium transition ${
                  locale === 'ru'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600'
                }`}
              >
                RU
              </button>
            </div>

            {/* Burger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Меню"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition ${
                    isActive(item.href)
                      ? 'text-green-600 bg-green-50 border-l-4 border-green-600'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Contact */}
            <div className="border-t mt-4 pt-4 px-4 space-y-3">
              <a
                href="tel:+996555123456"
                className="flex items-center gap-3 text-gray-700 hover:text-green-600 py-2"
              >
                <span className="text-xl">📞</span>
                <span className="font-bold">+996 555 123 456</span>
              </a>
              <a
                href="tel:+996700123456"
                className="flex items-center gap-3 text-gray-700 hover:text-green-600 py-2"
              >
                <span className="text-xl">📞</span>
                <span className="font-bold">+996 700 123 456</span>
              </a>
              <a
                href="https://wa.me/996555123456"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition w-full"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}