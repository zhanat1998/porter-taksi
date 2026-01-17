import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return {
    title: locale === 'kg' ? 'Байланыш | Porter Taxi Бишкек' : 'Контакты | Porter Taxi Бишкек',
    description: locale === 'kg'
      ? 'Porter Taxi менен байланыш. Телефон, WhatsApp, Telegram. 24/7 иштейбиз!'
      : 'Связаться с Porter Taxi. Телефон, WhatsApp, Telegram. Работаем 24/7!'
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <ContactContent />
}

function ContactContent() {
  const t = useTranslations()

  const contacts = [
    {
      icon: '📞',
      key: 'phone',
      items: ['+996 555 123 456', '+996 700 123 456'],
      action: 'tel:+996555123456',
      color: 'bg-blue-500',
    },
    {
      icon: '💬',
      key: 'whatsapp',
      items: ['+996 555 123 456'],
      action: 'https://wa.me/996555123456',
      color: 'bg-green-500',
    },
    {
      icon: '✈️',
      key: 'telegram',
      items: ['@portertaxi'],
      action: 'https://t.me/portertaxi',
      color: 'bg-sky-500',
    },
  ]

  const workingAreas = [
    'contact.areas.bishkek',
    'contact.areas.chui',
    'contact.areas.tokmok',
    'contact.areas.kant',
    'contact.areas.sokuluk',
    'contact.areas.belovodskoe',
    'contact.areas.karabalta',
    'contact.areas.shopokov',
  ]

  const faqs = [
    { key: 'time' },
    { key: 'payment' },
    { key: 'loaders' },
    { key: 'night' },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contacts.map((contact, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
                <div className={`w-20 h-20 ${contact.color} rounded-full flex items-center justify-center text-4xl mx-auto mb-6`}>
                  {contact.icon}
                </div>
                <h2 className="text-xl font-bold mb-4">{t(`contact.methods.${contact.key}.title`)}</h2>
                <div className="space-y-1 mb-6">
                  {contact.items.map((item, j) => (
                    <p key={j} className="text-gray-600 text-lg">{item}</p>
                  ))}
                </div>
                <a
                  href={contact.action}
                  className={`inline-block ${contact.color} text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition`}
                >
                  {t(`contact.methods.${contact.key}.action`)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">🕐</span> {t('contact.hours.title')}
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">{t('contact.hours.weekdays')}</span>
                    <span className="font-bold text-green-600">{t('contact.hours.allDay')}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">{t('contact.hours.saturday')}</span>
                    <span className="font-bold text-green-600">{t('contact.hours.allDay')}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">{t('contact.hours.sunday')}</span>
                    <span className="font-bold text-green-600">{t('contact.hours.allDay')}</span>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700 font-medium text-center">
                    🌙 {t('contact.hours.night')}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">📍</span> {t('contact.address.title')}
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <strong className="text-gray-900">{t('contact.address.city')}:</strong> {t('common.bishkek')}
                  </p>
                  <p className="text-gray-600">
                    <strong className="text-gray-900">{t('contact.address.country')}:</strong> {t('contact.address.kyrgyzstan')}
                  </p>
                  <p className="text-gray-600">
                    <strong className="text-gray-900">{t('contact.address.serviceArea')}:</strong> {t('contact.address.serviceAreaDesc')}
                  </p>
                </div>
                <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-700 text-sm">
                    ⚠️ {t('contact.address.outsideNote')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('contact.areasTitle')}</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {workingAreas.map((areaKey, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 px-6 py-3 rounded-full font-medium"
              >
                📍 {t(areaKey)}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6">
            {t('contact.areasNote')}
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('contact.orderNow')}</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            {t('contact.orderNowDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+996555123456"
              className="bg-white text-green-700 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition inline-flex items-center justify-center gap-2"
            >
              <span>📞</span> {t('common.call')}
            </a>
            <a
              href="https://wa.me/996555123456"
              className="border-2 border-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition inline-flex items-center justify-center gap-2"
            >
              <span>💬</span> WhatsApp
            </a>
            <a
              href="https://t.me/portertaxi"
              className="border-2 border-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition inline-flex items-center justify-center gap-2"
            >
              <span>✈️</span> Telegram
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('contact.faq.title')}</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-lg shadow-sm p-6 cursor-pointer">
                <summary className="font-bold">{t(`contact.faq.${faq.key}.q`)}</summary>
                <p className="mt-4 text-gray-600">{t(`contact.faq.${faq.key}.a`)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}