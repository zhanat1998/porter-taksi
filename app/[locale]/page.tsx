import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import { client } from '@/app/sanity/lib/client'
import { ALL_ACTIVE_VIDEOS_QUERY } from '@/app/sanity/lib/queries'

type Props = {
  params: Promise<{ locale: string }>
}

async function getAllVideos() {
  return client.fetch(ALL_ACTIVE_VIDEOS_QUERY)
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const videos = await getAllVideos()

  return <HomeContent videos={videos} />
}

type VideoData = {
  _id: string
  title: string
  category: string
  videoUrl: string
  posterUrl?: string
}

function HomeContent({ videos }: { videos: VideoData[] }) {
  const t = useTranslations()

  // Кызматтар массиви - жаңы кызмат кошуу оңой
  const services = [
    {
      key: 'garbage',
      videoCategory: 'home-garbage',
      href: '/services/garbage',
      title: t('home.videos.garbage'),
      icon: '🗑️',
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'group-hover:ring-blue-300',
    },
    {
      key: 'cleaning',
      videoCategory: 'home-cleaning',
      href: '/services/cleaning',
      title: t('home.videos.cleaning'),
      icon: '🧹',
      color: 'from-emerald-500 to-emerald-700',
      hoverColor: 'group-hover:ring-emerald-300',
    },
    {
      key: 'marryMe',
      videoCategory: 'home-marry-me',
      href: '/services/marry-me',
      title: t('home.videos.marryMe'),
      icon: '💍',
      color: 'from-pink-500 to-rose-600',
      hoverColor: 'group-hover:ring-pink-300',
    },
    {
      key: 'cargoKg',
      videoCategory: 'home-cargo-kg',
      href: '/services/cargo-kg',
      title: t('home.videos.cargoKg'),
      icon: '🚛',
      color: 'from-orange-500 to-amber-600',
      hoverColor: 'group-hover:ring-orange-300',
    },
    {
      key: 'nanny',
      videoCategory: 'home-nanny',
      href: '/services/nanny',
      title: t('home.videos.nanny'),
      icon: '👶',
      color: 'from-purple-500 to-violet-600',
      hoverColor: 'group-hover:ring-purple-300',
    },
    {
      key: 'loaders',
      videoCategory: 'home-loaders',
      href: '/services/loaders',
      title: t('home.videos.loaders'),
      icon: '💪',
      color: 'from-red-500 to-red-700',
      hoverColor: 'group-hover:ring-red-300',
    },
    {
      key: 'demolition',
      videoCategory: 'home-demolition',
      href: '/services/demolition',
      title: t('home.videos.demolition'),
      icon: '🏚️',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'group-hover:ring-gray-400',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Кызмат блоктору - Ак фонда */}
      <section className="pt-2.5 pb-2.5 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              // Категория боюнча видео издейбиз
              const video = videos?.find(v => v.category === service.videoCategory)
              return (
                <Link
                  key={service.key}
                  href={service.href}
                  className="group relative block"
                >
                  {/* Карточка */}
                  <div className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl ring-4 ring-transparent ${service.hoverColor}`}>
                    {/* Видео/Сүрөт */}
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                      {video?.videoUrl ? (
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
                        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${service.color}`}>
                          <span className="text-8xl">{service.icon}</span>
                        </div>
                      )}
                    </div>

                    {/* Заголовок - үстүндө */}
                    <div className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-5 md:p-8`}>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>

                    {/* Басуу индикатору - астында */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 md:p-8">
                      <div className="flex items-center justify-between">
                        <span className="text-white/90 text-base md:text-lg">
                          {t('common.order')}
                        </span>
                        <div className="bg-white text-gray-800 px-5 py-3 rounded-xl font-bold text-base md:text-lg flex items-center gap-2 group-hover:bg-green-500 group-hover:text-white transition-colors">
                          {t('home.videos.viewMore')}
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover эффект */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />
                  </div>
                </Link>
              )
            })}
          </div>

        </div>
      </section>

    </main>
  )
}