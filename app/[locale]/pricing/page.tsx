import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return {
    title: locale === 'kg' ? 'Баалар | Жардамчы Бишкек' : 'Цены | Жардамчы Бишкек',
    description: locale === 'kg'
      ? 'Портер жана клининг кызматтарынын баалары. Ачык баалар, жашыруун төлөмдөр жок!'
      : 'Цены на услуги портера и клининга. Прозрачные цены, никаких скрытых платежей!'
  }
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <PricingContent />
}

function PricingContent() {
  const t = useTranslations()

  const porterCategories = [
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

  const cleaningCategories = [
    {
      title: t('services.homeCleaning.title'),
      icon: '🏠',
      items: [
        { name: t('pricing.cleaning.homeDaily'), price: '1500 ' + t('common.som'), note: t('pricing.cleaning.room1') },
        { name: t('pricing.cleaning.homeGeneral'), price: '2500 ' + t('common.som'), note: t('pricing.cleaning.room1') },
        { name: t('pricing.cleaning.homeDeep'), price: '4000 ' + t('common.som'), note: t('pricing.cleaning.room1') },
      ],
    },
    {
      title: t('services.officeCleaning.title'),
      icon: '🏢',
      items: [
        { name: t('pricing.cleaning.officeSmall'), price: '2000 ' + t('common.som'), note: '' },
        { name: t('pricing.cleaning.officeMedium'), price: '3500 ' + t('common.som'), note: '' },
        { name: t('pricing.cleaning.officeLarge'), price: t('pricing.byAgreement'), note: '' },
      ],
    },
    {
      title: t('services.afterRepair.title'),
      icon: '🧹',
      items: [
        { name: t('pricing.cleaning.afterRepair1'), price: '3000 ' + t('common.som'), note: '' },
        { name: t('pricing.cleaning.afterRepair2'), price: '4500 ' + t('common.som'), note: '' },
        { name: t('pricing.cleaning.afterRepair3'), price: '6000 ' + t('common.som'), note: '' },
      ],
    },
    {
      title: t('services.windowCleaning.title'),
      icon: '🪟',
      items: [
        { name: t('pricing.cleaning.window1'), price: '200 ' + t('common.som'), note: t('pricing.cleaning.perPiece') },
        { name: t('pricing.cleaning.windowBalcony'), price: '500 ' + t('common.som'), note: '' },
        { name: t('pricing.cleaning.windowFull'), price: '1500 ' + t('common.som'), note: '' },
      ],
    },
    {
      title: t('services.furnitureCleaning.title'),
      icon: '🛋️',
      items: [
        { name: t('pricing.cleaning.sofa'), price: '800 ' + t('common.som'), note: '' },
        { name: t('pricing.cleaning.armchair'), price: '400 ' + t('common.som'), note: '' },
        { name: t('pricing.cleaning.mattress'), price: '600 ' + t('common.som'), note: '' },
        { name: t('pricing.cleaning.carpet'), price: '100 ' + t('common.som'), note: t('pricing.cleaning.perSqm') },
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

      {/* Porter Services Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">🚚</span>
            <h2 className="text-3xl font-bold text-blue-600">{t('pricing.porterServices')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {porterCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white px-6 py-4 flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="divide-y">
                  {category.items.map((item, i) => (
                    <div key={i} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.note}</div>
                      </div>
                      <div className="text-blue-600 font-bold text-lg">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Services Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">🧹</span>
            <h2 className="text-3xl font-bold text-green-600">{t('pricing.cleaningServices')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleaningCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white px-6 py-4 flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.title}</h3>
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
        </div>
      </section>

      {/* Important Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
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

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('pricing.exactPrice')}</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">{t('pricing.exactPriceDesc')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+996555123456" className="bg-white text-green-700 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition">
              📞 {t('common.call')}
            </a>
            <a href="https://wa.me/996555123456" className="border-2 border-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition">
              💬 {t('common.whatsapp')}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}