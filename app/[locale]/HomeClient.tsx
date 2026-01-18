'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

// Жумушчу типи
type Worker = {
  id: string
  name: string
  avatar: string
  rating: number
  reviews: number
  experience: string
  price: string
  location: string
  verified: boolean
}

// Видео типи
type VideoData = {
  _id: string
  title: string
  category: string
  videoUrl: string
  posterUrl?: string
}

// Баардык профессиялар тизмеси
const professions = [
  { id: 'all', name: 'Баардык профессиялар', nameRu: 'Все профессии' },
  // Транспорт
  { id: 'cargo', name: 'Грузоперевозки', nameRu: 'Грузоперевозки', href: '/services/cargo-kg', category: 'Транспорт' },
  { id: 'loaders', name: 'Грузчики', nameRu: 'Грузчики', href: '/services/loaders', category: 'Транспорт' },
  { id: 'garbage', name: 'Вывоз мусора', nameRu: 'Вывоз мусора', href: '/services/garbage', category: 'Транспорт' },
  // Үй жардамы
  { id: 'cleaning', name: 'Клининг', nameRu: 'Клининг', href: '/services/cleaning', category: 'Үй жардамы' },
  { id: 'demolition', name: 'Демонтаж', nameRu: 'Демонтаж', href: '/services/demolition', category: 'Үй жардамы' },
  // Балдарга жардам
  { id: 'nanny-hourly', name: 'Няня 1 саатка', nameRu: 'Няня на час', href: '/services/nanny#hourly', category: 'Балдарга жардам' },
  { id: 'nanny-halfday', name: 'Няня жарым күнгө', nameRu: 'Няня на полдня', href: '/services/nanny#half-day', category: 'Балдарга жардам' },
  { id: 'nanny-fullday', name: 'Няня бир күнгө', nameRu: 'Няня на день', href: '/services/nanny#full-day', category: 'Балдарга жардам' },
  { id: 'nanny-night', name: 'Түнкү няня', nameRu: 'Ночная няня', href: '/services/nanny#night', category: 'Балдарга жардам' },
  { id: 'nanny-permanent', name: 'Няня туруктуу', nameRu: 'Няня постоянно', href: '/services/nanny#permanent', category: 'Балдарга жардам' },
  // Тамак-аш
  { id: 'cook-wedding', name: 'Той повары', nameRu: 'Повар на той', href: '/services/cook#wedding', category: 'Тамак-аш' },
  { id: 'cook-home', name: 'Үйгө повар', nameRu: 'Повар на дом', href: '/services/cook#home', category: 'Тамак-аш' },
  { id: 'cook-cafe', name: 'Кафе/Ресторан повар', nameRu: 'Повар кафе/ресторан', href: '/services/cook#cafe', category: 'Тамак-аш' },
  { id: 'cook-corporate', name: 'Корпоратив повар', nameRu: 'Повар корпоратив', href: '/services/cook#corporate', category: 'Тамак-аш' },
  { id: 'cook-diet', name: 'Диеталык тамак', nameRu: 'Диетическое питание', href: '/services/cook#diet', category: 'Тамак-аш' },
  { id: 'cook-confectioner', name: 'Кондитер', nameRu: 'Кондитер', href: '/services/cook#confectioner', category: 'Тамак-аш' },
  { id: 'cook-shashlik', name: 'Шашлык мастер', nameRu: 'Шашлык мастер', href: '/services/cook#shashlik', category: 'Тамак-аш' },
  { id: 'cook-national', name: 'Улуттук тамактар', nameRu: 'Национальная кухня', href: '/services/cook#national', category: 'Тамак-аш' },
  // Майрамдар
  { id: 'marry-me', name: 'Той уюштуруу', nameRu: 'Организация свадьбы', href: '/services/marry-me', category: 'Майрамдар' },
]

// График тандоолору
const schedules = [
  { id: 'all', name: 'Каалаган график', nameRu: 'Любой график' },
  { id: 'hourly', name: '1 саатка', nameRu: 'На час' },
  { id: 'half-day', name: 'Жарым күн', nameRu: 'Полдня' },
  { id: 'full-day', name: 'Толук күн', nameRu: 'Полный день' },
  { id: 'night', name: 'Түнкү', nameRu: 'Ночной' },
  { id: 'permanent', name: 'Туруктуу', nameRu: 'Постоянно' },
]

// Айлык тандоолору
const salaries = [
  { id: 'all', name: 'Каалаган айлык', nameRu: 'Любая зарплата' },
  { id: '500-1000', name: '500-1,000 сом', nameRu: '500-1,000 сом' },
  { id: '1000-3000', name: '1,000-3,000 сом', nameRu: '1,000-3,000 сом' },
  { id: '3000-5000', name: '3,000-5,000 сом', nameRu: '3,000-5,000 сом' },
  { id: '5000-10000', name: '5,000-10,000 сом', nameRu: '5,000-10,000 сом' },
  { id: '10000+', name: '10,000+ сом', nameRu: '10,000+ сом' },
]

// Категориялар
const categories = [
  {
    id: 'transport',
    icon: '🚛',
    title: 'Транспорт',
    color: 'from-blue-500 to-blue-600',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
    videoCategories: ['home-cargo-kg', 'home-loaders', 'home-garbage'],
    services: [
      { id: 'cargo-city', name: 'Шаар ичинде жүк ташуу', category: 'cargo', count: 156 },
      { id: 'cargo-region', name: 'Облустар аралык', category: 'cargo', count: 89 },
      { id: 'cargo-fura', name: 'Фура менен ташуу', category: 'cargo', count: 67 },
      { id: 'loaders-move', name: 'Көчүрүү жардамчылары', category: 'loaders', count: 124 },
      { id: 'loaders-warehouse', name: 'Склад жумушчулары', category: 'loaders', count: 78 },
      { id: 'garbage-construction', name: 'Курулуш таштандысы', category: 'garbage', count: 92 },
    ]
  },
  {
    id: 'home',
    icon: '🏠',
    title: 'Үй жардамы',
    color: 'from-green-500 to-green-600',
    bgLight: 'bg-green-50',
    textColor: 'text-green-600',
    videoCategories: ['home-cleaning', 'home-demolition'],
    services: [
      { id: 'cleaning-general', name: 'Генералдык тазалоо', category: 'cleaning', count: 143 },
      { id: 'cleaning-daily', name: 'Күнүмдүк тазалоо', category: 'cleaning', count: 98 },
      { id: 'cleaning-office', name: 'Офис тазалоо', category: 'cleaning', count: 67 },
      { id: 'cleaning-window', name: 'Терезе жуу', category: 'cleaning', count: 54 },
      { id: 'demolition-apartment', name: 'Квартира демонтажы', category: 'demolition', count: 87 },
      { id: 'demolition-wall', name: 'Дубал бузуу', category: 'demolition', count: 56 },
    ]
  },
  {
    id: 'childcare',
    icon: '👶',
    title: 'Балдарга жардам',
    color: 'from-purple-500 to-purple-600',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-600',
    videoCategories: ['home-nanny'],
    services: [
      { id: 'nanny-hourly', name: 'Няня 1 саатка', category: 'nanny', count: 85 },
      { id: 'nanny-halfday', name: 'Няня жарым күнгө', category: 'nanny', count: 72 },
      { id: 'nanny-fullday', name: 'Няня толук күнгө', category: 'nanny', count: 94 },
      { id: 'nanny-night', name: 'Түнкү няня', category: 'nanny', count: 45 },
      { id: 'nanny-permanent', name: 'Няня туруктуу', category: 'nanny', count: 68 },
      { id: 'nanny-governess', name: 'Гувернантка', category: 'nanny', count: 32 },
    ]
  },
  {
    id: 'food',
    icon: '👨‍🍳',
    title: 'Тамак-аш',
    color: 'from-orange-500 to-orange-600',
    bgLight: 'bg-orange-50',
    textColor: 'text-orange-600',
    videoCategories: ['home-cook'],
    services: [
      { id: 'cook-wedding', name: 'Той повары', category: 'cook', count: 124 },
      { id: 'cook-home', name: 'Үйгө повар', category: 'cook', count: 89 },
      { id: 'cook-confectioner', name: 'Кондитер', category: 'cook', count: 156 },
      { id: 'cook-shashlik', name: 'Шашлык мастер', category: 'cook', count: 67 },
      { id: 'cook-national', name: 'Улуттук тамактар', category: 'cook', count: 98 },
      { id: 'cook-diet', name: 'Диеталык тамак', category: 'cook', count: 43 },
    ]
  },
  {
    id: 'events',
    icon: '🎉',
    title: 'Майрамдар',
    color: 'from-pink-500 to-pink-600',
    bgLight: 'bg-pink-50',
    textColor: 'text-pink-600',
    videoCategories: ['home-marry-me'],
    services: [
      { id: 'event-wedding', name: 'Той уюштуруу', category: 'marry-me', count: 87 },
      { id: 'event-tamada', name: 'Тамада', category: 'marry-me', count: 134 },
      { id: 'event-photo', name: 'Фотограф', category: 'marry-me', count: 215 },
      { id: 'event-video', name: 'Видеограф', category: 'marry-me', count: 98 },
      { id: 'event-decor', name: 'Декоратор', category: 'marry-me', count: 76 },
      { id: 'event-dj', name: 'DJ / Музыкант', category: 'marry-me', count: 112 },
    ]
  },
]

// Жарнама баннерлери
const adBanners = [
  {
    id: 1,
    title: 'Авангард',
    subtitle: 'Курулуш компаниясы',
    description: 'Бишкекте жаңы үйлөр - 850$ дан баштап. Ипотека 0% - 2 жылга чейин.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    link: 'https://example.com/avangard',
    bgColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 2,
    title: 'Ак-Ордо',
    subtitle: 'Жаңы турак жай',
    description: 'Премиум класс квартиралар. Шаардын борборунда жайгашкан.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
    link: 'https://example.com/ak-ordo',
    bgColor: 'from-emerald-600 to-teal-700',
  },
  {
    id: 3,
    title: 'Мурас Ордо',
    subtitle: 'Премиум класс',
    description: 'Экологиялык таза район. Бардык инфраструктура жакын.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    link: 'https://example.com/muras-ordo',
    bgColor: 'from-amber-600 to-orange-700',
  },
]

// Mock жумушчулар
const mockWorkers: Record<string, Worker[]> = {
  'default': [
    { id: '1', name: 'Айбек Асанов', avatar: '👨', rating: 4.9, reviews: 127, experience: '5 жыл', price: '1,500 сом', location: 'Бишкек', verified: true },
    { id: '2', name: 'Нургуль Токтогулова', avatar: '👩', rating: 4.8, reviews: 89, experience: '3 жыл', price: '1,200 сом', location: 'Бишкек', verified: true },
    { id: '3', name: 'Бакыт Жумабеков', avatar: '👨', rating: 4.7, reviews: 56, experience: '4 жыл', price: '1,800 сом', location: 'Бишкек', verified: false },
    { id: '4', name: 'Аида Сыдыкова', avatar: '👩', rating: 4.9, reviews: 203, experience: '7 жыл', price: '2,000 сом', location: 'Бишкек', verified: true },
    { id: '5', name: 'Эрлан Карымов', avatar: '👨', rating: 4.6, reviews: 34, experience: '2 жыл', price: '1,000 сом', location: 'Ош', verified: true },
    { id: '6', name: 'Жылдыз Маматова', avatar: '👩', rating: 4.8, reviews: 78, experience: '4 жыл', price: '1,400 сом', location: 'Бишкек', verified: true },
  ]
}

export default function HomeClient({ videos }: { videos: VideoData[] }) {
  const t = useTranslations('search')
  const locale = useLocale()
  const [activeTab, setActiveTab] = useState<'worker' | 'employer'>('worker')
  const [selectedProfession, setSelectedProfession] = useState('all')
  const [selectedSchedule, setSelectedSchedule] = useState('all')
  const [selectedSalary, setSelectedSalary] = useState('all')
  const [showProfessionDropdown, setShowProfessionDropdown] = useState(false)
  const [showScheduleDropdown, setShowScheduleDropdown] = useState(false)
  const [showSalaryDropdown, setShowSalaryDropdown] = useState(false)
  const [currentAdIndex, setCurrentAdIndex] = useState(0)

  // Modal state
  const [selectedService, setSelectedService] = useState<{ id: string; name: string; category: string; count: number } | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [modalAnimating, setModalAnimating] = useState(false)
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null)

  const totalWorkers = 547
  const totalVacancies = 234

  // Modal ачуу функциясы
  const openServiceModal = (service: { id: string; name: string; category: string; count: number }) => {
    setSelectedService(service)
    setShowModal(true)
    setTimeout(() => setModalAnimating(true), 10)
  }

  // Modal жабуу функциясы
  const closeModal = () => {
    setModalAnimating(false)
    setSelectedWorker(null)
    setTimeout(() => {
      setShowModal(false)
      setSelectedService(null)
    }, 300)
  }

  // Жумушчу карта ачуу
  const openWorkerDetail = (worker: Worker) => {
    setSelectedWorker(worker)
  }

  // Жумушчу карта жабуу
  const closeWorkerDetail = () => {
    setSelectedWorker(null)
  }

  // Body scroll блоктоо
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showModal])

  // Категориялар котормосу
  const categoryTitles: Record<string, string> = {
    'transport': t('transport'),
    'home': t('homeHelp'),
    'childcare': t('childcare'),
    'food': t('food'),
    'events': t('events'),
  }

  // Кызматтар котормосу
  const serviceNames: Record<string, string> = {
    'cargo-city': t('cargoCity'),
    'cargo-region': t('cargoRegion'),
    'cargo-fura': t('cargoTruck'),
    'loaders-move': t('movingHelpers'),
    'loaders-warehouse': t('warehouseWorkers'),
    'garbage-construction': t('constructionWaste'),
    'cleaning-general': t('generalCleaning'),
    'cleaning-daily': t('dailyCleaning'),
    'cleaning-office': t('officeCleaning'),
    'cleaning-window': t('windowCleaning'),
    'demolition-apartment': t('apartmentDemolition'),
    'demolition-wall': t('wallDemolition'),
    'nanny-hourly': t('nannyHourly'),
    'nanny-halfday': t('nannyHalfDay'),
    'nanny-fullday': t('nannyFullDay'),
    'nanny-night': t('nannyNight'),
    'nanny-permanent': t('nannyPermanent'),
    'nanny-governess': t('governess'),
    'cook-wedding': t('weddingCook'),
    'cook-home': t('homeCook'),
    'cook-confectioner': t('confectioner'),
    'cook-shashlik': t('shashlikMaster'),
    'cook-national': t('nationalFood'),
    'cook-diet': t('dietFood'),
    'event-wedding': t('weddingOrganization'),
    'event-tamada': t('tamada'),
    'event-photo': t('photographer'),
    'event-video': t('videographer'),
    'event-decor': t('decorator'),
    'event-dj': t('djMusician'),
  }

  const getProfessionName = () => {
    const prof = professions.find(p => p.id === selectedProfession)
    return locale === 'ru' ? (prof?.nameRu || 'Профессия') : (prof?.name || 'Профессия')
  }

  const getScheduleName = () => {
    const sch = schedules.find(s => s.id === selectedSchedule)
    return locale === 'ru' ? (sch?.nameRu || 'График') : (sch?.name || 'График')
  }

  const getSalaryName = () => {
    const sal = salaries.find(s => s.id === selectedSalary)
    return locale === 'ru' ? (sal?.nameRu || 'Зарплата') : (sal?.name || 'Зарплата')
  }

  const handleSearch = () => {
    let category = 'all'
    if (selectedProfession.startsWith('cook')) {
      category = 'cook'
    } else if (selectedProfession.startsWith('nanny')) {
      category = 'nanny'
    } else if (selectedProfession !== 'all') {
      category = selectedProfession
    }

    const tab = activeTab === 'worker' ? 'worker' : 'employer'
    window.location.href = `/search?tab=${tab}&category=${category}`
  }

  const getVideoForCategory = (videoCategories: string[]) => {
    for (const cat of videoCategories) {
      const video = videos?.find(v => v.category === cat)
      if (video?.videoUrl) return video
    }
    return null
  }

  const groupedProfessions = professions.reduce((acc, prof) => {
    if (prof.id === 'all') return acc
    const cat = prof.category || 'Башка'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(prof)
    return acc
  }, {} as Record<string, typeof professions>)

  const currentAd = adBanners[currentAdIndex]

  const nextAd = () => {
    setCurrentAdIndex((prev) => (prev + 1) % adBanners.length)
  }

  const prevAd = () => {
    setCurrentAdIndex((prev) => (prev - 1 + adBanners.length) % adBanners.length)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Ad Banner */}
      <section className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={currentAd.image}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${currentAd.bgColor} opacity-60`} />
        </div>

        <div className="relative container mx-auto px-4 py-8 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Ad Content */}
            <div className="text-white order-2 lg:order-1">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-4">
                {currentAd.subtitle}
              </span>
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">{currentAd.title}</h1>
              <p className="text-lg lg:text-xl text-white/90 mb-6 max-w-lg">{currentAd.description}</p>
              <a
                href={currentAd.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                {t('more')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Dots */}
              <div className="flex gap-2 mt-8">
                {adBanners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAdIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentAdIndex ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Search Form Card */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-5 lg:p-8">
                {/* Tabs */}
                <div className="flex gap-1 p-1 bg-gray-100 rounded-xl mb-6">
                  <button
                    onClick={() => setActiveTab('worker')}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm lg:text-base transition ${
                      activeTab === 'worker'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {t('lookingForJob')}
                  </button>
                  <button
                    onClick={() => setActiveTab('employer')}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm lg:text-base transition ${
                      activeTab === 'employer'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {t('lookingForWorkers')}
                  </button>
                </div>

                <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-4">
                  {activeTab === 'worker' ? t('whatJobLooking') : t('whoLooking')}
                </h2>

                <div className="space-y-3">
                  {/* Profession Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        setShowProfessionDropdown(!showProfessionDropdown)
                        setShowScheduleDropdown(false)
                        setShowSalaryDropdown(false)
                      }}
                      className="w-full flex items-center justify-between px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-left hover:border-gray-300 transition"
                    >
                      <span className={selectedProfession === 'all' ? 'text-gray-400' : 'text-gray-800 font-medium'}>
                        {getProfessionName()}
                      </span>
                      <svg className={`w-5 h-5 text-gray-400 transition ${showProfessionDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showProfessionDropdown && (
                      <div className="absolute z-30 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-72 overflow-y-auto">
                        <button
                          onClick={() => {
                            setSelectedProfession('all')
                            setShowProfessionDropdown(false)
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-gray-50 font-medium ${
                            selectedProfession === 'all' ? 'bg-green-50 text-green-700' : 'text-gray-700'
                          }`}
                        >
                          {t('allProfessions')}
                        </button>

                        {Object.entries(groupedProfessions).map(([category, profs]) => (
                          <div key={category}>
                            <div className="px-4 py-2 bg-gray-50 text-gray-500 text-xs font-bold uppercase sticky top-0">
                              {category}
                            </div>
                            {profs.map((prof) => (
                              <button
                                key={prof.id}
                                onClick={() => {
                                  setSelectedProfession(prof.id)
                                  setShowProfessionDropdown(false)
                                }}
                                className={`w-full px-4 py-3 text-left hover:bg-gray-50 pl-6 ${
                                  selectedProfession === prof.id ? 'bg-green-50 text-green-700' : 'text-gray-700'
                                }`}
                              >
                                {locale === 'ru' ? prof.nameRu : prof.name}
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Schedule & Salary */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <button
                        onClick={() => {
                          setShowScheduleDropdown(!showScheduleDropdown)
                          setShowProfessionDropdown(false)
                          setShowSalaryDropdown(false)
                        }}
                        className="w-full flex items-center justify-between px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-left hover:border-gray-300 transition"
                      >
                        <span className={`text-sm ${selectedSchedule === 'all' ? 'text-gray-400' : 'text-gray-800 font-medium'}`}>
                          {getScheduleName()}
                        </span>
                        <svg className={`w-4 h-4 text-gray-400 transition ${showScheduleDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {showScheduleDropdown && (
                        <div className="absolute z-30 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl">
                          {schedules.map((sch) => (
                            <button
                              key={sch.id}
                              onClick={() => {
                                setSelectedSchedule(sch.id)
                                setShowScheduleDropdown(false)
                              }}
                              className={`w-full px-4 py-3 text-left hover:bg-gray-50 text-sm ${
                                selectedSchedule === sch.id ? 'bg-green-50 text-green-700' : 'text-gray-700'
                              }`}
                            >
                              {locale === 'ru' ? sch.nameRu : sch.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <button
                        onClick={() => {
                          setShowSalaryDropdown(!showSalaryDropdown)
                          setShowProfessionDropdown(false)
                          setShowScheduleDropdown(false)
                        }}
                        className="w-full flex items-center justify-between px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-left hover:border-gray-300 transition"
                      >
                        <span className={`text-sm ${selectedSalary === 'all' ? 'text-gray-400' : 'text-gray-800 font-medium'}`}>
                          {getSalaryName()}
                        </span>
                        <svg className={`w-4 h-4 text-gray-400 transition ${showSalaryDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {showSalaryDropdown && (
                        <div className="absolute z-30 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl">
                          {salaries.map((sal) => (
                            <button
                              key={sal.id}
                              onClick={() => {
                                setSelectedSalary(sal.id)
                                setShowSalaryDropdown(false)
                              }}
                              className={`w-full px-4 py-3 text-left hover:bg-gray-50 text-sm ${
                                selectedSalary === sal.id ? 'bg-green-50 text-green-700' : 'text-gray-700'
                              }`}
                            >
                              {locale === 'ru' ? sal.nameRu : sal.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Search Button */}
                  <button
                    onClick={handleSearch}
                    className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg shadow-green-600/20"
                  >
                    {t('show')} {activeTab === 'worker' ? totalVacancies : totalWorkers} {activeTab === 'worker' ? t('vacanciesCount') : t('resumeCount')}
                  </button>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-gray-100">
                  <Link
                    href="/my-responses"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition"
                  >
                    <span>⚡</span>
                    {t('responses')}
                  </Link>
                  <Link
                    href="/apply"
                    className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium hover:bg-green-100 transition"
                  >
                    <span>+</span>
                    {t('createResume')}
                  </Link>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition"
                  >
                    <span>👤</span>
                    {t('cabinet')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevAd}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/20 transition hidden lg:flex"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextAd}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/20 transition hidden lg:flex"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Ad Label */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
          {t('ad')}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{t('categories')}</h2>
              <p className="text-gray-500 mt-1">{t('findSpecialist')}</p>
            </div>
            <Link
              href="/search"
              className="text-green-600 font-semibold hover:text-green-700 transition hidden sm:block"
            >
              {t('viewAll')} →
            </Link>
          </div>

          {/* Desktop Grid / Mobile List */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {categories.map((category) => {
              const video = getVideoForCategory(category.videoCategories)

              return (
                <div
                  key={category.id}
                  className="group bg-white rounded-2xl lg:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Video/Image Header */}
                  <div className="relative aspect-video overflow-hidden">
                    {video?.videoUrl ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={video.posterUrl}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                      </video>
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${category.color}`}>
                        <span className="text-7xl lg:text-8xl group-hover:scale-110 transition-transform">{category.icon}</span>
                      </div>
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${category.bgLight} rounded-xl flex items-center justify-center text-2xl`}>
                            {category.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{categoryTitles[category.id]}</h3>
                            <p className="text-white/70 text-sm">{category.services.reduce((a, s) => a + s.count, 0)} {t('specialists')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="divide-y divide-gray-100">
                    {category.services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => openServiceModal(service)}
                        className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition group/item text-left"
                      >
                        <span className="text-gray-700 font-medium group-hover/item:text-green-600 transition">{serviceNames[service.id] || service.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-400">{service.count}</span>
                          <span className={`text-xs ${category.bgLight} ${category.textColor} px-3 py-1.5 rounded-full font-medium`}>
                            {t('view')}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile link */}
          <Link
            href="/search"
            className="block text-center text-green-600 font-semibold mt-6 sm:hidden"
          >
            {t('viewAll')} →
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50">
              <div className="text-4xl lg:text-5xl font-bold text-green-600">{totalWorkers}+</div>
              <div className="text-gray-600 mt-2 font-medium">{t('workers')}</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600">{totalVacancies}+</div>
              <div className="text-gray-600 mt-2 font-medium">{t('vacancies')}</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600">20</div>
              <div className="text-gray-600 mt-2 font-medium">{t('professions')}</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50">
              <div className="text-4xl lg:text-5xl font-bold text-purple-600">5</div>
              <div className="text-gray-600 mt-2 font-medium">{t('categoriesCount')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-green-600 via-green-600 to-emerald-700 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('lookingForJobCta')}</h2>
            <p className="text-lg lg:text-xl text-green-100 mb-8 max-w-xl mx-auto">
              {t('lookingForJobDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition shadow-lg"
              >
                <span>📝</span>
                {t('createResumeBtn')}
              </Link>
              <Link
                href="/search?tab=worker"
                className="inline-flex items-center justify-center gap-2 bg-green-500/30 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500/40 transition border border-white/20"
              >
                <span>🔍</span>
                {t('viewVacancies')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workers Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 z-50 flex items-end lg:items-center justify-center">
          {/* Overlay */}
          <div
            onClick={closeModal}
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              modalAnimating ? 'opacity-50' : 'opacity-0'
            }`}
          />

          {/* Modal Content */}
          <div
            className={`relative bg-white w-full lg:w-[600px] lg:max-w-[90vw] max-h-[85vh] lg:max-h-[80vh] rounded-t-3xl lg:rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${
              modalAnimating
                ? 'translate-y-0 opacity-100 scale-100'
                : 'translate-y-full lg:translate-y-0 lg:scale-95 opacity-0'
            }`}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between z-10">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {serviceNames[selectedService.id] || selectedService.name}
                </h3>
                <p className="text-sm text-gray-500">{selectedService.count} {locale === 'ru' ? 'специалистов' : 'адис'}</p>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Workers List */}
            <div className="overflow-y-auto max-h-[calc(85vh-120px)] lg:max-h-[calc(80vh-120px)] p-4 space-y-3">
              {mockWorkers['default'].map((worker, index) => (
                <div
                  key={worker.id}
                  onClick={() => openWorkerDetail(worker)}
                  className={`bg-gray-50 hover:bg-gray-100 rounded-2xl p-4 cursor-pointer transition-all duration-300 transform ${
                    modalAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      {worker.avatar}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-gray-900 truncate">{worker.name}</h4>
                        {worker.verified && (
                          <span className="text-green-500 flex-shrink-0">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-semibold text-gray-700">{worker.rating}</span>
                        <span className="text-gray-400 text-sm">({worker.reviews} {locale === 'ru' ? 'отзывов' : 'пикир'})</span>
                      </div>

                      <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                        <span>📍 {worker.location}</span>
                        <span>⏱ {worker.experience}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right flex-shrink-0">
                      <div className="text-lg font-bold text-green-600">{worker.price}</div>
                      <div className="text-xs text-gray-400">{locale === 'ru' ? 'за услугу' : 'кызмат үчүн'}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4">
              <Link
                href={`/search?tab=employer&category=${selectedService.category}`}
                className="block w-full bg-green-600 text-white text-center py-4 rounded-xl font-bold hover:bg-green-700 transition"
              >
                {locale === 'ru' ? 'Смотреть всех' : 'Баардыгын көрүү'} ({selectedService.count})
              </Link>
            </div>
          </div>

          {/* Worker Detail Modal */}
          {selectedWorker && (
            <div
              className={`absolute inset-0 bg-white z-20 transform transition-all duration-300 ease-out ${
                selectedWorker ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Detail Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 px-4 py-4 flex items-center gap-4 z-10">
                <button
                  onClick={closeWorkerDetail}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h3 className="text-lg font-bold text-gray-900">{locale === 'ru' ? 'Профиль' : 'Профиль'}</h3>
              </div>

              {/* Detail Content */}
              <div className="overflow-y-auto max-h-[calc(100vh-140px)] p-5">
                {/* Profile Header */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center text-5xl mx-auto mb-4 shadow-lg shadow-green-500/30">
                    {selectedWorker.avatar}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedWorker.name}</h2>
                    {selectedWorker.verified && (
                      <span className="text-green-500">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 mt-1">{serviceNames[selectedService.id] || selectedService.name}</p>

                  <div className="flex items-center justify-center gap-1 mt-3">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className={`text-xl ${star <= Math.floor(selectedWorker.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                    ))}
                    <span className="ml-2 font-semibold">{selectedWorker.rating}</span>
                    <span className="text-gray-400">({selectedWorker.reviews})</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-green-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{selectedWorker.experience}</div>
                    <div className="text-xs text-gray-500 mt-1">{locale === 'ru' ? 'Опыт' : 'Тажрыйба'}</div>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{selectedWorker.reviews}</div>
                    <div className="text-xs text-gray-500 mt-1">{locale === 'ru' ? 'Отзывов' : 'Пикир'}</div>
                  </div>
                  <div className="bg-purple-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">98%</div>
                    <div className="text-xs text-gray-500 mt-1">{locale === 'ru' ? 'Успех' : 'Ийгилик'}</div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="text-sm text-gray-500">{locale === 'ru' ? 'Локация' : 'Жайгашуу'}</div>
                      <div className="font-semibold">{selectedWorker.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                    <span className="text-2xl">💰</span>
                    <div>
                      <div className="text-sm text-gray-500">{locale === 'ru' ? 'Стоимость' : 'Баасы'}</div>
                      <div className="font-semibold text-green-600">{selectedWorker.price}</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">{locale === 'ru' ? 'О себе' : 'Өзү жөнүндө'}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {locale === 'ru'
                      ? `Опытный специалист с ${selectedWorker.experience} стажем работы. Ответственный подход к каждому заказу. Работаю качественно и в срок.`
                      : `${selectedWorker.experience} тажрыйбасы бар адис. Ар бир заказга жоопкерчиликтүү мамиле. Сапаттуу жана өз убагында иштейм.`
                    }
                  </p>
                </div>
              </div>

              {/* Detail Footer */}
              <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4 flex gap-3">
                <button className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-200 transition flex items-center justify-center gap-2">
                  <span>💬</span>
                  {locale === 'ru' ? 'Написать' : 'Жазуу'}
                </button>
                <button className="flex-1 bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition flex items-center justify-center gap-2">
                  <span>📞</span>
                  {locale === 'ru' ? 'Позвонить' : 'Чалуу'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  )
}