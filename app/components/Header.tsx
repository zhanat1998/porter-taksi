'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/'
    router.push(`/${newLocale}${currentPath}`)
  }

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🏠</span>
            <span className="text-lg font-bold text-green-600">Жардамчы</span>
          </Link>

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
        </div>
      </div>
    </header>
  )
}