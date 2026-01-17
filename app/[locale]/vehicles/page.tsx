import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return {
    title: locale === 'kg' ? 'Унаалар | Porter Taxi Бишкек' : 'Транспорт | Porter Taxi Бишкек',
  }
}

export default async function VehiclesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <VehiclesContent />
}

function VehiclesContent() {
  const t = useTranslations()

  const vehicles = [
    { name: 'Портер', icon: '🚛', capacity: '1.5 т', price: '800', volume: '6 куб.м', length: '2.7м', width: '1.6м', height: '1.5м' },
    { name: 'Газель', icon: '🚚', capacity: '2 т', price: '1000', volume: '12 куб.м', length: '3м', width: '2м', height: '2м' },
    { name: 'Газель Узун', icon: '🚚', capacity: '3 т', price: '1200', volume: '18 куб.м', length: '4м', width: '2м', height: '2.2м' },
    { name: 'Самосвал 5т', icon: '🚜', capacity: '5 т', price: '2500', volume: '4 куб.м', length: '4м', width: '2.3м', height: '0.8м' },
    { name: 'Самосвал 10т', icon: '🚜', capacity: '10 т', price: '4000', volume: '8 куб.м', length: '5м', width: '2.3м', height: '1м' },
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('vehicles.title')}</h1>
          <p className="text-xl text-green-100 max-w-2xl">{t('vehicles.subtitle')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition border border-gray-100 hover:border-green-500">
                <div className="text-6xl text-center mb-4">{vehicle.icon}</div>
                <h2 className="text-2xl font-bold text-center mb-2">{vehicle.name}</h2>
                <div className="text-green-600 font-bold text-2xl text-center mb-4">
                  {vehicle.price} {t('common.som')}/{t('common.hour')}
                </div>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between"><span className="text-gray-500">{t('vehicles.capacity')}</span><span className="font-medium">{vehicle.capacity}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">{t('vehicles.volume')}</span><span className="font-medium">{vehicle.volume}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">{t('vehicles.length')}</span><span className="font-medium">{vehicle.length}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">{t('vehicles.width')}</span><span className="font-medium">{vehicle.width}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">{t('vehicles.height')}</span><span className="font-medium">{vehicle.height}</span></div>
                </div>
                <a href="tel:+996555123456" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-medium hover:bg-green-700 transition">
                  {t('common.order')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('vehicles.dontKnow')}</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">{t('vehicles.dontKnowDesc')}</p>
          <a href="tel:+996555123456" className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition">
            📞 {t('common.freeConsultation')}
          </a>
        </div>
      </section>
    </main>
  )
}