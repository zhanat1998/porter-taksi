import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return {
    title: locale === 'kg' ? 'Биз жөнүндө | Porter Taxi Бишкек' : 'О нас | Porter Taxi Бишкек',
    description: locale === 'kg'
      ? 'Porter Taxi - Бишкекте мусор чыгаруу жана жүк ташуу боюнча 5 жылдан ашык тажрыйба.'
      : 'Porter Taxi - более 5 лет опыта в вывозе мусора и грузоперевозках в Бишкеке.'
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <AboutContent />
}

function AboutContent() {
  const t = useTranslations()

  const stats = [
    { value: '5+', labelKey: 'experience' },
    { value: '1000+', labelKey: 'clients' },
    { value: '10+', labelKey: 'vehicles' },
    { value: '24/7', labelKey: 'workTime' },
  ]

  const team = [
    { icon: '👨‍💼', key: 'drivers' },
    { icon: '💪', key: 'loaders' },
    { icon: '📞', key: 'operators' },
  ]

  const values = [
    { icon: '⏰', key: 'time' },
    { icon: '💯', key: 'quality' },
    { icon: '💰', key: 'price' },
    { icon: '🤝', key: 'trust' },
  ]

  const whyUs = [
    { key: 'experience' },
    { key: 'trust' },
    { key: 'speed' },
    { key: 'price' },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-green-50 rounded-2xl">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{t(`about.stats.${stat.labelKey}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">{t('about.history.title')}</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-4">{t('about.history.p1')}</p>
              <p className="mb-4">{t('about.history.p2')}</p>
              <p>{t('about.history.p3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('about.values.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-lg mb-2">{t(`about.values.${value.key}.title`)}</h3>
                <p className="text-gray-600 text-sm">{t(`about.values.${value.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('about.team.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{t(`about.team.${member.key}.title`)}</h3>
                <p className="text-gray-600">{t(`about.team.${member.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('about.whyUs.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyUs.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-bold mb-1">{t(`about.whyUs.${item.key}.title`)}</h3>
                  <p className="text-green-100">{t(`about.whyUs.${item.key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('about.cta.title')}</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            {t('about.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+996555123456"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition"
            >
              📞 +996 555 123 456
            </a>
            <a
              href="https://wa.me/996555123456"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}