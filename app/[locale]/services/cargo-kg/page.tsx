import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { client } from '@/app/sanity/lib/client'
import { WORKERS_BY_SERVICE_QUERY } from '@/app/sanity/lib/queries'
import WorkerCard, { Worker } from '@/app/components/WorkerCard'

type Props = {
  params: Promise<{ locale: string }>
}

async function getWorkers(): Promise<Worker[]> {
  return client.fetch(WORKERS_BY_SERVICE_QUERY, { serviceType: 'cargo-kg' })
}

export default async function CargoKgPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const workers = await getWorkers()

  return <CargoKgContent workers={workers} />
}

function CargoKgContent({ workers }: { workers: Worker[] }) {
  const t = useTranslations()

  const routes = [
    { icon: '🏔️', key: 'osh' },
    { icon: '🌊', key: 'issykKul' },
    { icon: '🏭', key: 'jalal' },
    { icon: '🌄', key: 'naryn' },
  ]

  const features = [
    { icon: '🚛', key: 'bigTruck' },
    { icon: '📦', key: 'safe' },
    { icon: '⏰', key: 'onTime' },
    { icon: '💰', key: 'affordable' },
  ]

  return (
    <main className="min-h-screen">
      {/* Workers List */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-800">
              Жүк ташуу КР ичинде - Бишкек {workers.length > 0 && `(${workers.length} айдоочу)`}
            </h1>
          </div>

          {workers.length > 0 ? (
            <div className="space-y-4 max-w-4xl">
              {workers.map((worker) => (
                <WorkerCard key={worker._id} worker={worker} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Жумушчулар жакында кошулат...
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Routes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('cargoKgPage.routes.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {routes.map((route) => (
              <div key={route.key} className="bg-orange-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition border-t-4 border-orange-500">
                <div className="text-5xl mb-4">{route.icon}</div>
                <h3 className="text-lg font-bold mb-2">{t(`cargoKgPage.routes.${route.key}`)}</h3>
                <p className="text-gray-600 text-sm">{t(`cargoKgPage.routes.${route.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('cargoKgPage.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.key} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{t(`cargoKgPage.features.${feature.key}`)}</h3>
                <p className="text-gray-600">{t(`cargoKgPage.features.${feature.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}