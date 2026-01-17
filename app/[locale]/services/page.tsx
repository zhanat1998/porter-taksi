import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return {
    title: locale === 'kg' ? 'Кызматтар | Porter Taxi Бишкек' : 'Услуги | Porter Taxi Бишкек',
    description: locale === 'kg'
      ? 'Мусор чыгаруу, жүк ташуу, көчүрүү, грузчик кызматтары Бишкекте.'
      : 'Вывоз мусора, грузоперевозки, переезд, услуги грузчиков в Бишкеке.'
  }
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <ServicesContent />
}

function ServicesContent() {
  const t = useTranslations()

  const services = [
    { key: 'garbageRemoval', icon: '🗑️', price: '1500' },
    { key: 'cargoTransport', icon: '🚚', price: '800' },
    { key: 'moving', icon: '📦', price: '2000' },
    { key: 'loaders', icon: '💪', price: '500' },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.key}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition hover:border-green-500"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{t(`services.${service.key}.title`)}</h2>
                <p className="text-gray-600 mb-4">{t(`services.${service.key}.desc`)}</p>

                <div className="mb-6">
                  <span className="text-green-600 font-bold text-3xl">{service.price}</span>
                  <span className="text-gray-500"> {t('common.som')}</span>
                </div>

                <a
                  href="tel:+996555123456"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-medium hover:bg-green-700 transition"
                >
                  {t('common.order')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('contact.orderNow')}</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            {t('contact.orderNowDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+996555123456"
              className="bg-white text-green-700 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition"
            >
              📞 {t('common.call')}
            </a>
            <a
              href="https://wa.me/996555123456"
              className="border-2 border-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition"
            >
              💬 {t('common.whatsapp')}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}