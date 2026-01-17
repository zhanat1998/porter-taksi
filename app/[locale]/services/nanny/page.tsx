import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { client } from '@/app/sanity/lib/client'
import { WORKERS_BY_SERVICE_QUERY } from '@/app/sanity/lib/queries'
import WorkerCard, { Worker } from '@/app/components/WorkerCard'

type Props = {
  params: Promise<{ locale: string }>
}

async function getWorkers(): Promise<Worker[]> {
  return client.fetch(WORKERS_BY_SERVICE_QUERY, { serviceType: 'nanny' })
}

export default async function NannyPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const workers = await getWorkers()

  return <NannyContent workers={workers} />
}

function NannyContent({ workers }: { workers: Worker[] }) {
  const t = useTranslations()

  const services = [
    { icon: '👶', key: 'babysitting' },
    { icon: '📚', key: 'education' },
    { icon: '🍼', key: 'care' },
    { icon: '🎮', key: 'play' },
  ]

  const features = [
    { icon: '✅', key: 'verified' },
    { icon: '💝', key: 'caring' },
    { icon: '📋', key: 'experienced' },
    { icon: '⏰', key: 'flexible' },
  ]

  return (
    <main className="min-h-screen">
      {/* Workers List */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-800">
              Няня кызматы - Бишкек {workers.length > 0 && `(${workers.length} жумушчу)`}
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

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('nannyPage.services.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.key} className="bg-purple-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition border-t-4 border-purple-500">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{t(`nannyPage.services.${service.key}`)}</h3>
                <p className="text-gray-600 text-sm">{t(`nannyPage.services.${service.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('nannyPage.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.key} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{t(`nannyPage.features.${feature.key}`)}</h3>
                <p className="text-gray-600">{t(`nannyPage.features.${feature.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}