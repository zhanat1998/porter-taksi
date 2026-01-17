import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <HomeContent />
}

function HomeContent() {
  const t = useTranslations()

  const services = [
    { key: 'garbageRemoval', icon: '🗑️', price: '1500' },
    { key: 'cargoTransport', icon: '🚚', price: '800' },
    { key: 'moving', icon: '📦', price: '2000' },
    { key: 'loaders', icon: '💪', price: '500' },
  ]

  const vehicles = [
    { name: 'Портер', capacity: '1.5 т', price: '800', icon: '🚛' },
    { name: 'Газель', capacity: '2 т', price: '1000', icon: '🚚' },
    { name: 'Самосвал', capacity: '5 т', price: '2500', icon: '🚜' },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Porter Taxi - {t('common.bishkek')}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-100">
              {t('home.hero.title')}
            </p>
            <p className="text-lg mb-8 text-green-100">
              {t('home.hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+996555123456"
                className="bg-white text-green-700 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition text-center"
              >
                📞 +996 555 123 456
              </a>
              <a
                href="https://wa.me/996555123456"
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-400 transition text-center border-2 border-green-400"
              >
                💬 {t('common.whatsapp')}
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-green-700/50 px-4 py-2 rounded-full">⏰ 24/7</span>
              <span className="bg-green-700/50 px-4 py-2 rounded-full">⚡ {t('home.whyUs.fast')}</span>
              <span className="bg-green-700/50 px-4 py-2 rounded-full">💰 {t('home.whyUs.affordable')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('home.services.title')}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t('home.services.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.key}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{t(`services.${service.key}.title`)}</h3>
                <p className="text-gray-600 mb-4">{t(`services.${service.key}.desc`)}</p>
                <p className="text-green-600 font-bold text-lg">
                  {service.price} {t('common.som')}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              {t('nav.services')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('vehicles.title')}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t('vehicles.subtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 p-6 rounded-2xl hover:border-green-500 transition"
              >
                <div className="text-6xl mb-4 text-center">{vehicle.icon}</div>
                <h3 className="text-2xl font-bold text-center mb-2">{vehicle.name}</h3>
                <p className="text-green-600 font-bold text-xl text-center mb-4">
                  {vehicle.price} {t('common.som')}/{t('common.hour')}
                </p>
                <div className="text-center text-gray-500">
                  {t('vehicles.capacity')} {vehicle.capacity}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/vehicles"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              {t('nav.vehicles')} →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('home.hero.cta')}!
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
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
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition inline-flex items-center justify-center gap-2"
            >
              <span>💬</span> {t('common.whatsapp')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto px-4">
          © 2024 Porter Taxi {t('common.bishkek')}
        </div>
      </footer>
    </main>
  )
}