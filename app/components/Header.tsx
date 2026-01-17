'use client'

import { useState } from 'react'
import Link from 'next/link'

const navigation = [
  { name: 'Башкы бет', href: '/' },
  { name: 'Кызматтар', href: '/services' },
  { name: 'Баалар', href: '/pricing' },
  { name: 'Унаалар', href: '/vehicles' },
  { name: 'Биз жөнүндө', href: '/about' },
  { name: 'Байланыш', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🚚</span>
            <div>
              <span className="text-xl font-bold text-green-600">Porter Taxi</span>
              <span className="hidden sm:inline text-sm text-gray-500 ml-2">Бишкек</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center gap-4">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg font-medium transition"
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
                <span>WhatsApp жазуу</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}