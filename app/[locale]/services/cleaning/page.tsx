import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import { client } from '@/app/sanity/lib/client'
import { VIDEO_BY_CATEGORY_QUERY } from '@/app/sanity/lib/queries'

type Props = {
  params: Promise<{ locale: string }>
}

async function getCleaningVideo() {
  return client.fetch(VIDEO_BY_CATEGORY_QUERY, { category: 'page-cleaning' })
}

export default async function CleaningPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const video = await getCleaningVideo()

  return <CleaningContent video={video} />
}

type VideoData = {
  _id: string
  title: string
  videoUrl: string
  posterUrl?: string
} | null

function CleaningContent({ video }: { video: VideoData }) {
  const t = useTranslations()

  const services = [
    { icon: '🏠', key: 'homeCleaning', price: '1500' },
    { icon: '🏢', key: 'officeCleaning', price: '2000' },
    { icon: '🧹', key: 'afterRepair', price: '3000' },
    { icon: '🪟', key: 'windowCleaning', price: '200' },
    { icon: '🛋️', key: 'furnitureCleaning', price: '800' },
  ]

  const features = [
    { icon: '✨', key: 'professional' },
    { icon: '🧴', key: 'ecoFriendly' },
    { icon: '⏰', key: 'flexible' },
    { icon: '💯', key: 'guaranteed' },
  ]

  const steps = [
    { num: 1, key: 'contact' },
    { num: 2, key: 'assess' },
    { num: 3, key: 'clean' },
    { num: 4, key: 'enjoy' },
  ]

  return (
    <main className="min-h-screen">
      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('cleaningPage.services.title')}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t('cleaningPage.services.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.key} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{t(`services.${service.key}.title`)}</h3>
                <p className="text-gray-600 mb-4 text-sm">{t(`services.${service.key}.desc`)}</p>
                <p className="text-green-600 font-bold text-xl">
                  {t('common.from')} {service.price} <span className="text-sm">{t('common.som')}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('cleaningPage.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.key} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{t(`cleaningPage.features.${feature.key}`)}</h3>
                <p className="text-gray-600">{t(`cleaningPage.features.${feature.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('cleaningPage.howItWorks.title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.key} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t(`cleaningPage.howItWorks.${step.key}`)}</h3>
                  <p className="text-gray-600 text-sm">{t(`cleaningPage.howItWorks.${step.key}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-green-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-green-800 mb-4">{t('cleaningPage.pricing.title')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-green-700 mb-2">{t('cleaningPage.pricing.included')}</h3>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>✓ {t('cleaningPage.pricing.item1')}</li>
                  <li>✓ {t('cleaningPage.pricing.item2')}</li>
                  <li>✓ {t('cleaningPage.pricing.item3')}</li>
                  <li>✓ {t('cleaningPage.pricing.item4')}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-green-700 mb-2">{t('cleaningPage.pricing.extra')}</h3>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• {t('cleaningPage.pricing.extra1')}</li>
                  <li>• {t('cleaningPage.pricing.extra2')}</li>
                  <li>• {t('cleaningPage.pricing.extra3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}