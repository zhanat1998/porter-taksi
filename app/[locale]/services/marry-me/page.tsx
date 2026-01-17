import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function MarryMePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <MarryMeContent />
}

function MarryMeContent() {
  const t = useTranslations()

  const services = [
    { icon: '💍', key: 'proposal' },
    { icon: '🎈', key: 'decoration' },
    { icon: '📸', key: 'photo' },
    { icon: '🎵', key: 'music' },
  ]

  const features = [
    { icon: '✨', key: 'unique' },
    { icon: '🎯', key: 'professional' },
    { icon: '💝', key: 'romantic' },
    { icon: '📋', key: 'organized' },
  ]

  return (
    <main className="min-h-screen">
      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('marryMePage.services.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.key} className="bg-pink-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition border-t-4 border-pink-500">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{t(`marryMePage.services.${service.key}`)}</h3>
                <p className="text-gray-600 text-sm">{t(`marryMePage.services.${service.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('marryMePage.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.key} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{t(`marryMePage.features.${feature.key}`)}</h3>
                <p className="text-gray-600">{t(`marryMePage.features.${feature.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}