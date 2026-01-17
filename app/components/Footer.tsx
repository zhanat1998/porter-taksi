'use client'

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <section className="py-2.5 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {t('contact.orderNow')}
          </h2>
          <p className="text-lg mb-3 text-green-100 max-w-xl mx-auto">
            {t('contact.orderNowDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+996555123456"
              className="bg-white text-green-700 px-6 py-3 rounded-lg text-lg font-bold hover:bg-green-50 transition inline-flex items-center justify-center gap-2"
            >
              <span>📞</span> {t('common.call')}
            </a>
            <a
              href="https://wa.me/996555123456"
              className="border-2 border-white text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-green-500 transition inline-flex items-center justify-center gap-2"
            >
              <span>💬</span> {t('common.whatsapp')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <div className="py-8 text-gray-400 text-center">
        <div className="container mx-auto px-4">
          <p className="text-2xl mb-2">🏠 Жардамчы</p>
          <p>© 2024 Жардамчы - {t('common.bishkek')}</p>
        </div>
      </div>
    </footer>
  )
}