import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import { client } from '@/app/sanity/lib/client'
import { VIDEOS_BY_CATEGORY_QUERY } from '@/app/sanity/lib/queries'

type Props = {
  params: Promise<{ locale: string }>
}

async function getHomeVideos() {
  return client.fetch(VIDEOS_BY_CATEGORY_QUERY, { category: 'home' })
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const videos = await getHomeVideos()

  return <HomeContent videos={videos} />
}

type VideoData = {
  _id: string
  title: string
  videoUrl: string
  posterUrl?: string
}

function HomeContent({ videos }: { videos: VideoData[] }) {
  const t = useTranslations()

  const porterServices = [
    { key: 'garbageRemoval', icon: '🗑️', price: '1500' },
    { key: 'cargoTransport', icon: '🚚', price: '800' },
    { key: 'moving', icon: '📦', price: '2000' },
    { key: 'loaders', icon: '💪', price: '500' },
  ]

  const cleaningServices = [
    { key: 'homeCleaning', icon: '🏠', price: '1500' },
    { key: 'officeCleaning', icon: '🏢', price: '2000' },
    { key: 'afterRepair', icon: '🧹', price: '3000' },
    { key: 'windowCleaning', icon: '🪟', price: '200' },
    { key: 'furnitureCleaning', icon: '🛋️', price: '800' },
  ]

  const whyUs = [
    { icon: '⚡', key: 'fast' },
    { icon: '✅', key: 'reliable' },
    { icon: '💰', key: 'affordable' },
    { icon: '🏆', key: 'quality' },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 pt-[10px] pb-16 md:py-24">
          {/* Мобилка - видеолор үстүндө */}
          {videos && videos.length > 0 && (
            <div className="lg:hidden mb-8">
              <div className="flex gap-3 justify-center">
                {videos.slice(0, 2).map((video, index) => (
                  <div key={video._id} className="flex flex-col items-center">
                    <span className="text-sm font-semibold mb-2 text-green-100">
                      {index === 0 ? t('home.videos.garbage') : t('home.videos.cleaning')}
                    </span>
                    <div className="aspect-video h-[120px] rounded-xl overflow-hidden shadow-xl bg-green-700/30">
                      {video.videoUrl ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster={video.posterUrl}
                          className="w-full h-full object-cover"
                        >
                          <source src={video.videoUrl} type="video/mp4" />
                        </video>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-4xl">🚚</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Сол жак - Текст */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
                {t('home.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                {t('home.hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
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

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm">
                <span className="bg-green-700/50 px-4 py-2 rounded-full">⏰ 24/7</span>
                <span className="bg-green-700/50 px-4 py-2 rounded-full">⚡ {t('home.whyUs.fast')}</span>
                <span className="bg-green-700/50 px-4 py-2 rounded-full">💰 {t('home.whyUs.affordable')}</span>
                <span className="bg-green-700/50 px-4 py-2 rounded-full">🏆 {t('home.whyUs.quality')}</span>
              </div>
            </div>

            {/* Оң жак - Эки видео (десктоп) */}
            <div className="hidden lg:block">
              <div className="flex gap-4">
                {videos && videos.length > 0 ? (
                  videos.slice(0, 2).map((video, index) => (
                    <div key={video._id} className="flex-1 flex flex-col items-center">
                      <span className="text-base font-semibold mb-2 text-green-100">
                        {index === 0 ? t('home.videos.garbage') : t('home.videos.cleaning')}
                      </span>
                      <div className="w-full aspect-video max-h-[180px] rounded-xl overflow-hidden shadow-xl bg-green-700/30">
                        {video.videoUrl ? (
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={video.posterUrl}
                            className="w-full h-full object-cover"
                          >
                            <source src={video.videoUrl} type="video/mp4" />
                          </video>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-5xl">🚚</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex-1 aspect-video max-h-[200px] rounded-xl overflow-hidden shadow-xl bg-green-700/30 flex items-center justify-center">
                    <span className="text-7xl">🚚</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('home.categories.title')}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t('home.categories.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Porter Services Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="text-6xl mb-4">🚚</div>
                <h3 className="text-2xl font-bold mb-2">{t('home.porter.title')}</h3>
                <p className="text-blue-100">{t('home.porter.desc')}</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-2xl">🗑️</span>
                    <p className="text-sm mt-1">{t('services.garbageRemoval.title')}</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-2xl">📦</span>
                    <p className="text-sm mt-1">{t('services.moving.title')}</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-2xl">🚚</span>
                    <p className="text-sm mt-1">{t('services.cargoTransport.title')}</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-2xl">💪</span>
                    <p className="text-sm mt-1">{t('services.loaders.title')}</p>
                  </div>
                </div>
                <Link
                  href="/services#porter"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  {t('home.porter.btn')} →
                </Link>
              </div>
            </div>

            {/* Cleaning Services Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                <div className="text-6xl mb-4">🧹</div>
                <h3 className="text-2xl font-bold mb-2">{t('home.cleaning.title')}</h3>
                <p className="text-green-100">{t('home.cleaning.desc')}</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <span className="text-2xl">🏠</span>
                    <p className="text-sm mt-1">{t('services.homeCleaning.title')}</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <span className="text-2xl">🏢</span>
                    <p className="text-sm mt-1">{t('services.officeCleaning.title')}</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <span className="text-2xl">🪟</span>
                    <p className="text-sm mt-1">{t('services.windowCleaning.title')}</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <span className="text-2xl">🛋️</span>
                    <p className="text-sm mt-1">{t('services.furnitureCleaning.title')}</p>
                  </div>
                </div>
                <Link
                  href="/services#cleaning"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-medium hover:bg-green-700 transition"
                >
                  {t('home.cleaning.btn')} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('home.services.title')}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t('home.services.subtitle')}
          </p>

          {/* Porter Services */}
          <h3 className="text-xl font-bold mb-6 text-blue-600">{t('services.porterTitle')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {porterServices.map((service) => (
              <div
                key={service.key}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition hover:-translate-y-1 border-t-4 border-blue-500"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold mb-2">{t(`services.${service.key}.title`)}</h4>
                <p className="text-gray-600 mb-4 text-sm">{t(`services.${service.key}.desc`)}</p>
                <p className="text-blue-600 font-bold text-lg">
                  {t('common.from')} {service.price} {t('common.som')}
                </p>
              </div>
            ))}
          </div>

          {/* Cleaning Services */}
          <h3 className="text-xl font-bold mb-6 text-green-600">{t('services.cleaningTitle')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {cleaningServices.map((service) => (
              <div
                key={service.key}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition hover:-translate-y-1 border-t-4 border-green-500"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-lg font-bold mb-2">{t(`services.${service.key}.title`)}</h4>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{t(`services.${service.key}.desc`)}</p>
                <p className="text-green-600 font-bold text-lg">
                  {t('common.from')} {service.price} {t('common.som')}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              {t('nav.services')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('home.whyUs.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {whyUs.map((item) => (
              <div key={item.key} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{t(`home.whyUs.${item.key}`)}</h3>
                <p className="text-gray-600">{t(`home.whyUs.${item.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('contact.orderNow')}
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
          <p className="text-2xl mb-2">🏠 Жардамчы</p>
          <p>© 2024 Жардамчы - {t('common.bishkek')}</p>
        </div>
      </footer>
    </main>
  )
}