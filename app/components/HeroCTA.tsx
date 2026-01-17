'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export default function HeroCTA() {
  const t = useTranslations()
  const pathname = usePathname()

  // Барак боюнча заголовок аныктоо
  const getTitle = () => {
    if (pathname.includes('/services/garbage')) return t('home.videos.garbage')
    if (pathname.includes('/services/cleaning')) return t('home.videos.cleaning')
    if (pathname.includes('/services/marry-me')) return t('home.videos.marryMe')
    if (pathname.includes('/services/cargo-kg')) return t('home.videos.cargoKg')
    if (pathname.includes('/services/nanny')) return t('home.videos.nanny')
    if (pathname.includes('/services/loaders')) return t('home.videos.loaders')
    if (pathname.includes('/services/demolition')) return t('home.videos.demolition')
    return t('home.hero.title')
  }

  return (
    <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-2.5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          {getTitle()}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <a
            href="tel:+996555123456"
            className="bg-white text-green-700 px-6 py-4 rounded-xl text-lg font-bold hover:bg-green-50 transition inline-flex items-center justify-center gap-2"
          >
            <span>📞</span> +996 555 123 456
          </a>
          <a
            href="https://wa.me/996555123456"
            className="bg-green-500 text-white px-6 py-4 rounded-xl text-lg font-bold hover:bg-green-400 transition inline-flex items-center justify-center gap-2 border-2 border-green-400"
          >
            <span>💬</span> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}