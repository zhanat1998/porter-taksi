import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import { client } from '@/app/sanity/lib/client'
import { VIDEO_BY_CATEGORY_QUERY } from '@/app/sanity/lib/queries'

type Props = {
  params: Promise<{ locale: string }>
}

async function getGarbageVideo() {
  return client.fetch(VIDEO_BY_CATEGORY_QUERY, { category: 'page-garbage' })
}

export default async function GarbagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const video = await getGarbageVideo()

  return <GarbageContent video={video} />
}

type VideoData = {
  _id: string
  title: string
  videoUrl: string
  posterUrl?: string
} | null

function GarbageContent({ video }: { video: VideoData }) {
  const t = useTranslations()

  const prices = [
    { key: 'withPorter', price: '1500', unit: 'trip' },
    { key: 'withGazel', price: '2500', unit: 'trip' },
    { key: 'dumptruck5', price: '5000', unit: 'trip' },
    { key: 'dumptruck10', price: '8000', unit: 'trip' },
  ]

  const features = [
    { icon: '🚚', key: 'fastArrival' },
    { icon: '💪', key: 'loadersIncluded' },
    { icon: '🧹', key: 'cleanAfter' },
    { icon: '📱', key: 'easyOrder' },
  ]

  const wasteTypes = [
    { icon: '🏗️', key: 'construction' },
    { icon: '🪑', key: 'furniture' },
    { icon: '🏠', key: 'household' },
    { icon: '🌿', key: 'garden' },
  ]

  return (
    <main className="min-h-screen">
      {/* Waste Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('garbagePage.wasteTypes.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {wasteTypes.map((type) => (
              <div key={type.key} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-lg font-bold mb-2">{t(`garbagePage.wasteTypes.${type.key}`)}</h3>
                <p className="text-gray-600 text-sm">{t(`garbagePage.wasteTypes.${type.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('garbagePage.prices.title')}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t('garbagePage.prices.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {prices.map((item) => (
              <div key={item.key} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-2">{t(`pricing.${item.key}`)}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  {item.price} <span className="text-lg">{t('common.som')}</span>
                </p>
                <p className="text-gray-500 text-sm">{t(`common.${item.unit}`)}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-xl max-w-3xl mx-auto">
            <h3 className="font-bold text-blue-800 mb-2">{t('pricing.importantInfo')}</h3>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• {t('pricing.note1')}</li>
              <li>• {t('pricing.note2')}</li>
              <li>• {t('pricing.note4')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('garbagePage.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.key} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{t(`garbagePage.features.${feature.key}`)}</h3>
                <p className="text-gray-600">{t(`garbagePage.features.${feature.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('garbagePage.howItWorks.title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4">1</div>
                <h3 className="text-lg font-bold mb-2">{t('garbagePage.howItWorks.step1')}</h3>
                <p className="text-gray-600">{t('garbagePage.howItWorks.step1Desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4">2</div>
                <h3 className="text-lg font-bold mb-2">{t('garbagePage.howItWorks.step2')}</h3>
                <p className="text-gray-600">{t('garbagePage.howItWorks.step2Desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4">3</div>
                <h3 className="text-lg font-bold mb-2">{t('garbagePage.howItWorks.step3')}</h3>
                <p className="text-gray-600">{t('garbagePage.howItWorks.step3Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}