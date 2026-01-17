'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'

// Categorized services structure
const serviceCategories = [
  {
    id: 'transport',
    title: 'Транспорт',
    icon: '🚛',
    services: [
      { name: 'Грузоперевозки', href: '/services/cargo-kg', vacancy: true },
      { name: 'Грузчики', href: '/services/loaders', vacancy: true },
      { name: 'Вывоз мусора', href: '/services/garbage', vacancy: true },
    ],
  },
  {
    id: 'home',
    title: 'Үй жардамы',
    icon: '🏠',
    services: [
      { name: 'Клининг', href: '/services/cleaning', vacancy: true },
      { name: 'Демонтаж', href: '/services/demolition', vacancy: true },
    ],
  },
  {
    id: 'childcare',
    title: 'Балдарга жардам',
    icon: '👶',
    services: [
      { name: 'Няня', href: '/services/nanny', vacancy: true },
    ],
  },
  {
    id: 'events',
    title: 'Майрамдар',
    icon: '🎉',
    services: [
      { name: 'Свадьба / Той', href: '/services/marry-me', vacancy: true },
    ],
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [desktopDropdown, setDesktopDropdown] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const locale = useLocale()

  const navigation = [
    { name: t('home'), href: '/' },
  ]

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/'
    router.push(`/${newLocale}${currentPath}`)
  }

  const isActive = (href: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/'
    return currentPath === href || currentPath.startsWith(href + '/')
  }

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId)
  }

  // Бургер меню ачык болгондо арткы скролду өчүрүү
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

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
            <Link
              href="/"
              className={`font-medium transition ${
                isActive('/') && pathname.replace(`/${locale}`, '') === '/'
                  ? 'text-green-600 border-b-2 border-green-600 pb-1'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              {t('home')}
            </Link>

          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center">
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
          <div className="lg:hidden border-t py-4 max-h-[80vh] overflow-y-auto">
            {/* Home Link */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition ${
                pathname.replace(`/${locale}`, '') === '/'
                  ? 'text-green-600 bg-green-50 border-l-4 border-green-600'
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              {t('home')}
            </Link>

            {/* Services Categories */}
            <div className="mt-2">
              {serviceCategories.map((category) => (
                <div key={category.id} className="mb-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-green-50 text-green-800 font-bold text-base rounded-lg mx-2 mb-2">
                    <span className="text-xl">{category.icon}</span>
                    <span>{category.title}</span>
                  </div>

                  {/* Services */}
                  <div className="space-y-1 ml-6">
                    {category.services.map((service) => (
                      <div key={service.href} className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                        <Link
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="text-gray-700 hover:text-green-600 font-medium"
                        >
                          {service.name}
                        </Link>
                        {service.vacancy && (
                          <Link
                            href={`${service.href}#vacancies`}
                            onClick={() => setIsOpen(false)}
                            className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full hover:bg-orange-200"
                          >
                            Вакансии
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Contact */}
            <div className="border-t mt-4 pt-4 px-4 space-y-3">
              {/* Worker Application Link */}
              <Link
                href="/apply"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 px-4 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition w-full"
              >
                <span>👷</span>
                <span>{tCommon('wantToWork')}</span>
              </Link>
              <a
                href="tel:+996555123456"
                className="flex items-center gap-3 text-gray-700 hover:text-green-600 py-2"
              >
                <span className="text-xl">📞</span>
                <span className="font-bold">+996 555 123 456</span>
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