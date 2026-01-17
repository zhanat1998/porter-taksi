import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return {
    title: locale === 'kg' ? 'Баалар | Porter Taxi Бишкек' : 'Цены | Porter Taxi Бишкек',
  }
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <PricingContent />
}

function PricingContent() {
  const t = useTranslations()

  const categories = [
    {
      title: t('pricing.cargoTransport'),
      icon: '🚚',
      items: [
        { name: t('pricing.porter'), price: '800 ' + t('common.som') + '/' + t('common.hour'), note: t('common.min') + ' 2 ' + t('common.hour') },
        { name: t('pricing.gazel'), price: '1000 ' + t('common.som') + '/' + t('common.hour'), note: t('common.min') + ' 2 ' + t('common.hour') },
        { name: t('pricing.gazelLong'), price: '1200 ' + t('common.som') + '/' + t('common.hour'), note: t('common.min') + ' 2 ' + t('common.hour') },
        { name: t('pricing.outOfCity'), price: t('pricing.perKm'), note: t('pricing.outsideBishkek') },
      ],
    },
    {
      title: t('pricing.garbageRemoval'),
      icon: '🗑️',
      items: [
        { name: t('pricing.withPorter'), price: '1500 ' + t('common.som'), note: t('pricing.loadingIncluded') },
        { name: t('pricing.withGazel'), price: '2500 ' + t('common.som'), note: t('pricing.loadingIncluded') },
        { name: t('pricing.dumptruck5'), price: '2500 ' + t('common.som') + '/' + t('common.trip'), note: t('pricing.constructionWaste') },
        { name: t('pricing.dumptruck10'), price: '4000 ' + t('common.som') + '/' + t('common.trip'), note: t('pricing.constructionWaste') },
      ],
    },
    {
      title: t('pricing.loaderService'),
      icon: '💪',
      items: [
        { name: t('pricing.loader1'), price: '500 ' + t('common.som') + '/' + t('common.hour'), note: t('common.min') + ' 2 ' + t('common.hour') },
        { name: t('pricing.loader2'), price: '900 ' + t('common.som') + '/' + t('common.hour'), note: t('common.min') + ' 2 ' + t('common.hour') },
        { name: t('pricing.loader3'), price: '1300 ' + t('common.som') + '/' + t('common.hour'), note: t('common.min') + ' 2 ' + t('common.hour') },
        { name: t('pricing.pianoSafe'), price: t('pricing.byAgreement'), note: '' },
      ],
    },
    {
      title: t('pricing.movingService'),
      icon: '📦',
      items: [
        { name: t('pricing.apt1'), price: '3000 ' + t('common.som'), note: t('pricing.porterPlus2') },
        { name: t('pricing.apt2'), price: '5000 ' + t('common.som'), note: t('pricing.gazelPlus2') },
        { name: t('pricing.apt3'), price: '7000 ' + t('common.som'), note: t('pricing.gazelPlus3') },
        { name: t('pricing.office'), price: t('pricing.byAgreement'), note: t('pricing.dependsOnSize') },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('pricing.title')}</h1>
          <p className="text-xl text-green-100 max-w-2xl">{t('pricing.subtitle')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white px-6 py-4 flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-xl font-bold">{category.title}</h2>
                </div>
                <div className="divide-y">
                  {category.items.map((item, i) => (
                    <div key={i} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.note}</div>
                      </div>
                      <div className="text-green-600 font-bold text-lg">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="font-bold text-yellow-800 mb-4">⚠️ {t('pricing.importantInfo')}</h3>
            <ul className="space-y-2 text-yellow-800">
              <li>• {t('pricing.note1')}</li>
              <li>• {t('pricing.note2')}</li>
              <li>• {t('pricing.note3')}</li>
              <li>• {t('pricing.note4')}</li>
              <li>• {t('pricing.note5')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('pricing.exactPrice')}</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">{t('pricing.exactPriceDesc')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+996555123456" className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition">
              📞 {t('common.call')}
            </a>
            <a href="https://wa.me/996555123456" className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition">
              💬 {t('common.whatsapp')}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}